// src/components/Hero.jsx
import React, { useRef, useState } from "react";
import { Play } from "lucide-react";
import img from "../assets/images/ashwani.png";
import { PillCta } from "./PillCta.jsx";

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
      {/* ── Section 1: Hero ── */}
      <section
        className="relative min-h-screen flex flex-col items-center justify-center text-center overflow-hidden px-4 pb-20"
        style={{
          background:
            "linear-gradient(to bottom, #d2fcf3 0%, #e1f1fc 30%, #d7ebfc 70%, #98ebfaba 100%)",
        }}
      >
        {/* Grid background */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000010_1px,transparent_1px),linear-gradient(to_bottom,#00000010_1px,transparent_1px)] bg-[size:60px_60px]" />

        {/* Bottom fade (🔥 premium effect) */}
        <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-white/70 to-transparent pointer-events-none"></div>

        {/* Content */}
        <div className="relative z-10 max-w-4xl w-full pt-24 flex flex-col items-center">
          {/* Person Image — no card, blends into bg */}
          <div className="w-36 sm:w-44 md:w-52 mb-4 overflow-hidden">
            <img
              src={img}
              alt="Ashwani Tyagi"
              className="w-full h-full object-cover object-top"
              style={{ borderRadius: "0" }}
            />
          </div>

          {/* Name & Role Pills — flanking the image */}
          <div className="flex flex-wrap justify-center items-center gap-3 mb-8 -mt-2">
            <span
              className="px-5 py-2.5 text-sm sm:text-base font-medium text-gray-700"
              style={{
                background: "rgba(255,255,255,0.70)",
                backdropFilter: "blur(12px)",
                WebkitBackdropFilter: "blur(12px)",
                borderRadius: "999px",
                boxShadow: "0 2px 16px rgba(0,0,0,0.08)",
              }}
            >
              Ashwani Tyagi
            </span>
            <span
              className="px-5 py-2.5 text-sm sm:text-base font-medium text-gray-700"
              style={{
                background: "rgba(255,255,255,0.70)",
                backdropFilter: "blur(12px)",
                WebkitBackdropFilter: "blur(12px)",
                borderRadius: "999px",
                boxShadow: "0 2px 16px rgba(0,0,0,0.08)",
              }}
            >
              Startup UI/UX Designer
            </span>
          </div>

          {/* Main Heading */}
          <p
            className="font-semibold leading-tight mb-6 text-[#0f0f0f]"
            style={{ fontSize: "clamp(6px, 6vw, 52px)" }}
          >
            A <span style={{ color: "#ec86df" }}>UX Partner</span> Who Works
            <br />
            Like a Team Member
          </p>

          {/* Adoption · Retention · Trust */}
          <p className="text-gray-600 text-base sm:text-lg font-medium mb-2">
            Adoption <span style={{ color: "#e879c0" }}>•</span> Retention{" "}
            <span style={{ color: "#e879c0" }}>•</span> Trust
          </p>

          {/* Sub line */}
          <p className="text-gray-400 text-sm sm:text-base mb-10">
            No full-time designer needed
          </p>

          {/* CTA Button */}
          <div className="flex flex-col items-center gap-3">
            <PillCta
              as="a"
              href="https://wa.me/+918130903238"
              target="_blank"
              rel="noopener noreferrer"
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

            {/* Curly arrow + hint text */}
            <div className="flex items-center gap-2 mt-1">
              <svg
                width="48"
                height="40"
                viewBox="0 0 48 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M40 4 C44 14, 36 28, 20 32 M20 32 L26 26 M20 32 L28 36"
                  stroke="#3b9eea"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                />
              </svg>
            </div>

            {/* Subtext below button */}
            <p className="text-gray-400 text-sm -mt-2">
              Don't let cost stop good design
              <br />
              we'll find a way.
            </p>
          </div>
        </div>
      </section>

      {/* ── Section 2: Video ── */}
      <section
        className="flex items-center justify-center px-4 sm:px-8 py-10"
        style={{
          background:
            "linear-gradient(135deg, #e8fcff 0%, #dff0fa 40%, #eaf4fd 100%)",
        }}
      >
        <div
          className="relative w-full flex items-center justify-center overflow-hidden"
          style={{
            maxWidth: "1100px",
            aspectRatio: "16/9",
            borderRadius: "28px",
            background: "rgba(255,255,255,0.55)",
            backdropFilter: "blur(16px)",
            WebkitBackdropFilter: "blur(16px)",
            border: "1.5px solid rgba(255,255,255,0.85)",
            boxShadow: "0 8px 48px rgba(0,0,0,0.08)",
          }}
        >
          {/* Actual video — swap src with your video file */}
          <video
            ref={videoRef}
            className="w-full h-full object-cover"
            style={{ borderRadius: "28px" }}
            onPlay={() => setPlaying(true)}
            onPause={() => setPlaying(false)}
            playsInline
          >
            <source src="/your-video.mp4" type="video/mp4" />
          </video>

          {/* Play Button Overlay */}
          {!playing && (
            <button
              onClick={handlePlay}
              className="absolute inset-0 flex items-center justify-center"
              style={{
                background: "transparent",
                border: "none",
                cursor: "pointer",
              }}
            >
              <div
                className="flex items-center justify-center transition-transform hover:scale-110"
                style={{
                  width: "72px",
                  height: "72px",
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
      </section>
    </>
  );
};

export default Hero;
