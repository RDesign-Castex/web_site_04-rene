import { ConnectDB } from "@/dbConfig/db";
import { UserModel } from "@/model/UserModel.models";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";

ConnectDB();

const Response = (obj, status) => {
    const body = JSON.stringify(obj || {});
    const res = new NextResponse(body, {
        status: status,
        headers: {
            "Content-Type": "application/json"
        }
    });
    return res;
};

export const POST = async (request) => {
    try {
        // Assuming the URL is something like /api/register/[username]
        const { username } = request.query; // Extract username from the URL path
        const { email, password } = await request.json(); // Extract email and password from the request body
        
        // Check if the user already exists
        const existUser = await UserModel.findOne({ email: email });
        if (existUser) {
            return Response({ error: "El usuario ya existe", success: false }, 501);
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const user = await UserModel.create({
            username,
            email,
            password: hashedPassword
        });

        console.log({ user });
        return Response({ message: "User Register Successfully", success: true }, 201);

    } catch (e) {
        return Response({ error: e.message, success: false }, 500);
    }
};
