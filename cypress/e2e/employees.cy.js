describe("List of cities of origin for Employees", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("Should be able to see the city of origin of employee by name", () => {
    cy.checkEmployeeByName('Andrew')
    cy.checkEmployeeByName('Janet')
    cy.checkEmployeeByName('Laura')

    cy.showSelectedEmployeesCity()
    
    //assertions
    // the list should have only 3 results
    cy.getListOfNamesAndCities().its('length').should('eq', 3)

    // get the name and its city
    cy.getListOfNamesAndCities().should('contains.text', 'Andrew is from Tacoma')
    cy.getListOfNamesAndCities().should('contains.text', 'Janet is from Kirkland')
    cy.getListOfNamesAndCities().should('contains.text', 'Laura is from Seattle')
  });

  it("Should be able to see the city of origin of all employees", () => {
    cy.expandAllNames()
    cy.checkAllEmployees()
    cy.showSelectedEmployeesCity()
    
    cy.getListOfNamesAndCities().its('length').should('eq', 9)
    
    //assertions
    // get the all names and its cities
    cy.getListOfNamesAndCities().should('contains.text', 'Nancy is from Seattle')
    cy.getListOfNamesAndCities().should('contains.text', 'Janet is from Kirkland')
    cy.getListOfNamesAndCities().should('contains.text', 'Margaret is from Redmond')
    cy.getListOfNamesAndCities().should('contains.text', 'Steven is from London')
    cy.getListOfNamesAndCities().should('contains.text', 'Michael is from London')
    cy.getListOfNamesAndCities().should('contains.text', 'Robert is from London')
    cy.getListOfNamesAndCities().should('contains.text', 'Anne is from London')
    cy.getListOfNamesAndCities().should('contains.text', 'Laura is from Seattle')
  });

  it("Shouldn't return any results if none is selected", () => {

    cy.showSelectedEmployeesCity()
    
    //assertions
    // the list is empty
    cy.getListOfNamesAndCities().should('not.exist');
  });

  it("Should be able to check and uncheck a name in the list", () => {
    cy.checkEmployeeByName('Andrew')
    cy.checkEmployeeByName('Andrew')

    cy.showSelectedEmployeesCity()
    
    //assertions
    // the list is empty
    cy.getListOfNamesAndCities().should('not.exist');
  });

  it.skip("Should be able to move and get results between pages (pagination)", () => {
  });
});
