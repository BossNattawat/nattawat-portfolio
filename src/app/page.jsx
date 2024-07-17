"use client"

import Main from './components/Main';
import About from './components/About';
import Contact from './components/Contact';
import data from './data';
import projectData from './projectData';
import Certificate from './components/Certificate';
import { useState } from 'react';
import Project from './components/Project';

export default function Home() {

  const [certificate, setCertificate] = useState(data)
  const [project, setProject] = useState(projectData)

  return (
    <div data-theme="dim" className='bg-base-200'>
      <Main/>
      <About/>
      <Project project={project}/>
      <Certificate certificate={certificate}/>
      <Contact/>
    </div>
  );
}
