/// <reference types="cypress" />

import EdenHeader from "../../PageObject/edenHeader";
import EdenHome from "../../PageObject/edenHome";
import EdenEvent from "../../PageObject/edenEvent";

const edenHeader = new EdenHeader();
const edenHome = new EdenHome();
const edenEvent = new EdenEvent();

describe('Test pagina EDEN', () => {
    
  
    it('Verificar subtitulos', () => {
      
      cy.visit("https://www.edenentradas.com.ar/");

      const txtBuscar = "BUSCAR EVENTO";
      const txtCalendar = "CALENDARIO DE EVENTOS";
      edenHome.getSubTitles().first().should("contain.text", txtBuscar);
      edenHome.getSubTitles().last().should("contain.text", txtCalendar);
    });
  
    it('Verificar Menu', () => {
      
        cy.visit("https://www.edenentradas.com.ar/");

        const menuBtn = ["HOME","TODOS","AGENDA DEL FINDE","RECITALES","TEATROS","CUARTETOS","FESTIVALES","SALAS"];
       
       edenHeader.getMenuButtons().each((button, $index)=>{
        cy.wrap(button).should("contain.text", menuBtn[$index]);
       });
       /* edenHeader.getMenuButtons().eq(0).should("contain.text",menuBtn [0]);
        edenHeader.getMenuButtons().eq(2).should("contain.text",menuBtn [1]);
        edenHeader.getMenuButtons().eq(3).should("contain.text",menuBtn [2]);
        edenHeader.getMenuButtons().eq(4).should("contain.text",menuBtn [3]);
        edenHeader.getMenuButtons().eq(5).should("contain.text",menuBtn [4]);
        edenHeader.getMenuButtons().eq(6).should("contain.text",menuBtn [5]);
        edenHeader.getMenuButtons().eq(7).should("contain.text",menuBtn [6]);*/
      });
      it('Verificar pagina RECITALES', () => {
      
        cy.visit("https://www.edenentradas.com.ar/");
        edenHeader.getMenuButtons().contains("RECITALES").click();

        cy.url().should("include","/sitio/contenido/recitales");
        /*const newUrl = "https://www.edenentradas.com.ar/sitio/contenido/recitales";
        cy.url().should("eq", newUrl)
        /*cy.url().should("eq","https://www.edenentradas.com.ar/sitio/contenido/recitales"); esta es una manera sin usar const*/
        
      });

      it('Verificar imagen de logo',() => {

        cy.visit("https://www.edenentradas.com.ar/");
        edenHeader.getImageLogo().should("be.visible").and ("have.prop", "naturalHeight").and("be.greaterThan",0);
        const imgSource = "https://static.edenentradas.com.ar/sitio/images/logo.gif";
        edenHeader.getImageLogo().should("have.attr","src", imgSource);
        edenHeader.getImageLogo().should("have.attr","alt","EdenEntradas");
      });

      it.only('Verificar funcionamiento del buscador',() =>{
        cy.visit("https://www.edenentradas.com.ar/");
        edenHeader.getSearchInput().type("Queen");
        edenHeader.getSearchSuggestion().click();
        const eventTxt = 'Experiencia Queen "Champions of the World Tour 23" ';
        edenEvent.getEventTitle().should("contain.text", eventTxt);
      });
  });
  