const url = "http://localhost:3000/";

describe("Test the counter application",() =>{
  // counter should be present
  // beforeAll :- 1
  //afterAll :- 1
  //beforeEach :- number of test
  //afterEach :- number of test

    beforeEach(() => {
        cy.visit(url)
    })
    
  it("Counter should be present",() => {
  cy.visit(url);
  //using data test id 
  cy.get(".counter_value").should("exist")
  cy.get("button").should("exist"); //do not prefer this as it is not applicable in case there is multiple buttons
  cy.get("button.add_btn").should("exist");
  cy.get("button.reduce_btn").should("exist");
  
 });
 it("Counter should have text Counter:0",()  => {
    cy.visit(url); //before every test you have to visit this url
    cy.get(".counter_value").should("have.text","Counter:0");
 });
  it("Check test for buttons",() => {
    cy.get("button.add_btn").should("have.text" , "Add");
    cy.get("button.reduce_btn").should("have.text" , "Reduce");

  });
  it("On clicking Add button count should increase",() => {
    cy.get(".counter_value").should("have.text","Counter:0");
    cy.get(".add_btn").click();
    cy.get(".counter_value").should("have.text","Counter:1");
    cy.get(".add_btn").click();
    cy.get(".counter_value").should("have.text","Counter:2");
    

  });
  it("On clicking Reduce button count should decrease",() => {
    cy.get(".counter_value").should("have.text","Counter:0");
    cy.get(".reduce_btn").click();
    cy.get(".counter_value").should("have.text","Counter:-1");
    cy.get(".reduce_btn").click();
    cy.get(".counter_value").should("have.text","Counter:-2");
    cy.get(".add_btn").click();
    cy.get(".counter_value").should("have.text","Counter:-1");
  });

});