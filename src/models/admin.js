import { User } from "./User.js"

export default class Admin extends User {
    constructor(
        nome,
        email,
        senha ,
        role = 'ADMINISTRADOR',
        ativo = 'true'
    )
    { super (nome,email,senha,role,ativo)
    }

    criarCurso(nomeCurso,quantVagas){
        return `curso ${nomeCurso} tem exatamente : ${quantVagas}`
    }
    exibirInfos(){
        const infos = super.exibirInfos()
        return `ADMINISTRADOR - ${infos}`
    }
    deletarUsuario(usuario){
        usuario.desativar()
        console.log("Usuário desativado pelo Adminstrador")
    }
}