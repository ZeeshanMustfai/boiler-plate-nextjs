'use client'

import { useEffect } from 'react'

export default function GlobalError({
  error,
  reset,
}: {
  error: Error
  reset: () => void
}) {
  useEffect(() => {
    console.error('Global error:', error)
  }, [error])

  return (
    <html>
      <body className='h-screen flex flex-col items-center justify-center text-center p-4 bg-red-50 text-red-800'>
        <h2 className='text-2xl font-bold mb-4'>Something went wrong!</h2>
        <p className='mb-6'>{error.message}</p>
        <button
          className='bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700'
          onClick={() => reset()}
        >
          Try again
        </button>
      </body>
    </html>
  )
}
