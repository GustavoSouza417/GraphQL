"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const inserirUsuario_1 = __importDefault(require("../../../controllers/inserirUsuario"));
exports.default = {
    Query: {
        exibirUsuarios() {
            return null;
        },
        exibirUsuario(id) {
            return null;
        }
    },
    Mutation: {
        criarUsuario(nome, email, senha) {
            return (0, inserirUsuario_1.default)(nome, email, senha);
        }
    }
};
