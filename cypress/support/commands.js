// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
Cypress.Commands.add("showSelectedEmployeesCity", (employeeAndCity) => {
  cy.get("#btn").click();
});

Cypress.Commands.add("expandAllNames", () => {
  return cy.get("td .jqx-icon-arrow-right").click();
});

Cypress.Commands.add("getListOfNamesAndCities", () => {
  return cy.get('.jqx-listitem-state-normal')
});

Cypress.Commands.add("checkAllEmployees", () => {
  return cy.get("tbody").find("tr").find(".jqx-tree-grid-checkbox").as("employeesCheck").click({ multiple: true });
});

Cypress.Commands.add("checkEmployeeByName", (name) => {
  cy.contains('.jqx-tree-grid-title', name).parent().children('.jqx-tree-grid-checkbox').first().click();
});
