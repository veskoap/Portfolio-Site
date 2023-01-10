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
      className="relative mx-auto flex h-screen max-w-7xl flex-col items-center justify-evenly px-10 text-center md:flex-row md:text-left"
    >
      <h3 className="absolute text-center top-20 text-2xl uppercase tracking-[20px] text-gray-500">About</h3>

      <motion.div
        className="relative mx-auto mt-24 flex h-screen max-w-7xl  top-8 md:-top-8 flex-col items-center justify-evenly px-10 text-center md:flex-row md:text-left lg:px-0"
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
          width={240}
          height={240}
          className=" flex max-w-[240px] h-48 w-48 flex-shrink-0 rounded-full pb-4 md:max-w-sm md:rounded"
        />
      </motion.div>

      <div className="space-y-10 px-0 pt-4 md:px-10">
        <h4 className="xl:text-4xl text-2xl">
  Here is a <span className="underline decoration-[#892CDC]">little</span> background
        </h4>
        <p className="pb-4 -pt-4 text-base lg:max-w-7xl">{pageInfo?.backgroundInformation}</p>
      </div>
    </motion.div>
  )
}
