import { readFileSync, writeFileSync } from "fs";
import Models from "../../../tipos/interfaces/json/iModels";
import Usuario from "../../../tipos/interfaces/usuario/iUsuario";
import autoIncrement from "../../autoIncrement";
import criptografarSenha from "../../criptografarSenha";
import { isEmailCadastrado } from "../../validacoes/isCadastrado";
import { Erros } from "../../../tipos/enums/erros";

export default function criarUsuario(nome: string, email: string, senha: string, isAdm: boolean): Usuario {
    let json: Models;
    let models: string;
    let id: string;

    if(isEmailCadastrado(email))
        throw new Error(Erros.EMAIL_JA_CADASTRADO);

    try {
        models = readFileSync("./src/models/models.json", "utf8");
        json = JSON.parse(models);
    } catch(error: unknown) {
        throw new Error(Erros.ERRO_LEITURA_JSON);
    }

    id = autoIncrement();

    json.usuarios["usuario" + id] = {
        id: id,
        nome: nome,
        email: email,
        senha: criptografarSenha(senha),
        perfil: (isAdm) ? "1" : "2"
    };

    try {
        models = JSON.stringify(json, null, 2);
        writeFileSync("./src/models/models.json", models, "utf-8");
    } catch(error: unknown) {
        throw new Error(Erros.ERRO_GRAVACAO_JSON);
    }

    return json.usuarios["usuario" + id];
};

//as operações de JSON estão com o endereço a partir da pasta raiz
//porque é o servidor que está executando elas, já que a função
//está sendo chamada nos resolvers