'use client';
import user from '@/utils/user'
import React from 'react'
import { motion } from 'framer-motion'
import ExtracurricularCard from '@/subComponents/ExtracurricularCard';

function ExtraCurricular() {
  // Animation variants for the container
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.6,
        staggerChildren: 0.3
      }
    }
  }

  // Animation variants for alternating cards
  const cardVariants = {
    hidden: (index: number) => ({
      x: index % 2 === 0 ? -120 : 80, 
      opacity: 0,
      scale: 0.9
    }),
    visible: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.1, 0.25, 1]
      }
    }
  }

  // Letter animation variants for title
  // const letterVariants = {
  //   hidden: { rotateY: 0, opacity: 0 },
  //   visible: (i: number) => ({
  //     rotateY: 360,
  //     opacity: 1,
  //     transition: {
  //       delay: i * 0.1,
  //       duration: 0.6,
  //       ease: [0.25, 0.1, 0.25, 1]
  //     }
  //   })
  // }

  return (
    <div className="border-b border-dashed border-gray-700 p-6 max-w-full mx-auto">
      {/* Animated Title */}
      <motion.h1 
         //   variants={letterVariants}
             className="text-3xl font-bold mb-8 text-start"
             initial={{ opacity: 0, y: -30 }}
             whileInView={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.8, ease: "easeOut" }}
             viewport={{ once: true, amount: 0.3 }}
           >
             ExtraCurriculars
           </motion.h1>
      
      {/* Animated Cards */}
      <motion.div 
        className="space-y-6"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {user.extracurricular.map((activity, index) => (
          <motion.div
            key={index}
            variants={cardVariants}
            custom={index}
            whileHover={{ 
              scale: 1.02,
              transition: { duration: 0.3 }
            }}
            whileTap={{ scale: 0.98 }}
          >
            <ExtracurricularCard
              title={activity.title}
              description={activity.description}
              timeline={activity.timeline}
              location={activity.location}
              eventname={activity.eventname}
              
            />
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}

export default ExtraCurricular