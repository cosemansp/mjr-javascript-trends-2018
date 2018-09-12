// more tests here
// https://github.com/cypress-io/cypress-example-todomvc/blob/master/cypress/integration/app_spec.js

describe('TodoMVC - React', () => {
  // setup these constants to match what TodoMVC does
  let TODO_ITEM_ONE = 'Give Cypress a try';
  let TODO_ITEM_TWO = 'Feed the cat';
  let TODO_ITEM_THREE = 'Cleanup your code';

  beforeEach(() => {
    // By default Cypress will automatically clear the Local Storage prior to each
    // test which ensures no todos carry over between tests.
    //
    // https://on.cypress.io/api/visit
    cy.visit('/');
  });

  context('When page is initially opened', () => {
    it('should focus on the todo input field', () => {
      // get the currently focused element and assert
      // that it has class='new-todo'
      //
      // http://on.cypress.io/focused
      cy.focused().should('have.class', 'new-todo');
    });
  });

  context('New Todo', () => {
    it('should allow me to add todo items', function() {
      // create 1st todo
      cy.get('.new-todo')
        .type(TODO_ITEM_ONE)
        .type('{enter}');

      // make sure the 1st label contains the 1st todo text
      cy.get('.todo-list li')
        .eq(0)
        .find('label')
        .should('contain', TODO_ITEM_ONE);

      // create 2nd todo
      cy.get('.new-todo')
        .type(TODO_ITEM_TWO)
        .type('{enter}');

      // make sure the 2nd label contains the 2nd todo text
      cy.get('.todo-list li')
        .eq(1)
        .find('label')
        .should('contain', TODO_ITEM_TWO);
    });

    it('should clear text input field when an item is added', function() {
      cy.get('.new-todo')
        .type(TODO_ITEM_ONE)
        .type('{enter}');
      cy.get('.new-todo').should('have.text', '');
    });

    it('should append new items to the bottom of the list', function() {
      // this is an example of a custom command
      // which is stored in tests/_support/spec_helper.js
      // you should open up the spec_helper and look at
      // the comments!
      cy.createDefaultTodos().as('todos');

      // even though the text content is split across
      // multiple <span> and <strong> elements
      // `cy.contains` can verify this correctly
      cy.get('.todo-count').contains('3 items left');

      cy.get('@todos')
        .eq(0)
        .find('label')
        .should('contain', TODO_ITEM_ONE);
      cy.get('@todos')
        .eq(1)
        .find('label')
        .should('contain', TODO_ITEM_TWO);
      cy.get('@todos')
        .eq(2)
        .find('label')
        .should('contain', TODO_ITEM_THREE);
    });
  });

  context('Mark all as completed', function() {
    // New commands used here:
    // - cy.check    https://on.cypress.io/api/check
    // - cy.uncheck  https://on.cypress.io/api/uncheck

    beforeEach(function() {
      // This is an example of aliasing
      // within a hook (beforeEach).
      // Aliases will automatically persist
      // between hooks and are available
      // in your tests below
      cy.createDefaultTodos().as('todos');
    });

    it('should allow me to mark all items as completed', function() {
      // complete all todos
      // we use 'check' instead of 'click'
      // because that indicates our intention much clearer
      cy.get('.main > :nth-child(1) > label').click();

      // get each todo li and ensure its class is 'completed'
      cy.get('@todos')
        .eq(0)
        .should('have.class', 'completed');
      cy.get('@todos')
        .eq(1)
        .should('have.class', 'completed');
      cy.get('@todos')
        .eq(2)
        .should('have.class', 'completed');
    });

    it('should allow me to clear the complete state of all items', function() {
      // check and then immediately uncheck
      cy.get('.main > :nth-child(1) > label')
        .click()
        .click();

      cy.get('@todos')
        .eq(0)
        .should('not.have.class', 'completed');
      cy.get('@todos')
        .eq(1)
        .should('not.have.class', 'completed');
      cy.get('@todos')
        .eq(2)
        .should('not.have.class', 'completed');
    });
  });

  context('Item', function() {
    // New commands used here:
    // - cy.clear    https://on.cypress.io/api/clear

    it('should allow me to mark items as complete', function() {
      // we are aliasing the return value of
      // our custom command 'createTodo'
      //
      // the return value is the <li> in the <ul.todos-list>
      cy.createTodo(TODO_ITEM_ONE).as('firstTodo');
      cy.createTodo(TODO_ITEM_TWO).as('secondTodo');

      cy.get('@secondTodo').should('not.have.class', 'completed');
      cy.get('@secondTodo')
        .find('.toggle')
        .check();

      cy.get('@secondTodo').should('have.class', 'completed');
    });
  });
});
