"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = criarUsuario;
const fs_1 = require("fs");
const autoIncrement_1 = __importDefault(require("../../autoIncrement"));
const criptografarSenha_1 = __importDefault(require("../../criptografarSenha"));
const isCadastrado_1 = require("../../validacoes/isCadastrado");
const erros_1 = require("../../../tipos/enums/erros");
function criarUsuario(nome, email, senha, isAdm) {
    let json;
    let models;
    let id;
    if ((0, isCadastrado_1.isEmailCadastrado)(email))
        throw new Error(erros_1.Erros.EMAIL_JA_CADASTRADO);
    models = (0, fs_1.readFileSync)("./src/models/models.json", "utf8");
    json = JSON.parse(models);
    id = (0, autoIncrement_1.default)();
    json.usuarios["usuario" + id] = {
        id: id,
        nome: nome,
        email: email,
        senha: (0, criptografarSenha_1.default)(senha),
        perfil: (isAdm) ? "1" : "2"
    };
    models = JSON.stringify(json, null, 2);
    (0, fs_1.writeFileSync)("./src/models/models.json", models, "utf-8");
    return json.usuarios["usuario" + id];
}
;
//as operações de JSON estão com o endereço a partir da pasta raiz
//porque é o servidor que está executando elas, já que a função
//está sendo chamada nos resolvers
