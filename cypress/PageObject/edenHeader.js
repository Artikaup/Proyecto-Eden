/// <reference types="cypress" />

class EdenHeaderLocators{
    constructor(){
        //Botonera y header principal
        this.imageLogo = "#header-logo";
        this.menuButtons = "#navbar a";
        
        //Sección de busqueda
        this.searchInput = "#espectaculoList";
        this.searchSuggestion = ".ui-menu-item";

    
    }
}

export default class EdenHeader{
    constructor(){
        this.locators = new EdenHeaderLocators;
    }
    //Botonera y header principal
    getImageLogo(){
        return cy.get(this.locators.imageLogo);
    }
    getMenuButtons(){
        return cy.get(this.locators.menuButtons);
    }
    //Sección de busqueda
    getSearchInput(){
        return cy.get(this.locators.searchInput);
    }
    getSearchSuggestion(){
        return cy.get(this.locators.searchSuggestion);
    }
}