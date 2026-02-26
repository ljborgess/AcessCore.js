import Admin from "./src/models/admin.js"
import Rh from "./src/models/Rh.js"
import { User } from "./src/models/User.js"
import { usuarios } from "./data/database.js"

console.log("🚀 Iniciando sistema...\n")

try {
  // Criando usuários
  const admin = new Admin("Luciano", "admin@email.com", "123456")
  const rh = new Rh("Maria", "rh@email.com", "123456")
  const user1 = new User("João", "joao@email.com", "123456", "USER")

  console.log("✅ Usuários criados com sucesso!\n")

  // Testando email duplicado
  try {
    const userDuplicado = new User("Carlos", "joao@email.com", "123456", "USER")
  } catch (error) {
    console.log("❌ Erro ao criar usuário:", error.message)
  }

  console.log("\n📋 Lista de usuários:")
  usuarios.forEach(u => {
    console.log(u.exibirInfos())
  })

  // Admin desativando usuário
  console.log("\n🛑 Admin desativando João...")
  admin.deletarUsuario(user1)

  console.log(user1.exibirInfos())

  // RH reativando
  console.log("\n👔 RH reativando João...")
  rh.contratarUsuario(user1)

  console.log(user1.exibirInfos())

} catch (error) {
  console.log("Erro geral:", error.message)
}
