import { NextResponse } from "next/server";
import path from 'path';
import fs from 'fs';

export const dynamic = "force-static"

const filePath = path.join(process.cwd(), "public", "jsons", "bike_details.json");
const getDetails = () => JSON.parse(fs.readFileSync(filePath, "utf-8"));

export async function GET(request) {
    try {
        const { searchParams }= new URL(request.url);
        const id = searchParams.get("id");
        const detail = getDetails().find(x => x.id === parseInt(id));
        if(!detail) return NextResponse.json({message: "Not Found"}, {status: 404}); 
        return NextResponse.json(detail);
    } catch (error) {
        return NextResponse.json({message: error.message}, {status: 500});
    }
}