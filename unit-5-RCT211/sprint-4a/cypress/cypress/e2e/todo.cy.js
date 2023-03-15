const url = "https://example.cypress.io/todo";

describe("Test cypress Todo",()  => {
    beforeEach(() => {
        cy.visit(url);
    })
    it("Check if input box present",() => {
        cy.get("input.new-todo").should("exist");

    });
    it("We should be able to add a new todo",() => {
        cy.get("todo-list").children().
        cy.get("input.new-todo").type("Learn Cypress{enter}");
    })
})