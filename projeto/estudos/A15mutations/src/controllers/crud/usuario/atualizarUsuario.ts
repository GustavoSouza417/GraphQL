import { readFileSync, writeFileSync } from "fs";
import Models from "../../../tipos/interfaces/json/iModels";
import Usuario from "../../../tipos/interfaces/usuario/iUsuario";
import criptografarSenha from "../../criptografarSenha";
import { isIdCadastrado } from "../../validacoes/isCadastrado";
import { isStringEmpty, isBooleanEmpty } from "../../validacoes/isEmpty";
import { Erros } from "../../../tipos/enums/erros";

export default function atualizarUsuario(id: string, nome: string, email: string, senha: string, isAdm: boolean): Usuario {
    let json: Models;
    let models: string;

    models = readFileSync("./src/models/models.json", "utf8");
    json = JSON.parse(models);

    if(!isIdCadastrado(id))
        throw new Error(Erros.ID_NAO_CADASTRADO);

    if(!isStringEmpty(nome))
        json.usuarios["usuario" + id].nome = nome;

    if(!isStringEmpty(email))
        json.usuarios["usuario" + id].email = email;

    if(!isStringEmpty(senha))
        json.usuarios["usuario" + id].senha = criptografarSenha(senha);

    if(!isBooleanEmpty(isAdm))
        json.usuarios["usuario" + id].perfil = (isAdm) ? "1" : "2";

    models = JSON.stringify(json, null, 2);
    writeFileSync("./src/models/models.json", models, "utf-8");

    return json.usuarios["usuario" + id];
};

//as operações de JSON estão com o endereço a partir da pasta raiz
//porque é o servidor que está executando elas, já que a função
//está sendo chamada nos resolvers