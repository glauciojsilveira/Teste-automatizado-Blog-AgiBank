# Projeto de Automação de Testes - Blog do Agi

Este projeto contém testes automatizados end-to-end (E2E) para a funcionalidade de pesquisa do Blog do Agi, utilizando o Cypress e seguindo o padrão Page Object Model (POM).

## 🚀 Estratégia de Testes

A automação foca nos cenários mais críticos da pesquisa:

**Caminho Feliz (CEN-01):** Pesquisa com termo válido e verificação de resultados.
**Caminho Negativo (CEN-02):** Pesquisa com termo inexistente e verificação da mensagem de erro.

A estrutura do código utiliza **Page Object Model (POM)** para separar os seletores de elementos (`AgiHomePage.js`) da lógica dos testes para aumentar a legibilidade e reusabilidade do código.

## 🛠️ Pré-requisitos

Para rodar este projeto, você precisa ter o Node.js instalado (versão LTS recomendada).

## 💻 Configuração e Instalação

Passo 1 - Instale o Node.Js
Siga os passos abaixo para configurar o ambiente de automação.
Certifique-se de que o Node.js está instalado.
Passo 2 - No terminal digite:
npm init -y
Passo 3 - Instale o Cypress como uma dependência de desenvolvimento:
npm install cypress --save-dev
Passo 4 - Execute o comando abaixo para abrir o Test Runner do Cypress:
npx cypress open
Passo 5 - Selecione E2E Testing.
Passo 6 - Escolha o navegador desejado.Selecione E2E Testing. de preferencia ao Electron
Passo 7 - Outra oppção Se desejar executar todos os testes no modo silencioso sem interface grafica:
no prompt digite npx cypress run --spec "cypress/e2e/agi_blog_search.cy.js"

## By Glaucio José Silveira
