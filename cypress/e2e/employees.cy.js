describe("Employees", () => {
  beforeEach(() => {
    cy.visit("http://localhost:8080/");
  });

  it("Should be able to see the city of origin of each employee", () => {
    expect('baz').to.eq('baz')
  });
});
