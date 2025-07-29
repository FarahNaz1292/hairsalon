'use client'

import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'

import React from 'react'

const Navbar = () => {
    return (
        <>
            <div className=' bg-gray-600 text-white'>
                <div className='container mx-auto flex justify-between items-center p-4 h-44'>
                    <div className='p-4 m-4'>
                        <Image
                            src="/salonLogo.png"
                            alt="Logo"
                            width={500}
                            height={10}
                        />
                    </div>
                    <div className=''>
                        <Button asChild variant="ghost" className='font-extrabold'>
                            <Link href="/services">SERVICES</Link>
                        </Button>
                        <Button asChild variant="ghost" className='font-extrabold'>
                            <Link href="/about">ABOUT</Link>
                        </Button>
                        <Button asChild variant="ghost" className='font-extrabold'>
                            <Link href="/specials">SPECIALS</Link>
                        </Button>
                        <Button asChild variant="ghost" className='font-extrabold'>
                            <Link href="/shop">SHOP</Link>
                        </Button>
                        <Button asChild variant="ghost" className='font-extrabold'>
                            <Link href="/locations">LOCATIONS</Link>
                        </Button>
                    </div>
                    <div className='flex items-center gap-4'>

                       <div className='flex '>
                        <Button asChild variant="ghost" className='font-extrabold'>
                            <Link href="/booking">BOOK APPOINTMENT</Link>
                        </Button>
                        <Button asChild variant="ghost" className='font-extrabold'>
                            <Link href="/giftcard">GIFT CARD</Link>
                        </Button>
                    </div>
                    </div>
                </div>
                 
            </div>
        </>
    )
}

export default Navbar