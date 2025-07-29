'use client'

import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Navbar = () => {
    return (
        <div className='relative bg-gray-600 text-white'>
            <div className='container mx-auto flex justify-between items-center p-4 h-44'>
                {/* Logo */}
                <div className='p-4 m-4'>
                    <Image
                        src="/salonLogo.png"
                        alt="Logo"
                        width={500}
                        height={10}
                    />
                </div>

                {/* Navigation Links */}
                <div>
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
            </div>

            {/* Bottom-Right Button Group */}
            <div className='absolute bottom-4 right-1/9 flex gap-4'>
                <Button asChild variant="ghost" className='font-extrabold'>
                    <Link href="/booking">BOOK APPOINTMENT</Link>
                </Button>
                <Button asChild variant="ghost" className='font-extrabold'>
                    <Link href="/giftcard">GIFT CARD</Link>
                </Button>
            </div>
        </div>
    )
}

export default Navbar
