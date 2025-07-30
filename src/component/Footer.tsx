'use client'

import Link from 'next/link'
import Image from 'next/image'
import React from 'react'
import { motion } from 'framer-motion'

const Footer = () => {
    return (
        <>

            <footer >
                <div className=' bg-gray-500 text-white p-4'>

                    <motion.div className='snake-border border-orange-500 p-4 ' initial={{ clipPath: 'inset(0 100% 0 0)' }}
                        animate={{ clipPath: 'inset(0 0% 0 0)' }}
                        transition={{ duration: 4, ease: 'anticipate' }}>
                        <div className='container mx-auto grid grid-cols-1 sm:grid-cols-6  p-4 m-4'>
                            {/* Logo */}
                            <div className='flex justify-between md:justify-start'>
                                <Image
                                    src="/salonLogo.png"
                                    alt="Logo"
                                    width={200}
                                    height={10}
                                />
                            </div>

                            <div className='text-center md:text-left'>
                                <h1 className='text-orange-500 font-extrabold text-lg'>UPPER WEST SIDE</h1>
                                <p className='text-md font-semibold'>4 West Columbus Circle<br />New York, NY10036 <br />Text or Call 212.456.7689 </p>

                            </div>
                            <div className='text-center md:text-left'>
                                <h1 className='text-orange-500 font-extrabold text-lg'>LONG ISLAND CITY</h1>
                                <p className='text-md font-semibold'>434 12 AVE<br />New York, NY12934 <br />Text or Call 718.876.7689 </p>

                            </div>
                            <div className="w-px bg-gray-300 h-auto" />
                            <div className='text-center md:text-left'>
                                <ul>
                                    <li className='font-semibold text-md'>
                                        <Link href="/services">Services</Link>
                                    </li>
                                    <li className='font-semibold text-md'>
                                        <Link href="/about">About</Link>
                                    </li>
                                    <li className='font-semibold text-md'>
                                        <Link href="/specials">Specials</Link>
                                    </li>
                                    <li className='font-semibold text-md'>
                                        <Link href="/shop">Shop</Link>
                                    </li>
                                    <li className='font-semibold text-md'>
                                        <Link href="/booking">Booking</Link>
                                    </li>
                                    <li className='font-semibold text-md'>
                                        <Link href="/giftcards">Giftcards</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </motion.div>
                </div>

                <div className=' text-black text-center'>
                    <p className='text-sm font-bold'>© 2025 Hair Studio. All rights reserved.</p>
                </div>
            </footer>

        </>
    )
}

export default Footer