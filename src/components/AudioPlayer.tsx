import { useEffect, useRef, useState } from "react";
import { Play, Pause, Loader2, TriangleAlert } from "lucide-react";

function format(t: number) {
  if (!Number.isFinite(t)) return "--:--";
  const m = Math.floor(t / 60);
  const s = Math.floor(t % 60);
  return `${m}:${s.toString().padStart(2, "0")}`;
}

export function AudioPlayer({
  title,
  subtitle,
  src,
}: {
  title: string;
  subtitle?: string;
  src: string;
}) {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [playing, setPlaying] = useState(false);
  const [loading, setLoading] = useState(false);
  const [failed, setFailed] = useState(false);
  const [current, setCurrent] = useState(0);
  const [duration, setDuration] = useState(0);

  useEffect(() => {
    const el = audioRef.current;
    if (!el) return;
    const onTime = () => setCurrent(el.currentTime);
    const onMeta = () => setDuration(el.duration);
    const onEnd = () => {
      setPlaying(false);
      setCurrent(0);
    };
    const onWaiting = () => {
      if (!el.paused) setLoading(true);
    };
    const onPlaying = () => {
      setLoading(false);
      setPlaying(true);
      setFailed(false);
    };
    const onPause = () => setPlaying(false);
    const onError = () => {
      setLoading(false);
      setPlaying(false);
      setFailed(true);
    };
    el.addEventListener("timeupdate", onTime);
    el.addEventListener("loadedmetadata", onMeta);
    el.addEventListener("ended", onEnd);
    el.addEventListener("waiting", onWaiting);
    el.addEventListener("playing", onPlaying);
    el.addEventListener("pause", onPause);
    el.addEventListener("error", onError);
    return () => {
      el.removeEventListener("timeupdate", onTime);
      el.removeEventListener("loadedmetadata", onMeta);
      el.removeEventListener("ended", onEnd);
      el.removeEventListener("waiting", onWaiting);
      el.removeEventListener("playing", onPlaying);
      el.removeEventListener("pause", onPause);
      el.removeEventListener("error", onError);
    };
  }, []);

  const start = async () => {
    const el = audioRef.current;
    if (!el) return;
    setFailed(false);
    setLoading(true);
    try {
      await el.play();
      setPlaying(true);
    } catch {
      setFailed(true);
    } finally {
      setLoading(false);
    }
  };

  const retry = async () => {
    const el = audioRef.current;
    if (!el) return;
    setFailed(false);
    el.load();
    await start();
  };

  const toggle = () => {
    const el = audioRef.current;
    if (!el) return;
    if (el.paused) {
      void start();
    } else {
      el.pause();
    }
  };

  const progress = duration ? (current / duration) * 100 : 0;

  return (
    <div className="surface-card rounded-2xl p-5 sm:p-6">
      <audio ref={audioRef} src={src} preload="metadata" />
      <div className="flex items-center gap-4">
        <button
          type="button"
          onClick={toggle}
          disabled={loading}
          aria-label={playing ? "Pause" : loading ? "Loading" : "Play"}
          className="grid h-14 w-14 shrink-0 place-items-center rounded-full bg-primary text-primary-foreground transition-transform hover:scale-105 active:scale-95 disabled:cursor-progress disabled:opacity-80"
        >
          {loading ? (
            <Loader2 className="h-5 w-5 animate-spin" />
          ) : playing ? (
            <Pause className="h-5 w-5" />
          ) : (
            <Play className="ml-0.5 h-5 w-5" />
          )}
        </button>
        <div className="min-w-0 flex-1">
          <p className="truncate font-display text-sm font-bold uppercase tracking-wider">
            {title}
          </p>
          {subtitle && (
            <p className="mt-0.5 truncate text-xs text-muted-foreground">{subtitle}</p>
          )}
          <input
            type="range"
            min={0}
            max={duration || 0}
            step={0.1}
            value={current}
            aria-label="Seek"
            onChange={(e) => {
              const el = audioRef.current;
              if (!el) return;
              const value = Number(e.target.value);
              if (el.readyState === 0) return;
              el.currentTime = value;
              setCurrent(value);
            }}
            className="mt-3 h-1.5 w-full cursor-pointer appearance-none rounded-full outline-none"
            style={{
              background: `linear-gradient(to right, var(--gold) ${progress}%, var(--input) ${progress}%)`,
            }}
          />
          <div className="mt-2 flex justify-between text-[11px] tabular-nums text-muted-foreground">
            <span>{format(current)}</span>
            <span>{format(duration)}</span>
          </div>
          {failed && (
            <p className="mt-3 flex flex-wrap items-center gap-2 text-[11px] text-muted-foreground">
              <TriangleAlert className="h-3.5 w-3.5 shrink-0 text-primary" />
              <span>Couldn&apos;t play this demo.</span>
              <button
                type="button"
                onClick={() => void retry()}
                className="text-primary underline"
              >
                Retry
              </button>
              <a
                href={src}
                target="_blank"
                rel="noreferrer"
                className="text-primary underline"
              >
                Open track ↗
              </a>
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
