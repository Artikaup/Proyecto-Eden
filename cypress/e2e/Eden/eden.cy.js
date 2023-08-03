/// <reference types="cypress" />

import EdenHeader from "../../PageObject/edenHeader";
import EdenHome from "../../PageObject/edenHome";
const edenHeader = new EdenHeader();
const edenHome = new EdenHome();

describe('test pagina EDEN', () => {
    
  
    it('verificar subtitulos', () => {
      
      cy.visit("https://www.edenentradas.com.ar/");

      const txtBuscar = "BUSCAR EVENTO";
      const txtCalendar = "CALENDARIO DE EVENTOS";
      edenHome.getSubTitles().first().should("contain.text", txtBuscar);
      edenHome.getSubTitles().last().should("contain.text", txtCalendar);
    });
  
    it('verificar Menu', () => {
      
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
      it('verificar pagina RECITALES', () => {
      
        cy.visit("https://www.edenentradas.com.ar/");
        edenHeader.getMenuButtons().eq(3).click();
        
      });
  });
  