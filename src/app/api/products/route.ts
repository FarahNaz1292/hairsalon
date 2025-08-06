import dbConnect from "@/lib/dbConnect";
import { Product } from "@/lib/models/Products";
import { NextResponse } from "next/server";



//Get all the products from DB
export async function GET() {
    try {
        await dbConnect();
        const products= await Product.find();
        return NextResponse.json(products);

    } catch (error) {
        return NextResponse.json({error:"Failed to fetch the product", status:500})
    }
}
export async function POST(req:Request){
    try {
        const body=await req.json();
        await dbConnect();
      const newProduct=await Product.create(body);
      return NextResponse.json(newProduct);

    } catch (error) {
        return NextResponse.json({error:"Failed to create a product", status:500})
        
    }

}
