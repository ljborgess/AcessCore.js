class cadastro { 
    #nome 
    #idade
    #dataNascimento
    #id
    constructor(nome,idade,dataNascimento,status){
        this.#nome = nome
        this.#idade = idade
        this.#dataNascimento = dataNascimento
        this.#id  = Date.now()
        this.status = status
    }
}

module.exports = cadastro;