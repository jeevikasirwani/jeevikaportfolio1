'use client';
import React from "react";
import {motion} from 'framer-motion';
type ProjectCardProps = {
  title: string;
  description: string;
  tags: string[];
  liveLink: string;
  date: string;
  gitHubLink: string;
 
};

function Card({
  title,
  description,
  tags,
  liveLink,
  date,
  gitHubLink,
  
}: ProjectCardProps) {
  return (
    <motion.div animate={{y:[0,-20,0],transition:{repeat:Infinity,duration:3.5}}}  className="p-6 border border-dashed border-gray-600 rounded-2xl">
      <div className=" text-white rounded-2xl p-4">
        <div className="mb-4">
          <div className="flex items-center gap-2 mb-2">
            <h1 className="text-xl font-bold">{title}</h1>
          </div>
          
          <span className="block mb-3 text-white">{description}</span>
          
          <div className="flex flex-wrap gap-2 mb-3">
            {tags.map((tag, index) => (
              <span 
                key={index}
                className="px-2 py-1 text-xs bg-gray-800 rounded-md"
              >
                {tag}
              </span>
            ))}
          </div>
          
          <div className="flex gap-4 mb-3">
            <motion.a
            whileHover={{scale:1.2}} 
              href={liveLink} 
              className="text-violet-500 hover:underline"
              target="_blank"
            //   rel="noopener noreferrer"
            >
              Live Demo
            </motion.a>
            <motion.a 
            whileHover={{scale:1.2}} 
              href={gitHubLink} 
              className="text-violet-500 hover:underline"
              target="_blank"
            //   rel="noopener noreferrer"
            >
              GitHub
            </motion.a>
          </div>
          
          <div className="flex justify-end">
            <span className="text-sm text-gray-400">{date}</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default Card;