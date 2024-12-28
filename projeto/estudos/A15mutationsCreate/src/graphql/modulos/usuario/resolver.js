"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const inserirUsuario_1 = __importDefault(require("../../../controllers/inserirUsuario"));
exports.default = {
    Query: {
        exibirUsuario(id) {
            return null;
        },
        exibirUsuarios() {
            return null;
        }
    },
    Mutation: {
        criarUsuario(_, args) {
            return (0, inserirUsuario_1.default)(args.nome, args.email, args.senha);
        }
    }
};
