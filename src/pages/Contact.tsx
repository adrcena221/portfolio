import { useState } from "react";
import { InputField } from "../components/InputField";
import { FaEnvelope, FaUser, FaPaperPlane } from "react-icons/fa";
import Orb from "../components/Orb";
import "../index.css";



export const Contact = () => {
  const WEB3FORMS_KEY = import.meta.env.VITE_WEB3FORMS_KEY;
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");

    const form = e.currentTarget;
    const formData = new FormData(form);

    // Web3Forms requires this field:
    formData.append("access_key", WEB3FORMS_KEY);

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await res.json();
      if (data.success) {
        setStatus("sent");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <section className="w-full px-4 sm:px-6 lg:px-12 py-10" id="contact">
      <div className="mx-auto max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
        {/* Orb */}
        <div className="flex items-center justify-center">
          <div className="w-full max-w-md sm:max-w-lg lg:max-w-xl h-80 sm:h-105 lg:h-150 relative">
            <Orb hoverIntensity={0.5} rotateOnHover={true} hue={2} forceHoverState={false} />
          </div>
        </div>

        {/* Form */}
        <div className="flex flex-col items-center lg:items-start text-white">
          <div className="w-full max-w-xl">
            <h1 className="text-3xl sm:text-5xl lg:text-5xl font-bold text-center lg:text-left">
              Contact Me
            </h1>

            <p className="mt-4 text-base sm:text-lg text-center lg:text-left text-gray-200">
              Got a question or proposal, or just want to say hello? Go ahead.
            </p>

            <form onSubmit={handleSubmit} className="mt-10">
              {/* Inputs */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <InputField
                  id="name"
                  name="name"
                  label="Name"
                  type="text"
                  placeholder="Name"
                  icon={FaUser}
                />
                <InputField
                  id="email"
                  name="email"
                  label="Email"
                  type="email"
                  placeholder="Email"
                  icon={FaEnvelope}
                />
              </div>

              <div className="mt-5">
                <InputField
                  id="message"
                  name="message"
                  label="Message"
                  type="textarea"
                  placeholder="Message"
                  icon={FaEnvelope}
                />
              </div>

              <div className="mt-6 flex justify-center lg:justify-start">
                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="flex items-center justify-center gap-2 py-2.5 px-5 rounded-2xl transition bg-cyan-600 hover:bg-cyan-700 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {status === "sending" ? "Sending..." : "Send Message"} <FaPaperPlane />
                </button>
              </div>

              {status === "sent" && (
                <p className="mt-4 text-sm text-cyan-300 text-center lg:text-left">
                  Message sent — I’ll get back to you soon.
                </p>
              )}
              {status === "error" && (
                <p className="mt-4 text-sm text-red-300 text-center lg:text-left">
                  Something went wrong. Please try again.
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
