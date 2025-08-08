'use client'
import React, { use } from 'react'
import { Button } from "@/components/ui/button"
import { useDispatch, useSelector } from 'react-redux'
import { add, remove, increase, decrease } from '@/store/slices/cartSlice'
import { FiShoppingCart } from 'react-icons/fi';

interface CartItem {
  id: string;
  name: string;
  quantity: number;
  images: string;
  price: number;
  stock: number;
}
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,

  SheetFooter,

  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import Image from 'next/image';
const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state: any) => state.cart) as CartItem[];

  return (
    <Sheet>
      <SheetTrigger asChild>

        <Button variant="outline">
          <FiShoppingCart style={{ marginRight: 4 }} />
          ({cartItems.length})
        </Button>

      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Your Cart</SheetTitle>
          <SheetDescription>
            Review your items and proceed to checkout.
          </SheetDescription>
        </SheetHeader>

        <div className="px-4 py-4 space-y-4">
          {cartItems.length === 0 && <p>Your cart is empty.</p>}

          {cartItems.map((item) => (
            <div key={item.id} className="flex gap-4 items-center border-b pb-4">
              <Image src={item.images} alt={item.name} width={80} height={80} />
              <div className="flex flex-col flex-grow">
                <p className="font-bold">{item.name}</p>
                <p>${item.price}</p>
                <div className="flex items-center gap-2 mt-2">
                  <Button variant="outline" size="sm" onClick={() => dispatch(decrease(item.id))}>-</Button>
                  <span>{item.quantity}</span>
                  <Button variant="outline" size="sm" onClick={() => dispatch(increase(item.id))}>+</Button>
                  <span className="text-xs text-gray-500">(Stock left: {item.stock})</span>
                </div>
              </div>
              <Button variant="ghost" onClick={() => dispatch(remove(item.id))}>Remove</Button>
            </div>
          ))}
        </div>

        <SheetFooter className="mt-4">
          <SheetClose asChild>
            <Button variant="outline">Close</Button>
          </SheetClose>
          <Button>Checkout</Button>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  )
}

export default Cart