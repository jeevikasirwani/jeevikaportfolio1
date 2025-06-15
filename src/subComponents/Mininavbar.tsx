import React, { useState } from "react";
import { motion, AnimatePresence, scale, color } from "framer-motion";

const variants = {
  collapsed: { height: 0, opacity: 0, transition: { duration: 0.25 } },
  expanded: { height: "auto", opacity: 1, transition: { duration: 0.25 } },
};

export default function MiniNavbar({ isOpen }) {
  return (
    <AnimatePresence>
      {(isOpen || window.innerWidth >= 640) && (
        <motion.div
          initial="collapsed"
          animate="expanded"
          exit="collapsed"
          variants={variants}
          className="overflow-hidden border rounded-3xl w-full p-6
                     
                     hidden sm:block border-dashed border-gray-700"
        >
          <ul className="flex flex-row justify-between gap-6">
            <motion.li
              whileHover={{
                scale: 1.2,
                color: "rgb(216, 180, 254)", 
              }}
              className="cursor-pointer"
            >
              About
            </motion.li>
            <motion.li
              whileHover={{
                scale: 1.2,
                color: "rgb(216, 180, 254)", 
              }}
              className="cursor-pointer">Blog</motion.li>
            <motion.li
              whileHover={{
                scale: 1.2,
                color: "rgb(216, 180, 254)", 
              }}
              className="cursor-pointer">Projects</motion.li>
            <motion.li
              whileHover={{
                scale: 1.2,
                color: "rgb(216, 180, 254)", 
              }}
              className="cursor-pointer">Resume</motion.li>
            <motion.li
              whileHover={{
                scale: 1.2,
                color: "rgb(216, 180, 254)", 
              }}
              className="cursor-pointer">Experience</motion.li>
          </ul>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
