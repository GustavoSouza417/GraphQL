import { readFileSync } from "fs";
import Models from "../tipos/interfaces/json/iModels";

export default function autoIncrement(): string {
    let json: Models;
    let models: string;
    let key: string;
    let id: number;
    let increment: number = 0;

    models = readFileSync("./src/models/models.json", "utf8");
    json = JSON.parse(models);

    //conta a quantidade de usuários
    id = Object.keys(json.usuarios).length - 1;

    //busca o valor do ID do último usuário caso haja pelo menos um usuário
    if(id > -1) {
        key = Object.keys(json.usuarios)[id];
        increment = parseInt(json.usuarios[key].id.valueOf());
    }

    increment++;
    return increment.toString();
};

//as operações de JSON estão com o endereço a partir da pasta raiz
//porque é o servidor que está executando elas, já que a função
//está sendo chamada nos resolvers