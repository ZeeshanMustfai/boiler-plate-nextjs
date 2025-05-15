'use client'
import ProductListSec from '@/components/common/product-list-sec'
import TopNavbar from '@/components/Navbar/TopNavbar'
import { TOP_SELLING_DATA } from '@/constants'
import React from 'react'

const Home = () => {
  return (
    <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
      <TopNavbar />
      <hr className='w-full h-[2px] border-t-black/10 mb-2 md:mb-4' />
      <div className='mb-[50px] sm:mb-20'>
        <ProductListSec
          title='top selling'
          data={TOP_SELLING_DATA}
          viewAllLink='/shop#top-selling'
        />
      </div>
    </div>
  )
}

export default Home
