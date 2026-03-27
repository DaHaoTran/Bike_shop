// "use server"
// import path from 'path';
// import fs from "fs";

import useSWR from "swr";
import { useFetch } from "../hooks/useFetch";

// const filePathDefault = path.join(process.cwd(), "src", "assets", "jsons");
const fetcher = (...args) => fetch(...args).then(res => res.json());

const getTypeList = () => {
    // const filePath = path.join(filePathDefault, "types.json");
    // return JSON.parse(fs.readFileSync(filePath, "utf-8"));
    return useSWR('https://dahaotran.github.io/Bike_shop/jsons/types.json', fetcher);
}

const getBikeList = () => {
    // const filePath = path.join(filePathDefault, "bikes.json");
    // return JSON.parse(fs.readFileSync(filePath, "utf-8"));
    return useSWR('https://dahaotran.github.io/Bike_shop/jsons/bikes.json', fetcher);
}

const getFirmList = () => {
    // const filePath = path.join(filePathDefault, "firms.json");
    // return JSON.parse(fs.readFileSync(filePath, "utf-8"));
    return useSWR('https://dahaotran.github.io/Bike_shop/jsons/firms.json', fetcher);
}

const getDetailList = () => {
    // const filePath = path.join(filePathDefault, "bike_details.json");
    // return JSON.parse(fs.readFileSync(filePath, "utf-8"));
    return useSWR('https://dahaotran.github.io/Bike_shop/jsons/bike_details.json', fetcher);
}

export { getTypeList, getBikeList, getFirmList, getDetailList };