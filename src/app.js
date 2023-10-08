const { chromium } = require("playwright");
const sequelize = require('../DB/sequelize');
const { Sequelize } = require("sequelize");
const DBFunctions = require('./utilities/database');
const AssistFunction = require('./utilities/assistFunctions');


// syncronize models  
sequelize.sync();

var data;


// handle random data 
(async () => {
  try {
    data = await DBFunctions.getRandomData();
  } catch (error) {
    console.error('Error:', error);
  }
})();





(async () => {
  const browser = await chromium.launch({ headless: false });
  // goto hotmail
  const createMailPage = await browser.newPage();
  await createMailPage.goto("https://signup.live.com/signup");
  const createAccoLink = await createMailPage.getByRole("link", {
    name: "Get a new email address",
  });
  await createAccoLink.click();
  // type your new email address ----------------
  const newEmailField = await createMailPage
    .locator("input")
    .first();
  await newEmailField.click();

  // type email address 
  await AssistFunction.TypeEmail(createMailPage, data.givenname + data.surname);
  
  // handle suggest email ---------------
  try {
    const claimLink = await createMailPage.waitForSelector("#suggLink", {
      timeout: 5000
    });
    await claimLink.click();
    // get all the email 
    const suggestContainer = await createMailPage.waitForSelector("#Suggestions");
    const selectedEmail = await suggestContainer.$('a');
    data.newEmail = await selectedEmail.innerText();
    await selectedEmail.click();
    await createMailPage.keyboard.press('Enter');
  } catch (error) {
    console.log('Link not found', error);
  }

  // handle password ------------------
//   const claimRandom = await createMailPage.waitForSelector("text=Someone already has this email address", {
//     timeout: 10000,
//   });
//  await claimRandom.click();
  // type email
  // async function TypeEmail() {
  //   await createMailPage.keyboard.type(data.givenname+data.surname, { delay: 100 });
  //   await createMailPage.keyboard.press("Enter");
  // }

  // async function TypePassword () {
  //   await createMailPage.keyboard.type('something', { delay: 100 });
  //   await createMailPage.keyboard.press("Enter");
  // }
  // enter mail address
  // await TypeEmail();

  // wait for the message appeir after pressing enter
  // try {
  //   await createMailPage.waitForSelector(
  //     "text=Someone already has this email address",
  //     { timeout: 5000 }
  //   );
  //   console.log("email already available, try another email");
  //   counter++;
  //   TypeEmail();
  // } catch {
  //   // waiting for password filed to appear 
  //   const passField = await createMailPage.waitForSelector('#PasswordInput', { timeout: 5000});
  //   passField.click();
  //   TypePassword();
  // }
})();


