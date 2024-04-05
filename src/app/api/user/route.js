// fcode to create a user

import connectMongoDB from "@/libs/mongodb";
import User from "@/models/User";
import { NextResponse } from "next/server";


export async function POST(request) {
    const {name,coins,cash } = await request.json();
    // now we need to connect to our database
    await connectMongoDB();


    // create the topic
    await User.create({name,coins,cash });

    // return a next response

    return NextResponse.json({ message: "User Created" }, { status: 201 });

}


// get
export async function GET() {
    await connectMongoDB();
    // saare topics varible my store karva lenge
    const profiles = await Profile.find();
    return NextResponse.json({ profiles });
}

// delete 

export async function DELETE(request){
    // to delete we need to send id of topic
    const id = request.nextUrl.searchParams.get("id");
    await connectMongoDB();
    await User.findByIdAndDelete(id);
    return NextResponse.json({message:"Profile deleted"},{status:200});

}

// to update we will use dynamic route