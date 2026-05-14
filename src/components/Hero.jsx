// src/components/Hero.jsx
import React, { useRef, useState } from "react";
import { Play } from "lucide-react";
import img from "../assets/images/ashwani.png";
import { PillCta } from "./PillCta.jsx";

const PINK = "#e45eb8";
const PINK_SOFT = "#e879c0";

function HeroPill({ children }) {
  return (
    <span
      className="whitespace-nowrap px-5 py-2.5 text-sm font-medium text-[#353638] sm:px-6 sm:py-3 sm:text-base"
      style={{
        background: "rgba(255,255,255,0.88)",
        borderRadius: "9999px",
        border: "1px solid rgba(255,255,255,0.95)",
        boxShadow: "0 1px 3px rgba(15,23,42,0.06)",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
      }}
    >
      {children}
    </span>
  );
}

function SwooshToCta({ className = "" }) {
  return (
    <svg
      className={className}
      width="72"
      height="56"
      viewBox="0 0 72 56"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <path
        d="M8 8c18 4 32 18 38 36M46 44l8-4M46 44l2 10"
        stroke="#6ec1e8"
        strokeWidth="2.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M52 12c-8 14-22 24-40 28"
        stroke="#8ad4f0"
        strokeWidth="1.75"
        strokeLinecap="round"
        opacity="0.85"
      />
    </svg>
  );
}

const Hero = () => {
  const videoRef = useRef(null);
  const [playing, setPlaying] = useState(false);

  const handlePlay = () => {
    if (videoRef.current) {
      videoRef.current.play();
      setPlaying(true);
    }
  };

  return (
    <>
      <section
        id="hero"
        className="relative flex min-h-screen flex-col items-center overflow-hidden px-0 pb-16 pt-28 text-center sm:pb-20 sm:pt-32 md:pt-36"
        style={{
          background: "linear-gradient(165deg, #f4fbff 0%, #dff6f0 38%, #c8eef8 72%, #b8e8f2 100%)",
        }}
      >
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.35]"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(15,23,42,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(15,23,42,0.06) 1px, transparent 1px)",
            backgroundSize: "52px 52px",
          }}
        />

        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-white/50 to-transparent sm:h-40" />

        <div className="relative z-10 content-area flex flex-col items-center">
          {/* Portrait + pills: desktop flanks, mobile stacked under photo */}
          <div className="mb-8 flex w-full flex-col items-center md:mb-10">
            <div className="flex w-full max-w-3xl flex-col items-center md:flex-row md:items-center md:justify-center md:gap-6 lg:gap-10">
              <div className="order-2 mb-4 hidden shrink-0 md:order-1 md:mb-0 md:flex md:justify-end">
                <HeroPill>Ashwani Tyagi</HeroPill>
              </div>

              <div className="order-1 w-[9.5rem] shrink-0 sm:w-44 md:order-2 md:w-52 lg:w-60">
                <div className="relative w-full overflow-hidden" style={{ aspectRatio: "3 / 3.65" }}>
                  <img
                    src={img}
                    alt="Ashwani Tyagi"
                    className="absolute inset-0 h-full w-full object-cover object-top"
                  />
                </div>
              </div>

              <div className="order-3 hidden shrink-0 md:flex md:justify-start">
                <HeroPill>Startup UI/UX Designer</HeroPill>
              </div>
            </div>

            <div className="mt-4 flex flex-col items-center gap-3 md:hidden">
              <HeroPill>Ashwani Tyagi</HeroPill>
              <HeroPill>Startup UI/UX Designer</HeroPill>
            </div>
          </div>

          <h1 className="mb-4 max-w-4xl px-1 text-3xl font-bold leading-[1.12] tracking-tight text-[#0f0f0f] sm:text-4xl sm:leading-[1.1] md:text-5xl md:leading-[1.08] lg:text-[3.25rem] lg:leading-[1.06]">
            A <span style={{ color: PINK }}>UX Partner</span> Who Works
            <br className="hidden sm:block" />
            <span className="sm:hidden"> </span>
            Like a Team Member
          </h1>

          <p className="mb-2 text-base font-medium text-[#5c5c5c] sm:text-lg">
            Adoption <span style={{ color: PINK_SOFT }}>•</span> Retention{" "}
            <span style={{ color: PINK_SOFT }}>•</span> Trust
          </p>

          <p className="mb-10 text-sm text-[#8a8a8a] sm:mb-12 sm:text-base">No full-time designer needed</p>

          <div className="flex w-full max-w-xl flex-col items-center">
            <div className="flex flex-col items-center gap-4 sm:flex-row sm:items-center sm:justify-center sm:gap-6">
              <PillCta
                as="a"
                href="https://wa.me/+918130903238"
                target="_blank"
                rel="noopener noreferrer"
                className="min-w-[min(100%,260px)] justify-center px-8 text-base sm:min-w-0 sm:px-10 sm:text-lg"
                style={{ background: "#00c57e" }}
                leading={
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    fill="white"
                    aria-hidden
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                }
              >
                Free Consultation
              </PillCta>
              <SwooshToCta className="-mt-2 shrink-0 sm:-mt-0 sm:-ml-2" />
            </div>

            <p className="mt-6 max-w-md px-2 text-center text-sm leading-relaxed text-[#7a8496] sm:text-base">
              Don&apos;t let cost stop good design — we&apos;ll find a way.
            </p>
          </div>
        </div>
      </section>

      <section
        className="flex items-center justify-center px-0 py-10 sm:py-12"
        style={{
          background: "linear-gradient(135deg, #e8fcff 0%, #dff0fa 40%, #eaf4fd 100%)",
        }}
      >
        <div className="content-area flex w-full justify-center">
          <div
            className="relative flex w-full max-w-[1100px] items-center justify-center overflow-hidden"
            style={{
              aspectRatio: "16/9",
              borderRadius: "28px",
              background: "rgba(255,255,255,0.55)",
              backdropFilter: "blur(16px)",
              WebkitBackdropFilter: "blur(16px)",
              border: "1.5px solid rgba(255,255,255,0.85)",
              boxShadow: "0 8px 48px rgba(0,0,0,0.08)",
            }}
          >
          <video
            ref={videoRef}
            className="h-full w-full object-cover"
            style={{ borderRadius: "28px" }}
            onPlay={() => setPlaying(true)}
            onPause={() => setPlaying(false)}
            playsInline
          >
            <source src="/your-video.mp4" type="video/mp4" />
          </video>

          {!playing && (
            <button
              type="button"
              onClick={handlePlay}
              className="absolute inset-0 flex cursor-pointer items-center justify-center border-0 bg-transparent"
            >
              <div
                className="flex h-[72px] w-[72px] items-center justify-center transition-transform hover:scale-110"
                style={{
                  borderRadius: "50%",
                  background: "rgba(150,150,150,0.75)",
                  backdropFilter: "blur(4px)",
                }}
              >
                <Play size={28} color="white" fill="white" />
              </div>
            </button>
          )}
        </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
