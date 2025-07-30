'use client'

import React from 'react'
import { Carousel, CarouselContent, CarouselItem, type CarouselApi } from "@/components/ui/carousel"
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import Link from 'next/link'
import { MenuIcon } from 'lucide-react'

const Hero = () => {
    const [api, setApi] = React.useState<CarouselApi>()

    React.useEffect(() => {
        if (!api) return
        api.on("select", () => {
            // Do something
        })
    }, [api])

    return (
        <div className="relative">
            <div className=" absolute container mx-auto flex justify-between items-center m-4 p-4">
                <div>
                    <div>
                        <div className='flex'>
                            <Image src="/salonLogo.png" alt="Logo" width={200} height={40} className=' absolute top-0 left-1/8  z-20' />
                            {/* Logo */}

                            {/* Desktop Nav */}
                            <div className=''>
                                <div className="hidden md:flex gap-2   absolute top-0 left-1/2 z-20 ">
                                    {['services', 'about', 'specials', 'shop', 'locations'].map((route) => (
                                        <Button key={route} asChild variant="ghost" className="font-extrabold text-lg text-white">
                                            <Link href={`/${route}`}>{route.toUpperCase()}</Link>
                                        </Button>
                                    ))}
                                </div>
                                <div className=" flex gap-4  absolute right-1/8 top-8 z-20">
                                    <Button asChild variant="ghost" className="font-extrabold text-white text-lg ">
                                        <Link href="/booking">BOOK APPOINTMENT</Link>
                                    </Button>
                                    <Button asChild variant="ghost" className="font-extrabold text-lg text-white ">
                                        <Link href="/giftcard">GIFT CARD</Link>
                                    </Button>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>

                {/* Mobile Nav */}
                <div className="md:hidden">
                    <Sheet>
                        <SheetTrigger asChild>
                            <Button variant="ghost" size="icon">
                                <MenuIcon className="w-6 h-6" />
                            </Button>
                        </SheetTrigger>
                        <SheetContent>
                            <div className='flex flex-col gap-4 p-4 bg-gray-600 h-full text-white'>
                                {['services', 'about', 'specials', 'shop', 'locations', 'booking', 'giftcard'].map((route) => (
                                    <Button key={route} asChild variant="ghost" className="font-extrabold text-xl">
                                        <Link href={`/${route}`}>{route.toUpperCase()}</Link>
                                    </Button>
                                ))}
                            </div>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
            <Carousel setApi={setApi}>
                <CarouselContent>
                    <CarouselItem>
                        <div className="relative w-full h-[600px]">
                            <Image src="/hairtreatment.jpg" alt="" fill className="object-cover" />
                            <motion.div
                                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white z-10 m-12"
                                initial={{ scale: 0.8, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                transition={{ duration: 0.8, ease: 'easeOut' }}
                            >
                                <h1 className='text-4xl m-6 font-serif'>NOURISH AND REPAIR WITH</h1>
                                <h1 className='text-4xl font-bold m-6 font-serif'>ENHANCING TREATMENTS</h1>
                                <Button variant="secondary" className="font-bold text-lg p-6 bg-neutral-600 text-white">TREATMENTS</Button>
                            </motion.div>
                        </div>
                    </CarouselItem>

                   <CarouselItem>
                        <div className="relative w-full h-[600px]">
                            <Image src="/haircut.jpg" alt="" fill className="object-cover" />
                            <motion.div
                                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white z-10 m-12"
                                initial={{ scale: 0.8, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                transition={{ duration: 0.8, ease: 'easeOut' }}
                            >
                                <h1 className='text-4xl m-6 font-serif'>LUXURY SERVICE WITH</h1>
                                <h1 className='text-4xl font-bold m-6 font-serif'>UNPARRALLED EXPERIENCE</h1>
                                <Button variant="secondary" className="font-bold text-lg p-6 bg-neutral-600 text-white">HAIRCUTS</Button>
                            </motion.div>
                        </div>
                    </CarouselItem>

                    <CarouselItem>
                        {/* Your third item */}
                        <div className="h-[600px] bg-green-300 flex items-center justify-center">
                            <h2 className="text-3xl">Slide 3</h2>
                        </div>
                    </CarouselItem>
                </CarouselContent>
            </Carousel>
            <motion.div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 text-center text-white z-20 m-12 "
                initial={{ x: '100%', opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}>
                <h1 className='text-xl font-stretch-expanded font-extrabold'>FULL HAIR SERVICE SALON</h1>
            </motion.div>
        </div>
    )
}

export default Hero
