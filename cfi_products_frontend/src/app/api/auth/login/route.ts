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
        if (!isUserExist) {
            return NextResponse.json(
                { success: false, message: "User not exists" },
                { status: 404 }
            )
        }
        const isCorrectPassword = await bcrypt.compare(password, isUserExist.password);
        if (!isCorrectPassword) {
            return NextResponse.json(
                { success: false, message: "Invalid password" },
                { status: 401 }
            )
        }
        console.log(isUserExist);
        return NextResponse.json(
            { success: true, message: "Login successful", data: isUserExist },
            { status: 200 }
        )
    } catch (error) {
        console.error(error);
        return NextResponse.json(
            { success: false, message: "Internal server error" },
            { status: 500 }
        )
    }
}