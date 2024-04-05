import connectMongoDB from "@/libs/mongodb";
import User from "@/models/User";
import { NextResponse } from "next/server";


export async function PUT(request,{params}){
    const {id} = params;
    const {newName:name,newCoins:coins,newCash:cash} = await request.json();
    await connectMongoDB();
    await User.findByIdAndUpdate(id,{name,coins,cash});
    return NextResponse.json({message:"Profile Updated"},{status:200});
}

// get single topic by id

export async function GET(request,{params}){
    const {id} = params;
    await connectMongoDB();
    const topic = await User.findOne({_id:id});
    return NextResponse.json({profile},{status:200});
}