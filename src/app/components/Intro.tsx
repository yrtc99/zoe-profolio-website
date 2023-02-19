import React from 'react'
import { Cursor, useTypewriter } from 'react-simple-typewriter'
import Bgcircle from './Bgcircle'


type Props = {}

export default function Intro({ }: Props) {
    const [text, count] = useTypewriter({
        words: [
            "hi, I'm Zoe :D",
            "I'm a beginer learner",
            "Glad to meet you here",
        ],
        loop: true,
        delaySpeed: 2000,


    });

    return (
        <div className='h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden'>
            <Bgcircle />

            <img
                className='relative rounded-full h-32 w-32 mx-auto object-cover'
                src='https://miro.medium.com/max/5000/1*FHL0L21nragfsp35RCTgsQ.png' />

            <div className=''>
                <h2 className='text-sm uppercase pb-2 tracking-[14px]'>
                    software engineer
                </h2>
                <h1 className='text-4xl lg:text-6xl font-semibold scroll-px-10'>
                    <span>{text}</span>
                    <Cursor cursorColor='pink' />
                </h1>
            </div>


            <div className='z-20'>
                <a href='#about'>
                    <button className='introButton'>About</button>
                </a>

                <a href='#experience'>
                    <button className='introButton'>Experience</button>
                </a>

                <a href='#skills'>
                    <button className='introButton'>Skills</button>
                </a>

                <a href='#projects'>
                    <button className='introButton'>Projects</button>
                </a>

            </div>



        </div>
    )
}