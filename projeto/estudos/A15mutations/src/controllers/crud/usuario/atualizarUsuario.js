"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = atualizarUsuario;
const fs_1 = require("fs");
const criptografarSenha_1 = __importDefault(require("../../criptografarSenha"));
const isCadastrado_1 = require("../../validacoes/isCadastrado");
const isEmpty_1 = require("../../validacoes/isEmpty");
const erros_1 = require("../../../tipos/enums/erros");
function atualizarUsuario(id, nome, email, senha, isAdm) {
    let json;
    let models;
    models = (0, fs_1.readFileSync)("./src/models/models.json", "utf8");
    json = JSON.parse(models);
    if (!(0, isCadastrado_1.isIdCadastrado)(id))
        throw new Error(erros_1.Erros.ID_NAO_CADASTRADO);
    if (!(0, isEmpty_1.isStringEmpty)(nome))
        json.usuarios["usuario" + id].nome = nome;
    if (!(0, isEmpty_1.isStringEmpty)(email))
        json.usuarios["usuario" + id].email = email;
    if (!(0, isEmpty_1.isStringEmpty)(senha))
        json.usuarios["usuario" + id].senha = (0, criptografarSenha_1.default)(senha);
    if (!(0, isEmpty_1.isBooleanEmpty)(isAdm))
        json.usuarios["usuario" + id].perfil = (isAdm) ? "1" : "2";
    models = JSON.stringify(json, null, 2);
    (0, fs_1.writeFileSync)("./src/models/models.json", models, "utf-8");
    return json.usuarios["usuario" + id];
}
;
//as operações de JSON estão com o endereço a partir da pasta raiz
//porque é o servidor que está executando elas, já que a função
//está sendo chamada nos resolvers
