import React from 'react'

const Contacto = () => {
  return (
    <div name="contacto" className='w-full  h-screen bg-gradient-to-b from-black to-gray-800 p-4 text-white'>
        <div className='flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Contacto</p>
                <p className='py-6'>Por favor, llena este formulario para ponerte en contacto conmigo: </p>
            </div>
            <div className='flex justify-center items-center'>
                <form action="https://getform.io/f/aolgkzmb" method="POST" className='flex flex-col w-full md:w-1/2'>
                    <input type="text" name="nombre" placeholder="Ingresa tu nombre" className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none' required />

                    <input type="email" name="email" placeholder="Ingresa tu dirección de correo" className='my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none' required />

                    <textarea name="mensaje" rows="10" placeholder='Ingresa tu mensaje' className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none' required></textarea>

                    <button className='text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300'>Enviar mensaje</button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Contacto