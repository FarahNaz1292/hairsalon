'use client'
import React, { useState } from 'react'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import { useDispatch } from 'react-redux'
import { add } from '@/store/slices/cartSlice'
import NavigationBar from './NavigationBar'
import {
    Carousel,
    CarouselContent,
    CarouselItem,

} from "@/components/ui/carousel";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import Footer from './Footer'


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
    const [mainImage, setMainImage] = useState(product.images[0]);

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
            <NavigationBar />

            <div>
                <Image src={"https://www.aveda.com/media/export/cms/Site_Refreshes/FY23/Expired_Image_Update/NP_mobile_room_for_copy.jpg"} width={300} height={200} alt='hero pic' style={{ width: '100%', height: '600px' }} className='relative' />
                <div className='absolute top-1/4 right-1/10 transform -translate-x-1/2 -translate-y-1/2 text-center'>
                    <h1 className='font-bold text-6xl'>Dry hair</h1>
                    <p className='text-2xl'>Maximize your day and your hair hydration with<br />
                        nutrient-powered nutriplenis.</p>
                </div>
            </div>
            <div className="flex flex-col gap-4 md:flex-row container mx-auto p-8">
                <div className="flex flex-col gap-4 w-full md:w-1/2 border-2">
                    {/* Main Image */}
                    <div className="w-full">
                        <Image
                            src={mainImage}
                            alt="Main product image"
                            width={500}
                            height={400}
                            className="rounded-md"
                        />
                    </div>
                    <Carousel className="w-full max-w-md">
                        <CarouselContent>
                            {product.images.map((img, idx) => (
                                <CarouselItem key={idx} className="basis-1/4 cursor-pointer border-2">
                                    <Image
                                        src={img}
                                        alt={`Thumbnail ${idx}`}
                                        width={120}
                                        height={80}
                                        onClick={() => setMainImage(img)}
                                        className={`rounded-md object-cover border ${img === mainImage ? "border-primary" : "border-transparent"
                                            }`}
                                    />
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                    </Carousel>
                </div>
                <div className="w-full flex flex-col  md:w-1/2 space-y-4 border-2 ">
                    <div className='flex flex-col mt-20 items-center justify-center'>
                        <h1 className="text-4xl font-bold m-2">{product.name}</h1>
                        <p className="text-gray-700">{product.description}</p>
                        <p className='m-4'>Product Ratings: </p>
                        <div className='flex gap-10 m-2 font-semibold'>
                            <span >Instock:{product.stock}</span>
                            <span >Price: ${product.price}</span>
                        </div>
                         <Button onClick={addToCart} className='w-1/4 m-4'>Add to Cart</Button>
                        <Accordion
                            type="single"
                            collapsible
                            className="w-full ml-6 p-4"
                            defaultValue="item-1"
                        >
                            <AccordionItem value="item-1">
                                <AccordionTrigger>Product Information</AccordionTrigger>
                                <AccordionContent className="flex flex-col gap-4 text-balance">
                                    <p>
                                        Our flagship product combines cutting-edge technology with sleek
                                        design. Built with premium materials, it offers unparalleled
                                        performance and reliability.
                                    </p>
                                
                                        <div className='border-2 bg-orange-50 m-4'>
                                            <h3 className='font-bold text-lg m-2'>Key Benefits of our selected Products</h3>
                                            <ul className=''>
                                                <li className=' w-100 m-2'>Gentle on Hair without stripping</li>
                                                <li className=' w-100 m-2'>Strengthens and protects all hair type hair</li>
                                                <li className=' w-100 m-2'>Our Hair cleaning products, clean buildu's to help volumize and lift at the roots</li>
                                                <li className=' w-100 m-2'>Clinically proven to strengthen hair</li>
                                                <li className='w-100 m-2'>100% vegan</li></ul>
                                        </div>
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="item-2">
                                <AccordionTrigger>Shipping Details</AccordionTrigger>
                                <AccordionContent className="flex flex-col gap-4 text-balance">
                                    <p>
                                        We offer worldwide shipping through trusted courier partners.
                                        Standard delivery takes 3-5 business days, while express shipping
                                        ensures delivery within 1-2 business days.
                                    </p>
                                    <p>
                                        All orders are carefully packaged and fully insured. Track your
                                        shipment in real-time through our dedicated tracking portal.
                                    </p>
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="item-3">
                                <AccordionTrigger>Return Policy</AccordionTrigger>
                                <AccordionContent className="flex flex-col gap-4 text-balance">
                                    <p>
                                        We stand behind our products with a comprehensive 30-day return
                                        policy. If you&apos;re not completely satisfied, simply return the
                                        item in its original condition.
                                    </p>
                                    <p>
                                        Our hassle-free return process includes free return shipping and
                                        full refunds processed within 48 hours of receiving the returned
                                        item.
                                    </p>
                                </AccordionContent>
                            </AccordionItem>
                        </Accordion>
                    </div>
                </div>
            </div>
            <video
                src="https://fr.olaplex.com/cdn/shop/videos/c/vp/2d3d455162f04bed86ef6e02899c0aec/2d3d455162f04bed86ef6e02899c0aec.HD-720p-3.0Mbps-50452335.mp4?v=0"
                className="w-full container mx-auto h-[600px] object-cover m-4"
                controls
                loop
                muted
                playsInline
            />
   
            <Footer />
        </>
    )
}

export default SingleProductPage