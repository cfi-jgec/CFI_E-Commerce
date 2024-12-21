"use client"; 
import { productResponseType, productsType } from "@/types/products-type";
import { baseApi } from "../baseApi";
import { usersType } from "@/types/auth-types";
import { apiResponse } from "@/types/api-response";

type updateProductType = {
    id: string;
    product: productsType;
    user: usersType;
};

export const productApi = baseApi
    .enhanceEndpoints({ addTagTypes: ["products", "product-details"] })
    .injectEndpoints({
        endpoints: (builder) => ({
            // find all products query
            getAllProducts: builder.query<productResponseType, {
                pageNumber?: number;
                limit?: number;
                search?: string;
            }>({
                query: ({ pageNumber = 1, limit = 10, search }) => ({
                    url: "/products",
                    method: "GET",
                    params: {
                        page: pageNumber,
                        limit: limit,
                        search,
                    },
                    credentials: "include" as const,
                }),
                providesTags: ["products"],
            }),
            // find product details query
            getProductDetails: builder.query<apiResponse, { id: string }>({
                query: ({ id }) => ({
                    url: `/products/details/${id}`,
                    method: "GET",
                    credentials: "include" as const,
                }),
                providesTags: ["product-details"],
            }), 
        }),
    });

export const {
    useGetAllProductsQuery,
    useGetProductDetailsQuery, 
} = productApi;
