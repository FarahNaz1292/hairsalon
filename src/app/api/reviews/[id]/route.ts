
import dbConnect from "@/lib/dbConnect";
import { userReviews } from "@/lib/models/Reviews";
import { NextRequest, NextResponse } from "next/server";
import mongoose from "mongoose";



export async function POST(req: NextRequest) {
  try {
    await dbConnect(); 


const body = await req.json();
    const { reviewer, productReview, rating, comment } = body;

    if (!reviewer || !productReview || !rating) {
      return NextResponse.json(
        { message: 'Reviewer, productReview, and rating are required.' },
        { status: 400 }
      );
    }

    const review = await userReviews.create({
      reviewer: new mongoose.Types.ObjectId(reviewer),
      productReview: new mongoose.Types.ObjectId(productReview),
      rating,
      comment,
    });

    return NextResponse.json(
      { message: "Review submitted successfully.", review },
      { status: 201 }
    );
  } catch (error: any) {
    if (error.code === 11000) {
      return NextResponse.json(
        { message: "You have already reviewed this product." },
        { status: 400 }
      );
    }


    return NextResponse.json(
      { message: 'Internal server error.', error: error.message },
      { status: 500 }
    );
  }
}
