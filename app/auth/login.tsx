import { AuthContext } from '@/context/AuthContext'
import { useRouter } from 'expo-router'
import { useContext, useState } from 'react'
import {
  ActivityIndicator,
  Alert,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from 'react-native'

export default function Login() {
  const { login } = useContext(AuthContext)
  const router = useRouter()

  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')
  const [loading, setLoading] = useState(false)

  const [erroEmail, setErroEmail] = useState('')
  const [erroSenha, setErroSenha] = useState('')

  function validar() {
    let valido = true

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

    return valido
  }

  async function handleLogin() {
    if (!validar()) return

    setLoading(true)

    const sucesso = await login(email, senha)

    setLoading(false)

    if (!sucesso) {
      setErroSenha('Credenciais inválidas')
    } else {
      Alert.alert('Sucesso', 'Login realizado com sucesso!')
    }
  }

  const temErro = erroEmail || erroSenha || !email || !senha

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>

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

      {/* BOTÃO LOGIN */}
      <TouchableOpacity
        style={[styles.button, temErro && { opacity: 0.5 }]}
        onPress={handleLogin}
        disabled={!!temErro || loading}
      >
        {loading ? (
          <ActivityIndicator color="#000" />
        ) : (
          <Text style={styles.buttonText}>Entrar</Text>
        )}
      </TouchableOpacity>

      {/* IR PARA CADASTRO */}
      <Text style={styles.link} onPress={() => router.push('/auth/cadastro')}>
        Não tem conta? Cadastre-se
      </Text>
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
    fontWeight: 'bold',
    marginBottom: 30,
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
  },
  link: {
    color: '#f5c518',
    textAlign: 'center',
    marginTop: 15
  }
})