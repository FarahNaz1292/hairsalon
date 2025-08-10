import dbConnect from "@/lib/dbConnect";
import { Reviews } from "@/lib/models/Reviews";
import { NextResponse } from "next/server";


export async function GET() {
    try {
        await dbConnect();
         const reviews = await Reviews.find().populate('reviewer').lean();
        return NextResponse.json(reviews);

    } catch (error) {
        return NextResponse.json({error:"Failed to fetch user's review", status:500})
    }
}
export async function POST(req:Request){
    try {
        const body=await req.json();
        await dbConnect();
      const newReview = await Reviews.create(body);
      return NextResponse.json(newReview);

    } catch (error) {
        return NextResponse.json({error:"Failed to create a review", status:500})
        
    }

}
