"use client"

import Main from './components/Main';
import About from './components/About';
import Contact from './components/Contact';
import data from './data';
import Certificate from './components/Certificate';
import { useState } from 'react';

export default function Home() {

  const [certificate, setCertificate] = useState(data)

  return (
    <div data-theme="dim" className='bg-base-200'>
      <Main/>
      <About/>
      <Certificate certificate={certificate}/>
      <Contact/>
    </div>
  );
}
