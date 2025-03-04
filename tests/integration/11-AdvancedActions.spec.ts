import {test, expect} from "@playwright/test";
import { clickLink } from "../../helpers/clickHelpers";

test.describe("Advanced user Actions", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("https://techglobal-training.com/frontend");

    await clickLink(page, "Actions");
  });

  test("Mouse Actions", async ({ page }) => {

    // await page.click('#locator')

    // Right-clicks the element
    await page.click('#right-click', { button: 'right'})

    // Double-clicks the element
    await page.dblclick('#double-click')

    // Drag and drop the element
    await page.dragAndDrop('#drag_element', '#drop_element')
  });

  test("Keyboard Actions", async ({ page }) => {

    const inputBox = page.locator('#input_box')

    await inputBox.focus()

    // await page.keyboard.down('Shift')
    // await page.keyboard.press('KeyA+KeyB+KeyC')
    // await page.keyboard.press('KeyA+KeyB+KeyC')
    // await page.keyboard.up('Shift')
    
    // await page.keyboard.press('Shift+KeyA+KeyB+KeyC')
    // await page.keyboard.press('ArrowLeft')
    // await page.keyboard.press('KeyA+KeyB+KeyC')
    // await page.keyboard.press('Backspace')

    // Hello World!
    await page.keyboard.type('Hello World!')
    await page.keyboard.press('ArrowLeft')

    await page.keyboard.down('Shift')

    for(let i = 0; i < 'World'.length; i++) {
      await page.keyboard.press('ArrowLeft')
    }

    await page.keyboard.up('Shift')
    await page.keyboard.type('Class')

    // Note for MAC users but using Windows CI/CD
    await page.keyboard.press(process.env.CI ? 'Control' : 'Meta')
    await page.keyboard.press('ControlOrMeta')
  });
});




















