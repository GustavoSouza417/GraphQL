import { readFileSync, writeFileSync } from "fs";
import Models from "../tipos/interfaces/json/iModels";
import Usuario from "../tipos/interfaces/usuario/iUsuario";
import autoIncrement from "./autoIncrement";
import criptografarSenha from "./criptografarSenha";

export default function criarUsuario(nome: String, email: String, senha: String, isAdm: boolean): Usuario {
    let models: string;
    let json: Models;
    let id: String;

    models = readFileSync("./src/models/models.json", "utf8");
    json = JSON.parse(models);
    id = autoIncrement();

    json.usuarios["usuario" + id] = {
        id: id,
        nome: nome,
        email: email,
        senha: criptografarSenha(senha.valueOf()),
        perfil: (isAdm) ? "1" : "2"
    };

    models = JSON.stringify(json, null, 2);
    writeFileSync("./src/models/models.json", models, "utf-8");

    return json.usuarios["usuario" + id];
};

//as operações de JSON estão com o endereço a partir da pasta raiz
//porque é o servidor que está executando elas, já que a função
//está sendo chamada nos resolvers