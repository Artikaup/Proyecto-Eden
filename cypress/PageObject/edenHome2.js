class EdenHome2{
    getMenuButtons(){
        return cy.get("#navbar a");
    }
    getSubTitles(){
        return cy.get("h5");
    }
}
export default new EdenHome2();