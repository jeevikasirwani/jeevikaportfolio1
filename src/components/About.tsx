"use client";
import React, { useState, useEffect,memo } from "react";
import { motion } from "framer-motion";
import { IBM_Plex_Mono } from "next/font/google";

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-ibm-plex-mono",
  display: "swap",
});
function TypewriterComponent({ text, speed = 50 }) {
  const [display, setDisplay] = useState("");
  const [cursor, setCursor] = useState(0);

  useEffect(() => {
    if (cursor < text.length) {
      const id = setTimeout(() => {
        setDisplay((prev) => prev + text[cursor]);
        setCursor((prev) => prev + 1);
      }, speed);
      return () => clearTimeout(id);
    }
  }, [cursor, text, speed]);

  return <div dangerouslySetInnerHTML={{ __html: display }} />;
}
const Typewriter = memo(TypewriterComponent);

export default memo(function About() {
const intro = `
<p class="mb-3">
  I’m a <span class="text-violet-500 font-semibold">fullstack engineer</span> who designs. 🎨
  <p class="mb-3">I build <span class="text-violet-500 font-semibold">interfaces</span> that feel as
  good as they function, obsessing over the <span class="text-violet-500 font-semibold">details</span> most users won't
  notice – but would miss if they were gone. 🔍✨</p>
</p>

<h3 class="mb-3">
  My code is <span class="text-violet-500 font-semibold">purposeful</span>: sometimes
  minimalist, sometimes over-engineered (like this site!), but always intentional. ⚡
</h3>

<p class="mb-3">
  I believe in <span class="text-violet-500 font-semibold">progress over perfection</span> 🚀 and
  that the best solutions emerge at the intersection of
  <span class="text-violet-500 font-semibold">design thinking</span> and
  <span class="text-violet-500 font-semibold">technical rigor</span>. 🧠💻
  <p class="mb-3">By day, I ship production code. By night, I'm tinkering with: 
  <span class="text-violet-500 font-semibold">UI/UX experiments</span> (animations, 
  <span class="text-violet-500 font-semibold">micro-interactions</span>), 
  tools that spark joy (<span class="text-violet-500 font-semibold">custom hooks</span>, 
  design systems), bending frameworks to do weird, wonderful things. 🛠️🎭</p> 
  <p>Let's make something that matters!</p>
</p>

`;

// Note: Replace "yourusername" with your actual GitHub username
  return (
    <div className={`p-10 ${ibmPlexMono.className} text-gray-500 border-b border-dashed border-gray-700`}>
      <motion.div
        animate={{
          y: [0, -10, 0],
          transition: { repeat: Infinity, duration: 3.5 },
        }}
      >
        <Typewriter text={intro} speed={10} />
      </motion.div>
    </div>
  );
}
)