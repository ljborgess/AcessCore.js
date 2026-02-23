fs = require('fs');

const conteudo = fs.readFileSync('./data/database.json', "utf-8");
const dados = JSON.parse(conteudo);

class services { 
    constructor() {
        this.listaCadastros = dados.usuario || [];
    }
    
    adicionarCadastro(cadastro) {
        const cadastroExistente = this.listaCadastros.find((p) => p.nome === cadastro.nome);

        if(cadastroExistente) {
            cadastroExistente.id = cadastro.id;
        } else { 
            this.listaCadastros.push(cadastro);
        }
        dados.usuario = this.listaCadastros;
        fs.writeFileSync('./data/database.json', JSON.stringify(dados, null, 2), 'utf-8');


    }
    listaCadastros(){
        return this.listaCadastros;
    }
    
    buscarPorId(id) {
        if(typeof id != 'number') {
            throw new Error('ID deve ser um número');
        } else { 
            return this.listaCadastros.find((p)=> p.id === id);
    }}
    buscaPorNome(nome){
        return this.listaCadastros.filter((p)=> p.nome.toLowerCase().includes(nome.toLowerCase()));
    }
    removerCadastro(id) {
        if(typeof id != 'number') {
            throw new Error('ID deve ser um número');
        }
        this.listaCadastros = this.listaCadastros.filter((p) => p.id !== id);   
        dados.usuario = this.listaCadastros;
        fs.writeFileSync('./data/database.json', JSON.stringify(dados, null, 2), 'utf-8');
    }
    listarPorData(data){
        return this.listaCadastros.filter((p) => p.dataNascimento === data);

    }
    validarCadastro(cadastro){
        if(!cadastro.nome || !cadastro.idade || !cadastro.dataNascimento) {
            throw new Error('Cadastro deve conter nome, idade e data de nascimento');
    } else{
        return true;
        }
    }
}
module.exports = services;
