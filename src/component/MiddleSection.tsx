'use client'

import React from 'react'
import {
    Card,
    CardAction,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Ghost } from 'lucide-react'
import Link from 'next/link'

const MiddleSection = () => {
    return (
        <>
            <div className=' container mx-auto grid grid-cols-3'>
                <div className=' flex flex-col items-center justify-center m-4  '>
                    <Card className='w-[350px] h-[500px] bg-gray-100  '>

                        <CardHeader>
                            <CardTitle className='relative'>
                                <Image src={'/haircutting.jpg'} alt='' width={300} height={200} />
                                <Button className="text-lg p-6 bg-gray-50 text-black w-[250px] absolute hover:bg-gray-600 bottom-1/120 hover:text-white left-1/10">ABOUT</Button>
                            </CardTitle>
                            <CardDescription className='text-center'>Our mission is to enhance the <br />total beauty that lies within us all,<br /> through service, education and <br />environmental awareness. Owner<br /> Scott Buchanan says, “The success <br /> of Scott J is due to the difference our <br /> team makes. As an owner, I love <br />giving my team opportunities to <br />expand their passion and sharpen<br /> their skills.”</CardDescription>
                            <CardAction><Link href={"/about"} /></CardAction>
                        </CardHeader>

                    </Card>
                </div>
                <div className=''>
                    <Card className='w-[300px]'>

                        <Image src={'/beardMan.jpg'} alt='' width={300} height={200} />
                        <CardHeader>
                            <CardTitle className='relative'>
                                <p className=" button text-lg p-6 bg-gray-500 text-white w-[300px] text-center absolute hover:bg-gray-600 -bottom-4 hover:text-black -left-6">New Guest Offer<Link href={"/about"} /></p>
                            </CardTitle>
                            <CardAction></CardAction>
                        </CardHeader>

                    </Card>
                </div>
            </div>



        </>
    )
}

export default MiddleSection