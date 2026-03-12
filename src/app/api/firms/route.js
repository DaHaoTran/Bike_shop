import { NextResponse } from "next/server";
import path from 'path';
import fs from 'fs';

const filePath = path.join(process.cwd(), "public", "jsons", "firms.json");
const getFirms = () => JSON.parse(fs.readFileSync(filePath, "utf-8"));

export async function GET() {
    try {
        const firms = getFirms();
        if(!firms) return NextResponse.json({message: 'Not found'}, {status: 404});
        return NextResponse.json(firms);
    } catch (error) {
        return NextResponse.json({message: error.message}, {status: 500});
    }
}