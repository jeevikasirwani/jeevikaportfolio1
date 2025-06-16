'use client';
// import user from '@/utils/user'
import React from 'react'
// import { motion } from 'framer-motion'

// You'll need to create this Card component or adjust based on your extracurricular data structure
interface ExtracurricularCardProps {
  title: string;
  description: string;
  timeline: string;
  location: string;
  eventname: string;
 
}

function ExtracurricularCard({ title, description, timeline, location, eventname }: ExtracurricularCardProps) {
  return (
    <div className="font-mono p-6 border border-dashed border-gray-600 rounded-2xl  shadow-lg">
      <div className="flex items-start gap-4">
       
        <div className="flex-1">
          <h2 className="text-xl font-bold mb-2 text-white">{title}</h2>
          <p className="text-violet-400 font-semibold mb-2">{eventname}</p>
          <p className="text-white mb-3">{description}</p>
          <div className="flex justify-between items-center text-sm text-white">
            <span>{timeline}</span>
            <span>{location}</span>
          </div>
        </div>
      </div>
    </div>
  )
}
export default ExtracurricularCard