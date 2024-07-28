import React from 'react'
import Image from 'next/image'

function Project({project}) {
  return (
    <div id='project'>
        <div>
            <h1 className='xl:text-5xl text-4xl font-bold text-center my-16'>My Projects</h1>
        </div>
        <div className="hero min-h-screen min-w-screen bg-base-200">
            <div className="hero-content grid sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2 gap-10">
                
                {project.map((project)=>
                <div className="card card-compact bg-base-100 shadow-xl h-[33rem] xl:w-[30rem] xl:h-[32rem]" key={project.id}>
                    <figure>
                        <Image
                            src={project.img}
                            width={700}
                            height={500}
                            alt='Winston_Churchill'
                            priority={true}
                        />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title font-bold mb-2">{project.title}</h2>
                        <h6 className='mb-3 text-base'>Made with : {project.technologies}</h6>
                        <p className='text-base pb-3'>{project.description}</p>
                    </div>
                </div>
                )}
                
            </div>
        </div>
    </div>
    
  )
}

export default Project