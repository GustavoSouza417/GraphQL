"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.bancoDeDados = void 0;
const tipoPerfis_1 = require("../enums/tipoPerfis");
exports.bancoDeDados = {
    usuarios: [
        {
            id: "1",
            nome: "Lucas",
            perfil: "1"
        },
        {
            id: "2",
            nome: "Joana",
            perfil: "2"
        }
    ],
    perfis: [
        {
            id: "1",
            nome: tipoPerfis_1.tipoPerfis.ADMINISTRADOR
        },
        {
            id: "2",
            nome: tipoPerfis_1.tipoPerfis.USUARIO
        }
    ]
};
