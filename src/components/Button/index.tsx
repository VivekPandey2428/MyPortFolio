import React from "react";
import { motion } from "framer-motion";
import classNames from "classnames";

interface ButtonProps {
  text: string;
  onClick?: () => void;
  className?: string;
}
const Button = ({ text, onClick, className }: ButtonProps) => {
  return (
    <motion.div initial={{}} className="w-full flex justify-end pr-5">
      <motion.div
        className={classNames("w-20 h-20 rounded-full mt-10 bg-white flex items-center cursor-pointer justify-center", className)}
        animate={{ rotate: 360 }}
        whileHover={{scale: 1.3}}
        transition={{ type: "spring" }}
      >
        <div className="text-black">{text}</div>
      </motion.div>
    </motion.div>
  );
};

export default Button;
