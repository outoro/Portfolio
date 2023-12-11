export const slideUp = {
  initial: {
    y: "0",
  },
  exit: {
    y: "-100vh",
    transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 1.2 },
  },
};

export const firstName = {
  initial: {
    y: 0,
  },
  animate: {
    y: 0,
    transition: {
      delayChildren: 0,
      staggerChildren: 0.04,
      staggerDirection: -1,
    },
  },
};

export const lastName = {
  initial: {
    y: 0,
  },
  animate: {
    y: 0,
    transition: {
      delayChildren: 0,
      staggerChildren: 0.04,
      staggerDirection: 1,
    },
  },
};

export const letter = {
  initial: {
    y: 400,
  },
  animate: {
    y: 0,
    transition: { duration: 1, ease: [0.6, 0.01, 0.3, 0.9] },
  },
};
