const fs = require("fs");
const path = require("path");

exports.TypeEmail = async (page, data = "", delay = 150) => {
  await page.keyboard.type(data, { delay: 100 });
  await page.keyboard.press("Enter");
};

// delete browser data file
exports.deleteUserDataDir = async (folder = "browsers") => {
  const userDataDir = path.join(__dirname, "../../browsers");
  return new Promise((resolve, reject) => {
    fs.rm(userDataDir, { recursive: true }, (err) => {
      if (err) {
        reject(err);
      } else {
        resolve();
      }
    });
  });
};

// close browser and delete data
exports.ClearClose = async (browser, time = 1000) => {
  await new Promise((resolve) =>
    setTimeout(async () => {
      await browser.close();
      // AssistFunction.deleteUserDataDir();
      await this.deleteUserDataDir();
      resolve();
    }, time)
  );
};
