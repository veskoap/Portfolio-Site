import React from 'react'
import {motion} from 'framer-motion'

type Props = {}

function BackgroundCircles({}: Props) {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{
        scale: [1, 2, 2, 3, 1],
        opacity: [1.0, 0.2, 0.4, 0.8, 0.1, 1.0],
        borderRadius: ['20%', '30%', '50%', '80%', '20%'],
      }}
      transition={{
        duration: 3.0,
      }}
      className="relative flex justify-center items-center text-center mt-72"
    >
      <div className="absolute border border-[#464646] rounded-full opacity-20 h-[246px] w-[246px] mt-[354px] animate-ping" />
      <div className="absolute rounded-full border border-[#464646] opacity-20 h-[350px] w-[350px] mt-72" />
      <div className="absolute rounded-full border border-[#464646] opacity-20 h-[350px] w-[350px] mt-[412px]" />
      <div className="absolute rounded-full border border-[#892CDC] opacity-20 h-[800px] w-[800px] mt-72 animate-pulse" />
      <div className="absolute rounded-full border border-[#464646] opacity-20 h-[650px] w-[650px] -mt-2" />
      <div className="absolute rounded-full border border-[#464646] opacity-20 h-[480px] w-[480px] mt-[548px]" />
    </motion.div>
  )
}

export default BackgroundCircles
