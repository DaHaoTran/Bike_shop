// "use server"
// import path from 'path';
// import fs from "fs";

// const filePathDefault = path.join(process.cwd(), "src", "assets", "jsons");

const getTypeList = async () => {
    // const filePath = path.join(filePathDefault, "types.json");
    // return JSON.parse(fs.readFileSync(filePath, "utf-8"));
    const res = await fetch('https://dahaotran.github.io/Bike-shop/jsons/types.json');
    return res.json();
}

const getBikeList = async () => {
    // const filePath = path.join(filePathDefault, "bikes.json");
    // return JSON.parse(fs.readFileSync(filePath, "utf-8"));
    const res = await fetch('https://dahaotran.github.io/Bike-shop/jsons/bikes.json');
    return res.json();
}

const getFirmList = async () => {
    // const filePath = path.join(filePathDefault, "firms.json");
    // return JSON.parse(fs.readFileSync(filePath, "utf-8"));
    const res = await fetch('https://dahaotran.github.io/Bike-shop/jsons/firms.json');
    return res.json();
}

const getDetailList = async () => {
    // const filePath = path.join(filePathDefault, "bike_details.json");
    // return JSON.parse(fs.readFileSync(filePath, "utf-8"));
    const res = await fetch('https://dahaotran.github.io/Bike-shop/jsons/bike_details.json');
    return res.json();
}

export { getTypeList, getBikeList, getFirmList, getDetailList };