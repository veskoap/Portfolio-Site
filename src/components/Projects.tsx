import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Project } from "../page/types";
import urlFor from "../sanity/lib/urlFor";

type Props = {
  projects: Project[];
};

export default function Projects({ projects }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0"
    >
      <h3 className="absolute top-16 md:top-20 xl:top-24 uppercase tracking-[10px] lg:tracking-[20px] text-gray-500 text-2xl">
        Projects
      </h3>

      <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#892CDC]/80">
        {projects?.map((project, i) => (
          <div
            key={project._id}
            className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-24 h-screen"
          >
            <motion.div
              initial={{
                y: -300,
                opacity: 0,
              }}
              transition={{ duration: 1.2 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <Image
                className="z-5 pt-24 w-[768px]"
                src={urlFor(project?.image).url()}
                alt=""
                height={120}
                width={768}
              />
            </motion.div>

            <div className="space-y-4 lg:space-y-10 px-0 md:px-10 max-w-8xl">
              <h4 className="text-xl md:text-4xl font-semibold text-center">
                <span className="underline decoration-[#892CDC]/50">
                  Case Study {i + 1} of {projects.length}:{" "}
                </span>
                {project?.title}
              </h4>

              <div className="flex items-center space-x-2 justify-center">
                {project.technologies.map((technology) => (
                  <Image
                    className="h-6 w-6 lg:h-8 lg:w-8"
                    key={technology._id}
                    src={urlFor(technology.image).url()}
                    alt=""
                    height={32}
                    width={32}
                  />
                ))}
              </div>

              <p className="text-sm md:text-base text-center md:text-left">
                {project?.summary}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="w-full absolute top-[30%] bg-[#892CDC]/10 left-0 h-[500px] -skew-y-12"></div>
    </motion.div>
  );
}