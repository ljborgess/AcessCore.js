import { User } from "./User.js"

export default class Rh extends User {
    constructor(nome,email,senha,role = 'RH',ativo = 'true'){
        super(nome,email,senha,role,ativo)
    }
    contratarUsuario(usuario){
        // reativar o usuário
        usuario.ativo = true
        console.log("Usuário reativado pelo RH")
    }
    listarUsuario(usuarios){
        usuarios.forEach(u => {
            console.log(u.exibirInfos())
    })
    }
    
    
}