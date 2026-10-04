import { AnimatePresence, motion } from "framer-motion";
import { useState, type FormEvent } from "react";

export default function Footer() {
  const [ok, setOk] = useState(false);

  function submit(e: FormEvent) {
    e.preventDefault();
    setOk(true);
  }

  return (
    <footer className="bg-navy text-slate-300">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:px-6 md:grid-cols-2 lg:grid-cols-4 lg:px-8">
        <div>
          <p className="text-lg font-semibold text-white">AuraHealth Clinic</p>
          <p className="mt-3 text-sm leading-relaxed">
            Premium same-day medicine with diagnostics, pharmacy, and a calmer standard of care.
          </p>
          <div className="mt-4 flex gap-3 text-sm">
            <a href="#reviews" className="hover:text-white">
              LinkedIn
            </a>
            <a href="#reviews" className="hover:text-white">
              Instagram
            </a>
            <a href="#reviews" className="hover:text-white">
              X
            </a>
          </div>
        </div>
        <div>
          <p className="text-sm font-semibold text-white">Directory</p>
          <ul className="mt-3 grid gap-2 text-sm">
            <li>
              <a href="#services">Services</a>
            </li>
            <li>
              <a href="#team">Specialists</a>
            </li>
            <li>
              <a href="#platform">Care OS</a>
            </li>
            <li>
              <a href="#tour">Clinic video</a>
            </li>
            <li>
              <a href="#location">Directions</a>
            </li>
          </ul>
        </div>
        <div>
          <p className="text-sm font-semibold text-white">Compliance & privacy</p>
          <p className="mt-3 text-sm leading-relaxed">
            HIPAA-aligned records. NPI 1841729301. CLIA waived in-house lab. This site does not
            provide emergency medical advice — call 911 for life-threatening symptoms. Privacy
            practices available at reception and by encrypted request.
          </p>
        </div>
        <div>
          <p className="text-sm font-semibold text-white">Clinical briefing</p>
          <form className="mt-3" onSubmit={submit}>
            <label className="sr-only" htmlFor="email">
              Email
            </label>
            <input
              id="email"
              type="email"
              required
              placeholder="you@company.com"
              className="w-full rounded-full border border-white/15 bg-white/5 px-4 py-2.5 text-sm text-white outline-none"
            />
            <button
              type="submit"
              className="mt-3 w-full btn-primary rounded-full py-2.5 text-sm font-semibold text-white"
            >
              Subscribe
            </button>
          </form>
          <AnimatePresence>
            {ok ? (
              <motion.p
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-3 text-sm text-gold"
              >
                You’re on the list. Welcome briefing arrives tomorrow.
              </motion.p>
            ) : null}
          </AnimatePresence>
        </div>
      </div>
      <p className="border-t border-white/10 px-4 py-5 text-center text-xs text-slate-500">
        © {new Date().getFullYear()} AuraHealth Clinic. All rights reserved.
      </p>
    </footer>
  );
}
