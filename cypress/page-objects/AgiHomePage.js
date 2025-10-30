// cypress/page-objects/AgiHomePage.js
// BY Glaucio J Silveira

class AgiHomePage {
    // 1. URL base
    visit() {
        cy.visit('https://blogdoagi.com.br/');
        cy.wait(4000);
        
    }

    // 2. Seletor do ícone da Lupa (Ação de Clique)
    getSearchIcon() {
        // Usamos um seletor específico para o ícone de pesquisa (SVG)
        return cy.get('div.site-header-above-section-right > div.ast-builder-layout-element > div > div svg');
    }

    // 3. Seletor do campo de Input da Pesquisa
    getSearchInput() {
        // Seletor para o campo de texto (input) que aparece após clicar na lupa
        return cy.get('input[type="search"]').first();
    }

    
    // 4. Seletor do Título/Área Principal de Conteúdo
    getMainContentArea() {
        // Seletor para a área onde as mensagens de sucesso ou erro aparecem
        cy.wait(5000);
        return cy.get('.entry-content, .archive-title, .search-results');
    }

    /**
     * Palavra-chave de Alto Nível: Executa a ação completa de pesquisa.
     * @param {string} termo - O termo a ser digitado.
     */
    realizarPesquisa(termo) {
        this.getSearchIcon().click();
        cy.wait(4000);
        // this.getSearchInput().focus().should('be.focused');
        // this.getSearchInput().type(`${termo}{enter}`);
        this.getSearchInput().type(`${termo}{enter}`, { force: true });
        
    }
}

export default new AgiHomePage();