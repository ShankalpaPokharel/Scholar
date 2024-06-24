import React from 'react'
import { HeroPart, Navbar, OurFeatures } from '../components'

export default function LandingPage() {
  return (
   <>
    <div className='bg-bannerback bg-cover  bg-right bg-no-repeat pb-32'>
      <Navbar/>
      <HeroPart/>
    </div>
    <OurFeatures/>
   </>
  )
}
