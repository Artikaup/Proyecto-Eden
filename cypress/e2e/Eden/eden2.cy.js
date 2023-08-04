/// <reference types="cypress" />

const edenHeader2 = require("../../PageObject/edenHeader2");
const edenHome2 = require("../../PageObject/edenHome2");

describe('test pagina EDEN', () => {
      
    it('verificar subtitulos', () => {
      
      cy.visit("https://www.edenentradas.com.ar/");
      edenHome2.getSubTitles().first().should("contain.text","BUSCAR EVENTO");
      edenHome2.getSubTitles().last().should("contain.text","CALENDARIO DE EVENTOS");
    });
  
    it('verificar Menu', () => {
      
        cy.visit("https://www.edenentradas.com.ar/");

        const menuBtn = ["HOME","TODOS","AGENDA DEL FINDE","RECITALES","TEATROS","CUARTETOS","FESTIVALES","SALAS"];
        menuBtn.forEach((txtBtn, $index)=>{
          edenHeader2.getMenuButtons().eq($index).should("contain.text",txtBtn);
        })

        /*edenHeader2.getMenuButtons().eq(0).should("contain.text","HOME");
        edenHeader2.getMenuButtons().eq(1).should("contain.text","TODOS");
        edenHeader2.getMenuButtons().eq(2).should("contain.text","AGENDA DEL FINDE");
        edenHeader2.getMenuButtons().eq(3).should("contain.text","RECITALES");
        edenHeader2.getMenuButtons().eq(4).should("contain.text","TEATROS");
        edenHeader2.getMenuButtons().eq(5).should("contain.text","CUARTETOS");
        edenHeader2.getMenuButtons().eq(6).should("contain.text","FESTIVALES");
        edenHeader2.getMenuButtons().eq(7).should("contain.text","SALAS");*/
      });
      it('verificar pagina RECITALES', () => {
      
        cy.visit("https://www.edenentradas.com.ar/");
        edenHeader2.getMenuButtons().eq(3).click();
        
      });
  });
  