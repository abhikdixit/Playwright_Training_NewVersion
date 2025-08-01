//import { Page } from '@playwright/test'
import { expect, Locator, Page } from '@playwright/test';
  const fs = require('fs');
  const path = require('path');

export class AbstractPage {
   page= Page

  constructor(page= Page) {
    this.page = page
  }

  async wait() {
    //await this.page.waitForTimeout(process.env.settime)
    await this.page.waitForTimeout(3000)
  }

  async readDataFromJSONFile(fileName) {

    const filePath = path.join(__dirname, '..', 'data', fileName);
    const data = fs.readFileSync(filePath)
    return JSON.parse(data);
  }

  
}
