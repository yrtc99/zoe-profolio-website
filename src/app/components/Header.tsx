import React from 'react';
import { SocialIcon } from 'react-social-icons';
import { motion } from 'framer-motion';
import { Social } from 'typings';
import { NoSSR } from './NoSSR';



//this page will get a social arry
type Props = {
  socials: Social[];
}

export default function Header({ socials }: Props) {
  return (

    <div className='sticky top-0 p-5 flex items-start justify-between max-w-6xl mx-auto xl:items-center'>

      <motion.div
        initial={{
          x: -500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1,
        }}
        className='flex flex-row items-center'
      >
        {/*social icon*/}
        <SocialIcon
          className='cursor-pointer'
          network='linkedin'
          fgColor='gray'
          bgColor='transparent'
          url='https://linkedin.com/in/yrtsai'
          target="_blank"
        />
        <SocialIcon
          className='cursor-pointer '
          network='github'
          fgColor='gray'
          bgColor='transparent'
          url='https://github.com/yrtc99'
          target="_blank"
        />

      </motion.div>


      <motion.div
        initial={{
          x: 500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1,
        }}
        className='flex flex-row items-center text-gray-300 cursor-pointer'
      >
        <div>
          <a href='#contactme'>
            <SocialIcon
              network='email'
              fgColor='gray'
              bgColor='transparent'
            />
            <p className='uppercase hidden md:inline-flex text-sm text-gray-400'>
              get in touch
            </p>
          </a>
        </div>
      </motion.div>

    </div>

  )
}