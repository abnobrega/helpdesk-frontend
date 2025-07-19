# HelpDesk Frontend 📞🖥️

Este é o **frontend** do sistema **HelpDesk**, desenvolvido com **Angular 15**.  
Permite cadastro e gestão de **Técnicos**, **Clientes** e **Chamados**, com **autenticação JWT** e navegação protegida por guards.

---

## 🚀 Tech Stack

- **Framework:** Angular 15+
- **Linguagem:** TypeScript
- **HTTP Client:** Angular HttpClientModule
- **Autenticação:** JWT (AuthInterceptor, AuthService)
- **Guards:** AuthGuard para rotas seguras
- **Router:** Angular Router

---

## 📂 Estrutura de Pastas

--- 

src/app/
├── components/ # Componentes de interface (Login, Dashboard, Listagem, etc.)
├── services/ # Serviços de API (Auth, Técnico, Cliente, Chamado)
├── models/ # Modelos de dados (DTOs, Interfaces)
├── interceptors/ # Interceptor para JWT
├── guards/ # AuthGuard para proteger rotas
├── app-routing.module.ts # Configuração das rotas

---


---

## ⚙️ Como rodar localmente

### 1️⃣ Clone o repositório

git clone https://github.com/abnobrega/helpdesk-frontend.git

---

2️⃣ Acesse o diretório
bash
Copiar
Editar
cd helpdesk-frontend

---

3️⃣ Instale as dependências
bash
Copiar
Editar
npm install

---

4️⃣ Rode o projeto
bash
Copiar
Editar
ng serve
A aplicação estará disponível em http://localhost:4200.

---

✅ Funcionalidades
- Login com autenticação JWT

- Cadastro, edição e exclusão de Técnicos

- Cadastro, edição e exclusão de Clientes

- Cadastro, atualização e consulta de Chamados

- Controle de acesso por perfil de usuário

- Interceptador de requisições com token JWT

- Proteção de rotas com AuthGuard

---

🧩 Requisitos
- Node.js (versão recomendada: 16+)
- Angular CLI (npm install -g @angular/cli)

--

👨‍💻 Author
- Developed by Alexandre Bonturi Nóbrega
- Independent Backend & Web3 Software Engineer
- LinkedIn: https://www.linkedin.com/in/alexandrebonturinobrega/

---

🗂️ Licença
- Este projeto é de uso pessoal e educacional.

---

📣 Backend
- Este frontend consome a API REST do HelpDesk Backend.

✨ Contato
- Dúvidas ou sugestões? Entre em contato no - LinkedIn: https://www.linkedin.com/in/alexandrebonturinobrega/
