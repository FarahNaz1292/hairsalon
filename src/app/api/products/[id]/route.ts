import dbConnect from "@/lib/dbConnect";
import { Product } from "@/lib/models/Products";
import { NextResponse } from "next/server";
import mongoose from "mongoose";



type Params={
    params:{
        id:string
    }
}

export async function GET(req:Request, {params:{id}}: Params){
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return NextResponse.json({ error: "Invalid product ID" }, { status: 400 });
    }
    await dbConnect();
   const product= await Product.findById(id);
   if(!product){
    return NextResponse.json({error:"Product not found", status:404})
   }
   return NextResponse.json(product);
}
//Delete a product by ID
export async function DELETE(req: Request, { params }: Params) {
  await dbConnect();
  const deleted = await Product.findByIdAndDelete(params.id);

  if (!deleted) {
    return NextResponse.json({ error: 'Product not found' }, { status: 404 });
  }

  return NextResponse.json({ message: 'Product deleted' });
}
export async function PATCH(req: Request, { params }: Params) {
  const updates = await req.json();
  await dbConnect();
  const updatedProduct = await Product.findByIdAndUpdate(params.id, updates, { new: true });

  if (!updatedProduct) {
    return NextResponse.json({ error: 'Product not found' }, { status: 404 });
  }

  return NextResponse.json(updatedProduct);
}