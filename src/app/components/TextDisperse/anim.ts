export const transforms = [
  {
    x: -0.8,
    y: -0.6,
    rotationZ: -29,
  },
  {
    x: -0.2,
    y: -0.4,
    rotationZ: -6,
  },
  {
    x: -0.05,
    y: 0.1,
    rotationZ: 12,
  },
  {
    x: -0.05,
    y: -0.1,
    rotationZ: -9,
  },
  {
    x: -0.1,
    y: 0.55,
    rotationZ: 3,
  },
  {
    x: 0,
    y: -0.1,
    rotationZ: 9,
  },
  {
    x: 0,
    y: 0.15,
    rotationZ: -12,
  },
  {
    x: 0,
    y: 0.15,
    rotationZ: -17,
  },
  {
    x: 0,
    y: -0.65,
    rotationZ: 9,
  },
  {
    x: 0.1,
    y: 0.4,
    rotationZ: 12,
  },
  {
    x: 0,
    y: -0.15,
    rotationZ: -9,
  },
  {
    x: 0.2,
    y: 0.15,
    rotationZ: 12,
  },
  {
    x: 0.8,
    y: 0.6,
    rotationZ: 20,
  },
  {
    x: -0.8,
    y: -0.6,
    rotationZ: -29,
  },
];

export const disperse = {
  open: (i: number) => ({
    x: transforms[i].x + "em",
    y: transforms[i].y + "em",
    rotateZ: transforms[i].rotationZ,
    zIndex: 1,
    transition: { duration: 0.75, ease: [0.33, 1, 0.68, 1] },
  }),
  closed: {
    x: 0,
    y: 0,
    rotateZ: 0,
    zIndex: 0,
    transition: { duration: 0.75, ease: [0.33, 1, 0.68, 1] },
  },
};

function easeOutBounce(x: number): number {
  const n1 = 7.5625;
  const d1 = 2.75;

  if (x < 1 / d1) {
    return n1 * x * x;
  } else if (x < 2 / d1) {
    return n1 * (x -= 1.5 / d1) * x + 0.75;
  } else if (x < 2.5 / d1) {
    return n1 * (x -= 2.25 / d1) * x + 0.9375;
  } else {
    return n1 * (x -= 2.625 / d1) * x + 0.984375;
  }
}
