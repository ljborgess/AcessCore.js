import { usuarios } from "../../data/database.js"

export class User {
    constructor(nome,email,senha,role = 'USER',ativo = true,isBlocked = false){
        // duplicate email guard
        if(usuarios.find(u => u.email === email)){
            throw new Error('Email já cadastrado')

    }
    if(usuarios.find(u => u.nome === nome)){
            throw new Error('Email já cadastrado')
            
    }     
    
        this.validarNome(nome)
        this.validarEmail(email)
        this.validarSenha(senha)
        this.validarRole(role)
        this.validarAtivo(ativo)
        this.validarBloqueio(isBlocked)
        
        this.nome = nome
        this.email = email
        this.senha = senha 
        this.role = role 
        this.ativo = ativo 
        // normalize isBlocked to boolean
        this.isBlocked = (isBlocked === true || isBlocked === 'true') ? true : false
        // warning counter
        this.warnings = 0

        // register user
        usuarios.push(this)
    }
    validarNome(nome){
        if(!nome || typeof nome !== "string"){
            throw new Error('Precisa ser um Nome!')
        }
    }
    validarEmail(email){
        if(!email || typeof email !== "string"){
            throw new Error("Precisa ter um email valido ")
        }
    }
    validarSenha(senha){
        if(typeof senha !== "string" || senha.length < 6){
            throw new Error("Precisa ter no mínimo 6 caracteres")
        }
    }
    validarRole(role){
        const roles = ["ADMINISTRADOR","RH","USER"]
        if(!roles.includes(role)){
            throw new Error("Role inválida")
        }
    }
    validarAtivo(ativo){
        if(ativo !== true && ativo !== false && ativo !== 'true' && ativo !== 'false'){
            throw new Error('Formato de ativo inválido')
        }
    }

    validarBloqueio(isBlocked){
        if(isBlocked !== true && isBlocked !== false && isBlocked !== 'true' && isBlocked !== 'false'){
            throw new Error('Formato de bloqueio inválido')
        }
    }

    desativar(){
        this.ativo = false
    }

    exibirInfos(){
        return `${this.nome},
        ${this.senha},
        ${this.email},
        ${this.role},
        ${this.ativo},
        warnings:${this.warnings}`
    }
        }

    


