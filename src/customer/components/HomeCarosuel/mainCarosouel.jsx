import React from 'react'
import { MainCarouselData } from './MainCarosuelData'
import AliceCarousel from 'react-alice-carousel'
import 'react-alice-carousel/lib/alice-carousel.css'

export default function MainCarosouel() {
    const items=MainCarouselData.map((item)=> <img className='cursor-pointer -z-10' role='presentation' src={item.image} alt="/"/>)
  return (
    <AliceCarousel
  
    items={items}
   disableButtonsControls
   autoPlay
   autoPlayInterval={1000}
   infinite
/>
  )
}
