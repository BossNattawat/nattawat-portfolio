import React from 'react'
import Image from 'next/image'

function About() {
  return (
    <div className="hero bg-base-200 min-h-screen" id='about'>
        <div className="hero-content flex-col lg:flex-row">
        <Image priority={true} src="/aboutPic.png" width={400} height={400} alt='My pic' className="rounded-2xl border-solid border-8 border-sky-200 px-8 pt-8 mx-5" id='about_pic'></Image>
          <div>
            <h1 className="text-5xl font-bold">About me</h1>
            <p className="py-6 xl:text-xl sm:text-2xl">Hi, my name is Boss. I'm 17-year-old senior high school student from Thailand who wants to be a Full-Stack Developer in the future. My hobbies are listening to music, watching movies, and coding. I will apply to university next year and I hope I can study in the Computer Science.</p>
            <h2 className='text-3xl font-bold mb-7 sm:text-3xl'>Skills</h2>
            <div className='grid lg:grid-cols-3 gap-5'>
              <div className="ProgrammingLanguages">
                <h2 className=' xl:text-xl font-bold pb-4 sm:text-2xl'>Programming Languages</h2>
                <ul className=' list-disc'>
                  <li className=' xl:text-lg ml-4 mt-1 sm:text-2xl'>Python</li>
                  <li className=' xl:text-lg ml-4 mt-1 sm:text-2xl'>JavaScript</li>
                  <li className=' xl:text-lg ml-4 mt-1 sm:text-2xl'>C language</li>
                </ul>
              </div>
              <div className="webDev">
                <h2 className=' xl:text-xl font-bold pb-4 sm:text-2xl'>Web Development</h2>
                <ul className=' list-disc'>
                  <li className=' xl:text-lg ml-4 mt-1 sm:text-2xl'>HTML</li>
                  <li className=' xl:text-lg ml-4 mt-1 sm:text-2xl'>CSS</li>
                  <li className=' xl:text-lg ml-4 mt-1 sm:text-2xl'>React</li>
                </ul>
              </div>
              <div className="dataBase">
                <h2 className=' xl:text-xl font-bold pb-4 sm:text-2xl'>Databases</h2>
                <ul className=' list-disc'>
                  <li className=' xl:text-lg ml-4 mt-1 sm:text-2xl'>SQL</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}

export default About