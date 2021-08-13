import { Builder, Capabilities, By } from "selenium-webdriver"

const chromedriver = require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeAll(async () => {
    await driver.get('http://localhost:4000')
});

beforeEach(async () => {
    await driver.get('http://localhost:4000')
});

afterAll(async () => {
    await driver.quit()
});

const startGame = async () => {
    let button = await (await driver).findElement(By.id('start-game'));
    await button.click();
};

// const checkSquare = async (cell, play) => {
//     let square = 
// };

test('I can start a game', async () => {
    await startGame();
    
    let buttonArr = await (await driver).findElements(By.id('start-game'));
    expect(buttonArr).toHaveLength(0);
    await driver.sleep(2000);
    
});

test('X in top left square', async () => {
    await startGame();

    let topLeft = await (await driver).findElement(By.id('cell-0'));
    await topLeft.click();
    let text = await topLeft.getText();
    console.log(text);
    // expect(text).toEqual('X');
    // expect(await (await driver).findElement(By.id('cell-0')).getText()).toBe('X');
    
    await driver.sleep(2000);
});

// test('O in top center square', async () => {
//     expect(await (await driver).findElement(By.id('cell-1')).getText()).toBe('O');
// });

// test('X in the top right square', async () => {
//     let topRight = await (await driver).findElement(By.id('cell-2'));
//     await topRight.click();
//     expect(await (await driver).findElement(By.id('cell-2')).getText()).toBe('X');
//     await driver.sleep(2000);
// });

// test('X in the bottom right square', async () => {
//     let bottomRight = await (await driver).findElement(By.id('cell-8'));
//     await bottomRight.click();
//     expect (await (await driver).findElement(By.id('cell-8')).getText()).toBe('X');
//     await driver.sleep(2000);
// });

test('Check if computer plays O', async () => {
    await startGame();
    await checkSquare('cell-0');

    const pieceArr = driver.findElements(By.xpath(`//td[contains(@id="cell-") and text()="0"]`));

    console.log(pieceArr)
    
    expect(pieceArr).toHaveLength(1)

})