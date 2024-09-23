import React from 'react'
import MainCarousel from '../../components/HomeCarosuel/mainCarosouel'
import HomeSectionCarosuel from '../../components/HomeSectionCarosuel/HomeSectionCarosuel';
import { mens_kurta } from '../../../Data/mens_kurta';

const HomePage=()=> {
  return (
    <div>
      <MainCarousel/>
      <div className='space-y-10 py-20 flex flex-col justify-center px-5 lg:px-10'>
       <HomeSectionCarosuel data={mens_kurta} sectionName={"Men's Kurta"}/>
       <HomeSectionCarosuel data={mens_kurta} sectionName={"Men's Shoes"}/>
       <HomeSectionCarosuel data={mens_kurta} sectionName={"Men's Shirt"}/>
       <HomeSectionCarosuel data={mens_kurta} sectionName={"Women's Saree"}/>
       <HomeSectionCarosuel data={mens_kurta} sectionName={"Women's Dress"}/>
      </div>
    </div>
  );
}
export default HomePage;