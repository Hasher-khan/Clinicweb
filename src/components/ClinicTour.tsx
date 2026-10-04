import { motion } from "framer-motion";
import { fadeUp } from "../lib/motion";
import Section from "./Section";

export default function ClinicTour() {
  return (
    <Section
      id="tour"
      eyebrow="Walk the floors"
      title="Video of the clinic"
      description="Watch a walkthrough of a modern clinic interior — reception, corridors, and care suites in the same calm language as AuraHealth."
    >
      <motion.div
        variants={fadeUp}
        className="overflow-hidden rounded-[2rem] border border-navy/10 bg-navy shadow-[0_28px_70px_rgba(9,9,11,0.28)]"
      >
        <div className="relative aspect-video bg-navy">
          <iframe
            className="absolute inset-0 h-full w-full"
            src="https://www.youtube-nocookie.com/embed/TLXRMLdycIk?rel=0&modestbranding=1"
            title="Clinic tour video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        </div>
      </motion.div>
    </Section>
  );
}
