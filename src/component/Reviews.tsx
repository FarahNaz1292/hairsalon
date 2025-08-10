'use client'
import React from 'react'
import {
    Carousel,
    CarouselContent,
    CarouselItem,

} from "@/components/ui/carousel"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const Reviews = () => {
    return (
        <>
            <div className='flex flex-col container mx-auto justify-center items-center m-4'>
                <h1 className='text-2xl font-bold'>Look What our Customer's have to say about our products.</h1>

                <Carousel
                    opts={{
                        align: "start",
                        loop: true,
                    }}
                    className='m-4'
                >
                    <CarouselContent>
                        <CarouselItem>
                            <Avatar>
                                <AvatarImage src="https://github.com/shadcn.png" />
                                <AvatarFallback>CN</AvatarFallback>
                            </Avatar>
                        </CarouselItem>
                       <CarouselItem> <Avatar>
                                <AvatarImage src="https://github.com/shadcn.png" />
                                <AvatarFallback>CN</AvatarFallback>
                            </Avatar>
                            </CarouselItem>
                    </CarouselContent>
                </Carousel>
            </div>
        </>
    )
}

export default Reviews