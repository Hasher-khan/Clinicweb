import { AnimatePresence, motion } from "framer-motion";
import { useState, type FormEvent } from "react";

type Props = {
  open: boolean;
  onClose: () => void;
};

const slots = ["08:30 AM", "09:15 AM", "11:00 AM", "01:40 PM", "04:20 PM"];

export default function BookingModal({ open, onClose }: Props) {
  const [sent, setSent] = useState(false);
  const [selectedSlot, setSelectedSlot] = useState("09:15 AM");

  function submit(e: FormEvent) {
    e.preventDefault();
    setSent(true);
  }

  return (
    <AnimatePresence>
      {open ? (
        <motion.div
          className="fixed inset-0 z-[80] flex items-end justify-center bg-navy/60 p-0 sm:p-4 backdrop-blur-md sm:items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby="book-title"
            className="w-full max-w-lg overflow-hidden rounded-t-[2rem] sm:rounded-3xl bg-white shadow-2xl pb-[max(1rem,env(safe-area-inset-bottom))]"
            initial={{ y: "100%", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: "100%", opacity: 0 }}
            transition={{ type: "spring", stiffness: 320, damping: 28 }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Grab handle for mobile */}
            <div className="pt-3 pb-1 sm:hidden flex justify-center bg-navy">
              <div className="h-1.5 w-12 rounded-full bg-white/20" />
            </div>

            <div className="bg-navy px-6 py-5 text-white flex items-center justify-between">
              <div>
                <p className="text-[10px] font-semibold tracking-[0.2em] text-teal uppercase">
                  AuraHealth Clinic
                </p>
                <h3 id="book-title" className="mt-0.5 text-xl font-bold sm:text-2xl">
                  Book an Appointment
                </h3>
              </div>
              <button
                type="button"
                onClick={onClose}
                className="rounded-full bg-white/10 p-2 text-white/80 hover:bg-white/20 transition-colors"
                aria-label="Close booking modal"
              >
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            {sent ? (
              <div className="px-6 py-10 text-center">
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-teal/15 text-teal">
                  <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="text-xl font-bold text-navy">Request Received!</p>
                <p className="mt-2 text-xs sm:text-sm text-slate-600 max-w-sm mx-auto">
                  A clinic coordinator will confirm your appointment slot by SMS within 8 minutes.
                </p>
                <button
                  type="button"
                  className="mt-6 btn-primary rounded-full px-8 py-3 text-sm font-semibold text-white shadow-md"
                  onClick={() => {
                    setSent(false);
                    onClose();
                  }}
                >
                  Done
                </button>
              </div>
            ) : (
              <form className="grid gap-4 px-6 py-6" onSubmit={submit}>
                <label className="grid gap-1.5 text-xs sm:text-sm font-medium text-navy">
                  Full name
                  <input
                    required
                    type="text"
                    className="min-h-[46px] rounded-xl border border-slate-200 px-3.5 py-2.5 text-sm outline-none focus:border-teal focus:ring-2 focus:ring-teal/20 transition-all"
                    placeholder="Jordan Hale"
                  />
                </label>
                <label className="grid gap-1.5 text-xs sm:text-sm font-medium text-navy">
                  Mobile phone (for SMS confirmation)
                  <input
                    required
                    type="tel"
                    className="min-h-[46px] rounded-xl border border-slate-200 px-3.5 py-2.5 text-sm outline-none focus:border-teal focus:ring-2 focus:ring-teal/20 transition-all"
                    placeholder="+1 (415) 555-0148"
                  />
                </label>
                <fieldset>
                  <legend className="mb-2 text-xs sm:text-sm font-medium text-navy">
                    Select preferred time slot today
                  </legend>
                  <div className="grid grid-cols-3 sm:flex sm:flex-wrap gap-2">
                    {slots.map((s) => {
                      const isSelected = selectedSlot === s;
                      return (
                        <label
                          key={s}
                          onClick={() => setSelectedSlot(s)}
                          className={`cursor-pointer rounded-xl border text-center py-2.5 px-2 text-xs font-semibold transition-all touch-manipulation ${
                            isSelected
                              ? "border-teal bg-teal/10 text-teal ring-1 ring-teal/30"
                              : "border-slate-200 bg-white text-slate-700 hover:border-slate-300"
                          }`}
                        >
                          <input
                            className="sr-only"
                            type="radio"
                            name="slot"
                            checked={isSelected}
                            onChange={() => setSelectedSlot(s)}
                          />
                          {s}
                        </label>
                      );
                    })}
                  </div>
                </fieldset>

                <div className="mt-4 flex gap-3">
                  <button
                    type="button"
                    className="flex-1 rounded-full border border-slate-200 py-3 text-xs sm:text-sm font-semibold text-slate-700 active:bg-slate-50 transition-colors"
                    onClick={onClose}
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="flex-1 btn-primary rounded-full py-3 text-xs sm:text-sm font-semibold text-white shadow-md active:scale-95 transition-transform"
                  >
                    Confirm Request
                  </button>
                </div>
              </form>
            )}
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}

