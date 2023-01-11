import React from 'react'
import {motion} from 'framer-motion'
import Skill from './Skill'
import {Skill as SkillType} from '../page/types'

type Props = {
  skills: SkillType[]
}

function Skills({skills}: Props) {
  return (
    <motion.div
      initial={{opacity: 0}}
      whileInView={{opacity: 1}}
      transition={{duration: 1.5}}
      className="flex relative flex-col text-center md:text-left xl:flex-row max-w-[2000px] xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center"
    >
      <h3 className="uppercase absolute top-16 md:top-20 xl:top-24 tracking-[10px] lg:tracking-[20px] text-gray-500 text-2xl">Skills</h3>

      <h3 className="absolute top-36 uppercase tracking-[2px] lg:tracking-[3px] text-gray-500 text-sm flex mb-10">
        Hover over a skill for current proficiency
      </h3>

      <div className="grid grid-cols-4 gap-4 pt-36">
        {skills?.slice(0, skills.length / 2).map((skill) => (
          <Skill key={skill._id} skill={skill} />
        ))}

        {skills?.slice(skills.length / 2, skills.length).map((skill) => (
          <Skill key={skill._id} skill={skill} directionLeft />
        ))}
      </div>
    </motion.div>
  )
}

export default Skills
