'use client'

import React from 'react'
import {
    Card,

} from "@/components/ui/card"
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Ghost } from 'lucide-react'
import Link from 'next/link'

const MiddleSection = () => {
    return (
        <>
            <div className=' container mx-auto grid grid-cols-3 m-4 p-4'>
                <div className=' flex flex-col items-center justify-center m-4 gap-5 '>
                    <div className="w-[350px] h-[600px] relative overflow-hidden">
                        <Image
                            src="/haircutting.jpg"
                            alt="Background"
                            fill
                            className="object-cover z-0"
                            priority
                        />
                        <div className="absolute inset-0 bg-gradient-to-b from-gray-100 to-gray-700 opacity-70 z-10" />
                        <div className=" absolute top-1/4 left-6  z-20 p-4 text-black flex flex-col justify-center items-center">
                            <div className=" p-4 text-black">
                                <Button className='text-black bg-white h-15 w-40 m-8 flex justify-center items-center '>ABOUT </Button>
                                <p className='text-center  '>Our mission is to enhance the total beauty that lies within us all, through service, education and environmental awareness. Owner Scott Buchanan says, “The success  of Scott J is due to the difference our  team makes. As an owner, I love giving my team opportunities to expand their passion and sharpen their skills.”</p>
                            </div>
                        </div>
                    </div>

                    <div className="w-[350px] h-[500px] relative overflow-hidden">
                        <Image
                            src="/bottom-bg.jpg"
                            alt="Background"
                            fill
                            className="object-cover z-0"
                            priority
                        />
                        <div className="absolute inset-0 bg-gradient-to-b from-gray-100 to-gray-600 opacity-70 z-10" />
                        <div className=" absolute top-1/2 left-6  z-20 p-4 text-black flex flex-col justify-center items-center">
                            <p className='text-center text-lg font-semibold  '>Our Salon's New Demi Hair Color for Radiant, Healthy Hair</p>
                            <Button className='text-black bg-white h-15 w-40 m-2'>READ MORE</Button>
                        </div>
                    </div>

                </div>

                <div className=' flex flex-col items-center justify-center gap-5 '>
                    <div>
                        <div className='w-[300px]'>

                            <Image src={'/beardMan.jpg'} alt='' width={300} height={200} className='relative' />


                            <div className='relative'>
                                <p className=" button text-lg p-6 bg-gray-500 text-white w-[300px] text-center absolute hover:bg-gray-600 -bottom-4 hover:text-black -left-0">New Guest Offer<Link href={"/about"} /></p>
                            </div>

                        </div>
                    </div>
                    <div>
                        <div className='w-[300px]'>

                            <Image src={'/twinGirls.jpg'} alt='' width={300} height={200} className='relative' />

                           <Link href={"/products"} className='relative'>
                            <div className='relative'>
                                <p className=" button text-lg p-6 bg-gray-500 text-white w-[300px] text-center absolute hover:bg-gray-600 -bottom-4 hover:text-black -left-0">SHOP ARTIST FAV'S</p>
                            </div>
                            </Link>

                        </div>

                    </div>
                    <div>
                        <div className='w-[300px]'>

                            <Image src={'/curlyHair.jpg'} alt='' width={300} height={200} className='relative' />


                            <div className='relative'>
                                <p className=" button text-lg p-6 bg-gray-500 text-white w-[300px] text-center absolute hover:bg-gray-600 -bottom-4 hover:text-black -left-0">GIFT CARDS<Link href={"/about"} /></p>
                            </div>

                        </div>

                    </div>
                </div>
                <div className=' flex flex-col  m-4 items-center justify-center gap-5  '>
                    <div>
                        <div className='w-[350px] h-[500px] bg-gray-700 text-white flex flex-col items-center justify-center p-4'>
                            <h1 className='text-gray-50 text-2xl  font-thin'>REVIEWS</h1>
                            <p className='text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias optio natus, porro iusto laborum ut praesentium omnis perferendis, quas ipsum minus doloribus! Hic deserunt laborum ipsa natus, velit beatae? Nostrum!
                                Tempora eum corporis id pariatur, dolores delectus. Maxime exercitationem incidunt at ratione, cumque deserunt officiis pariatur, nihil molestias earum cupiditate aliquam quisquam corrupti totam tempora nulla. Nulla a modi placeat.</p>
                            <div className='relative'>
                                <p className=" button text-lg p-6 bg-gray-500 text-white w-[300px] text-center hover:bg-gray-600  hover:text-black m-4 ">READ REVIEWS<Link href={"/about"} /></p>
                            </div>
                        </div>
                        <div className='mt-4'>
                            <Image src={"/greySalon.jpg"} alt='' width={350} height={600} className='' />
                        </div>
                    </div>
                </div>
            </div>



        </>
    )
}

export default MiddleSection