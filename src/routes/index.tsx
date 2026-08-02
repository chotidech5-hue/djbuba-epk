import { createFileRoute } from "@tanstack/react-router";
import { Instagram, Mail, MessageCircle, ArrowUpRight, Disc3 } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { AudioPlayer } from "@/components/AudioPlayer";
import live1 from "@/assets/buba-2.png.asset.json";
import live2 from "@/assets/buba-3.png.asset.json";
import live3 from "@/assets/buba-4.png.asset.json";
import live4 from "@/assets/buba-live-11.jpg.asset.json";
import live5 from "@/assets/buba-live-12.jpg.asset.json";
import flyer1 from "@/assets/buba-5.png.asset.json";
import flyer2 from "@/assets/buba-7.png.asset.json";
import press1 from "@/assets/buba-8.png.asset.json";

const LIVE = [
  { src: live1.url, alt: "DJ Buba playing at Love Beach Club" },
  { src: live2.url, alt: "DJ Buba on the decks at night" },
  { src: live3.url, alt: "DJ Buba at #Love Beach Club neon booth" },
  { src: live4.url, alt: "DJ Buba mixing under red club lights" },
  { src: live5.url, alt: "DJ Buba behind the Pioneer DJ controller" },
];

const FLYERS = [
  { src: flyer1.url, alt: "Love Rosé Saturdays flyer" },
  { src: flyer2.url, alt: "Radio Samui Open Deck at Black Box flyer" },
];



export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "DJ BUBA — Electronic Press Kit | Afro House & Melodic Techno" },
      {
        name: "description",
        content:
          "Official EPK of DJ BUBA — Koh Samui based DJ playing Afro House, Melodic House & Techno, Progressive House and Indie Dance. Bio, residencies, demo sets and bookings.",
      },
      { property: "og:title", content: "DJ BUBA — Electronic Press Kit | Afro House & Melodic Techno" },
      {
        property: "og:description",
        content:
          "Official EPK of DJ BUBA — Koh Samui based DJ playing Afro House, Melodic House & Techno, Progressive House and Indie Dance. Bio, residencies, demo sets and bookings.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Epk,
});

const GENRES = ["Afro House", "Melodic House & Techno", "Progressive House", "Indie Dance"];

const CURRENT = [
  {
    name: "Ark Bar Beach Club",
    desc: "Koh Samui's legendary, world-famous beachfront party landmark.",
  },
  {
    name: "Love Beach Club",
    desc: "The island's premier beachfront venue known for pool parties and luxury vibes.",
  },
  {
    name: "CU Club & Restaurant",
    desc: "Chaweng's ultimate hotspot for authentic underground house and techno.",
  },
  {
    name: "Lub d Koh Samui",
    desc: "Award-winning social beachfront destination featuring a world-class infinity pool.",
  },
];

const PAST = [
  {
    name: "Cabanas",
    desc: "Premium 5-star beachfront hotel and luxury beach club in the heart of Chaweng.",
  },
  {
    name: "Socialtel",
    desc: "Vibrant, social-first party hotel catering to a modern, lifestyle-driven global crowd.",
  },
  {
    name: "The Green Mango Club",
    desc: "Chaweng's legendary nightlife epicenter and iconic clubbing institution.",
  },
];

const CONTACTS = [
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: "+66 97 074 5261",
    href: "https://wa.me/66970745261",
  },
  {
    icon: Instagram,
    label: "Instagram",
    value: "@knowbuba.wav",
    href: "https://www.instagram.com/knowbuba.wav/",
  },
  {
    icon: Mail,
    label: "Email",
    value: "Chotidech.y@gmail.com",
    href: "mailto:Chotidech.y@gmail.com",
  },
];

function SectionTitle({ label, title }: { label: string; title: string }) {
  return (
    <div className="mb-10">
      <p className="section-label">{label}</p>
      <h2 className="mt-3 text-3xl font-extrabold uppercase sm:text-4xl md:text-5xl">{title}</h2>
      <div className="mt-5 h-px w-24 bg-primary" />
    </div>
  );
}

