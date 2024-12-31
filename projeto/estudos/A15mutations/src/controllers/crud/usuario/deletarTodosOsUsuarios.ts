import { readFileSync, writeFileSync } from "fs";
import Models from "../../../tipos/interfaces/json/iModels";
import { Erros } from "../../../tipos/enums/erros";

export default function deletarTodosOsUsuarios(): string {
    let json: Models;
    let models: string;
    let key: string;

    try {
        models = readFileSync("./src/models/models.json", "utf8");
        json = JSON.parse(models);
    } catch(error: unknown) {
        throw new Error(Erros.ERRO_LEITURA_JSON);
    }

    if(Object.keys(json.usuarios).length === 0)
        throw new Error(Erros.SEM_USUARIOS_CADASTRADOS);

    for(key in json.usuarios)
        delete json.usuarios[key];

    try {
        models = JSON.stringify(json, null, 2);
        writeFileSync("./src/models/models.json", models, "utf-8");
    } catch(error: unknown) {
        throw new Error(Erros.ERRO_GRAVACAO_JSON);
    }

    return "Todos os usuários foram excluídos com sucesso!";
};

//as operações de JSON estão com o endereço a partir da pasta raiz
//porque é o servidor que está executando elas, já que a função
//está sendo chamada nos resolvers