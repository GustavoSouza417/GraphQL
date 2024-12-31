"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isEmailCadastrado = isEmailCadastrado;
exports.isIdCadastrado = isIdCadastrado;
const fs_1 = require("fs");
const erros_1 = require("../../tipos/enums/erros");
function isEmailCadastrado(email) {
    let models;
    let json;
    let usuario;
    try {
        models = (0, fs_1.readFileSync)("./src/models/models.json", "utf8");
        json = JSON.parse(models);
    }
    catch (error) {
        throw new Error(erros_1.Erros.ERRO_LEITURA_JSON);
    }
    for (usuario of Object.values(json.usuarios)) {
        if (usuario.email === email)
            return true;
    }
    ;
    return false;
}
;
function isIdCadastrado(id) {
    let models;
    let json;
    let usuario;
    try {
        models = (0, fs_1.readFileSync)("./src/models/models.json", "utf8");
        json = JSON.parse(models);
    }
    catch (error) {
        throw new Error(erros_1.Erros.ERRO_LEITURA_JSON);
    }
    for (usuario of Object.values(json.usuarios)) {
        if (usuario.id === id)
            return true;
    }
    ;
    return false;
}
;
//as operações de JSON estão com o endereço a partir da pasta raiz
//porque é o servidor que está executando elas, já que a função
//está sendo chamada nos resolvers
