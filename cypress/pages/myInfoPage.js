class MyInfoPage {

    selectorsList(){
        const selectors = {
            firstNameField: "[name='firstName']",
            middleNameField: "[name='middleName']",
            lastNameField: "[name='lastName']",
            genericField: ".oxd-input--active",
            dateFields: ".oxd-date-input",
            genericComboBox: ".oxd-select-text",
            secondIconComboBox: ".oxd-select-dropdown > :nth-child(2)",
            thirdIconComboBox: ".oxd-select-dropdown > :nth-child(3)",
            dateCloseButton: ".--close",
            submitButton: "[type='submit']"
        }
        
        return selectors
    }

    fillPersonalDetails(firstName, middleName, lastName) {
        cy.get(this.selectorsList().firstNameField).clear().type(firstName)
        cy.get(this.selectorsList().middleNameField).clear().type(middleName)
        cy.get(this.selectorsList().lastNameField).clear().type(lastName)     
    }

    fillEmployeeDetails(employeeId, otherId, driversLicense, expiryDate) {
        cy.get(this.selectorsList().genericField).eq(3).clear().type(employeeId)
        cy.get(this.selectorsList().genericField).eq(4).clear().type(otherId)
        cy.get(this.selectorsList().genericField).eq(5).clear().type(driversLicense)
        cy.get(this.selectorsList().dateFields).eq(0).clear().type(expiryDate)
        cy.get(this.selectorsList().dateCloseButton).click()
    }

    fillStatus(dateOfBirth) {
        cy.get(this.selectorsList().dateFields).eq(1).clear().type(dateOfBirth)
        cy.get(this.selectorsList().dateCloseButton).click()
        cy.get(this.selectorsList().genericComboBox).eq(0).click()
        cy.get(this.selectorsList().secondIconComboBox).click()
        cy.get(this.selectorsList().genericComboBox).eq(1).click()
        cy.get(this.selectorsList().thirdIconComboBox).click()
    }

    saveInfos() {
        cy.get(this.selectorsList().submitButton).eq(0).click({ force: true})
        cy.get('body').should('contain', 'Successfully Updated')
        cy.get(".oxd-toast-close")
    }
}

export default MyInfoPage