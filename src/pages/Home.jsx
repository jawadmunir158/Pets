import React from 'react'
import Hero from '../components/Hero'
import LatestCollection from '../components/latestCollection'
import BestSeller from '../components/BestSeller'
import OuPolicy from '../components/OuPolicy'
import NewsLetterBox from '../components/NewsLetterBox'

const Home = () => {
  return (
    <div>
      <Hero />
      <LatestCollection />
      <BestSeller />
      <OuPolicy />
      <NewsLetterBox />
    
    </div>
  )
}

export default Home