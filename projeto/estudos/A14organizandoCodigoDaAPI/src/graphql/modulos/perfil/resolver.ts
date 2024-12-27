import Usuario from "../../../interfaces/usuario/iUsuario";
import Perfil from "../../../interfaces/perfil/iPerfil";
import { bancoDeDados } from "../../../models/bancoDeDados";

export default {
    Usuario: {
        perfil(usuario: Usuario): Perfil | null {
            return bancoDeDados.perfis.find(perfil => perfil.id === usuario.perfil) || null;
        }
    }
};