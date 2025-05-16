import ProductListSec from '@/components/common/product-list-sec'
import Header from '@/components/product-page/Header'
import Tabs from '@/components/product-page/Tabs'
import { TOP_SELLING_DATA } from '@/constants'
import { Product } from '@/types'
import { notFound } from 'next/navigation'

const data: Product[] = [...TOP_SELLING_DATA]

export default function ProductPage({
  params,
}: {
  params: { slug: string[] }
}) {
  const productData = data.find(
    (product) => product.id === Number(params.slug[0])
  )

  if (!productData?.title) {
    notFound()
  }

  return (
    <main className='max-w-7xl mx-auto px-4'>
      <div className=' '>
        <section className='mb-11'>
          <Header data={productData} />
        </section>
        <Tabs />
      </div>
      <div className='mb-[50px] sm:mb-20'>
        <ProductListSec title='You might also like' data={TOP_SELLING_DATA} />
      </div>
    </main>
  )
}
