"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = inserirUsuario;
const fs_1 = require("fs");
const eTipoPerfil_1 = require("../tipos/enums/tipoPerfil/eTipoPerfil");
function inserirUsuario(nome, email, senha) {
    let models;
    let json;
    models = (0, fs_1.readFileSync)("C:/Users/user/Desktop/repositorios/GraphQL/projeto/estudos/A15mutationsCreate/src/models/models.json", "utf8");
    json = JSON.parse(models);
    json.usuarios["usuario1"] = {
        id: "1",
        nome: nome,
        email: email,
        senha: senha,
        perfil: {
            id: "2",
            nome: eTipoPerfil_1.TipoPerfil.USUARIO
        }
    };
    models = JSON.stringify(json, null, 2);
    (0, fs_1.writeFileSync)("C:/Users/user/Desktop/repositorios/GraphQL/projeto/estudos/A15mutationsCreate/src/models/models.json", models, "utf8");
    return json.usuarios["usuario1"];
}
;
