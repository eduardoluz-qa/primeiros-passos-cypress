import userData from "../fixtures/userData.json"
import LoginPage from "../pages/loginPage.js"
import DashboardPage from "../pages/dashboardPage.js"
import MyInfoPage from "../pages/myInfoPage.js"
import MenuPage from "../pages/menuPage.js"

const Chance = require('chance')

const chance = new Chance()
const loginPage = new LoginPage()
const dashboardPage = new DashboardPage()
const myInfoPage = new MyInfoPage()
const menuPage = new MenuPage()

describe('Orange HRM test', () => {

  it('User Info Update - Success', () => {
    loginPage.accessLoginPage()
    loginPage.loginWithAnyUser(userData.userSuccess.username, userData.userSuccess.password)
    
    dashboardPage.checkDashboardPage()
    
    menuPage.accessMyInfo()
    
    myInfoPage.fillPersonalDetails(chance.first(), chance.first(), chance.last())
    myInfoPage.fillEmployeeDetails('EmpIdTest', 'OtherIdTest', 'DriversLicenseNumberTest', '2026-05-26')
    myInfoPage.fillStatus('1997-06-22')
    myInfoPage.saveInfos() 
  })

})
