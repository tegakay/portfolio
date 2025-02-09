import React from 'react'

const Hero = () => {
  return (
    <section className='flex items-center justify-between px-10 py-20 bg-white"'>
        <div className="max-w-lg">
        <h4 className="text-gray-500 text-lg font-semibold">Hello,</h4>
        <h1 className="text-5xl font-bold text-black mt-2">I'M OGHENEBRUME KOFI</h1>
        <p className="text-gray-700 text-xl mt-4">
          I am a Software Engineer & Designer
        </p>

        {/* Buttons */}
        <div className="mt-6 flex space-x-4">
          <button className="px-6 py-3 border border-black rounded-md text-black hover:bg-black hover:text-white transition">
            Hire me
          </button>
          <button className="px-6 py-3 bg-black text-white rounded-md hover:opacity-80 transition">
            Download CV
          </button>
        </div>
      </div>


    </section>
  )
}

export default Hero