import React from 'react'
import { educationData } from '../../../Constants/education_data'

const Education = () => {
  return (
    <div className='grid grid-flow-row gap-y-14 gap-x-14 grid-cols-1 lg:grid-cols-2 py-10'>
        {educationData.map((data, i) => (
            <div
            key={i}
            className='text-white pl-10 border-l-[1px] border-l-[#ff014f] flex flex-col gap-4 items-start font-bold relative before:bg-light-pink before:w-5 before:h-5 before:rounded-full before:absolute before:-left-[11px] before:top-0 after:bg-dark-blue after:absolute after:w-3 after:h-3 after:rounded-full after:-left-[7px] after:top-1 '>
            <h1 className='text-xl'>{data.title}</h1>
            <h2 className='text-sm'>{data.sub_title}</h2>
            <h3 className='bg-light-pink px-2 py-1 text-sm'>{data.date}</h3>
            <p className='opacity-70'>The training provided by universities in order to prepare people to work in various sectors of the economy or areas of culture.</p>
        </div>
        ))}
        
        
    </div>
  )
}

export default Education