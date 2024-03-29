const { expect, Locator, Page } = require('@playwright/test');
class BasePage {
    page= Page
    constructor(page= Page){
        this.page = page;
    }
    async navigate(path){
        await this.page.goto(`https://trello.com/${path}`);
    }
    async getUser(url)
    {
        const regex =  /\/[a-z]+\//gm;
        let user = url.match(regex);
        user.replaceAll('/','');
        return user;
    }
}
module.exports =  BasePage