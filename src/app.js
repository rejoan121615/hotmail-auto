const { chromium } = require("playwright");
const sequelize = require('../DB/sequelize');
const Fakename = require('../DB/models/Fakename');
const Account = require('../DB/models/Account');
const { Sequelize } = require("sequelize");

// database 
sequelize.sync();

( async () => {
 const randomFakeData = await Fakename.findOne({
    order: [
      [Sequelize.literal('RAND()')]
    ]
  });
  console.log(randomFakeData.dataValues);
})();


// let emailList = [
//   "hzmzngon83",
//   "fginvsfb45",
//   "smvcneal49",
//   "ysrjladq73",
//   "gbbqeeuj51",
//   "sivllcsw83",
//   "uqxiyotx84",
//   "owoyscqd84",
//   "ryntpdds18",
//   "yirefpke2",
// ];

// var counter = 0;

// let password = "a123QWerd$32023";


// (async () => {
//   const browser = await chromium.launch({ headless: false });
//   // goto hotmail
//   const createMailPage = await browser.newPage();
//   await createMailPage.goto("https://signup.live.com/signup");
//   const createAccoLink = await createMailPage.getByRole("link", {
//     name: "Get a new email address",
//   });
//   await createAccoLink.click();
//   // type a name
//   const newEmailField = await createMailPage
//     .locator("input")
//     .first({ name: "MemberName" });
//   await newEmailField.click();
//   // type email
//   async function TypeEmail(emailAddress = emailList[counter]) {
//     await createMailPage.keyboard.type(emailAddress, { delay: 100 });
//     await createMailPage.keyboard.press("Enter");
//   }

//   async function TypePassword (pass = password) {
//     await createMailPage.keyboard.type(pass, { delay: 100 });
//     await createMailPage.keyboard.press("Enter");
//   }
//   // enter mail address
//   await TypeEmail();

//   // wait for the message appeir after pressing enter
//   try {
//     await createMailPage.waitForSelector(
//       "text=Someone already has this email address",
//       { timeout: 5000 }
//     );
//     console.log("email already available, try another email");
//     counter++;
//     TypeEmail();
//   } catch {
//     // waiting for password filed to appear 
//     const passField = await createMailPage.waitForSelector('#PasswordInput', { timeout: 5000});
//     passField.click();
//     TypePassword();
//   }
// })();
