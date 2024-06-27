import Image from 'next/image'
import Link from 'next/link'
import Main from './components/Main';
import About from './components/About';
import Contact from './components/Contact';

export default function Home() {

  const certificate = [{
      id: 0,
      name: 'CS50X',
      description: 'This course teaches me strong fundamentals in computer science.',
      img:"/CS50x.jpg"
    },
    {
      id: 1,
      name: 'CS50B',
      description: 'This course teaches me how to adapt technology to business.',
      img:"/CS50B.png"
    },
    {
      id: 2,
      name: 'CS50S',
      description: 'This course teaches me the scratch of programming by Scratch.',
      img:"/CS50S.jpg"
    },
    {
      id: 3,
      name: 'SOLOLAERN Python',
      description: 'This course teaches me the fundamentals of Python.',
      img:"/python.png"
    },
    {
      id: 4,
      name: 'MU MOOC',
      description: 'This course teaches me low-level programming languages like C language.',
      img:"/C.png"
    },
    {
      id: 5,
      name: 'SQL Essential',
      description: 'This course teaches me the essentials of SQL language.',
      img:"/SQL.png"
    }
  ];

  return (
    <div data-theme="dim" className='bg-base-200'>
      <Main/>
      <About/>
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
      <Contact/>
      
    </div>
  );
}
