import userData from "../fixtures/userData.json"

describe('Orange HRM test', () => {

  const selectorsList = {
    usernameField: "[name='username']",
    passwordField: "[name='password']",
    loginButton: "[type='submit']",
    sectionTitleTopBar: '.oxd-topbar-header-breadcrumb-module',
    dashboardGrid: ".orangehrm-dashboard-grid",
    wrongCredentialAlert: "[role='alert']",
    myInfoButton: "[href='/web/index.php/pim/viewMyDetails']",
    firstNameField: "[name='firstName']",
    middleNameField: "[name='middleName']",
    lastNameField: "[name='lastName']",
    genericField: ".oxd-input--active",
    dateFields: ".oxd-date-input",
    dateCloseButton: ".--close",
    submitButton: "[type='submit']"
  }

  it('User Info Update - Sucess', () => {

    cy.visit('/auth/login')
    cy.get(selectorsList.usernameField).type(userData.userSuccess.username)
    cy.get(selectorsList.passwordField).type(userData.userSuccess.password)
    cy.get(selectorsList.loginButton).click()
    cy.location('pathname').should('equal','/web/index.php/dashboard/index')
    cy.get(selectorsList.dashboardGrid)
    cy.get(selectorsList.myInfoButton).click()
    cy.get(selectorsList.firstNameField).clear().type("FirstNameTest")
    cy.get(selectorsList.middleNameField).clear().type("MiddleNameTest")
    cy.get(selectorsList.lastNameField).clear().type("LastNameTest")
    cy.get(selectorsList.genericField).eq(3).clear().type("NicknameTest")
    cy.get(selectorsList.genericField).eq(4).clear().type("EmpIdTest")
    cy.get(selectorsList.genericField).eq(5).clear().type("OtherIdTest")
    cy.get(selectorsList.genericField).eq(6).clear().type("DriversLicenseNumberTest")
    cy.get(selectorsList.dateFields).eq(0).clear().type("2026-05-26")
    cy.get(selectorsList.dateCloseButton).click()
    cy.get(selectorsList.genericField).eq(8).clear().type("SSN123")
    cy.get(selectorsList.genericField).eq(9).clear().type("SIN123")
    cy.get(selectorsList.submitButton).eq(0).click()
    cy.get('body').should('contain', 'Succesfully Updated')
    cy.get(".oxd-toast-close")
  })

  it('Login - Fail', () => {

    cy.visit('/auth/login')
    cy.get(selectorsList.usernameField).type(userData.userFail.username)
    cy.get(selectorsList.passwordField).type(userData.userFail.password)
    cy.get(selectorsList.loginButton).click()
    cy.get(selectorsList.wrongCredentialAlert)
  })
})
