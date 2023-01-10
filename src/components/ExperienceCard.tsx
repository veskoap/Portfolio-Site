import React from 'react'
import {motion} from 'framer-motion'
import {Experience} from '../page/types'
import urlFor from '../sanity/lib/urlFor'
import Image from 'next/image'

type Props = {
  experience: Experience
}

export default function ExperienceCard({experience}: Props) {
  return (
    <article
      className="flex flex-col xl:mb-20 rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-4 xl:p-10 hover:opacity-100 opacity-40
     cursor-pointer transition-opacity duration-200 overflow-hidden"
    >
      <motion.div
        initial={{
          y: -100,
          opacity: 0,
        }}
        transition={{duration: 1.2}}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{once: true}}
      >
        <Image
          className="w-24 h-24 rounded-full xl:w-[200px] xl:h-[200px] object-contain object-center"
          src={urlFor(experience?.companyImage).url()}
          width={128}
          height={128}
          alt=""
        />
      </motion.div>

      <div className="px-0 md:px-10">
        <h4 className="text-2xl xl:text-4xl font-light">{experience.jobTitle}</h4>
        <p className="font-bold text-xl xl:text-2xl mt-1 ">{experience.company}</p>
        <div className="flex space-x-2 my-2">
          {experience.technologies.map((technology) => (
            <Image
              key={technology._id}
              className="h-10 w-10 rounded-full"
              src={urlFor(technology.image).url()}
              alt=""
              height={40}
              width={40}
            />
          ))}
        </div>
        <p className="uppercase py-5 text-gray-300">
          {new Date(experience.dateStarted).toDateString()} –{' '}
          {experience.isCurrentlyWorkingHere
            ? 'Present'
            : new Date(experience.dateEnded).toDateString()}
        </p>

        <ul className="list-disc space-y-4 ml-5 text-md xl:text-lg">
          {experience.points.map((point, i) => (
            <li key={i}>{point}</li>
          ))}
        </ul>
      </div>
    </article>
  )
}
