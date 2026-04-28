# 📱 FIAP Salas App

## 📌 Sobre o Projeto

O **FIAP Salas App** é um aplicativo mobile desenvolvido com React Native (Expo) que permite visualizar salas disponíveis e gerenciar preferências do usuário.

O problema abordado foi a **organização e visualização de salas disponíveis na FIAP**, facilitando o acesso e a experiência do aluno.

### 🎯 Operação da FIAP escolhida

A operação escolhida foi a **gestão de salas e espaços acadêmicos**, pois é algo presente no dia a dia dos alunos e pode ser otimizado com tecnologia.

### 🔄 Melhorias em relação ao CP1

- Implementação de **autenticação de usuário**
- Persistência de dados com **AsyncStorage**
- Uso de **Context API** para estado global
- Criação de **tela de cadastro**
- Validação completa de formulários
- Proteção de rotas (usuário precisa estar logado)
- Melhorias de UX/UI (feedback visual, loading, etc.)
- Uso de **armazenamento seguro com SecureStore (diferencial)**

---

## ⚙️ Funcionalidades

- ✅ Cadastro de usuário  
- ✅ Login com validação  
- ✅ Logout  
- ✅ Persistência de sessão  
- ✅ Listagem de salas  
- ✅ Marcar salas como favoritas ⭐  
- ✅ Persistência de dados (favoritos)  
- ✅ Validação de formulários  
- ✅ Proteção de rotas  
- ✅ Feedback visual (erros, loading e sucesso)  

---

## 👥 Integrantes do Grupo

- **Nome:** Pedro Luis Tofoli  
- **RM:** 564441  

---

## 🚀 Como Rodar o Projeto

### 📋 Pré-requisitos

- Node.js instalado  
- Expo CLI  
- Expo Go (celular)  
- Android Studio (opcional)  

---

### ▶️ Passo a passo

git clone https://github.com/Pedro184294/fiap-cpad-cp2-fiap-salas-app
cd fiap-cpad-cp2-fiap-salas-app
npm install
npx expo start

### 📸 Demonstração Visual
## 📱 Telas do App

### 🔐 Login
[![Login](https://raw.githubusercontent.com/Pedro184294/fiap-cpad-cp2-fiap-salas-app/main/assets/images/login.png)](https://raw.githubusercontent.com/Pedro184294/fiap-cpad-cp2-fiap-salas-app/main/assets/images/login.png)

### 📝 Cadastro
[![Cadastro](https://raw.githubusercontent.com/Pedro184294/fiap-cpad-cp2-fiap-salas-app/main/assets/images/cadastro.png)](https://raw.githubusercontent.com/Pedro184294/fiap-cpad-cp2-fiap-salas-app/main/assets/images/cadastro.png)

### 🏠 Home
[![Home](https://raw.githubusercontent.com/Pedro184294/fiap-cpad-cp2-fiap-salas-app/main/assets/images/home.png)](https://raw.githubusercontent.com/Pedro184294/fiap-cpad-cp2-fiap-salas-app/main/assets/images/home.png)

### 🏫 Salas
[![Salas](https://raw.githubusercontent.com/Pedro184294/fiap-cpad-cp2-fiap-salas-app/main/assets/images/salas.png)](https://raw.githubusercontent.com/Pedro184294/fiap-cpad-cp2-fiap-salas-app/main/assets/images/salas.png)

### 👤 Perfil
[![Perfil](https://raw.githubusercontent.com/Pedro184294/fiap-cpad-cp2-fiap-salas-app/main/assets/images/perfil.png)](https://raw.githubusercontent.com/Pedro184294/fiap-cpad-cp2-fiap-salas-app/main/assets/images/perfil.png)

---

### 🎥 Vídeo do App

[![Assista ao vídeo](https://img.youtube.com/vi/aGHD3ZuMyqw/0.jpg)](https://youtu.be/aGHD3ZuMyqw)

> Clique na imagem para assistir à demonstração completa no YouTube
Fluxo demonstrado:

Cadastro → Login → Uso do app → Logout

## 🧠 Decisões Técnicas

### 📁 Estrutura do Projeto

O projeto foi organizado da seguinte forma:

- `app/` → Telas do aplicativo  
- `components/` → Componentes reutilizáveis  
- `context/` → Gerenciamento de estado global  
- `assets/` → Imagens e recursos  

---

### 🔐 Context API

Foi criado o **AuthContext**, responsável por:

- Gerenciar usuário logado  
- Função de login  
- Função de logout  
- Persistência de sessão  

---

### 🔑 Autenticação

A autenticação foi implementada com:

- Cadastro de usuário  
- Validação de credenciais no login  
- Persistência de sessão  
- Controle de acesso às telas  

---

### 💾 Persistência com AsyncStorage

Os seguintes dados são persistidos:

- Usuário logado  
- Salas favoritas  

Os dados são carregados automaticamente ao iniciar o app utilizando `useEffect`.

---

### 🔒 Navegação protegida

A navegação foi protegida com base no estado global:

- Usuário não logado → acesso apenas às telas de autenticação  
- Usuário logado → acesso completo ao app  

---

## 🚀 Diferencial Técnico

Foi utilizado o **Expo SecureStore** para armazenamento seguro de dados.

---

### 🎯 Justificativa

O SecureStore permite armazenar dados com criptografia nativa do dispositivo, garantindo maior segurança em comparação ao AsyncStorage tradicional.

Isso melhora a proteção das informações do usuário, especialmente dados sensíveis como login.

---

### ⚙️ Implementação

- Uso do SecureStore para armazenar dados do usuário  
- Integração com AsyncStorage como fallback para web  
- Aplicação no controle de sessão do usuário  

---

## 🔮 Próximos Passos

- Integração com API real  
- Sistema de reserva de salas  
- Notificações  
- Melhorias visuais (UI/UX)  
- Sistema de busca e filtros  

---

## 📌 Considerações Finais

O projeto evoluiu significativamente em relação ao CP1, incorporando conceitos importantes como autenticação, persistência de dados e gerenciamento de estado global.

Além disso, foram aplicadas melhorias de experiência do usuário e um diferencial técnico voltado à segurança, tornando a aplicação mais completa e robusta.