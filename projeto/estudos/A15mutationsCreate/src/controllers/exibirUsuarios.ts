import { readFileSync } from "fs";
import Models from "../tipos/interfaces/json/iModels";
import Usuario from "../tipos/interfaces/usuario/iUsuario";

export default function exibirUsuarios(): Usuario[] | null {
    let models: string;
    let json: Models;

    models = readFileSync("./src/models/models.json", "utf8");
    json = JSON.parse(models);

    return Object.values(json.usuarios) || null;
};