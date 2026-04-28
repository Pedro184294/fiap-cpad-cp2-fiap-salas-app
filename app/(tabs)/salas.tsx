import { useEffect, useState } from 'react'
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'

// 👉 Lista fixa de salas (mock)
const salasMock = [
  { id: '1', nome: 'Sala A' },
  { id: '2', nome: 'Sala B' },
  { id: '3', nome: 'Sala C' }
]

export default function Salas() {
  const [favoritos, setFavoritos] = useState<string[]>([])

  // 🔄 Carregar dados ao abrir
  useEffect(() => {
    carregarFavoritos()
  }, [])

  async function carregarFavoritos() {
    const data = await AsyncStorage.getItem('favoritos')
    if (data) {
      setFavoritos(JSON.parse(data))
    }
  }

  // ⭐ Favoritar / desfavoritar
  async function toggleFavorito(id: string) {
    let novosFavoritos = [...favoritos]

    if (novosFavoritos.includes(id)) {
      novosFavoritos = novosFavoritos.filter(item => item !== id)
    } else {
      novosFavoritos.push(id)
    }

    setFavoritos(novosFavoritos)

    // 💾 Salvar no AsyncStorage
    await AsyncStorage.setItem('favoritos', JSON.stringify(novosFavoritos))
  }

  function renderItem({ item }: any) {
    const isFavorito = favoritos.includes(item.id)

    return (
      <View style={styles.card}>
        <Text style={styles.nome}>{item.nome}</Text>

        <TouchableOpacity onPress={() => toggleFavorito(item.id)}>
          <Text style={styles.star}>
            {isFavorito ? '⭐ Favorito' : '☆ Favoritar'}
          </Text>
        </TouchableOpacity>
      </View>
    )
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Salas</Text>

      <FlatList
        data={salasMock}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
    padding: 20
  },
  title: {
    color: '#fff',
    fontSize: 24,
    marginBottom: 20
  },
  card: {
    backgroundColor: '#1e1e1e',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10
  },
  nome: {
    color: '#fff',
    fontSize: 18
  },
  star: {
    color: '#f5c518',
    marginTop: 10
  }
})