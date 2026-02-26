# AcessCore.js

> A minimal CRUD authentication/authorization example built in plain Node.js

Este repositório demonstra um sistema simples de cadastro de usuários com
regras básicas de validação, perfis (administrador/RH/comum) e pequenos
métodos de gestão. Foi desenvolvido como uma prova de conceito para fins
educacionais e serve como ponto de partida para projetos maiores.

## 🔧 Tecnologias

- Node.js (ES Modules)
- JavaScript moderno (classes, módulos, validação)
- Estrutura simples de arquivos sem dependências externas

## 🚀 Começando

1. **Clone** o projeto:
   ```bash
   git clone <URL-do-repositório>
   cd minicrud
   ```

2. **Instale** (não há dependências externas, mas você pode inicializar o npm):
   ```bash
   npm install
   ```

3. **Execute**:
   ```bash
   node index.js
   ```

   Você verá saídas simulando a criação de usuários, tentativas de cadastro
   duplicado, e operações de administração e RH.

## 📁 Estrutura de pastas

```
/ (raiz do projeto)
├─ index.js         # script principal de demonstração
├─ data/
│   └─ database.js  # armazenamento em memória dos usuários
└─ src/
   └─ models/
      ├─ User.js    # classe base de usuário
      ├─ admin.js   # subclass ADMINISTRADOR
      └─ Rh.js      # subclass RH
```

## ✨ Funcionalidades

- Validações de nome, email e senha
- Prevenção contra emails duplicados
- Listagem de usuários registrados
- Métodos de `deletarUsuario` (Admin) e `contratarUsuario` (RH)
- Mecanismo simples de ativar/desativar usuários

## 💡 Adaptando para produção

Este exemplo usa um array em memória (`data/database.js`). Para usar em
um ambiente real, substitua-o por uma base de dados (SQLite, MongoDB, etc.)
 e adicione gerência de senhas mais segura, autenticação e criptografia.

## 📝 Licença

MIT © Luciano Borges
