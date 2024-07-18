import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

function Main() {
  return (
    <div className="hero min-h-screen min-w-screen bg-base-200" data-theme="dim" id='home'>
        <div className="hero-content flex-col lg:flex-row-reverse">
          <Image priority={true} src="/profile.png" width={350} height={350} alt='My pic' id='home_pic' className="rounded-lg pb-12 mt-20 lg:ml-40 w-60 md:w-[350px]"></Image>
          <div>
            <h1 className="md:text-6xl text-4xl font-bold" id='greet_text'>Hi!, I'm Nattawat</h1>
            <h2 className="md:text-4xl text-2xl font-bold my-4" id="type_text">I'm a secondary 6 student</h2>
            <Link className="btn btn-primary text-lg my-9" href="#contact">Contact Me</Link>
          </div>
        </div>
    </div>
  )
}

export default Main