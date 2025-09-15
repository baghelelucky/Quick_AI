import React from 'react'
import { useNavigate } from 'react-router-dom'
import { assets } from '../assets/assets';

const Hero = () => {
  const navigate = useNavigate();
  return (
    <div className="w-full min-h-screen flex flex-col justify-center items-center text-center px-4 sm:px-20 xl:px-32
                    bg-[radial-gradient(ellipse_at_top_left,_rgba(255,214,224,0.5),_rgba(214,240,255,0.4),_rgba(224,255,214,0.4),_rgba(255,240,214,0.4),_rgba(240,214,255,0.4))]
                    backdrop-blur-lg">

        <div className='mb-8'>
            <h1 className='text-4xl sm:text-6xl md:text-7xl font-semibold mx-auto leading-tight'>Create amazing content <br/> with <span className='text-violet-500'>AI tools</span></h1>
            <p className='mt-4 max-w-lg mx-auto text-gray-600'>Easily create stunning content with AI-powered tools that boost your creativity and save time.</p>
        </div>

        {/* --- Corrected Area --- */}
        <div className='flex flex-col items-center gap-4'>
            {/* Button Group */}
            <div className='flex flex-wrap justify-center gap-4 text-sm'>
                <button onClick={() => navigate('/ai')} className='bg-violet-500 text-white px-10 py-3 rounded-lg hover:scale-105 active:scale-95 transition cursor-pointer'>Start Creating Now</button>
                <button className='bg-white px-10 py-3 rounded-lg border border-gray-300 hover:scale-102 active:scale-95 transition cursor-pointer'>Watch Demo</button>
            </div>

            {/* Trust Signal */}
            <div className='flex items-center gap-2 text-sm text-gray-700'>
                <img src={assets.user_group} alt="User avatars" className='h-8'/>
                <span>Trusted by 10K+ people</span>
            </div>
        </div>
        {/* --- End of Correction --- */}

    </div>
  )
}

export default Hero