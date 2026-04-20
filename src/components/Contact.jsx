// src/components/Contact.jsx
import React, { useState } from "react";
import { useScrollAnimation } from "../hooks/useScrollAnimation.js";
import { ArrowUpRight, CheckCircle, Clock, Lock } from "lucide-react";

// ✅ SIRF YAHAN APNI 4 REAL ENTRY IDs DAALO
// viewform URL open karo → Console mein entry IDs nikalo
const FIELDS_MAP = {
  name:    "entry.REAL_ID_1",   // ← Console se copy karo
  phone:   "entry.REAL_ID_2",   // ← Console se copy karo
  email:   "entry.REAL_ID_3",   // ← Console se copy karo
  project: "entry.REAL_ID_4",   // ← Console se copy karo
};

// ✅ Ye URL sahi hai — mat badlo
const GOOGLE_FORM_URL = "https://docs.google.com/forms/d/e/1FAIpQLSdj5WGts5f9u5p5Cqsvr2N3fgt1E7Ej8Wy0hF8_t8yQ8_SRSQ/formResponse";

const TRUST_BADGES = [
  { icon: CheckCircle, text: "Free consultation — no obligations" },
  { icon: Clock,       text: "Response within 48 hours"           },
  { icon: Lock,        text: "Your info stays private"            },
];

export default function Contact() {
  const ref = useScrollAnimation();

  const [form, setForm] = useState({
    name: "", phone: "", email: "", project: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading]     = useState(false);
  const [error, setError]         = useState("");

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const formData = new FormData();
      formData.append(FIELDS_MAP.name,    form.name);
      formData.append(FIELDS_MAP.phone,   form.phone);
      formData.append(FIELDS_MAP.email,   form.email);
      formData.append(FIELDS_MAP.project, form.project);

      await fetch(GOOGLE_FORM_URL, {
        method: "POST",
        mode:   "no-cors",
        body:   formData,
      });

      setSubmitted(true);
      setForm({ name: "", phone: "", email: "", project: "" });

    } catch (err) {
      console.error(err);
      setError("Network error. Please check connection and try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      id="contact"
      ref={ref}
      className="fade-up mx-4 sm:mx-6 md:mx-10 mb-16"
      style={{
        background: "#2b2b2b",
        borderRadius: "clamp(2rem, 5vw, 4.5rem)",
        padding: "clamp(2.5rem, 6vw, 5rem) clamp(1.5rem, 5vw, 5rem)",
      }}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-start max-w-5xl mx-auto">

        {/* ── Left ── */}
        <div>
          <h2
            className="font-bold text-[#44d557] leading-tight"
            style={{ fontSize: "clamp(2.2rem, 5.5vw, 4.5rem)" }}
          >
            Ready for a<br />new design?
          </h2>
          <p className="text-[#d0d0d0] mt-4 leading-relaxed text-sm sm:text-base md:text-lg">
            Contact us and get a free project estimation within 48 hours.
          </p>

          <div className="mt-10 flex flex-col gap-4">
            {TRUST_BADGES.map(({ icon: Icon, text }) => (
              <div key={text} className="flex items-center gap-3">
                <Icon size={16} className="text-[#44d557] flex-shrink-0" />
                <p className="text-sm text-white/60">{text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* ── Right ── */}
        <div>
          {submitted ? (
            <div className="text-center py-12 sm:py-16">
              <div
                className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6"
                style={{ background: "rgba(68,213,87,0.15)" }}
              >
                <CheckCircle size={40} color="#44d557" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
                Thanks! We'll be in touch.
              </h3>
              <p className="text-white/60 text-sm sm:text-base mb-1">
                Expect a response within 48 hours.
              </p>
              <p className="text-[#44d557] text-sm">
                ashwanityagi19@gmail.com
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="mt-6 text-[#44d557] underline text-sm cursor-pointer bg-transparent border-none"
              >
                Send another message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-0">
              {[
                { name: "name",  placeholder: "Name",         type: "text"  },
                { name: "phone", placeholder: "Phone Number", type: "tel"   },
                { name: "email", placeholder: "E-mail",       type: "email" },
              ].map((field) => (
                <div key={field.name} className="py-5 sm:py-6 border-b border-white/20">
                  <input
                    type={field.type}
                    name={field.name}
                    placeholder={field.placeholder}
                    value={form[field.name]}
                    onChange={handleChange}
                    required={field.name !== "phone"}
                    className="bg-transparent border-none outline-none w-full text-base sm:text-lg md:text-xl text-white font-light placeholder-white/40"
                    style={{ fontFamily: "Poppins, sans-serif" }}
                  />
                </div>
              ))}

              <div className="py-5 sm:py-6 border-b border-white/20">
                <textarea
                  name="project"
                  placeholder="A bit about your project"
                  value={form.project}
                  onChange={handleChange}
                  rows={3}
                  className="bg-transparent border-none outline-none w-full text-base sm:text-lg md:text-xl text-white font-light placeholder-white/40 resize-none"
                  style={{ fontFamily: "Poppins, sans-serif" }}
                />
              </div>

              {error && (
                <p className="mt-4 text-red-400 text-sm">{error}</p>
              )}

              <button
                type="submit"
                disabled={loading}
                className="self-start mt-8 inline-flex items-center gap-3 text-white font-medium cursor-pointer transition-all duration-300 hover:-translate-y-0.5 disabled:opacity-60 disabled:cursor-not-allowed border-none"
                style={{
                  background: "#ec74e8",
                  borderRadius: "999px",
                  padding: "clamp(14px, 2vw, 20px) clamp(28px, 4vw, 48px)",
                  fontSize: "clamp(15px, 1.5vw, 20px)",
                  fontFamily: "Poppins, sans-serif",
                }}
              >
                {loading ? (
                  <>
                    <svg
                      className="animate-spin"
                      width="18" height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="white"
                      strokeWidth="2.5"
                    >
                      <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
                    </svg>
                    Sending...
                  </>
                ) : (
                  <>
                    Submit
                    <ArrowUpRight size={18} />
                  </>
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}