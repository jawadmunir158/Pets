import React from 'react'
import Title from '../components/Title'
import NewsLetterBox from '../components/NewsLetterBox'


import { assets } from '../assets/frontend_assets/assets'
import { Link } from 'react-router-dom'

const About = () => {



  return (
    <div>
      <div className='text-2xl text-center pt-8 border-t'>
        <Title text1={'ABOUT'} text2={'US'} />
      </div>

      <div className='my-10 flex flex-col md:flex-row gap-16'>
        <img className='w-full md:max-w-[450px] ' src={assets.about_img} alt="" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum iusto voluptatibus quae nisi delectus, harum nam facere maxime dolores voluptate animi odio labore ratione expedita cupiditate culpa magni illo omnis.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint dolorum illo, ipsa cumque corrupti quisquam adipisci molestias minus, enim culpa deserunt laboriosam error necessitatibus voluptate reiciendis qui. Eaque, quia dolore?</p>
          <b className='text-gray-800'>Our Mission</b>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores ipsam maxime inventore ullam possimus impedit non sunt fugit officia quaerat, quia provident mollitia omnis sequi animi quasi, voluptates odio veniam.</p>
        </div>

      </div>


      <div className='text-xl py-4'>
        <Title text1={'WHY'} text2={'CHOOSE US'} />
      </div>

      <div className='flex flex-col md:flex-row text-sm mb-20'>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Quality Assurance:</b>
          <p className='text-gray-600'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci odit molestias provident quasi est quisquam facere excepturi eveniet modi dicta autem dignissimos, nemo itaque, quibusdam veritatis fugiat libero voluptatem fuga?</p>
        </div>


        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Convenience:</b>
          <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci odit molestias provident quasi est quisquam facere excepturi eveniet modi dicta autem dignissimos, nemo itaque, quibusdam veritatis fugiat libero voluptatem fuga?</p>
        </div>


        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Exceptional Custonmer Service:</b>
          <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci odit molestias provident quasi est quisquam facere excepturi eveniet modi dicta autem dignissimos, nemo itaque, quibusdam veritatis fugiat libero voluptatem fuga?</p>
        </div>
      </div>
      <NewsLetterBox />
    </div>
  )
}

export default About