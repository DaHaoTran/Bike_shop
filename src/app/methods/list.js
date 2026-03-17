"use server"
import path from 'path';
import fs from "fs";

const filePathDefault = path.join(process.cwd(), "src", "assets", "jsons");

const getTypeList = async () => {
    const filePath = path.join(filePathDefault, "types.json");
    return JSON.parse(fs.readFileSync(filePath, "utf-8"));
}

const getBikeList = async () => {
    const filePath = path.join(filePathDefault, "bikes.json");
    return JSON.parse(fs.readFileSync(filePath, "utf-8"));
}

const getFirmList = async () => {
    const filePath = path.join(filePathDefault, "firms.json");
    return JSON.parse(fs.readFileSync(filePath, "utf-8"));
}

const getDetailList = async () => {
    const filePath = path.join(filePathDefault, "bike_details.json");
    return JSON.parse(fs.readFileSync(filePath, "utf-8"));
}

export { getTypeList, getBikeList, getFirmList, getDetailList };