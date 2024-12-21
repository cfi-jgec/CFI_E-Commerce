import User from "@/models/users";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { connectDB } from "@/db/connection";

export async function POST(req: NextRequest) {
    connectDB();
    try {
        const reqBody = await req.json();
        const { email, password } = reqBody;
        const isUserExist = await User.findOne({ email }).select("-createdAt, -updatedAt, -__v");
        if (isUserExist) {
            return NextResponse.json(
                { success: false, message: "User already exists" },
                { status: 409 }
            )
        }
        const hashPassword = await bcrypt.hash(password, 10);
        const newUser =await User.create({
            ...reqBody,
            password: hashPassword,
        }); 
        return NextResponse.json(
            {
                success: true,
                message: "User created successfully",
                data: newUser,
            },
            { status: 201 }
        )
    } catch (error) {
        console.error(error);
        return NextResponse.json(
            { success: false, message: "Internal server error" },
            { status: 500 }
        )
    }
}