import { connectDB } from "@/db/connection";
import User from "@/models/users";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest, { params }: { params: { id: string } }) {
    connectDB();
    try {
        const { id } = params;
        const isExist = await User.findById(id);
        if (!isExist) {
            return NextResponse.json(
                { success: false, message: "User not found" },
                { status: 404 }
            )
        }
        return NextResponse.json(
            { success: true, message: "User fetched successfully", data: isExist },
            { status: 200 }
        )
    } catch (error) {
        console.error(error);
        return NextResponse.json(
            { success: false, message: "Internal server error" },
            { status: 500 }
        )
    }
};