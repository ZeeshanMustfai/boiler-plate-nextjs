'use client'
import { cn } from '@/lib/utils'
import Link from 'next/link'
import React from 'react'
import { NavMenu } from '../navbar.types'
import Image from 'next/image'
import MobileNavBar from './mobile-nav-bar'
import CartBtn from './cart-btn'
import { useTheme } from '@/context/theme-context'
import { FiMoon, FiSun } from 'react-icons/fi'
import { FiShoppingCart, FiUser } from 'react-icons/fi'

const data: NavMenu = [
  {
    id: 1,
    label: 'Shop',
    type: 'MenuList',
    children: [
      {
        id: 11,
        label: "Men's clothes",
        url: '/shop#men-clothes',
        description: 'In attractive and spectacular colors and designs',
      },
      {
        id: 12,
        label: "Women's clothes",
        url: '/shop#women-clothes',
        description: 'Ladies, your style and tastes are important to us',
      },
      {
        id: 13,
        label: 'Kids clothes',
        url: '/shop#kids-clothes',
        description: 'For all ages, with happy and beautiful colors',
      },
      {
        id: 14,
        label: 'Bags and Shoes',
        url: '/shop#bag-shoes',
        description: 'Suitable for men, women and all tastes and styles',
      },
    ],
  },
  {
    id: 2,
    type: 'MenuItem',
    label: 'On Sale',
    url: '/shop#on-sale',
    children: [],
  },
  {
    id: 3,
    type: 'MenuItem',
    label: 'New Arrivals',
    url: '/shop#new-arrivals',
    children: [],
  },
  {
    id: 4,
    type: 'MenuItem',
    label: 'Brands',
    url: '/shop#brands',
    children: [],
  },
]

const TopNavbar = () => {
  const { theme, toggleTheme } = useTheme()
  return (
    <nav className='sticky top-0 bg-white  dark:bg-black z-20'>
      <div className='flex relative max-w-7xl mx-auto items-center !justify-between md:justify-start py-5 md:py-6 px-4 xl:px-0'>
        <div className='flex items-center'>
          <div className='block md:hidden mr-4'>
            <MobileNavBar data={data} />
          </div>
          <Link
            href='/'
            className={cn([
              'text-2xl lg:text-[32px] font-bold dark:text-white ',
            ])}
          >
            MUSTFAI
          </Link>
        </div>

        <div className='flex items-center space-x-2'>
          <CartBtn />

          <button className='p-2 rounded bg-gray-200 dark:bg-gray-700 text-black dark:text-white'>
            <FiUser className='w-5 h-5' />
          </button>
          <button
            onClick={toggleTheme}
            className='p-2 rounded bg-gray-200 cursor-pointer  dark:bg-gray-700 text-black dark:text-white flex items-center gap-2'
          >
            {theme === 'light' ? (
              <>
                <FiMoon className='w-5 h-5' />
              </>
            ) : (
              <>
                <FiSun className='w-5 h-5' />
              </>
            )}
          </button>
        </div>
      </div>
    </nav>
  )
}

export default TopNavbar
