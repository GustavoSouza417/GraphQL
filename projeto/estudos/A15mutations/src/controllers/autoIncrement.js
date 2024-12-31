"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = autoIncrement;
const fs_1 = require("fs");
const erros_1 = require("../tipos/enums/erros");
function autoIncrement() {
    let json;
    let models;
    let key;
    let id;
    let increment = 0;
    try {
        models = (0, fs_1.readFileSync)("./src/models/models.json", "utf8");
        json = JSON.parse(models);
    }
    catch (error) {
        throw new Error(erros_1.Erros.ERRO_LEITURA_JSON);
    }
    //conta a quantidade de usuários
    id = Object.keys(json.usuarios).length - 1;
    //busca o valor do ID do último usuário caso haja pelo menos um usuário
    if (id > -1) {
        key = Object.keys(json.usuarios)[id];
        increment = parseInt(json.usuarios[key].id.valueOf());
    }
    increment++;
    return increment.toString();
}
;
//as operações de JSON estão com o endereço a partir da pasta raiz
//porque é o servidor que está executando elas, já que a função
//está sendo chamada nos resolvers
