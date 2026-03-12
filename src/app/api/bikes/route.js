import { NextResponse } from "next/server";
import path from 'path';
import fs from "fs";

const filePath = path.join(process.cwd(), "public", "jsons", "bikes.json");
const getBikes = () => JSON.parse(fs.readFileSync(filePath, "utf-8"));

export async function GET() {
    try {
        const bike = getBikes();
        if(!bike) return NextResponse.json({message: 'Not Found !'}, {status: 404});
        return NextResponse.json(bike);
    } catch (error) {
        return NextResponse.json({message: error.message}, {status: 500});
    }
}