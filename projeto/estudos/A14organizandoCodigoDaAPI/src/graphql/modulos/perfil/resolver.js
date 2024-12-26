"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const bancoDeDados_1 = require("../../../models/bancoDeDados");
module.exports = {
    Usuario: {
        perfil(usuario) {
            return bancoDeDados_1.bancoDeDados.perfis.find(perfil => perfil.id === usuario.perfil) || null;
        }
    }
};
