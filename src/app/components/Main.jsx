import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

function Main() {
  return (
    <div className="hero min-h-screen min-w-screen bg-base-200" data-theme="dim" id='home'>
        <div className="hero-content flex-col lg:flex-row-reverse">
          <Image priority={true} src="/profile.png" width={350} height={350} alt='My pic' id='home_pic' className="rounded-lg pb-12 mt-20 lg:ml-40"></Image>
          <div>
            <h1 className="text-6xl font-bold" id='greet_text'>Hi!, I'm Nattawat</h1>
            <h2 className="text-4xl font-bold py-4">A passionate Full-Stack Developer</h2>
            <Link className="btn btn-primary text-lg my-9" href="#contact">Contact Me</Link>
          </div>
        </div>
    </div>
  )
}

export default Main