'use client'
import React from 'react'
import { useEffect, useState } from "react"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import Image from 'next/image'
import Link from 'next/link'

const SignUpModal = () => {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setOpen(true), 1000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className='width-[400px] h-[700px] '>
        <DialogHeader className='text-center text-white '>
          <DialogTitle className='absolute z-10 top-2/3 left-1/4 font-bold text-6xl'>Welcome!</DialogTitle>
          <DialogDescription >
            <Image src="/twinGirls.jpg" alt="" fill />
            <span className='text-center absolute  z-10 top-3/4 font-bold text-xl text-white'>Sign up to get exclusive offers and updates!</span>
            <Link href="/signup">
              <Button className="absolute z-10 bottom-1/8 left-3/8">Sign Up</Button>
            </Link>
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <Button className="absolute z-10 top-0  " onClick={() => setOpen(false)}>Close</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}


export default SignUpModal