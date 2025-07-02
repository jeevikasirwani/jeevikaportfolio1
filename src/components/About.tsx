"use client";
import React, { useState, useEffect, memo, useRef } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { SplitText } from "gsap/SplitText";
import { RoughNotation } from "react-rough-notation";
import { IBM_Plex_Mono } from "next/font/google";



const ibmPlexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-ibm-plex-mono",
  display: "swap",
});

gsap.registerPlugin(SplitText);


export default function About() {
  const textRef = useRef<HTMLDivElement>(null);
  const [showAnnotations, setShowAnnotations] = useState(false);

  useEffect(() => {
    

    if (textRef.current) {
      const paragraphs = textRef.current.querySelectorAll('p');
      
      paragraphs.forEach((p, index) => {
        const split = new SplitText(p, { type: "words" });
        
        gsap.fromTo(split.words, {
          opacity: 0,
          
        }, {
          opacity: 1, 
          duration: 0.8,
          stagger: 0.05,
          delay: 2 + (index * 0.3),
          ease: "sine.out"
        });
      });
    }

    setTimeout(() => setShowAnnotations(true), 4000);
  }, []);

  return (
    <div className={`p-10 ${ibmPlexMono.className} text-white border-b border-dashed border-gray-700`}>
     
      <div ref={textRef} className="space-y-6 text-lg leading-relaxed">
        <p>
          I'm a{" "}
          <RoughNotation 
            type="underline" 
            color="#8b5cf6" 
            show={showAnnotations}
            animationDelay={500}
          >
            fullstack engineer
          </RoughNotation>{" "}
          who designs. 🎨
        </p>

        <p>
          I build{" "}
          <RoughNotation 
            type="underline" 
            color="#06b6d4" 
            show={showAnnotations}
            animationDelay={1000}
          >
            interfaces
          </RoughNotation>{" "}
          that feel as good as they function, obsessing over the{" "}
          <RoughNotation 
            type="circle" 
            color="#10b981" 
            show={showAnnotations}
            animationDelay={1500}
            strokeWidth={3}
            padding={10}
          >
            details
          </RoughNotation>{" "}
          most users won't notice – but would miss if they were gone. 🔍✨
        </p>

        <p>
          My code is{" "}
          <RoughNotation 
            type="box" 
            color="#f59e0b" 
            show={showAnnotations}
            animationDelay={2000}
          >
            purposeful
          </RoughNotation>
          : sometimes minimalist, sometimes over-engineered (like this site!), 
          but always intentional. ⚡
        </p>

        <p>
          I believe in{" "}
          <RoughNotation 
            type="bracket" 
            color="#ef4444" 
            show={showAnnotations}
            animationDelay={2500}
            brackets={["left", "right"]}
          >
            progress over perfection
          </RoughNotation>{" "}
          🚀 and that the best solutions emerge at the intersection of{" "}
                     <RoughNotation 
             type="underline" 
             color="#8b5cf6" 
             show={showAnnotations}
             animationDelay={3000}
           >
             design thinking
           </RoughNotation>{" "}
          and{" "}
          
            technical rigor
          
          . 🧠💻
        </p>

        <p>
          By day, I ship production code. By night, I'm tinkering with:{" "}
          <RoughNotation 
            type="strike-through" 
            color="#f59e0b" 
            show={showAnnotations}
            animationDelay={3500}
          >
            boring stuff
          </RoughNotation>{" "}
          <RoughNotation 
            type="underline" 
            color="#10b981" 
            show={showAnnotations}
            animationDelay={3700}
          >
            UI/UX experiments
          </RoughNotation>{" "}
          (animations,{" "}
          <RoughNotation 
            type="underline" 
            color="#8b5cf6" 
            show={showAnnotations}
            animationDelay={4000}
          >
            micro-interactions
          </RoughNotation>
          ), tools that spark joy! 🛠️🎭
        </p>

        <motion.p 
          className="text-2xl font-bold text-center mt-8"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 5, type: "spring", stiffness: 500, damping: 25 }}
        >
          <RoughNotation 
            type="underline" 
            color="#8b5cf6" 
            show={showAnnotations}
            animationDelay={5000}
            strokeWidth={4}
            padding={15}
          >
            Let's make something that matters!
          </RoughNotation>
        </motion.p>
      </div>
    </div>
  );
}
