export const menu = {
  open: {
    height: "100vh",
    transition: { duration: 0.75, type: "tween", ease: [0.76, 0, 0.24, 1] },
  },
  closed: {
    height: "0px",
    transition: {
      duration: 0.75,
      delay: 0.35,
      type: "tween",
      ease: [0.76, 0, 0.24, 1],
    },
  },
};

export const nav = {
  open: {
    opacity: 1,
    transition: {
      duration: 0.75,
      delay: 0.4,
      type: "tween",
      ease: [0.76, 0, 0.24, 1],
    },
  },
  closed: {
    opacity: 0,
    transition: {
      duration: 0.75,
      type: "tween",
      ease: [0.76, 0, 0.24, 1],
    },
  },
};
