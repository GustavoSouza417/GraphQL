import { readFileSync, writeFileSync } from "fs";
import Models from "../tipos/interfaces/json/iModels";
import Usuario from "../tipos/interfaces/usuario/iUsuario";
import { TipoPerfil } from "../tipos/enums/tipoPerfil/eTipoPerfil";

export default function inserirUsuario(nome: String, email: String, senha: String): Usuario {
    let models: string;
    let json: Models;

    models = readFileSync("C:/Users/user/Desktop/repositorios/GraphQL/projeto/estudos/A15mutationsCreate/src/models/models.json", "utf8");
    json = JSON.parse(models);

    json.usuarios["usuario1"] = {
        id: "1",
        nome: nome,
        email: email,
        senha: senha,

        perfil: {
            id: "2",
            nome: TipoPerfil.USUARIO
        }
    };

    models = JSON.stringify(json, null, 2);
    writeFileSync("C:/Users/user/Desktop/repositorios/GraphQL/projeto/estudos/A15mutationsCreate/src/models/models.json", models, "utf8");

    return json.usuarios["usuario1"];
};