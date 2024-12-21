"use server";

import { sessionUserType, usersType } from "@/types/auth-types";
import { SignJWT, jwtVerify } from "jose";
import { cookies } from "next/headers";

const secretKey = process.env.SECRET_KEY;
const key = new TextEncoder().encode(secretKey);

export async function encrypt(payload: any) {
    return await new SignJWT(payload)
        .setProtectedHeader({ alg: "HS256" })
        .setIssuedAt()
        .setExpirationTime('1d')
        .sign(key);
}

export async function decrypt(input: string): Promise<any> {
    const { payload } = await jwtVerify(input, key, {
        algorithms: ["HS256"],
    });
    return payload;
}

export async function generateToken(userData: usersType) {
    const { email, _id, firstName, lastName, isVerified } = userData
    const user = { email, _id, firstName, lastName, isVerified } as sessionUserType;
    // Create the session
    const expires = new Date(Date.now() + 24 * 60 * 60 * 1000); //expires in 1 day
    const session = await encrypt({ user, expires });
    // Save the session in a cookie
    cookies().set("session", session, { expires, httpOnly: true });
}

export async function logout() {
    // Destroy the session
    cookies().set("session", "", { expires: new Date(0) });
}

export async function getSession() {
    const session = cookies().get("session")?.value;
    if (!session) return null;
    return await decrypt(session);
}