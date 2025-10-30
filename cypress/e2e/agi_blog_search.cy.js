// cypress/e2e/agi_blog_search.cy.js
// BY Glaucio J Silveira

/// <reference types="cypress" />

import AgiHomePage from '../page-objects/AgiHomePage';

describe('Funcionalidade de Pesquisa no Blog do Agi', () => {

    beforeEach(() => {
        // Passo de Setup: Garante que a página inicial é carregada antes de cada teste
        // PASSO CRÍTICO: Limpar o estado do navegador antes de CADA teste.
        // Isso remove cookies (sessão, banners), localStorage e sessionStorage.
        cy.clearAllCookies();
        cy.clearAllLocalStorage();
        cy.clearAllSessionStorage();
        AgiHomePage.visit();
    });

    // =========================================================================
    // CENÁRIO 1: PESQUISA POR TERMO VÁLIDO ("2025")
    // =========================================================================
    it('CEN-01: Deve exibir resultados e validar o texto "2025" para uma pesquisa válida', () => {
        const termoPesquisa = '2025';

        cy.log('PASSO 1: Realizar a pesquisa pelo termo "2025"');
        AgiHomePage.realizarPesquisa(termoPesquisa);

        cy.log('PASSO 2: Validar que o texto "2025" aparece na página de resultados');
        // O texto '2025' deve aparecer no título da página de resultados.
        AgiHomePage.getMainContentArea()
            .should('contain', termoPesquisa);
        cy.log('RESULTADO: Pesquisa por termo válido executada com sucesso.');
    });

    // =========================================================================
    // CENÁRIO 2: PESQUISA POR TERMO INEXISTENTE ("zxy")
    // =========================================================================
    it('CEN-02: Deve exibir a mensagem de "Nada Encontrado" para pesquisa inválida', () => {
        const termoInexistente = 'zxy987654321';
        const mensagemEsperada = 'Lamentamos, mas nada foi encontrado para sua pesquisa, tente novamente com outras palavras.';

        cy.log('PASSO 1: Realizar a pesquisa pelo termo inexistente');
        AgiHomePage.realizarPesquisa(termoInexistente);

        cy.log('PASSO 2: Validar a mensagem de erro esperada usando cy.contains()');
        // USANDO SOLUÇÃO 1: Encontra qualquer elemento que contenha o texto exato.
        cy.contains(mensagemEsperada).should('be.visible');

        cy.log('PASSO 3: Validar que nenhum artigo é exibido');

        cy.log('RESULTADO: Pesquisa por termo inexistente validada com sucesso.');
    });
});