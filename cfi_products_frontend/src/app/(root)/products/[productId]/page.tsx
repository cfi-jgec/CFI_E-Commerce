'use client'

import toast from 'react-hot-toast'
import { useParams } from 'next/navigation' 
import { useEffect, useState } from 'react'
import { useGetProductDetailsQuery } from '@/store/features/productFeature'
import dynamic from 'next/dynamic' 
import { ProductDetails } from '@/components/products/product-details'
const ProductDetailsSkeleton = dynamic(() => import('@/components/products/product-details-skeleton'), { ssr: false })


const Product = () => {
  const { productId } = useParams<{ productId: string }>()
  const { data, isLoading, isError, error, refetch } = useGetProductDetailsQuery({ id: productId })

  useEffect(() => {
    if (isError) {
      const errorMessage = error as { data: { message: string } }
      toast.error(errorMessage.data.message)
    }
    else refetch()
  }, [productId, isError])

  if (isLoading) {
    return <ProductDetailsSkeleton />;
  }

  const product = data?.data
  return (
    <section className='layout my-8'>
      {product ? (
        <ProductDetails  {...product} />
      ) : (
        <div className="w-full py-60 flex items-center justify-center">
          <h1 className="text-2xl font-semibold text-center text-white">No products found</h1>
        </div>
      )}
    </section>
  )
}

export default Product
