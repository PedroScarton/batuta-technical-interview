const loginPage = require('../support/pages/LoginPage');

describe('Login Test with data from fixture', () => {
  let user;

  before(() => {
    cy.fixture('user').then((data) => {
      user = data;
    });
  });

  it('Successful login', () => {
    loginPage.visit();
    loginPage.fillEmail(user.email);
    loginPage.fillPassword(user.password);
    loginPage.clickSignIn();
    loginPage.assertUserLoggedIn();
  });

  it('Login with empty credentials', () => {
    loginPage.visit();
    loginPage.clickSignIn();
    loginPage.assertEmailValidationError('Please provide a valid email address.');
    loginPage.assertPasswordValidationError('Please provide a valid password.');
  });

  it('Login with invalid credentials', () => {
    loginPage.visit();
    loginPage.fillEmail(user.invalidEmail);
    loginPage.fillPassword(user.invalidPassword);
    loginPage.clickSignIn();
    loginPage.assertPasswordValidationError('Invalid Credentials');
  });

  it('Login with invalid credentials', () => {
    loginPage.visit();
    loginPage.clickForgotPassword();
    loginPage.assertPasswordValidationError('Invalid Credentials');
  });

  it('Forgot password success', () => {
    loginPage.visit();
    loginPage.clickForgotPassword();
    loginPage.fillEmail(user.email);
    loginPage.clickForgotPasswordSubmit();
    loginPage.assertPasswordRecoveryTitle();

  }); 
});
