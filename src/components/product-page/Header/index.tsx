import React from 'react'
import PhotoSection from './photo-section'
import { cn } from '@/lib/utils'
import ColorSelection from './color-selection'
import SizeSelection from './size-section'
import AddToCardSection from './add-to-cart-section'
import { Product } from '@/types'
import { Rating } from '../../ui/rating'

const Header = ({ data }: { data: Product }) => {
  return (
    <>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
        <div>
          <PhotoSection data={data} />
        </div>
        <div>
          <h1
            className={cn([
              'text-2xl md:text-[40px] md:leading-[40px] font-bold mb-3 md:mb-3.5 capitalize',
            ])}
          >
            {data.title}
          </h1>
          <div className='flex items-center mb-3 sm:mb-3.5'>
            <Rating
              initialValue={data.rating}
              allowFraction
              SVGclassName='inline-block'
              emptyClassName='fill-gray-50'
              size={25}
              readonly
            />
            <span className='text-black text-xs sm:text-sm ml-[11px] sm:ml-[13px] pb-0.5 sm:pb-0 dark:text-white'>
              {data.rating.toFixed(1)}
              <span className='text-black/60'>/5</span>
            </span>
          </div>
          <div className='flex items-center space-x-2.5 sm:space-x-3 mb-5 dark:text-white'>
            {data.discount.percentage > 0 ? (
              <span className='font-bold text-black text-2xl sm:text-[32px]'>
                {`$${Math.round(
                  data.price - (data.price * data.discount.percentage) / 100
                )}`}
              </span>
            ) : data.discount.amount > 0 ? (
              <span className='font-bold text-black text-2xl sm:text-[32px] dark:text-white'>
                {`$${data.price - data.discount.amount}`}
              </span>
            ) : (
              <span className='font-bold text-black text-2xl sm:text-[32px] dark:text-white'>
                ${data.price}
              </span>
            )}
            {data.discount.percentage > 0 && (
              <span className='font-bold text-black/40 line-through text-2xl sm:text-[32px] dark:text-white'>
                ${data.price}
              </span>
            )}
            {data.discount.amount > 0 && (
              <span className='font-bold text-black/40 line-through text-2xl sm:text-[32px] dark:text-white'>
                ${data.price}
              </span>
            )}
            {data.discount.percentage > 0 ? (
              <span className='font-medium text-[10px] sm:text-xs py-1.5 px-3.5 rounded-full bg-[#FF3333]/10 text-[#FF3333] dark:text-white'>
                {`-${data.discount.percentage}%`}
              </span>
            ) : (
              data.discount.amount > 0 && (
                <span className='font-medium text-[10px] sm:text-xs py-1.5 px-3.5 rounded-full bg-[#FF3333]/10 text-[#FF3333] dark:text-white'>
                  {`-$${data.discount.amount}`}
                </span>
              )
            )}
          </div>
          <p className='text-sm sm:text-base text-black/60 mb-5 dark:text-white'>
            This graphic t-shirt which is perfect for any occasion. Crafted from
            a soft and breathable fabric, it offers superior comfort and style.
          </p>
          <hr className='h-[1px] border-t-black/10 mb-5 dark:border-t-white/20' />
          <ColorSelection />
          <hr className='h-[1px] border-t-black/10 my-5 dark:border-t-white/20' />
          <SizeSelection />
          <hr className='hidden md:block h-[1px] border-t-black/10 my-5 dark:border-t-white/20' />
          <AddToCardSection data={data} />
        </div>
      </div>
    </>
  )
}

export default Header
