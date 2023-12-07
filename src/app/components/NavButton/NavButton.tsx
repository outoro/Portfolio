import "./NavButton.css";
import { motion } from "framer-motion";

export default function NavButton({
  isActive,
  setIsActive,
}: {
  isActive: any;
  setIsActive: any;
}) {
  return (
    <div className="nav-button">
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