function VenueCard({ name, desc, muted }: { name: string; desc: string; muted?: boolean }) {
  return (
    <div className="group surface-card rounded-2xl p-5 transition-all duration-300 hover:-translate-y-1 hover:glow-ring">
      <div className="flex items-start gap-3">
        <Disc3
          className={
            muted
              ? "mt-0.5 h-4 w-4 shrink-0 text-muted-foreground"
              : "mt-0.5 h-4 w-4 shrink-0 text-primary"
          }
        />
        <div>
          <h3 className="font-display text-base font-bold uppercase tracking-wide">{name}</h3>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{desc}</p>
        </div>
      </div>
    </div>
  );
}

function Epk() {
  return (
    <main className="min-h-screen bg-background">
      {/* HERO */}
      <section className="relative isolate flex min-h-[92vh] items-end overflow-hidden border-b border-border">
        <img
          src={live2.url}
          alt="DJ Buba performing on Koh Samui"
          className="absolute inset-0 h-full w-full object-cover object-top opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/85 to-background/40" />
        <div className="absolute inset-0 bg-[radial-gradient(90%_70%_at_50%_0%,color-mix(in_oklab,var(--gold)_10%,transparent),transparent_70%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(70%_50%_at_10%_100%,color-mix(in_oklab,var(--cyan)_10%,transparent),transparent_70%)]" />
        <div className="pointer-events-none absolute inset-0 opacity-[0.07] bg-[repeating-linear-gradient(90deg,var(--foreground)_0_1px,transparent_1px_120px)]" />


        <div className="relative mx-auto w-full max-w-6xl px-5 pb-16 sm:px-8 sm:pb-24">
          <Reveal>
            <p className="section-label">Electronic Press Kit</p>
            <h1 className="mt-4 text-[3.5rem] font-extrabold uppercase leading-[0.85] sm:text-8xl md:text-[9rem]">
              <span className="text-gradient-gold">DJ Buba</span>
            </h1>

            <p className="mt-5 max-w-xl font-display text-sm uppercase tracking-[0.3em] text-foreground/80 sm:text-base">
              Harmony, Groove &amp; Seamless Flow
            </p>
            <div className="mt-8 flex flex-wrap gap-2">
              {GENRES.map((g) => (
                <span
                  key={g}
                  className="rounded-full border border-border bg-surface-2/70 px-4 py-2 text-xs font-medium uppercase tracking-wider backdrop-blur"
                >
                  {g}
                </span>
              ))}
            </div>
            <div className="mt-10 flex flex-wrap gap-3">
              <a
                href="#listen"
                className="rounded-full bg-primary px-7 py-3 text-sm font-semibold uppercase tracking-wider text-primary-foreground transition-transform hover:scale-[1.03]"
              >
                Listen
              </a>
              <a
                href="#contact"
                className="rounded-full border border-border px-7 py-3 text-sm font-semibold uppercase tracking-wider transition-colors hover:bg-secondary"
              >
                Book Now
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* BIOGRAPHY */}
      <section className="mx-auto max-w-6xl px-5 py-24 sm:px-8">
        <Reveal>
          <SectionTitle label="About the artist" title="Biography" />
        </Reveal>
        <div className="grid gap-10 md:grid-cols-[1.6fr_1fr]">
          <Reveal delay={80}>
            <div className="space-y-6 text-base leading-relaxed text-muted-foreground sm:text-lg">
              <p>
                DJ Buba brings a uniquely sophisticated approach to the decks, backed by professional
                DJing experience since 2020 — including residencies on Koh Samui since 2022. His
                comprehensive mastery of music theory and harmonic composition sets him apart in the
                modern electronic scene. Combining this technical precision with years of active
                performance, Buba is renowned for crafting flawlessly smooth, harmonically aligned
                transitions that make multiple tracks feel like one continuous, evolving journey.
              </p>
              <p>
                For Buba, DJing goes far beyond simply playing tracks—it is about curating emotions,
                transmitting raw energy, and shaping the energy of the dancefloor with absolute
                intention.
              </p>
            </div>
          </Reveal>
          <Reveal delay={160}>
            <div className="space-y-4">
              <div className="overflow-hidden rounded-2xl border border-border">
                <img
                  src={press1.url}
                  alt="DJ Buba press portrait in black shirt"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </Reveal>

        </div>
      </section>

      {/* RESIDENCIES */}
      <section className="border-t border-border bg-surface/40">
        <div className="mx-auto max-w-6xl px-5 py-24 sm:px-8">
          <Reveal>
            <SectionTitle label="Where he plays" title="Residencies" />
          </Reveal>
          <div className="grid gap-10 lg:grid-cols-2">
            <Reveal delay={60}>
              <h3 className="mb-5 font-display text-xs uppercase tracking-[0.3em] text-primary">
                Current
              </h3>
              <div className="grid gap-4">
                {CURRENT.map((v) => (
                  <VenueCard key={v.name} {...v} />
                ))}
              </div>
            </Reveal>
            <Reveal delay={140}>
              <h3 className="mb-5 font-display text-xs uppercase tracking-[0.3em] text-muted-foreground">
                Past
              </h3>
              <div className="grid gap-4">
                {PAST.map((v) => (
                  <VenueCard key={v.name} {...v} muted />
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section id="gallery" className="mx-auto max-w-6xl scroll-mt-16 px-5 py-24 sm:px-8">
        <Reveal>
          <SectionTitle label="On the decks" title="Live Gallery" />
        </Reveal>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {LIVE.map((img, i) => (
            <Reveal key={img.src} delay={60 * i}>
              <div className="group overflow-hidden rounded-2xl border border-border">
                <img
                  src={img.src}
                  alt={img.alt}
                  loading="lazy"
                  className="aspect-[3/4] w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-16">
          <Reveal>
            <SectionTitle label="Events" title="Flyers & Promo" />
          </Reveal>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {FLYERS.map((img, i) => (
              <Reveal key={img.src} delay={60 * i}>
                <div className="surface-card overflow-hidden rounded-2xl p-3">
                  <img
                    src={img.src}
                    alt={img.alt}
                    loading="lazy"
                    className="aspect-[4/5] w-full rounded-xl object-cover"
                  />
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <div className="mt-16">
          <Reveal>
            <SectionTitle label="Press" title="Press Photos" />
          </Reveal>
          <div className="grid gap-4 sm:grid-cols-2">
            {[press1].map((p, i) => (
              <Reveal key={p.url} delay={60 * i}>
                <div className="overflow-hidden rounded-2xl border border-border">
                  <img
                    src={p.url}
                    alt="DJ Buba press portrait"
                    loading="lazy"
                    className="aspect-[3/4] w-full object-cover"
                  />
                </div>
              </Reveal>
            ))}
          </div>
        </div>

      </section>



      {/* LISTEN */}
      <section id="listen" className="mx-auto max-w-6xl scroll-mt-16 px-5 py-24 sm:px-8">
        <Reveal>
          <SectionTitle label="Sound" title="Listen / Demo Sets" />
        </Reveal>
        <div className="grid gap-6 lg:grid-cols-2">
          <Reveal delay={60}>
            <div className="surface-card rounded-2xl p-5 sm:p-6">
              <p className="mb-4 font-display text-sm font-bold uppercase tracking-wider">
                Featured Set
              </p>
              <iframe
                scrolling="no"
                title="DJ Buba featured set on hearthis.at"
                style={{ borderRadius: "10px" }}
                id="hearthis_at_track_14520297"
                width="100%"
                height={150}
                src="https://app.hearthis.at/embed/14520297/transparent_black/?hcolor=&color=&style=2&block_size=2&block_space=1&background=1&waveform=0&cover=0&autoplay=0&css="
                frameBorder="0"
                allow="autoplay"
              />
            </div>
          </Reveal>
          <Reveal delay={140}>
            <AudioPlayer
              title="Demo Afro House"
              subtitle="Emotional African Afro Sunset"
              src="https://www.dropbox.com/scl/fi/l5w92t8wh0r2nkjor9eix/Recomend-Afro-house-demo-Emotional-African-afro-sunset.wav?rlkey=k68qr257felbbcues1jkxreq6&st=mjgfo35l&raw=1"
            />
          </Reveal>
          <Reveal delay={200}>
            <AudioPlayer
              title="Demo High Energy Afro"
              subtitle="Afro House Fire Show"
              src="https://www.dropbox.com/scl/fi/hcq61jpxgcdzj5d07geds/Afro-house-fire-show.mp3?rlkey=qpokb5hed1vdxn5jvfjz72zyx&raw=1"
            />
          </Reveal>
          <Reveal delay={260}>
            <AudioPlayer
              title="Day Set Afro"
              subtitle="Afro House Day Time — DJ Buba Demo"
              src="https://www.dropbox.com/scl/fi/8nifvgrik4ydtq53hdoki/afro-house-day-time-DJ-Buba-Demo.mp3?rlkey=15p7sb5siqmt543wwftmr412a&raw=1"
            />
          </Reveal>
          <Reveal delay={320}>
            <AudioPlayer
              title="Deep House Demo"
              subtitle="Deep House — Buba"
              src="https://www.dropbox.com/scl/fi/7qdcc0lsmso3gmpvt2s53/Deep-House-Buba.mp3?rlkey=t9fa7awd7ovz2tozoslr6uhal&raw=1"
            />
          </Reveal>

        </div>
        <Reveal delay={200}>
          <div className="mt-8 flex justify-center">
            <a
              href="https://www.dropbox.com/scl/fo/ypk1ftfjqdb2m8o56tg4l/APpEJzhXPxqDs7dK-ptQaoM?rlkey=kkhqlh061isu3pp5s9u5xnx38&dl=0"
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-8 py-4 text-sm font-semibold uppercase tracking-wider text-primary transition-all hover:glow-ring hover:bg-primary hover:text-primary-foreground"
            >
              Explore Full Demo Folder
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>
        </Reveal>
      </section>

      {/* CONTACT */}
      <footer id="contact" className="border-t border-border bg-surface/40 scroll-mt-16">
        <div className="mx-auto max-w-6xl px-5 py-24 sm:px-8">
          <Reveal>
            <SectionTitle label="Get in touch" title="Bookings & Contact" />
            <p className="max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              From mainstage beach energy to deep underground club nights, DJ Buba continuously
              delivers unforgettable soundscapes through precision, passion, and pure musicality.
            </p>
          </Reveal>
          <div className="mt-12 grid gap-4 sm:grid-cols-3">
            {CONTACTS.map((c, i) => (
              <Reveal key={c.label} delay={60 * (i + 1)}>
                <a
                  href={c.href}
                  target="_blank"
                  rel="noreferrer"
                  className="group flex h-full items-center gap-4 rounded-2xl border border-border bg-surface-2/60 p-5 transition-all hover:-translate-y-1 hover:glow-ring"
                >
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-primary/15 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                    <c.icon className="h-5 w-5" />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-xs uppercase tracking-[0.2em] text-muted-foreground">
                      {c.label}
                    </span>
                    <span className="block truncate text-sm font-semibold">{c.value}</span>
                  </span>
                </a>
              </Reveal>
            ))}
          </div>
          <p className="mt-16 text-center text-xs uppercase tracking-[0.3em] text-muted-foreground">
            DJ Buba — Koh Samui, Thailand
          </p>
        </div>
      </footer>
    </main>
  );
}
