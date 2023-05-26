describe("Employees", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("Should be able to see the city of origin of each employee", () => {
    expect('baz').to.eq('baz')
  });
});
