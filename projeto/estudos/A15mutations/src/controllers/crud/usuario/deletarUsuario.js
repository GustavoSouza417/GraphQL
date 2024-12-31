"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = deletarUsuario;
const fs_1 = require("fs");
const isCadastrado_1 = require("../../validacoes/isCadastrado");
const erros_1 = require("../../../tipos/enums/erros");
function deletarUsuario(id) {
    let json;
    let usuario = null;
    let models;
    let key;
    if (!(0, isCadastrado_1.isIdCadastrado)(id))
        throw new Error(erros_1.Erros.ID_NAO_CADASTRADO);
    try {
        models = (0, fs_1.readFileSync)("./src/models/models.json", "utf8");
        json = JSON.parse(models);
    }
    catch (error) {
        throw new Error(erros_1.Erros.ERRO_LEITURA_JSON);
    }
    for (key in json.usuarios) {
        if (json.usuarios[key].id === id) {
            usuario = json.usuarios[key];
            delete json.usuarios[key];
            break;
        }
    }
    try {
        models = JSON.stringify(json, null, 2);
        (0, fs_1.writeFileSync)("./src/models/models.json", models, "utf-8");
    }
    catch (error) {
        throw new Error(erros_1.Erros.ERRO_GRAVACAO_JSON);
    }
    return usuario;
}
;
//as operações de JSON estão com o endereço a partir da pasta raiz
//porque é o servidor que está executando elas, já que a função
//está sendo chamada nos resolvers
