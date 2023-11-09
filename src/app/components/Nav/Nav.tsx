import { motion } from "framer-motion";
import Link from "next/link";
import { perspective, slideIn } from "./anim";
import { links } from "./data";
import { footerLinks } from "./data";

export default function Nav() {
  return (
    <div className="flex flex-col justify-between pt-[100px] px-[40px] pb-[50px] h-full box-border">
      <div className="flex gap-3 flex-col">
        {links.map((link, i) => {
          const { title, href } = link;
          return (
            <div key={`b_${i}`} className="perspective">
              <motion.div
                custom={i}
                variants={perspective}
                initial="initial"
                animate="enter"
                exit="exit"
              >
                <Link href={href} className="text-black text-5xl">
                  {title}
                </Link>
              </motion.div>
            </div>
          );
        })}
      </div>
      <motion.div className="flex flex-wrap">
        {footerLinks.map((link, i) => {
          const { title, href } = link;
          return (
            <motion.div
              key={`f_${i}`}
              custom={i}
              variants={slideIn}
              initial="initial"
              animate="enter"
              exit="exit"
              className="w-1/2 mt-1 text-black"
            >
              <Link href={href} target="_blank">{title}</Link>
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
}
