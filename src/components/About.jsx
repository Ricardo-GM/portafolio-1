import React from 'react'

const About = () => {
  return (
    <div name="acerca de" className='w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white' >
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full' >
          <div className='pb-8' >
            <p className='text-4xl font-bold inline border-b-4 border-gray-500' >
              Acerca de
            </p>
          </div>               
          <p className='text-xl mt-20' >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit recusandae eos excepturi odio commodi in ipsa minus doloribus! Voluptatibus commodi dolorem culpa, accusantium expedita quo delectus harum optio ratione, aliquam deserunt quis consequatur voluptates! Quia, similique cupiditate. Officia quo sunt quae saepe enim eligendi assumenda ut. Corporis hic praesentium illum.
          </p>
          <br />
          <p className='text-xl'>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam totam molestiae odio sapiente voluptatem ut nobis aliquam praesentium saepe nisi, officiis corporis ad accusamus voluptatibus? Nihil, dolorem. Eos mollitia illo repellendus nostrum magni sed alias maiores odio veritatis velit voluptas voluptatibus, ab quo nam ut assumenda ea esse odit modi.
          </p>
        </div>
    </div>
  )
}

export default About