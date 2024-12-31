import { readFileSync } from "fs";
import Models from "../../../../tipos/interfaces/json/iModels";
import Usuario from "../../../../tipos/interfaces/usuario/iUsuario";
import { Erros } from "../../../../tipos/enums/erros";

export default function exibirUsuario(id: string): Usuario | null {
    let models: string;
    let json: Models;

    try {
        models = readFileSync("./src/models/models.json", "utf8");
        json = JSON.parse(models);
    } catch(error: unknown) {
        throw new Error(Erros.ERRO_LEITURA_JSON);
    }

    return Object.values(json.usuarios).find((usuario: Usuario) => 
        usuario.id === id
    ) || null;
};

//as operações de JSON estão com o endereço a partir da pasta raiz
//porque é o servidor que está executando elas, já que a função
//está sendo chamada nos resolvers