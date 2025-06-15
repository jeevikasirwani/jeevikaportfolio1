"use client";
import React from "react";
import user from "../utils/user";
import Mininavbar from "@/subComponents/Mininavbar";
// import { Github, Linkedin } from "lucide-react";  // note the capital “H”
import { motion } from "framer-motion";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { Inika } from "next/font/google";

const source = Inika({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-ibm-plex-mono",
  display: "swap",
});
const Navbar = () => {
  const { name, github, linkedin } = user.personalInfo;

  return (
    <motion.div className='w-full p-4 border-b linear border-dashed border-gray-800 backdrop:blur-3xl' animate={{
          background: [
            "radial-gradient(600px at 0% 0%, rgba(120, 119, 198, 0.3), transparent 40%)",
          ],
        }}>
      <div className="flex justify-between items-center w-full">
        <motion.h1
          animate={{ x: [100, 0] }}

          transition={{
            type: "tween",
          }}
          className={`${source.className} text-lg font-semibold sm:text-xl md:text-2xl`}
        >
          {name}
        </motion.h1>

        <div>
          <Mininavbar/>
        </div>
        <div className="flex items-center gap-3 sm:gap-4">
          <motion.a
            initial={{ scale: 0.8 }}
            whileHover={{ scale: 1 }}
            whileTap={{ scale: 0.9 }}
            href={github}
            className="p-1 hover:border-3 hover:rounded-xl hover:border-purple-300  rounded-md transition-colors duration-200"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
          >
            <GitHubIcon />
          </motion.a>

          <motion.a
            initial={{ scale: 0.8 }}
            whileHover={{ scale: 1 }}
            whileTap={{ scale: 0.9 }}
            href={linkedin}
            className="p-1 hover:border-3 hover:rounded-xl hover:border-purple-300  rounded-md transition-colors duration-200"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
          >
            <LinkedInIcon />
          </motion.a>
        </div>
      </div>
    </motion.div>
  );
};

export default Navbar;
