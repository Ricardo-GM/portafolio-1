import React from 'react';
import HeroImage from '../assets/profileImage.jpg';
import { IoMdArrowDropdownCircle } from "react-icons/io";
import { Link } from "react-scroll";


const Home = () => {
  return (
    <div name='home' className='h-screen w-full bg-gradient-to-b from-black to-gray-800'>
      <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row'>
        <div className='flex flex-col justify-center h-full'>
          <h2 className='text-4xl sm:text-7xl font-bold text-white'>Soy un Ingeniero de Software</h2>
          <p className='text-gray-500 py-4 max-w-md'>
           Con 4 años de experiencia en el rol de analista de calidad especializado en análisis, gestión, implementación y administración de proyectos para el sector BFSI.Proactivo, cooperativo, facilidad de trabajo en equipo orientado a resultados y de aprendizaje constante, entusiasta en el uso de tecnologías vanguardistas e interesado en la automatización.
          </p>
          <div>
            <Link to="portafolio" smooth duration={500} className='group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-b from-cyan-500 to-blue-500 cursor-pointer'>
              <span className='flex flex-row align-middle items-center justify-center '>
                Ver Portafolio <IoMdArrowDropdownCircle size={25} className='ml-2 group-hover:animate-ping' />
              </span>
            </Link>
          </div>
        </div>
        <div>
          <img src={ HeroImage } alt='my profile' className='rounded-2xl mx-auto w-2/3 md:w-full' />
        </div>
      </div>
    </div>
  )
}

export default Home