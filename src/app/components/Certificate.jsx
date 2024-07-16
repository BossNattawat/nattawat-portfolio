import React from 'react'
import Image from 'next/image'

function Certificate({certificate}) {
  return (
    <div>
        <div className="hero my-10"  id='certification'>
        <h1 className=' text-5xl font-bold'>Certifiaction</h1>
      </div>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content grid sm:grid-cols-2 lg:grid-cols-3 gap-10" id='gride-card'>
          {certificate.map(certificate =>
            <div className="card card-compact w-80 bg-base-100 shadow-xl mx-3" key={certificate.id}>
              <figure><Image src={certificate.img} width={350} height={350} alt='My pic' id='home_pic' className="rounded-lg"></Image></figure>
              <div className="card-body">
                <h2 className="card-title sm:text-2xl lg:text-base">{certificate.name}</h2>
                <p className="sm:text-lg lg:text-base">{certificate.description}</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Certificate