import { User } from "./User.js"
import { usuarios } from "../../data/database.js"

export default class Admin extends User {
    constructor(
        nome,
        email,
        senha ,
        role = 'ADMINISTRADOR',
        ativo = 'true',
        isBlocked = false
    )
    { 
        super(nome,email,senha,role,ativo,isBlocked)
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
    resetarSenha(usuario, novaSenha){
        if(!usuario) return
        usuario.senha = novaSenha
        console.log(`Senha do usuário ${usuario.email} atualizada pelo Administrador`)
    }
    // block and unblock helpers (not overrides)
    bloquearUsuario(email){
        const user = usuarios.find((u)=> u.email === email)
        if(!user){
            console.log("Usuário não encontrado para bloqueio")
            return false
        }
        if(user.isBlocked === true){
            console.log("Usuário já está bloqueado")
            return true
        }
        user.isBlocked = true
        console.log(`Usuário ${email} foi bloqueado pelo Administrador`)
        return true
    }
    desbloquearUsuario(email){
        const user = usuarios.find((u)=> u.email === email)
        if(!user){
            console.log("Usuário não encontrado para desbloqueio")
            return false
        }
        if(user.isBlocked === false){
            console.log("Usuário já está desbloqueado")
            return true
        }
        user.isBlocked = false
        console.log(`Usuário ${email} foi desbloqueado pelo Administrador`)
        return true
    }    
    listarUsuarios(){
    return usuarios.forEach(u => {
    console.log(u.exibirInfos())
        })
    
    }
    aplicarWarning(email, quantidade = 1){
        const user = usuarios.find((u)=> u.email === email)
        if(!user){
            console.log("Usuário não encontrado para warning")
            return false
        }
        user.warnings = (user.warnings || 0) + quantidade
        console.log(`Aplicados ${quantidade} warning(s) ao usuário ${email}`)
        return user.warnings
    }}