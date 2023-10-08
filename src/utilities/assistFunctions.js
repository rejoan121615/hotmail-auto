exports.TypeEmail = async (page, data = "", delay = 150) => {
  await page.keyboard.type("DavidWynn", { delay: 100 });
  await page.keyboard.press("Enter");
};

exports.HandleSuggestEmail = async (page) => {

};