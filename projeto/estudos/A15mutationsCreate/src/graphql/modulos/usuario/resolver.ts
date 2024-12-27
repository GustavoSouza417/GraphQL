import Usuario from "../../../tipos/interfaces/usuario/iUsuario";
import inserirUsuario from "../../../controllers/inserirUsuario";

export default {
    Query: {
        exibirUsuarios(): Usuario[] | null {
            return null;
        },

        exibirUsuario(id: String): Usuario | null {
            return null;
        }
    },

    Mutation: {
        criarUsuario(nome: String, email: String, senha: String): Usuario {
            return inserirUsuario(nome, email, senha);
        }
    }
};