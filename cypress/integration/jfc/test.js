describe('Login', () => {
    //beforeEach(() => {
      // Because we're only testing the homepage
      // in this test file, we can run this command
      // before each individual test instead of
      // repeating it in every test.
      
      // reset and seed the database prior to every test
      //cy.exec('npm run db:reset && npm run db:seed')

      // seed a user in the DB that we can control from our tests
      // assuming it generates a random password for us
      /*cy.request('POST', 'http://franchising-uat.jfcgrp.com/api/v1/auth/login', { userEmail: "atiu@test.com", userPassword: "test1234" })
        .its('body.data.user')
        .as('currentUser')*/
      //cy.visit('/');
      //console.log(this.currentUser);
    //});
  
    it('Should display the main.', function() {
      // destructuring assignment of the this.currentUser object
      cy.visit('/');
      const email = 'atiu@test.com';
      
      cy.get('#app > div.application--wrap > main > div > div > div > div > div.elevation-24.v-card.theme--light > div')
        .contains('JFC Franchising').screenshot();
      cy.get('#app > div.application--wrap > main > div > div > div > div > div.elevation-24.v-card.theme--light > form > div.v-card__text > div:nth-child(1) > div.v-input__control > div.v-input__slot > div > label')
        .contains('Email');
      cy.get('#app > div.application--wrap > main > div > div > div > div > div.elevation-24.v-card.theme--light > form > div.v-card__text > div:nth-child(1) > div.v-input__control > div.v-input__slot > div > input[type="text"]')
        .clear()
        .type(email)
        .should('have.value','atiu@test.com'); 
      cy.get('#app > div.application--wrap > main > div > div > div > div > div.elevation-24.v-card.theme--light > form > div.v-card__text > div:nth-child(2) > div.v-input__control > div.v-input__slot > div > input[type="password"]')
        .clear()  
        .type('test1234{enter}')
        .should('have.value','test1234');
        cy.url().should('include', '#/dashboard/main');
        cy.wait(5000);
    });

    it('Logout', function() {
      cy.get('.v-menu__activator').click();
      cy.get('#inspire > div.v-menu__content.menuable__content__active.theme--dark').should('be.visible');
      cy.get('#inspire > div.v-menu__content.menuable__content__active.theme--dark > div > button').click();  
    });
  });


  describe('Register', function() {
    it('Go to Register page', function() {
      const registerPass = 'test1234';
      cy.get('#no-padding > div > div > div > a').click();
      cy.url().should('include', '#/register');
      // Firstname
      cy.get('#app > div.application--wrap > main > div > div > div > div > div.elevation-24.v-card.theme--light > form > div.v-card__text > div:nth-child(1) > div > div.v-input__slot > div > input[type="text"]')
        .type('dev');
      // Middlename
      cy.get('#app > div.application--wrap > main > div > div > div > div > div.elevation-24.v-card.theme--light > form > div.v-card__text > div:nth-child(2) > div > div.v-input__slot > div > input[type="text"]')
        .type('dev')
      // Lastname
      cy.get('#app > div.application--wrap > main > div > div > div > div > div.elevation-24.v-card.theme--light > form > div.v-card__text > div:nth-child(3) > div > div.v-input__slot > div > input[type="text"]')
        .type('dev')
      // Email
      cy.get('#app > div.application--wrap > main > div > div > div > div > div.elevation-24.v-card.theme--light > form > div.v-card__text > div:nth-child(4) > div > div.v-input__slot > div > input[type="text"]')
        .type('mmorales+001@asi-dev5.com')
      // Password
      cy.get('#app > div.application--wrap > main > div > div > div > div > div.elevation-24.v-card.theme--light > form > div.v-card__text > div:nth-child(5) > div > div.v-input__slot > div > input[type="password"]')
        .type(registerPass)
      // Cpassword
      cy.get('#app > div.application--wrap > main > div > div > div > div > div.elevation-24.v-card.theme--light > form > div.v-card__text > div:nth-child(6) > div > div.v-input__slot > div > input[type="password"]')
        .type(registerPass)
      cy.get('#app > div.application--wrap > main > div > div > div > div > div.elevation-24.v-card.theme--light > form > div.v-card__text > div.layout.row.wrap > div.flex.no-left-margin.xs1.md1 > div > div > div.v-input__slot > div > div').click();
     
      cy.get('#app > div.application--wrap > main > div > div > div > div > div.elevation-24.v-card.theme--light > form > div.v-card__text > div:nth-child(11) > div > div > iframe')
      .then(function ($iframe) {
          cy.wrap($iframe).get('#recaptcha-anchor').click();
      })
      
      cy.get('#app > div.application--wrap > main > div > div > div > div > div.elevation-24.v-card.theme--light > form > div.v-card__text > button').click();
    });
  });