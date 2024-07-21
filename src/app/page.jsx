"use client"

import Main from './components/Main';
import About from './components/About';
import Contact from './components/Contact';
import data from './data';
import projectData from './projectData';
import Certificate from './components/Certificate';
import { useState } from 'react';
import Project from './components/Project';
import Navbar from './components/Navbar';

export default function Home() {

  const [certificate, setCertificate] = useState(data)
  const [project, setProject] = useState(projectData)
  const [index, setIndex] = useState(0)

  const themes = [
    "dim",
    "autumn"
  ]

  const theme = themes[index]
  const next = () => setIndex((index + 1) % themes.length)

  return (
    <div data-theme={theme} className='bg-base-200'>
      <Navbar next={next}/>
      <Main/>
      <About/>
      <Project project={project}/>
      <Certificate certificate={certificate}/>
      <Contact/>
    </div>
  );
}
