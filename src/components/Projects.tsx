'use client';
import user from '@/utils/user'
import Card from '../subComponents/Card'
import React from 'react'
import { motion } from 'framer-motion'

function Projects() {
  // Animation variants for the container
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.3
      }
    }
  }
  const letterVariants = {
  hidden: { rotateX: 0, opacity: 0 },
  visible: (i:string) => ({
    rotateX: 360,
    opacity: 1,
    transition: {
      delay: i * 0.1, // Each letter delayed by index * 0.1s
      duration: 0.6,
      ease: [0.25, 0.1, 0.25, 1]
    }
  })
}

  // Animation variants for each card
  const cardVariants = {
    hidden: { 
      y: 20, 
      opacity: 0,
    //   scale: 0.8
    },
    visible: {
      y: 0,
      opacity: 1,
    //   scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.1, 0.25, 1] 
      }
    }
  }

  return (
    <div className="p-6 border-b border-dashed border-gray-700">
      <motion.h1 
    //   variants={letterVariants}
        className="text-3xl font-bold mb-8 text-start"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.3 }}
      >
        PROJECTS
      </motion.h1>
          {/* {"PROJECTS".split("").map((letter, index) => (
          <motion.h1
          className="text-3xl font-bold mb-8 text-start"
            key={index}
            variants={letterVariants}
            initial="hidden"
            whileInView="visible"
            custom={index}
            viewport={{ once: true, amount: 0.3 }}
            style={{ display: 'inline-block' }}
          >
            {letter === " " ? "\u00A0" : letter}
          </motion.h1> */}
        {/* ))} */}
      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {user.projects.map((project, index) => (
          <motion.div
            key={index}
            variants={cardVariants}
            
          >
            <Card 
              title={project.title}
              description={project.description}
              tags={project.technologies}
              liveLink={project.link}
              gitHubLink={project.github}
              date={project.date}
            //   working={false}
            />
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}

export default Projects