'use client'

import { COLOR_DATA } from '@/constants'
import { setColorSelection } from '@/lib/features/products/productsSlice'
import { useAppDispatch, useAppSelector } from '@/lib/hooks/redux'
import { RootState } from '@/lib/store'
import { cn } from '@/lib/utils'
import React from 'react'
import { IoMdCheckmark } from 'react-icons/io'

const ColorSelection = () => {
  const { colorSelection } = useAppSelector(
    (state: RootState) => state.products
  )
  const dispatch = useAppDispatch()
  return (
    <div className='flex flex-col'>
      <span className='text-sm sm:text-base text-black/60 mb-4 dark:text-white'>
        Select Colors
      </span>
      <div className='flex items-center space-x-3 flex-wrap'>
        {COLOR_DATA.map((color, index) => (
          <button
            key={index}
            type='button'
            className={cn([
              color.code,
              'rounded-full w-9 sm:w-10 h-9 sm:h-10 flex items-center justify-center ',
            ])}
            onClick={() => dispatch(setColorSelection(color))}
          >
            {colorSelection.name === color.name && (
              <IoMdCheckmark className='text-base text-white' />
            )}
          </button>
        ))}
      </div>
    </div>
  )
}

export default ColorSelection
