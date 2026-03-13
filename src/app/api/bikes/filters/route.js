import { NextResponse } from "next/server";
import path from 'path';
import fs from 'fs';

const filePath = path.join(process.cwd(), "public", "jsons", "bikes.json");
const getBikes = () => JSON.parse(fs.readFileSync(filePath, "utf-8"));

export async function GET(request) {
    try {
        const { searchParams } = new URL(request.url);
        const str = searchParams.get("str");
        //get min and max value
        const min = parseInt(str.slice(str.indexOf(m) + 1, str.indexOf('t')));
        const max = parseInt(str.slice(str.indexOf(t) + 2));
        //rest code
        const limit = searchParams.get("limit") == null ? 30 : searchParams.get("limit");
        const bikes = getBikes().filter(x => 
            parseInt(x.price.slice(0, x.price.indexOf('.'))) >= min &&
            parseInt(x.price.slice(x.price.indexOf('-') + 2, x.price.indexOf('.'))) <= max
        );
        if (!bikes) return NextResponse.json({ message: 'Not found' }, { status: 404 });
        return NextResponse.json(bikes.slice(0, limit));
    } catch (error) {
        return NextResponse.json({ message: error.message }, { status: 500 });
    }
}