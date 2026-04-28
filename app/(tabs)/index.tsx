import { StyleSheet, Text, View, ImageBackground } from 'react-native'

export default function Home() {
  return (
    <ImageBackground
      source={require('../../assets/images/fiap.png')}
      style={styles.background}
      resizeMode="cover"
    >
      <View style={styles.overlay}>
        
        <Text style={styles.texto}>FIAP Salas App 🚀</Text>
        <Text style={styles.subtexto}>Bem-vindo ao seu projeto!</Text>

      </View>
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  background: {
    flex: 1
  },
  overlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.6)' // escurece o fundo
  },
  texto: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold'
  },
  subtexto: {
    color: '#ccc',
    marginTop: 10
  }
})