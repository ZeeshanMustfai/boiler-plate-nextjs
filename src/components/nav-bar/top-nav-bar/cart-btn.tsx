'use client'

import { useAppSelector } from '@/lib/hooks/redux'
import { RootState } from '@/lib/store'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FiShoppingCart } from 'react-icons/fi'

const CartBtn = () => {
  const { cart } = useAppSelector((state: RootState) => state.carts)

  return (
    <Link
      href='/cart'
      className='relative p-2 rounded bg-gray-200 dark:bg-gray-700 text-black dark:text-white'
    >
      <FiShoppingCart className='w-5 h-5' />
      {cart && cart.totalQuantities > 0 && (
        <span className='border bg-black text-white rounded-full w-fit-h-fit px-1 text-xs absolute -top-3 left-1/2 -translate-x-1/2'>
          {cart.totalQuantities}
        </span>
      )}
    </Link>
  )
}

export default CartBtn
