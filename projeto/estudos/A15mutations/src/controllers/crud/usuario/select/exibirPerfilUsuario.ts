import { readFileSync } from "fs";
import Models from "../../../../tipos/interfaces/json/iModels";
import Perfil from "../../../../tipos/interfaces/perfil/iPerfil";
import Usuario from "../../../../tipos/interfaces/usuario/iUsuario";
import { Erros } from "../../../../tipos/enums/erros";

export default function exibirPerfilUsuario(usuario: Usuario): Perfil | null {
    let models: string;
    let json: Models;

    try {
        models = readFileSync("./src/models/models.json", "utf8");
        json = JSON.parse(models);
    } catch(error: unknown) {
        throw new Error(Erros.ERRO_LEITURA_JSON);
    }

    const perfil = Object.values(json.perfis).find((perfil: Perfil) =>
        perfil.id === usuario.perfil
    );

    return perfil || null;
};

//as operações de JSON estão com o endereço a partir da pasta raiz
//porque é o servidor que está executando elas, já que a função
//está sendo chamada nos resolvers