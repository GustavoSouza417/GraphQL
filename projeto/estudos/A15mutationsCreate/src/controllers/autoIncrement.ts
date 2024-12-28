import { readFileSync } from "fs";
import Models from "../tipos/interfaces/json/iModels";

export default function autoIncrement(): String {
    let models: string;
    let json: Models;
    let id: number;

    models = readFileSync("./src/models/models.json", "utf8");
    json = JSON.parse(models);

    id = (Object.keys(json.usuarios).length) + 1;
    return id.toString();
};