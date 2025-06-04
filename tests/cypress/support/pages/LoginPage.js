class LoginPage {
    visit() {
      cy.visit('http://localhost:3000/login');
    }
  
    fillEmail(email) {
      cy.get('#email').type(email);
    }
  
    fillPassword(password) {
      cy.get('#password').type(password);
    }
  
    clickSignIn() {
      cy.get('#auth-login-signIn-button').click();
    }

    clickForgotPassword(){
      cy.get('#auth-login-forgotPasswordOrBack-link').click();
    }

    clickForgotPasswordSubmit() {
        cy.get('#auth-loging-forgotPassworSubmit-button').click();
      }
  
    assertUserLoggedIn() {
      cy.get('#user-name-user').should('be.visible');
    }

    assertPasswordRecoveryTitle() {
        cy.get('.MuiAlertTitle-root')
          .should('be.visible')
          .and('have.text', 'Recuperación de Contraseña');
      }

    assertEmailValidationError(expectedText) {
        cy.get('span.text-error')
          .should('be.visible')
          .and('have.text', expectedText);
      }

  }
  
  module.exports = new LoginPage();
  