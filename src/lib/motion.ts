export const springHover = {
  type: "spring" as const,
  stiffness: 300,
  damping: 20,
};

export const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export const viewport = { once: true, amount: 0.15 } as const;

export const stagger = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.08, delayChildren: 0.04 },
  },
};
