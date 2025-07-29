'use client'

import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { MenuIcon } from 'lucide-react'
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
                {/* Desktop Nav */}
                <div className='hidden md:flex flex-col items-center justify-center h-full'>
                    <div>
                        <Button asChild variant="ghost" className='font-extrabold text-lg'>
                            <Link href="/services">SERVICES</Link>
                        </Button>
                        <Button asChild variant="ghost" className='font-extrabold text-lg'>
                            <Link href="/about">ABOUT</Link>
                        </Button>
                        <Button asChild variant="ghost" className='font-extrabold text-lg'>
                            <Link href="/specials">SPECIALS</Link>
                        </Button>
                        <Button asChild variant="ghost" className='font-extrabold text-lg'>
                            <Link href="/shop">SHOP</Link>
                        </Button>
                        <Button asChild variant="ghost" className='font-extrabold text-lg'>
                            <Link href="/locations">LOCATIONS</Link>
                        </Button>
                    </div>
                    <div className='absolute bottom-4 right-1/9 flex gap-4'>
                        <Button asChild variant="ghost" className='font-extrabold text-xl'>
                            <Link href="/booking">BOOK APPOINTMENT</Link>
                        </Button>
                        <Button asChild variant="ghost" className='font-extrabold text-xl'>
                            <Link href="/giftcard">GIFT CARD</Link>
                        </Button>
                    </div>
                </div>
                {/* Mobile Nav */}
                <div className='md:hidden'>
                    <Sheet >
                        <SheetTrigger asChild>
                            <Button variant="ghost" size="icon">
                                <MenuIcon className='w-6 h-6' />
                            </Button>

                        </SheetTrigger>
                        <SheetContent>
                            <div className='flex flex-col gap-4 p-4 bg-gray-600 h-full text-white'>
                                <Button asChild variant="ghost" className='font-extrabold text-xl'>
                                    <Link href="/services">SERVICES</Link>
                                </Button>
                                <Button asChild variant="ghost" className='font-extrabold text-xl'>
                                    <Link href="/about">ABOUT</Link>
                                </Button>
                                <Button asChild variant="ghost" className='font-extrabold text-xl'>
                                    <Link href="/specials">SPECIALS</Link>
                                </Button>
                                <Button asChild variant="ghost" className='font-extrabold text-xl'>
                                    <Link href="/shop">SHOP</Link>
                                </Button>
                                <Button asChild variant="ghost" className='font-extrabold text-xl'>
                                    <Link href="/locations">LOCATIONS</Link>
                                </Button>
                                <Button asChild variant="ghost" className='font-extrabold text-xl'>
                                    <Link href="/booking">BOOK APPOINTMENT</Link>
                                </Button>
                                <Button asChild variant="ghost" className='font-extrabold text-xl'>
                                    <Link href="/giftcard">GIFT CARD</Link>
                                </Button>
                            </div>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
        </div>
    )
}

export default Navbar
