"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const bancoDeDados_1 = require("../../../models/bancoDeDados");
module.exports = {
    Query: {
        usuario(_, args) {
            return bancoDeDados_1.bancoDeDados.usuarios.find(usuario => usuario.id === args.id) || null;
        }
    }
};
