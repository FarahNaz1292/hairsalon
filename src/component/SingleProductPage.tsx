'use client'
import React from 'react'

import { Button } from '@/components/ui/button'
import Image from 'next/image'
import { useDispatch } from 'react-redux'
import { add } from '@/store/slices/cartSlice'
import Cart from './Cart'

interface ProductType {
    _id: string;
    name: string;
    __v: number;
    images: string[];
    description?: string;
    price?: number;
    stock: number;
}

const SingleProductPage = ({ product }: { product: ProductType }) => {
    const dispatch = useDispatch();

    const addToCart = () => {
        const cartItem = {
            id: product._id,
            name: product.name,
            price: product.price || 0,
            quantity: 1,
            image: product.images[1],
            stock: product.stock
        };
        dispatch(add(cartItem));
        console.log(`Adding ${product.name} to cart`)
    };
    return (
        <>

            <Cart />
            <div>
                <Image src={"https://www.aveda.com/media/export/cms/Site_Refreshes/FY23/Expired_Image_Update/NP_mobile_room_for_copy.jpg"} width={300} height={200} alt='hero pic' style={{ width: '100%', height: '600px' }} className='relative' />
                <div className='absolute top-1/4 right-1/10 transform -translate-x-1/2 -translate-y-1/2 text-center'>
                    <h1 className='font-bold text-6xl'>Dry hair</h1>
                    <p className='text-2xl'>Maximize your day and your hair hydration with<br />
                        nutrient-powered nutriplenis.</p>
                </div>
            </div>
            <div className="flex flex-col md:flex-row gap-8 p-8">

                <div className="flex flex-col gap-4 w-full md:w-1/2">
                    {product.images.map((img, idx) => (
                        <Image
                            key={idx}
                            src={img}
                            alt={`product-${idx}`}
                            width={500}
                            height={300}
                            className="rounded-md object-cover w-full h-auto"
                        />
                    ))}
                </div>

                {/* Product Info */}
                <div className="w-full md:w-1/2 space-y-4">
                    <h1 className="text-3xl font-bold">{product.name}</h1>
                    <p className="text-gray-700">{product.description}</p>
                    <span className="text-xl font-semibold">${product.price}</span>
                    <Button onClick={addToCart}>Add to Cart</Button>
                </div>
            </div>
        </>
    )
}

export default SingleProductPage