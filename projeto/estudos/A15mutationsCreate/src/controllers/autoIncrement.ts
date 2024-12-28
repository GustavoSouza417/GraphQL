import { readFileSync } from "fs";
import Models from "../tipos/interfaces/json/iModels";

export default function autoIncrement(): String {
    let json: Models;
    let models: string;
    let key: string;
    let id: number;
    let increment: number;

    models = readFileSync("./src/models/models.json", "utf8");
    json = JSON.parse(models);

    //busca o valor do ID do último usuário adicionado e adiciona um
    id = Object.keys(json.usuarios).length - 1;
    key = Object.keys(json.usuarios)[id];
    increment = parseInt(json.usuarios[key].id.valueOf()) + 1;
    
    return increment.toString();
};

//as operações de JSON estão com o endereço a partir da pasta raiz
//porque é o servidor que está executando elas, já que a função
//está sendo chamada nos resolvers