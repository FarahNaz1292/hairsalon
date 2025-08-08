'use client'
import React from 'react'
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from '@radix-ui/react-navigation-menu'
import Link from 'next/link'
import Cart from './Cart'
import Image from 'next/image'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { Button } from '@/components/ui/button'
import { MenuIcon } from 'lucide-react'

const NavigationBar = () => {
    return (
        <div className='flex items-center justify-between p-4 bg-white shadow-md'>
            {/* Logo */}
            <div>
                <Image src="/salonLogo.png" alt="Logo" width={200} height={40} className='lg:ml-5 ' />
            </div>

            {/* Desktop Nav Menu */}
            <div className='hidden md:flex flex-grow justify-center items-center'>
                <NavigationMenu>
                    <NavigationMenuList className='flex gap-8 text-lg font-semibold'>
                        <NavigationMenuItem>
                            <NavigationMenuTrigger>Home</NavigationMenuTrigger>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <NavigationMenuTrigger>About</NavigationMenuTrigger>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <NavigationMenuTrigger>Specials</NavigationMenuTrigger>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <NavigationMenuTrigger>Locations</NavigationMenuTrigger>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <NavigationMenuTrigger>Book Appointments</NavigationMenuTrigger>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <NavigationMenuTrigger>User</NavigationMenuTrigger>
                            <NavigationMenuContent>
                                <ul className="grid w-[200px] gap-4">
                                    <li>
                                        <Link href="/signin" className="flex items-center h-8 px-2 text-sm font-medium text-gray-700 hover:bg-gray-100">
                                            Sign In
                                        </Link>
                                    </li>
                                    <li className="flex items-center h-8 px-2 text-sm font-medium text-gray-700 hover:bg-gray-100">
                                        Sign Out
                                    </li>
                                </ul>
                            </NavigationMenuContent>
                        </NavigationMenuItem>
                    </NavigationMenuList>
                </NavigationMenu>
            </div>
            <div className='hidden md:block mr-10'>
                <Cart />
            </div>

           {/* Mobile View */}
            <div className='md:hidden flex mr-10 gap-2'>

                <Sheet>
                    <SheetTrigger asChild>
                        <Button variant="ghost" size="icon">
                            <MenuIcon className="w-6 h-6" />
                        </Button>
                    </SheetTrigger>
                    <SheetContent>
                        <div className='flex flex-col gap-4 p-4 h-full text-black'>
                            {['home', 'about', 'specials', 'locations', 'book-appointments', 'signin'].map((route) => (
                                <Button key={route} asChild variant="ghost" className="font-bold justify-start">
                                    <Link href={`/${route}`}>{route.replace('-', ' ').toUpperCase()}</Link>
                                </Button>
                            ))}
                            <div className='mt-8'>
                                <Cart />
                            </div>
                        </div>
                    </SheetContent>
                </Sheet>
            </div>
        </div>
    )
}

export default NavigationBar
