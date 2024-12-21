
import { Button } from "@/components/ui/button";
import { productsType } from "@/types/products-type";
import { AiOutlineShopping, AiOutlineThunderbolt } from "react-icons/ai";
import Image from "next/image";

export const ProductDetails: React.FC<productsType> = ({
    id,
    image,
    productName,
    productDescription,
    price,
    department,
    stock
}) => {
    return (
        <div className="w-full max-w-6xl mx-auto" key={id}>
            <div className="grid md:grid-cols-2 gap-8">
                <div className="w-full flex justify-center items-start">
                    <div className=" max-w-[500px] max-h-[400px] aspect-[4/3]">
                        <Image
                            src={image}
                            alt="prducts"
                            width={500}
                            height={400}
                            className="object-cover w-full h-full  rounded-md"
                        />
                    </div>
                </div>
                <div className="space-y-6">
                    <div>
                        <h1 className="text-2xl font-semibold text-white mb-2">{productName}</h1>
                        <p className=" text-slate-100 text-base">{productDescription}</p>
                    </div>
                    <p className="text-sm font-medium text-slate-100">Category:
                        <span className="py-1  px-2 rounded-full ms-2">{department}</span>
                    </p>
                    <p className="text-sm font-medium text-gray-200">In Stock:
                        <span className="text-blue-600 ms-2">{stock ? stock : 0}</span>
                    </p>
                    <div className="flex items-center justify-between">
                        <span className="text-white font-sans font-semibold text-2xl">&#8377;{price}</span>
                    </div>
                    <div className="grid grid-cols-2 gap-6">
                        <Button size="lg" className="bg-[#5E0FF0]">
                            <AiOutlineShopping className="w-4 h-4 mr-2" />
                            Add To Cart
                        </Button>
                        <Button size="lg" variant={'outline'} className=" ">
                            <AiOutlineThunderbolt className="w-4 h-4 mr-2" />
                            Buy Now
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
};
