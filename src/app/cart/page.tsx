'use client'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { FaArrowRight } from 'react-icons/fa6'
import { TbBasketExclamation } from 'react-icons/tb'
import React from 'react'
import { RootState } from '@/lib/store'
import { useAppSelector } from '@/lib/hooks/redux'
import Link from 'next/link'
import ProductCard from '@/components/common/cart-item-card'

export default function CartPage() {
  const { cart, totalPrice, adjustedTotalPrice } = useAppSelector(
    (state: RootState) => state.carts
  )

  return (
    <main className='pb-20 '>
      <div className='max-w-7xl mx-auto px-4 xl:px-0'>
        {cart && cart.items.length > 0 ? (
          <>
            <h2
              className={cn([
                'font-bold text-[24px] md:text-[32px] text-black uppercase mb-5 md:mb-6 dark:text-white',
              ])}
            >
              your cart
            </h2>
            <div className='flex flex-col lg:flex-row space-y-5 lg:space-y-0 lg:space-x-5 items-start'>
              <div className='w-full p-3.5 md:px-6 flex-col space-y-4 md:space-y-6 rounded-[20px] border border-black/10 dark:border-gray-700'>
                {cart?.items.map((product, idx, arr) => (
                  <React.Fragment key={idx}>
                    <ProductCard data={product} />
                    {arr.length - 1 !== idx && (
                      <hr className='border-t-black/10 dark:border-t-black/60' />
                    )}
                  </React.Fragment>
                ))}
              </div>
              <div className='w-full lg:max-w-[505px] p-5 md:px-6 flex-col space-y-4 md:space-y-6 rounded-[20px] border border-black/10'>
                <h6 className='text-xl md:text-2xl font-bold text-black dark:text-white'>
                  Order Summary
                </h6>
                <div className='flex flex-col space-y-5'>
                  <div className='flex items-center justify-between'>
                    <span className='md:text-xl text-black/60 dark:text-white'>
                      Subtotal
                    </span>
                    <span className='md:text-xl font-bold dark:text-white'>
                      ${totalPrice}
                    </span>
                  </div>
                  <div className='flex items-center justify-between dark:text-white'>
                    <span className='md:text-xl text-black/60 dark:text-white'>
                      Discount (-
                      {Math.round(
                        ((totalPrice - adjustedTotalPrice) / totalPrice) * 100
                      )}
                      %)
                    </span>
                    <span className='md:text-xl font-bold text-red-600 '>
                      -${Math.round(totalPrice - adjustedTotalPrice)}
                    </span>
                  </div>
                  <div className='flex items-center justify-between'>
                    <span className='md:text-xl text-black/60 dark:text-white'>
                      Delivery Fee
                    </span>
                    <span className='md:text-xl font-bold dark:text-white'>
                      Free
                    </span>
                  </div>
                  <hr className='border-t-black/10' />
                  <div className='flex items-center justify-between'>
                    <span className='md:text-xl text-black dark:text-white'>
                      Total
                    </span>
                    <span className='text-xl md:text-2xl font-bold dark:text-white'>
                      ${Math.round(adjustedTotalPrice)}
                    </span>
                  </div>
                </div>
                {/* <div className='flex space-x-3'>
                  <InputGroup className='bg-[#F0F0F0]'>
                    <InputGroup.Text>
                      <MdOutlineLocalOffer className='text-black/40 text-2xl' />
                    </InputGroup.Text>
                    <InputGroup.Input
                      type='text'
                      name='code'
                      placeholder='Add promo code'
                      className='bg-transparent placeholder:text-black/40'
                    />
                  </InputGroup>
                  <Button
                    type='button'
                    className='bg-black rounded-full w-full max-w-[119px] h-[48px]'
                  >
                    Apply
                  </Button>
                </div> */}
                <Button
                  type='button'
                  className='text-sm md:text-base font-medium bg-black rounded-full w-full py-4 h-[54px] md:h-[60px] group cursor-pointer dark:text-white dark:bg-gray-800'
                >
                  Go to Checkout{' '}
                  <FaArrowRight className='text-xl ml-2 group-hover:translate-x-1 transition-all' />
                </Button>
              </div>
            </div>
          </>
        ) : (
          <div className='flex items-center flex-col text-gray-300 mt-32'>
            <TbBasketExclamation strokeWidth={1} className='text-6xl' />
            <span className='block mb-4'>Your shopping cart is empty.</span>
            <Button className='rounded-full w-24' asChild>
              <Link href='/'>Shop</Link>
            </Button>
          </div>
        )}
      </div>
    </main>
  )
}
