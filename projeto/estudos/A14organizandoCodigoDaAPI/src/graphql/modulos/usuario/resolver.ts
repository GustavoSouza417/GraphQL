import Usuario from "../../../interfaces/usuario/iUsuario";
import { bancoDeDados } from "../../../models/bancoDeDados";

export default {
    Query: {
        usuario(_: any, args: {id: String}): Usuario | null {
            return bancoDeDados.usuarios.find(usuario => usuario.id === args.id) || null;
        }
    }
};