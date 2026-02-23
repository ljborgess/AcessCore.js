const services = require('./service/Services.js');
const cadastro = require('./service/Cadastros.js');

// Cria uma instância do serviço
const servico = new services();

// Cria alguns cadastros para teste
const pessoa1 = {
    nome: 'João Silva',
    idade: 25,
    dataNascimento: '1999-05-10',
    id: Date.now(),
    status: 'ativo'
};

const pessoa2 = {
    nome: 'Maria Santos',
    idade: 30,
    dataNascimento: '1994-03-20',
    id: Date.now() + 1,
    status: 'ativo'
};

// Adiciona os cadastros
console.log('Adicionando cadastros...');
servico.adicionarCadastro(pessoa1);
console.log('✓ Cadastro 1 adicionado');

servico.adicionarCadastro(pessoa2);
console.log('✓ Cadastro 2 adicionado');

// Mostra os cadastros em memória
console.log('\nCadastros em memória:');
console.log(JSON.stringify(servico.listaCadastros, null, 2));

console.log('\n✓ Dados foram salvos em database.json!');

console.log('removendo cadastro...');
servico.removerCadastro(pessoa1.id);
console.log('✓ Cadastro removido');
console.log('\nCadastros em memória após remoção:');
console.log(JSON.stringify(servico.listaCadastros, null, 2));