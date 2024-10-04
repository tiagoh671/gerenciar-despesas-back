# Gerenciamento de Despesas - Frontend

Este projeto é uma aplicação Back-End. **CRUD** de gerenciamento de despesas financeiras, construída utilizando **Express** e um banco de dados **MySQL** para persistência de dados. A aplicação permite listar, adicionar, alterar e remover despesas.

## Funcionalidades

- **Listar todas as despesas**: Visualize todas as despesas cadastradas no sistema.
- **Adicionar novas despesas**: Insira novas despesas com informações como descrição, preço, data e tipo (entrada ou saída).
- **Editar despesas**: Altere informações de despesas existentes.
- **Deletar despesas**: Remova despesas indesejadas do sistema.

## Tecnologias Utilizadas

- **Node.js**: Ambiente de execução JavaScript no lado do servidor.
- **Express**: Framework minimalista para Node.js, utilizado para criar a API RESTful.
- **MySQL**: Banco de dados relacional para armazenar as despesas.
- **Cors**: Middleware para habilitar o compartilhamento de recursos entre diferentes origens.
- **JavaScript (ES6+)**: Linguagem utilizada no desenvolvimento do back-end.

## Endpoints da API

### `GET /despesas`
Retorna todas as despesas cadastradas.

### `POST /despesas`
Adiciona uma nova despesa. Requer os seguintes dados no corpo da requisição:
```json
{
  "descricao": "Descrição da despesa",
  "preco": 100.00,
  "date": "2024-10-02",
  "tipo": "saida"
}
```

### `PATCH /despesas/:id`
Adiciona uma nova despesa. Requer os seguintes dados no corpo da requisição:
```json
{
  "descricao": "Nova descrição",
  "preco": 150.00
}
```
### `DELETE /despesas/:id`
Deleta uma despesa com base no ID fornecido.

## Como Executar o Projeto

### Pré requisitos
- **Node.js** (versão 14.x ou superior)
- **MySQL** (com um banco de dados configurado)

### Passos para configuração

1. Clone o repositório

```bash
git clone https://github.com/tiagoh671/gerenciar-despesas-back.git
```
2. Navegue até o diretório do projeto:
```bash
cd seu-repositorio
```
3. Instale as dependências:
```bash
npm install
```
4. Configure o banco de dados MySQL criando as tabelas necessárias. Exemplo de tabela:
```bash
CREATE TABLE tabela_despesas (
  id INT AUTO_INCREMENT PRIMARY KEY,
  descricao VARCHAR(255) NOT NULL,
  preco DECIMAL(10, 2) NOT NULL,
  date DATE NOT NULL,
  tipo ENUM('entrada', 'saida') NOT NULL
);
```
5. Configure as credenciais de acesso ao MySQL no arquivo `conexao.js`

6. Execute a aplicação:
```bash
node index.js
```
7. Acesse a aplicação em `http://localhost:8080`

## Melhorias futuras

- Implementação de autenticação de usuários.
- Relatórios financeiros detalhados por períodos específicos.
- Dashboard com visualizações gráficas.
