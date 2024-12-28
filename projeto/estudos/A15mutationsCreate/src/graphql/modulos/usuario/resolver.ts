import Usuario from "../../../tipos/interfaces/usuario/iUsuario";
import criarUsuario from "../../../controllers/criarUsuario";

export default {
    Query: {
        exibirUsuario(id: String): Usuario | null {
            return null;
        },
        
        exibirUsuarios(): Usuario[] | null {
            return null;
        }
    },

    Mutation: {
        criarUsuario(_: any, args: { nome: String, email: String, senha: String }): Usuario {
            return criarUsuario(args.nome, args.email, args.senha);
        }
    }
};