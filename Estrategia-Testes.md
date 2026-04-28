# Documento de Estratégia de Testes - Projeto ALYA

## 📌 1. Funcionalidade: Cadastro de Usuário

### Regras de Negócio:

* O usuário deve informar nome, email e senha
* O email deve ser único no sistema
* A senha deve ter no mínimo 6 caracteres

### Casos de Teste:

#### ✅ Caso 1 - Cadastro válido

* Entrada: nome, email válido e senha com mais de 6 caracteres
* Resultado esperado: usuário cadastrado com sucesso
* Tipo de teste: Integração

#### ❌ Caso 2 - Email duplicado

* Entrada: email já cadastrado no sistema
* Resultado esperado: mensagem de erro informando duplicidade
* Tipo de teste: Unitário

\---

## 📌 2. Funcionalidade: Login de Usuário

### Regras de Negócio:

* O usuário deve informar email e senha
* O sistema deve validar as credenciais
* Apenas usuários cadastrados podem acessar

### Casos de Teste:

#### ✅ Caso 1 - Login válido

* Entrada: email e senha corretos
* Resultado esperado: acesso permitido ao sistema
* Tipo de teste: E2E

#### ❌ Caso 2 - Senha incorreta

* Entrada: email válido e senha incorreta
* Resultado esperado: erro de autenticação
* Tipo de teste: Unitário

\---

## 📌 3. Funcionalidade: Consulta de Dados

### Regras de Negócio:

* O usuário deve estar autenticado
* O sistema deve retornar os dados do banco
* Caso não haja dados, retornar lista vazia

### Casos de Teste:

#### ✅ Caso 1 - Consulta com dados

* Entrada: usuário autenticado
* Resultado esperado: retorno de lista com dados
* Tipo de teste: Integração

#### ❌ Caso 2 - Usuário não autenticado

* Entrada: requisição sem autenticação
* Resultado esperado: acesso negado
* Tipo de teste: E2E

