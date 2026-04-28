import AsyncStorage from '@react-native-async-storage/async-storage'
import * as SecureStore from 'expo-secure-store'
import { createContext, ReactNode, useEffect, useState } from 'react'
import { Platform } from 'react-native'

type User = {
  nome: string
  email: string
  senha: string
}

type AuthContextType = {
  user: User | null
  login: (email: string, senha: string) => Promise<boolean>
  register: (nome: string, email: string, senha: string) => Promise<void>
  logout: () => void
}

export const AuthContext = createContext<AuthContextType>({} as AuthContextType)

// 👉 função inteligente (web vs mobile)
async function saveData(key: string, value: string) {
  if (Platform.OS === 'web') {
    await AsyncStorage.setItem(key, value)
  } else {
    await SecureStore.setItemAsync(key, value)
  }
}

async function getData(key: string) {
  if (Platform.OS === 'web') {
    return await AsyncStorage.getItem(key)
  } else {
    return await SecureStore.getItemAsync(key)
  }
}

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null)

  useEffect(() => {
    loadUser()
  }, [])

  async function loadUser() {
    const data = await getData('user')
    if (data) {
      setUser(JSON.parse(data))
    }
  }

  async function login(email: string, senha: string) {
    const data = await getData('user')
    if (!data) return false

    const userData: User = JSON.parse(data)

    if (userData.email === email && userData.senha === senha) {
      setUser(userData)
      return true
    }

    return false
  }

  async function register(nome: string, email: string, senha: string) {
    const newUser: User = { nome, email, senha }

    await saveData('user', JSON.stringify(newUser))
    setUser(newUser)
  }

  function logout() {
    setUser(null)
  }

  return (
    <AuthContext.Provider value={{ user, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  )
}