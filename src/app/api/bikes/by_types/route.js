import { NextResponse } from "next/server";
import path from 'path';
import fs from 'fs';

export const dynamic = "force-static"

const filePath = path.join(process.cwd(), "public", "jsons", "bikes.json");
const getBikes = () => JSON.parse(fs.readFileSync(filePath, "utf-8"));

export async function GET(request) {
    try {
        const { searchParams } = new URL(request.url);
        const typeId = searchParams.get("id");
        const limit = searchParams.get("limit") == null ? 30 : searchParams.get("limit");
        const bikes = getBikes().filter(x => x.typeId === parseInt(typeId));
        if(!bikes) return NextResponse.json({message: "Not Found !"}, {status: 404});
        return NextResponse.json(bikes.slice(0, limit));
    } catch (error) {
        return NextResponse.json({message: error.message}, {status: 500});
    }
}