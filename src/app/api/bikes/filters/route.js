import { NextResponse } from "next/server";
import path from 'path';
import fs from 'fs';

export const dynamic = "force-static"

const filePath = path.join(process.cwd(), "public", "jsons", "bikes.json");
const getBikes = () => JSON.parse(fs.readFileSync(filePath, "utf-8"));

export async function GET(request) {
    try {
        const { searchParams } = new URL(request.url);
        const str = searchParams.get("str");
        //get min and max value
        const [min, max] = str.match(/\d+/g).map(Number);
        //rest code
        const limit = searchParams.get("limit") == null ? 30 : searchParams.get("limit");
        const bikes = getBikes().filter(x => {
            const [left, right] = x.price
                .split(" - ")                // split into two parts
                .map(p => parseInt(p));      // parseInt stops at the first dot

            return left >= min && right <= max;
        });
        if (!bikes) return NextResponse.json({ message: 'Not found' }, { status: 404 });
        return NextResponse.json(bikes.slice(0, limit));
    } catch (error) {
        return NextResponse.json({ message: error.message }, { status: 500 });
    }
}