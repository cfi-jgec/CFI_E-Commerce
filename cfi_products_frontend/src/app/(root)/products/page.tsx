"use client"
// import ProductCardSkeleton from '@/components/products/product-card-skeleton';
import { useGetAllProductsQuery } from '@/store/features/productFeature';
import React, { useEffect, useState } from 'react'
import dynamic from "next/dynamic";
const ProductCardSkeleton = dynamic(() => import("@/components/products/product-card-skeleton"), { ssr: false }); 
const PaginationButtons = dynamic(() => import("@/components/pagination-button"), { ssr: false });
import { toast } from 'react-hot-toast'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { Button } from '@/components/ui/button';
import { ChevronDown } from 'lucide-react';
import { productsType } from '@/types/products-type';
import ProductCard from '@/components/products/product-card';

const Products = () => {
    const [pageNumber, setPageNumber] = useState(1);
    const [limit, setLimit] = useState(8);

    const {
        data: response,
        isLoading,
        isError,
        error,
    } = useGetAllProductsQuery({
        pageNumber,
        limit,
    });

    useEffect(() => {
        if (isError) {
            const errorMessage = error as { data: { message: string } };
            toast.error(errorMessage?.data?.message);
        }
    }, [isError, error]);

    if (isLoading) return <ProductCardSkeleton />

    return (
        <section className='layout my-8'>
            {response && response.data.length ? (
                <div>
                    <div className="flex max-sm:flex-col items-center justify-between gap-5 mb-6">
                        <div className={"space-x-2 text-xs sm:text-base w-full float-left text-white"}>
                            Show{" "}
                            <DropdownMenu>
                                <DropdownMenuTrigger asChild className="px-2">
                                    <Button variant="ghost" size={"sm"} className="ml-auto">
                                        {limit} <ChevronDown className="ml-2 h-4 w-4" />
                                    </Button>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent>
                                    {[8, 12, 16, 20].map((item) => (
                                        <DropdownMenuItem key={item} onClick={() => setLimit(item)}>
                                            {item}
                                        </DropdownMenuItem>
                                    ))}
                                </DropdownMenuContent>
                            </DropdownMenu>{" "}
                            products
                        </div>
                    </div>
                    <div className="grid max-sm:place-items-center grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                        {response.data.map((product: productsType) => (
                            <ProductCard key={product.id} {...product} />
                        ))}
                    </div>
                    <PaginationButtons
                        pageNumber={pageNumber}
                        response={response}
                        setPageNumber={(page) => setPageNumber(page)}
                    />
                </div>
            ) : (
                <div className="w-full py-60 flex items-center justify-center">
                    <h1 className="text-2xl font-semibold text-center text-white">No products found</h1>
                </div>
            )
            }
        </section >
    )
}

export default Products
