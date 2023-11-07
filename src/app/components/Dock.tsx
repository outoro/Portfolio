"use client";

import {
  useMotionValue,
  motion,
  useTransform,
  MotionValue,
  useSpring,
} from "framer-motion";
import { useRef } from "react";
import { useRouter } from "next/navigation";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";

type app = { id: number; link?: string; icon: string };

const apps: app[] = [
  { id: 1, link: "/", icon: "H" },
  { id: 2, link: "/about", icon: "A" },
  { id: 3, link: "/project", icon: "P" },
  { id: 4, link: "https://github.com/outoro", icon: "G" },
  { id: 5, link: "/", icon: "T" },
  { id: 6, link: "/", icon: "V" },
  { id: 7, icon: "G" },
];

export default function Dock() {
  const router = useRouter();
  let mouseX = useMotionValue(Infinity);

  return (
    <div
      onMouseMove={(e) => mouseX.set(e.pageX)}
      onMouseLeave={() => mouseX.set(Infinity)}
      className="fixed left-1/2 bottom-10 -translate-x-1/2 flex h-16 items-end gap-4 rounded-2xl bg-gray-700 px-4 pb-3"
    >
      {apps.map((app) => (
        <AppIcon mouseX={mouseX} key={app.id} app={app} router={router} />
      ))}
    </div>
  );
}

function AppIcon({
  mouseX,
  app,
  router,
}: {
  mouseX: MotionValue;
  app: app;
  router: AppRouterInstance;
}) {
  let ref = useRef<HTMLDivElement>(null);
  let distance = useTransform(mouseX, (val) => {
    let bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };
    return val - bounds.x - bounds.width / 2;
  });
  let widthSync = useTransform(distance, [-200, 0, 200], [40, 80, 40]);
  let width = useSpring(widthSync, { damping: 15, mass: 0.1, stiffness: 200 });

  return (
    <motion.div
      ref={ref}
      onClick={() => app.link && router.push(app.link)}
      style={{ width }}
      className="flex items-center justify-center aspect-square w-10 rounded-full bg-gray-500"
    >
      {app.icon}
      <i className="fi fi-rr-search"></i>
    </motion.div>
  );
}
