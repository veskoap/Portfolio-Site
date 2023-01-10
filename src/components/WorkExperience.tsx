import React from 'react'
import {motion} from 'framer-motion'
import ExperienceCard from './ExperienceCard'
import {Experience} from '../page/types'
type Props = {
  experiences: Experience[]
}

export default function WorkExperience({experiences}: Props) {
  return (
    <motion.div
      initial={{opacity: 0}}
      whileInView={{opacity: 1}}
      transition={{duration: 1.5}}
      className="h-screen flex relative overflow-hidden flex-col text-left max-w-full px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="absolute top-20 xl:top-24 uppercase tracking-[10px] lg:tracking-[20px] text-gray-500 text-2xl">
        Experience
      </h3>

      <div className="w-screen flex space-x-5 mt-20 xl:mt-32 overflow-x-scroll p-10 snap-x snap-mandatory h-auto pb-16 xl:pb-20 scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#892CDC]/80">
        {experiences?.map((experience) => (
          <ExperienceCard key={experience._id} experience={experience} />
        ))}
      </div>
    </motion.div>
  )
}
