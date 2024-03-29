const BasePage = require("./base.page.js");
const { expect, Locator, Page } = require('@playwright/test');
class LoginPage extends BasePage {
  //page= Page
  constructor(page) {
    super(page);
    this.username = "input#user";
    this.password = "input#password";
    this.loginAtlassian = "input#login";
    this.loginBtn = "#login-submit";
  }

  async navigate() {
    super.navigate("login");
  }

  async login(user, pwd) {
    await this.page.fill(this.username, user);
    await this.page.waitForSelector(this.loginAtlassian, {state: "visible"});
    await this.page.click(this.loginAtlassian);
    await this.page.waitForLoadState("networkidle");
    // it redirects to atlasian login
    await this.page.fill(this.password, pwd);
    console.log(await this.page.title());
    await this.page.waitForSelector(this.loginBtn, {state:"visible"});
    await this.page.click(this.loginBtn);
    //await this.page.waitForSelector("[aria-label='HouseIcon']");
    await this.page.waitForLoadState("load");
  }
}
module.exports = LoginPage;