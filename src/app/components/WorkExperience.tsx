import React from 'react'
import { motion } from 'framer-motion'
import ExperienceCard from './ExperienceCard'
import { Experience } from 'typings'

type Props = {
  experiences: Experience[];
}

export default function WorkExperience({ experiences }: Props) {
  return (
    <motion.div className='flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-6xl px-10 justify-evenly mx-auto items-center'>
      <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-400 text-2xl'>
        Experience
      </h3>

      <div className='w-full flex space-x-5 overflow-x-scroll p-10 snap-x snap-mendatory scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#fe21d2]/80'>
        {experiences?.map(experience => (
          <ExperienceCard
            key={experience._id}
            experience={experience}
          />
        ))}
      </div>

    </motion.div>


  )
}