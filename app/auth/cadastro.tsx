import { useState, useContext } from 'react'
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native'
import { AuthContext } from '@/context/AuthContext'
import { useRouter } from 'expo-router'

export default function Cadastro() {
  const { register } = useContext(AuthContext)
  const router = useRouter()

  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')
  const [confirmar, setConfirmar] = useState('')

  // 🔴 ERROS SEPARADOS
  const [erroNome, setErroNome] = useState('')
  const [erroEmail, setErroEmail] = useState('')
  const [erroSenha, setErroSenha] = useState('')
  const [erroConfirmar, setErroConfirmar] = useState('')

  function validar() {
    let valido = true

    // NOME
    if (!nome) {
      setErroNome('O nome é obrigatório')
      valido = false
    } else {
      setErroNome('')
    }

    // EMAIL
    if (!email) {
      setErroEmail('O e-mail é obrigatório')
      valido = false
    } else if (!email.includes('@')) {
      setErroEmail('E-mail inválido')
      valido = false
    } else {
      setErroEmail('')
    }

    // SENHA
    if (!senha) {
      setErroSenha('A senha é obrigatória')
      valido = false
    } else if (senha.length < 6) {
      setErroSenha('A senha deve ter pelo menos 6 caracteres')
      valido = false
    } else {
      setErroSenha('')
    }

    // CONFIRMAR SENHA
    if (!confirmar) {
      setErroConfirmar('Confirme a senha')
      valido = false
    } else if (senha !== confirmar) {
      setErroConfirmar('As senhas não coincidem')
      valido = false
    } else {
      setErroConfirmar('')
    }

    return valido
  }

  async function handleCadastro() {
    if (!validar()) return

    await register(nome, email, senha)
    router.replace('/')
  }

  const temErro =
    !nome || !email || !senha || !confirmar ||
    erroNome || erroEmail || erroSenha || erroConfirmar

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cadastro</Text>

      {/* NOME */}
      <TextInput
        placeholder="Nome completo"
        placeholderTextColor="#999"
        style={styles.input}
        value={nome}
        onChangeText={setNome}
      />
      {erroNome ? <Text style={styles.erro}>{erroNome}</Text> : null}

      {/* EMAIL */}
      <TextInput
        placeholder="E-mail"
        placeholderTextColor="#999"
        style={styles.input}
        value={email}
        onChangeText={setEmail}
      />
      {erroEmail ? <Text style={styles.erro}>{erroEmail}</Text> : null}

      {/* SENHA */}
      <TextInput
        placeholder="Senha"
        placeholderTextColor="#999"
        secureTextEntry
        style={styles.input}
        value={senha}
        onChangeText={setSenha}
      />
      {erroSenha ? <Text style={styles.erro}>{erroSenha}</Text> : null}

      {/* CONFIRMAR */}
      <TextInput
        placeholder="Confirmar senha"
        placeholderTextColor="#999"
        secureTextEntry
        style={styles.input}
        value={confirmar}
        onChangeText={setConfirmar}
      />
      {erroConfirmar ? <Text style={styles.erro}>{erroConfirmar}</Text> : null}

      {/* BOTÃO */}
      <TouchableOpacity
        style={[styles.button, temErro && { opacity: 0.5 }]}
        onPress={handleCadastro}
        disabled={!!temErro}
      >
        <Text style={styles.buttonText}>Cadastrar</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
    justifyContent: 'center',
    padding: 20
  },
  title: {
    color: '#fff',
    fontSize: 28,
    marginBottom: 20,
    textAlign: 'center'
  },
  input: {
    backgroundColor: '#1e1e1e',
    color: '#fff',
    padding: 15,
    borderRadius: 10,
    marginBottom: 5
  },
  erro: {
    color: 'red',
    marginBottom: 10
  },
  button: {
    backgroundColor: '#f5c518',
    padding: 15,
    borderRadius: 10,
    marginTop: 10
  },
  buttonText: {
    textAlign: 'center',
    fontWeight: 'bold'
  }
})