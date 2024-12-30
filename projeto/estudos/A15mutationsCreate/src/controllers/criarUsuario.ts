import { readFileSync, writeFileSync } from "fs";
import Models from "../tipos/interfaces/json/iModels";
import Usuario from "../tipos/interfaces/usuario/iUsuario";
import autoIncrement from "./autoIncrement";
import criptografarSenha from "./criptografarSenha";
import isEmailCadastrado from "./isEmailCadastrado";

export default function criarUsuario(nome: string, email: string, senha: string, isAdm: boolean): Usuario {
    let json: Models;
    let models: string;
    let id: string;

    if(isEmailCadastrado(email))
        throw new Error("O endereço de e-mail fornecido já está cadastrado!");

    models = readFileSync("./src/models/models.json", "utf8");
    json = JSON.parse(models);
    id = autoIncrement();

    json.usuarios["usuario" + id] = {
        id: id,
        nome: nome,
        email: email,
        senha: criptografarSenha(senha),
        perfil: (isAdm) ? "1" : "2"
    };

    models = JSON.stringify(json, null, 2);
    writeFileSync("./src/models/models.json", models, "utf-8");

    return json.usuarios["usuario" + id];
};

//as operações de JSON estão com o endereço a partir da pasta raiz
//porque é o servidor que está executando elas, já que a função
//está sendo chamada nos resolvers