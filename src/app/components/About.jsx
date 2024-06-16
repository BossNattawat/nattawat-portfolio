import React from 'react'
import Image from 'next/image'

function About() {
  return (
    <div className="hero bg-base-200 min-h-screen" id='about'>
        <div className="hero-content flex-col lg:flex-row">
        <Image src="/profile.png" width={400} height={400} alt='My pic' className="rounded-2xl border-solid border-8 border-sky-200 px-8 pt-8 mx-5" id='about_pic'></Image>
          <div>
            <h1 className="text-5xl font-bold">About me</h1>
            <p className="py-6 text-xl">Hi, my name is Boss. I'm 17-year-old senior high school student from Thailand who wants to be a Font-End developer in the future. My hobbies are listening to music, watching movies, and coding. I will apply to university next year and I hope I can study in the Computer Science.</p>
            <h2 className='text-3xl font-bold mb-7'>Skills</h2>
            <div className='grid lg:grid-cols-3 gap-5'>
              <div className="ProgrammingLanguages">
                <h2 className=' text-xl font-bold pb-4'>Programming Languages</h2>
                <ul className=' list-disc'>
                  <li className=' text-lg ml-4 mt-1'>Python</li>
                  <li className=' text-lg ml-4 mt-1'>JavaScript</li>
                  <li className=' text-lg ml-4 mt-1'>C language</li>
                </ul>
              </div>
              <div className="webDev">
                <h2 className=' text-xl font-bold pb-4'>Web Development</h2>
                <ul className=' list-disc'>
                  <li className=' text-lg ml-4 mt-1'>HTML</li>
                  <li className=' text-lg ml-4 mt-1'>CSS</li>
                  <li className=' text-lg ml-4 mt-1'>React</li>
                </ul>
              </div>
              <div className="dataBase">
                <h2 className=' text-xl font-bold pb-4'>Databases</h2>
                <ul className=' list-disc'>
                  <li className=' text-lg ml-4 mt-1'>SQL</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}

export default About