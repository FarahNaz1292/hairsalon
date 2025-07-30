'use client'

import React from 'react'
import { Carousel, CarouselContent, CarouselItem, type CarouselApi } from "@/components/ui/carousel"
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'

const Hero = () => {
    const [api, setApi] = React.useState<CarouselApi>()

    React.useEffect(() => {
        if (!api) {
            return
        }

        api.on("select", () => {
            // Do something on select.
        })
    }, [api])

    return (
        <Carousel setApi={setApi}>
            <CarouselContent>
                <CarouselItem>
                    <Image src="/hairtreatment.jpg" alt="" height={250} width={4000} />
                    <motion.div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white'
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.8, ease: 'easeOut' }}
                    >
                        <h1 className='text-4xl  m-6  font-serif'>
                            NOURISH AND REPAIR WITH </h1>
                        <h1 className='text-4xl font-bold m-6  font-serif'> ENHANCING TREATMENTS</h1>
                        <Button variant="secondary" className='font-bold text-lg p-6 bg-neutral-600 text-white '>TREATMENTS</Button>
                    </motion.div>


                </CarouselItem>
                <CarouselItem>...</CarouselItem>
                <CarouselItem>...</CarouselItem>
            </CarouselContent>
        </Carousel>
    )
}

export default Hero