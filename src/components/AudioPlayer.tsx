import { useEffect, useRef, useState } from "react";
import { Play, Pause, Loader2 } from "lucide-react";

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
  const [current, setCurrent] = useState(0);
  const [duration, setDuration] = useState(0);

  useEffect(() => {
    const el = audioRef.current;
    if (!el) return;
    const onTime = () => setCurrent(el.currentTime);
    const onMeta = () => setDuration(el.duration);
    const onEnd = () => setPlaying(false);
    const onWaiting = () => setLoading(true);
    const onPlaying = () => setLoading(false);
    el.addEventListener("timeupdate", onTime);
    el.addEventListener("loadedmetadata", onMeta);
    el.addEventListener("ended", onEnd);
    el.addEventListener("waiting", onWaiting);
    el.addEventListener("playing", onPlaying);
    return () => {
      el.removeEventListener("timeupdate", onTime);
      el.removeEventListener("loadedmetadata", onMeta);
      el.removeEventListener("ended", onEnd);
      el.removeEventListener("waiting", onWaiting);
      el.removeEventListener("playing", onPlaying);
    };
  }, []);

  const toggle = async () => {
    const el = audioRef.current;
    if (!el) return;
    if (el.paused) {
      setLoading(true);
      try {
        await el.play();
        setPlaying(true);
      } finally {
        setLoading(false);
      }
    } else {
      el.pause();
      setPlaying(false);
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
          aria-label={playing ? "Pause" : "Play"}
          className="grid h-14 w-14 shrink-0 place-items-center rounded-full bg-primary text-primary-foreground transition-transform hover:scale-105 active:scale-95"
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
              el.currentTime = Number(e.target.value);
              setCurrent(Number(e.target.value));
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
        </div>
      </div>
    </div>
  );
}
