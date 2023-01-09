import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import {Cursor, useTypewriter} from 'react-simple-typewriter'
import BackgroundCircles from './BackGroundCircles'
import {PageInfo} from '../page/types'
import urlFor from '../sanity/lib/urlFor'

type Props = {
  pageInfo: PageInfo
}

export default function Hero({pageInfo}: Props) {
  const [text] = useTypewriter({
    words: [
      `<Hi, I'm ${pageInfo?.name}/>`,
      '<student/>',
      '<designer/>',
      '<foodie/>',
      '<programmer/>',
    ],
    loop: true,
    delaySpeed: 2000,
  })

  return (
    <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
      <BackgroundCircles />
      <Image
        className="relative rounded-full h-72 w-72 mx-auto  object-cover z-10"
        //src={ImageOfMe}
        src={urlFor(pageInfo?.heroImage).url()}
        alt="A small picture of me the website creator"
        width={288}
        height={288}
      />
      <div className="z-20">
        <h2 className="text-sm uppercase text-gray-500 pb-2 tracking-[10px]">{pageInfo?.role}</h2>
        <h1 className="text-5xl lg:text-6xl font-semibold px-10">
          <span className="mr-3">{text}</span>
          <Cursor cursorColor="#892CDC" />
        </h1>

        <div className="pt-5">
          <Link href="#about">
            <button className="heroButton scroll-smooth">About</button>
          </Link>
          <Link href="#experience">
            <button className="heroButton">Experience</button>
          </Link>
          <Link href="#skills">
            <button className="heroButton">Skills</button>
          </Link>
          <Link href="#projects">
            <button className="heroButton">Projects</button>
          </Link>
        </div>
      </div>
    </div>
  )
}
