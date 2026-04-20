// src/components/Footer.jsx
import React from "react";
import logo from "../assets/logo/logo.png";
import { ArrowUpRight, Mail, Phone } from "lucide-react";
import {
  FaLinkedinIn,
  FaInstagram,
  FaXTwitter,
  FaYoutube,
  FaFacebookF,
  FaWhatsapp,
} from "react-icons/fa6";

const FOOTER_LINKS = [
  { label: "About",        href: "#about"     },
  { label: "Portfolio",    href: "#portfolio" },
  { label: "Services",     href: "#services"  },
  { label: "How It Works", href: "#how"       },
  { label: "Contact",      href: "#contact"   },
];

const SOCIAL_LINKS = [
  {
    icon: FaLinkedinIn,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/ashwanityagi",
    color: "#0A66C2",
    bg: "rgba(10,102,194,0.15)",
  },
  {
    icon: FaInstagram,
    label: "Instagram",
    href: "https://www.instagram.com/surudesign",
    color: "#E1306C",
    bg: "rgba(225,48,108,0.15)",
  },
  {
    icon: FaXTwitter,
    label: "Twitter / X",
    href: "https://twitter.com/surudesign",
    color: "#ffffff",
    bg: "rgba(255,255,255,0.10)",
  },
  {
    icon: FaYoutube,
    label: "YouTube",
    href: "https://youtube.com/@surudesign",
    color: "#FF0000",
    bg: "rgba(255,0,0,0.15)",
  },
  {
    icon: FaFacebookF,
    label: "Facebook",
    href: "https://facebook.com/surudesign",
    color: "#1877F2",
    bg: "rgba(24,119,242,0.15)",
  },
  {
    icon: FaWhatsapp,
    label: "WhatsApp",
    href: "https://wa.me/919999999999",
    color: "#25D366",
    bg: "rgba(37,211,102,0.15)",
  },
];

const CONTACT_INFO = [
  {
    icon: Mail,
    label: "ashwanityagi19@gmail.com",
    href: "mailto:ashwanityagi19@gmail.com",
  },
  {
    icon: Phone,
    label: "+91 99999 99999",
    href: "tel:+919999999999",
  },
];

export default function Footer() {
  return (
    <footer
      className="px-4 sm:px-6 md:px-12 pt-14 sm:pt-16 pb-8"
      style={{ background: "#2b2b2b" }}
    >
      <div className="max-w-6xl mx-auto">

        {/* ── Top Grid ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">

          {/* Col 1 — Logo + Tagline */}
          <div className="sm:col-span-2 lg:col-span-1">
            <img
              src={logo}
              alt="Suru Design"
              className="h-12 w-auto object-contain mb-4"
            />
            <p
              className="text-sm leading-relaxed mb-5"
              style={{ color: "rgba(255,255,255,0.45)" }}
            >
              A senior UX partner who works like a team member — helping
              startups build products users love.
            </p>

            {/* S.U.R.U tagline */}
            <p className="text-sm tracking-widest font-medium">
              <span style={{ color: "rgba(255,255,255,0.45)" }}>S</span>
              <span style={{ color: "rgba(255,255,255,0.45)" }}>imple </span>
              <span style={{ color: "#44d557" }}>U</span>
              <span style={{ color: "rgba(255,255,255,0.45)" }}>sable </span>
              <span style={{ color: "rgba(255,255,255,0.45)" }}>R</span>
              <span style={{ color: "rgba(255,255,255,0.45)" }}>emarkable </span>
              <span style={{ color: "#44d557" }}>U</span>
              <span style={{ color: "rgba(255,255,255,0.45)" }}>seful</span>
            </p>
          </div>

          {/* Col 2 — Quick Links */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-widest mb-5">
              Quick Links
            </h4>
            <ul className="flex flex-col gap-3">
              {FOOTER_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="flex items-center gap-1.5 text-sm no-underline transition-colors"
                    style={{ color: "rgba(255,255,255,0.45)" }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "#00c57e")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.45)")}
                  >
                    <ArrowUpRight size={13} />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3 — Contact */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-widest mb-5">
              Contact
            </h4>
            <ul className="flex flex-col gap-4">
              {CONTACT_INFO.map(({ icon: Icon, label, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    className="flex items-center gap-3 text-sm no-underline transition-colors"
                    style={{ color: "rgba(255,255,255,0.45)" }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "#00c57e")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.45)")}
                  >
                    <div
                      className="flex items-center justify-center flex-shrink-0"
                      style={{
                        width: "34px",
                        height: "34px",
                        borderRadius: "8px",
                        background: "rgba(255,255,255,0.08)",
                      }}
                    >
                      <Icon size={15} color="#00c57e" />
                    </div>
                    {label}
                  </a>
                </li>
              ))}

              {/* CTA */}
              <li className="mt-2">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 text-white text-sm font-medium no-underline transition-all hover:-translate-y-0.5"
                  style={{
                    background: "#00c57e",
                    borderRadius: "999px",
                    padding: "10px 20px",
                  }}
                >
                  Free Consultation
                  <ArrowUpRight size={15} />
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4 — Social */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-widest mb-5">
              Follow Us
            </h4>
            <div className="flex flex-col gap-3">
              {SOCIAL_LINKS.map(({ icon: Icon, label, href, color, bg }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-sm no-underline transition-all hover:-translate-y-0.5"
                  style={{ color: "rgba(255,255,255,0.55)" }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = color)}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.55)")}
                >
                  <div
                    className="flex items-center justify-center flex-shrink-0"
                    style={{
                      width: "36px",
                      height: "36px",
                      borderRadius: "10px",
                      background: bg,
                    }}
                  >
                    <Icon size={17} color={color} />
                  </div>
                  {label}
                </a>
              ))}
            </div>
          </div>

        </div>

        {/* ── Divider + Bottom ── */}
        <div
          className="border-t pt-6 flex flex-col sm:flex-row items-center justify-between gap-4"
          style={{ borderColor: "rgba(255,255,255,0.10)" }}
        >
          <p
            className="text-xs sm:text-sm order-2 sm:order-1"
            style={{ color: "rgba(255,255,255,0.35)" }}
          >
            © {new Date().getFullYear()} Suru Design. All rights reserved.
          </p>
          <p
            className="text-xs sm:text-sm order-1 sm:order-2"
            style={{ color: "rgba(255,255,255,0.35)" }}
          >
            Designed with ❤️ by{" "}
            <span style={{ color: "#00c57e" }}>Ashwani Tyagi</span>
          </p>
        </div>

      </div>
    </footer>
  );
}