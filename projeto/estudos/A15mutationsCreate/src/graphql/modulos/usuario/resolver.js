"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const exibirUsuario_1 = __importDefault(require("../../../controllers/exibirUsuario"));
const exibirUsuarios_1 = __importDefault(require("../../../controllers/exibirUsuarios"));
const criarUsuario_1 = __importDefault(require("../../../controllers/criarUsuario"));
exports.default = {
    Query: {
        exibirUsuario(_, args) {
            return (0, exibirUsuario_1.default)(args.id);
        },
        exibirUsuarios() {
            return (0, exibirUsuarios_1.default)();
        }
    },
    Mutation: {
        criarUsuario(_, args) {
            return (0, criarUsuario_1.default)(args.nome, args.email, args.senha);
        }
    }
};
