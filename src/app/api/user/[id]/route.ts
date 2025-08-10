import dbConnect from "@/lib/dbConnect";
import { User } from "@/lib/models/User";
import { NextResponse } from "next/server";
import mongoose from "mongoose";



type Params={
    params:{
        id:string
    }
}

export async function GET(req:Request, {params:{id}}: Params){
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return NextResponse.json({ error: "Invalid user ID" }, { status: 400 });
    }
    await dbConnect();
   const user= await User.findById(id);
   if(!user){
    return NextResponse.json({error:"User not found", status:404})
   }
   return NextResponse.json(user);
}

export async function DELETE(req: Request, { params }: Params) {
  await dbConnect();
  const deleted = await User.findByIdAndDelete(params.id);

  if (!deleted) {
    return NextResponse.json({ error: 'User not found' }, { status: 404 });
  }

  return NextResponse.json({ message: 'User deleted' });
}

export async function PATCH(req: Request, { params }: Params) {
  const updates = await req.json();
  await dbConnect();
  const updatedUser = await User.findByIdAndUpdate(params.id, updates, { new: true });

  if (!updatedUser) {
    return NextResponse.json({ error: 'User not found' }, { status: 404 });
  }

  return NextResponse.json(updatedUser);
}