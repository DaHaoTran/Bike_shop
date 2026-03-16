import { NextResponse } from "next/server";
import path from 'path';
import fs from "fs";

export const dynamic = "force-static"

const filePath = path.join(process.cwd(), "public", "jsons", "types.json");
const getTypes = () => JSON.parse(fs.readFileSync(filePath, "utf-8"));

export async function GET() {
    try {
        const types = getTypes();
        if(!types) return NextResponse.json({message: 'Not found !'}, {status: 404});
        return NextResponse.json(types);
    } catch (error) {
        return NextResponse.json({message: error.message}, {status: 500});
    }
}