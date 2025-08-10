import dbConnect from "@/lib/dbConnect";
import { User } from "@/lib/models/User";
import { NextResponse } from "next/server";


export async function GET() {
    try {
        await dbConnect();
        const user= await User.find();
        return NextResponse.json(user);

    } catch (error) {
        return NextResponse.json({error:"Failed to fetch the User", status:500})
    }
}
export async function POST(req:Request){
    try {
        const body=await req.json();
        await dbConnect();
      const newUser=await User.create(body);
      return NextResponse.json({newUser, message:"User created sucessfully"});

    } catch (error) {
        return NextResponse.json({error:"Failed to create a User", status:500})
        
    }

}
