'use client'
import ProductListSec from '@/components/common/product-list-sec'
import TopNavbar from '@/components/nav-bar/top-nav-bar'
import { TOP_SELLING_DATA } from '@/constants'
import { NextPage } from 'next'

const HomePage: NextPage = () => {
  return (
    <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
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

export default HomePage
