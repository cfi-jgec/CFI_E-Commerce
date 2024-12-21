
export interface productsType {
    id: string;
    image: string;
    productName: string;
    productDescription: string;
    price: string;
    department: string;
    stock?: number;
    _id?: string;
    createdAt?: string;
    updatedAt?: string;
    className?: string;
    showDescription?: boolean;
}

export interface productResponseType{
    data: productsType[];
    totalPages: number;
    pages: number;
    limit: number;
    success: boolean;
    message: string;
}