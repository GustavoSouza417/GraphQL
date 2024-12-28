import Usuario from "../../../tipos/interfaces/usuario/iUsuario";
import exibirUsuario from "../../../controllers/exibirUsuario";
import exibirUsuarios from "../../../controllers/exibirUsuarios";
import criarUsuario from "../../../controllers/criarUsuario";

export default {
    Query: {
        exibirUsuario(_: any, args: {id: String}): Usuario | null {
            return exibirUsuario(args.id);
        },
        
        exibirUsuarios(): Usuario[] | null {
            return exibirUsuarios();
        }
    },

    Mutation: {
        criarUsuario(_: any, args: { nome: String, email: String, senha: String }): Usuario {
            return criarUsuario(args.nome, args.email, args.senha);
        }
    }
};