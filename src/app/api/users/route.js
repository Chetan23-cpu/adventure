import pool from "@/lib/db";
import bcrypt from 'bcryptjs';
import { NextResponse } from "next/server";

export async function POST(request) {
    try {
        const formData = await request.formData();
        const name = formData.get('name');
        const email = formData.get('email');
        const password = formData.get('password');
        const phone = formData.get('phone');
        const address = formData.get('address');
        const is_admin = formData.get('is_admin') === 'true';
        const is_active = formData.get('is_active') === 'true';
        const imageFile = formData.get('image');

        // basic validation
        if (!name || !email || !password || !phone || !address) {
            return NextResponse.json(
                { success: false, error: 'Missing fields required' },
                { status: 400 }
            );
        }

        // hashing password
        const hashedPassword = await bcrypt.hash(password, 10);

        // convert image file
        let imageBuffer = null;
        let imageType = null;
        if (imageFile && imageFile.size > 0) {
            const arrayBuffer = await imageFile.arrayBuffer();
            imageBuffer = Buffer.from(arrayBuffer);
            imageType = imageFile.type;
        }

        const [result] = await pool.query(
            `INSERT INTO users 
                (name, email, password, phone, address, is_admin, is_active, image, image_type)
                VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`,
            [name, email, hashedPassword, phone, address, is_admin, is_active, imageBuffer, imageType]
        );

        return NextResponse.json(
            { success: true, id: result.insertId },
            { status: 201 }
        );

    } catch (error) {
        return NextResponse.json(
            { success: false, error: error.message },
            { status: 500 }
        );
    }
}