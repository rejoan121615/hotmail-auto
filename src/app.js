const { chromium } = require("playwright");


let details = {
    name: 'something',
    password: 'a123QWerd$32023',
};

(async () => {
    const browser = await chromium.launch({headless: false});
    // goto hotmail 
    const createMailPage = await browser.newPage();
    await createMailPage.goto('https://signup.live.com/signup');
    const createAccoLink = await createMailPage.getByRole('link', {name: 'Get a new email address'});
    await createAccoLink.click();
    // type a name 
    const newEmailField = await createMailPage.locator('input').first({name: "MemberName"});
    await newEmailField.click();
    // type email 
    async function TypeEmail ( emailAddress = details.name ) {
        await createMailPage.keyboard.type( emailAddress, { delay: 100});
        await createMailPage.keyboard.press('Enter');
    }

    // enter mail address 
    await TypeEmail();
    
    // wait for the message appeir after pressing enter 
    try {
        await createMailPage.waitForSelector('text=Someone already has this email address', { timeout: 5000});
        console.log('email already available, try another email');
        TypeEmail()
    } catch {
        console.log('email not available , type your password');
    }

})();


