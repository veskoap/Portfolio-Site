import React from 'react'
import Image from 'next/image'
import {motion} from 'framer-motion'
import {PageInfo} from '../page/types'
import urlFor from '../sanity/lib/urlFor'

type Props = {
  pageInfo: PageInfo
}

export default function About({pageInfo}: Props) {
  return (
    <motion.div
      initial={{opacity: 0}}
      whileInView={{opacity: 1}}
      transition={{duration: 1.5}}
      className="relative mx-auto -space-y-96 md:space-y-10 flex h-screen max-w-7xl flex-col items-center justify-evenly px-10 text-center md:flex-row md:text-left"
    >
      <h3 className="absolute text-center top-16 md:top-20 xl:top-24 text-2xl uppercase tracking-[10px] lg:tracking-[20px] text-gray-500">
        About
      </h3>
      <div className='relative mx-auto pt-96 md:pt-0 -space-y-16 md:space-y-10 flex h-screen flex-col items-center justify-evenly text-center md:flex-row md:text-left'>
        <motion.div
          className="relative mx-auto md:mt-24 flex h-screen max-w-7xl top-8 md:-top-8 flex-col items-center justify-evenly text-center md:flex-row md:text-left lg:px-0"
          initial={{
            x: -200,
            opacity: 0,
          }}
          transition={{
            duration: 1.2,
          }}
          whileInView={{opacity: 1, x: 0}}
          viewport={{once: true}}
        >
          <Image
            //src={ImageOfMe}
            src={urlFor(pageInfo?.profilePicture).url()}
            alt="Another picture of me"
            width={200}
            height={200}
            className=" flex max-w-[240px] h-36 w-36 md:h-56 md:w-56 xl:h-72 xl:w-72 flex-shrink-0 rounded-full scroll -mt-10 md:mt-0 md:max-w-sm md:rounded"
          />
        </motion.div>

        <div className="space-y-4 px-0 md:px-10">
          <h4 className="xl:text-4xl text-xl md:text-2xl -pt-10 md:pt-10">
            Here is a <span className="underline decoration-[#892CDC]">little</span> background
          </h4>
          <p className="pb-16 text-sm md:text-base lg:max-w-7xl">
            {pageInfo?.backgroundInformation}
          </p>
        </div>
      </div>
    </motion.div>
  )
}
