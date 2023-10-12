const { chromium } = require("playwright");
// const sequelize = require("../DB/sequelize");
// const { Sequelize } = require("sequelize");
// const DBFunctions = require("./utilities/database");
const AssistFunction = require("./utilities/assistFunctions");
const path = require("path");
const fs = require("fs");
const store = require('store');

// syncronize models
// sequelize.sync();

// handle random data
(async () => {
  // pull data from database -----------------
  // var data;
  // try {
  //   data = await DBFunctions.getRandomData();
  // } catch (error) {
  //   console.error("Error:", error);
  // }

  // extension path ------
  const vpnExtensionPath = path.join(__dirname, "../extensions/WindScribeVPN");
  const captchaExtensionPath = path.join(
    __dirname,
    "../extensions/NopeChaptchaSolver"
  );

  // console.log(vpnExtensionPath);
  // console.log(captchaExtensionPath);

  // throw Error;

  // start browser ------------------------------------------
  const browser = await chromium.launchPersistentContext(
    path.join(__dirname, "../browsers"),
    {
      headless: false,
      args: [
        `--disable-extensions-except=${vpnExtensionPath},${captchaExtensionPath}`,
        `--load-extension=${vpnExtensionPath}`,
        `--load-extension=${captchaExtensionPath}`,
      ],
    }
  );

  // goto extension manager page ------------------------------
  const ExtensionManager = async () => {
    try {
      const extManagerPage = await browser.newPage();
      await extManagerPage.goto("chrome://extensions/");
      // get the vpn extension id
      try {
        await extManagerPage.waitForLoadState("load");
        const listOfExtensionId = await extManagerPage.$$(
          "#content-wrapper extensions-item"
        );
        // waitForSelector('#content-wrapper extensions-item');
        if (listOfExtensionId.length) {
          const idArray = [];
          for (const element of listOfExtensionId) {
            const id = await element.getAttribute("id");
            idArray.push(id);
          }
          store.set('extId', {captcha: idArray[0], vpn: idArray[1]});
        }
      } catch (error) {
        console.log("Error on getting and setting extension id");
      }
    } catch (error) {
      console.log("Extension manager page load fail");
      await browser.close();
    }
  };

  await ExtensionManager();

  // connect vpn with browser -----------
  // const vpnPage = await browser.newPage();
  // try {
  //   await vpnPage.goto(
  //     "chrome-extension://hhikeafcpmgjnkhoimhlejpgngkbjmfk/popup.html"
  //   );
  // } catch (error) {
  //   console.log('getting error on page load', error);
  // }

  // if (vpnPage) {
  //   try {
  //     const vpnLoginBtn = await vpnPage.waitForSelector("text=Login", {
  //       timeout: 5000,
  //     });
  //     await vpnLoginBtn.click();
  //   } catch (error) {
  //     console.log("Handle login error");
  //   }
  // }

  //  fill out the login form
  // try {
  //   const vpnUserName = await vpnPage.$('input[name="username"]');
  //   await vpnUserName.fill("rejoan121615");
  //   const vpnPassword = await vpnPage.$('input[name="password"]');
  //   await vpnPassword.fill("@1h2M3e4d5");
  //   const vpnSubmitBtn = await vpnPage.$('button[type="submit"]');
  //   await vpnSubmitBtn.click();
  // } catch (error) {
  //   console.log("vpn login form fill up failed", error);
  // }

  // goto hotmail --------------
  // const createMailPage = await browser.newPage();
  // await createMailPage.goto("https://signup.live.com/signup");
  // const createAccoLink = await createMailPage.getByRole("link", {
  //   name: "Get a new email address",
  // });
  // await createAccoLink.click();

  // // type your new email address ----------------
  // const newEmailField = await createMailPage.locator("input").first();
  // await newEmailField.click();

  //   // type email address
  //   await AssistFunction.TypeEmail(createMailPage, data.givenname + data.surname);

  //   // handle suggest email ---------------
  //   try {
  //     const claimLink = await createMailPage.waitForSelector("#suggLink", {
  //       timeout: 5000
  //     });
  //     await claimLink.click();
  //     // get all the email
  //     const suggestContainer = await createMailPage.waitForSelector("#Suggestions");
  //     const selectedEmail = await suggestContainer.$('a');
  //     data.newEmail = await selectedEmail.innerText();
  //     await selectedEmail.click();
  //     await createMailPage.keyboard.press('Enter');
  //   } catch (error) {
  //     console.log('Link not found', error);
  //   }

  // // handle password ------------------
  //   try {
  //     const passwordField = await createMailPage.locator('#PasswordInput').fill(data.password);
  //     await createMailPage.keyboard.press('Enter');
  //   } catch (error) {
  //     console.log('Password enter failed.');
  //   }

  // // handle name field -----------------
  // try {
  //   await createMailPage.locator('#FirstName').fill(data.givenname);
  //   await createMailPage.locator('#LastName').fill(data.surname);
  //   await createMailPage.keyboard.press('Enter');
  // } catch (error) {
  //   console.log('Error on first name and last name field.');
  // }

  // // handle country and birthdate -----------------
  // try {
  //   await createMailPage.getByLabel('Country/region').selectOption('United States');
  //   // handle birth date
  //   const [month, day, year] = data.birthday.split('/');
  //   // console.log('month ,date, year', month, typeof day, year);
  //   await createMailPage.locator('#BirthMonth').selectOption({ value: month});
  //   await createMailPage.locator('#BirthDay').selectOption({ value: day});
  //   await createMailPage.locator('#BirthYear').click();
  //   await createMailPage.keyboard.type(year, { delay: 150});
  //   await createMailPage.keyboard.press('Enter');
  // } catch (error) {
  //   console.log('Error on country and birthday page');
  // }

  //   const claimRandom = await createMailPage.waitForSelector("text=Someone already has this email address", {
  //     timeout: 10000,
  //   });
  //  await claimRandom.click();
  // // type email
  // async function TypeEmail() {
  //   await createMailPage.keyboard.type(data.givenname+data.surname, { delay: 100 });
  //   await createMailPage.keyboard.press("Enter");
  // }

  // async function TypePassword () {
  //   await createMailPage.keyboard.type('something', { delay: 100 });
  //   await createMailPage.keyboard.press("Enter");
  // }
  // // enter mail address
  // await TypeEmail();

  // // wait for the message appeir after pressing enter
  // try {
  //   await createMailPage.waitForSelector(
  //     "text=Someone already has this email address",
  //     { timeout: 5000 }
  //   );
  //   console.log("email already available, try another email");
  //   TypeEmail();
  // } catch {
  //   // waiting for password filed to appear
  //   const passField = await createMailPage.waitForSelector('#PasswordInput', { timeout: 5000});
  //   passField.click();
  //   TypePassword();
  // }

  // clear user data on browser close --------------
  await new Promise((resolve) =>
    setTimeout(async () => {
      await browser.close();
      AssistFunction.deleteUserDataDir();
      resolve();
    }, 150000)
  );
})();
