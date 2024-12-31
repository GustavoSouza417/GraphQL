"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = deletarTodosOsUsuarios;
const fs_1 = require("fs");
const erros_1 = require("../../../tipos/enums/erros");
function deletarTodosOsUsuarios() {
    let json;
    let models;
    let key;
    try {
        models = (0, fs_1.readFileSync)("./src/models/models.json", "utf8");
        json = JSON.parse(models);
    }
    catch (error) {
        throw new Error(erros_1.Erros.ERRO_LEITURA_JSON);
    }
    if (Object.keys(json.usuarios).length === 0)
        throw new Error(erros_1.Erros.SEM_USUARIOS_CADASTRADOS);
    for (key in json.usuarios)
        delete json.usuarios[key];
    try {
        models = JSON.stringify(json, null, 2);
        (0, fs_1.writeFileSync)("./src/models/models.json", models, "utf-8");
    }
    catch (error) {
        throw new Error(erros_1.Erros.ERRO_GRAVACAO_JSON);
    }
    return "Todos os usuários foram excluídos com sucesso!";
}
;
//as operações de JSON estão com o endereço a partir da pasta raiz
//porque é o servidor que está executando elas, já que a função
//está sendo chamada nos resolvers
