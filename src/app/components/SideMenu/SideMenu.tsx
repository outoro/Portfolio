import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import "./SideMenu.css";
import Nav from "../Nav/Nav";

const menu = {
  open: {
    width: "480px",
    height: "400px",
    top: "-25px",
    right: "-25px",
    transition: { duration: 0.75, type: "tween", ease: [0.76, 0, 0.24, 1] },
  },
  closed: {
    width: "100px",
    height: "40px",
    top: "0px",
    right: "0px",
    transition: {
      duration: 0.75,
      delay: 0.35,
      type: "tween",
      ease: [0.76, 0, 0.24, 1],
    },
  },
};

export default function SideMenu() {
  const [isActive, setIsActive] = useState(false);
  return (
    <div className="side-menu">
      <motion.div
        variants={menu}
        animate={isActive ? "open" : "closed"}
        initial="closed"
        className="menu"
      >
        <AnimatePresence>{isActive && <Nav />}</AnimatePresence>
      </motion.div>
      <div className="button">
        <motion.div
          animate={{ top: isActive ? "-100%" : "0%" }}
          transition={{
            duration: 0.5,
            type: "tween",
            ease: [0.76, 0, 0.24, 1],
          }}
          className="slider"
        >
          <div
            onClick={() => {
              setIsActive(!isActive);
            }}
            className="el"
          >
            <PerspectiveText label="Menu" />
          </div>
          <div
            onClick={() => {
              setIsActive(!isActive);
            }}
            className="el"
          >
            <PerspectiveText label="Close" />
          </div>
        </motion.div>
      </div>
    </div>
  );
}

function PerspectiveText({ label }: any) {
  return (
    <div className="perspective-text">
      <p>{label}</p>
      <p>{label}</p>
    </div>
  );
}
