import { useContext } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { AuthContext } from '@/context/AuthContext'

export default function Perfil() {
  const { user, logout } = useContext(AuthContext)

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Perfil</Text>

      {/* DADOS DO USUÁRIO */}
      {user && (
        <>
          <Text style={styles.label}>Nome:</Text>
          <Text style={styles.value}>{user.nome}</Text>

          <Text style={styles.label}>E-mail:</Text>
          <Text style={styles.value}>{user.email}</Text>
        </>
      )}

      {/* BOTÃO LOGOUT */}
      <TouchableOpacity style={styles.button} onPress={logout}>
        <Text style={styles.buttonText}>Sair</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
    padding: 20,
    justifyContent: 'center'
  },
  title: {
    color: '#fff',
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 30,
    textAlign: 'center'
  },
  label: {
    color: '#aaa',
    fontSize: 16,
    marginTop: 10
  },
  value: {
    color: '#fff',
    fontSize: 18,
    marginBottom: 10
  },
  button: {
    backgroundColor: '#ff4d4d',
    padding: 15,
    borderRadius: 10,
    marginTop: 30
  },
  buttonText: {
    textAlign: 'center',
    color: '#fff',
    fontWeight: 'bold'
  }
})