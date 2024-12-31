import { readFileSync, writeFileSync } from "fs";
import Usuario from "../../../tipos/interfaces/usuario/iUsuario";
import Models from "../../../tipos/interfaces/json/iModels";
import { isIdCadastrado } from "../../validacoes/isCadastrado";
import { Erros } from "../../../tipos/enums/erros";

export default function deletarUsuario(id: string): Usuario | null {
    let json: Models;
    let usuario: Usuario | null = null;
    let models: string;
    let key: string;

    if(!isIdCadastrado(id))
        throw new Error(Erros.ID_NAO_CADASTRADO);

    try {
        models = readFileSync("./src/models/models.json", "utf8");
        json = JSON.parse(models);
    } catch(error: unknown) {
        throw new Error(Erros.ERRO_LEITURA_JSON);
    }

    for(key in json.usuarios) {
        if(json.usuarios[key].id === id) {
            usuario = json.usuarios[key];
            delete json.usuarios[key];
            break;
        }
    }

    try {
        models = JSON.stringify(json, null, 2);
        writeFileSync("./src/models/models.json", models, "utf-8");
    } catch(error: unknown) {
        throw new Error(Erros.ERRO_GRAVACAO_JSON);
    }

    return usuario;
};

//as operações de JSON estão com o endereço a partir da pasta raiz
//porque é o servidor que está executando elas, já que a função
//está sendo chamada nos resolvers