const {Given, When, Then } = require('@wdio/cucumber-framework')
const homePage = require('../pageobjects/HomePage')
const currentAccountPage = require('../pageobjects/CurrentAccountPage')
const expectChai = require('chai').expect;

Given(/^User is on the Home page url as \"([^\"]*)\" and title as \"([^\"]*)\"$/,{ wrapperOptions: { retry: 2 } }, async (
  httpswwwlloydsbankcom, lloydsbankpersonalbankingpersonalfinancesbankaccounts) => {
    await homePage.navigateToHomePage(httpswwwlloydsbankcom)
    expect(browser).toHaveUrl(httpswwwlloydsbankcom)
    expect(browser).toHaveTitle(lloydsbankpersonalbankingpersonalfinancesbankaccounts)
    expectChai(await browser.getUrl()).to.include(httpswwwlloydsbankcom)
    expectChai(await browser.getTitle()).to.include(lloydsbankpersonalbankingpersonalfinancesbankaccounts)
    await homePage.companyLogo.isExisting()
  }
)

When(/^User hover over Products and Services tab and should be able to see the dropdown list$/,{ wrapperOptions: { retry: 2 } },async () => {
    await homePage.hoverOverPersonalServiceBtn
  }
)

Then(/^User click on Current Accounts from the dropdown$/,{ wrapperOptions: { retry: 2 } },async () => {
  await homePage.currentAccountsDropdownBtn.isEnabled()
    await homePage.clickOnCurrentAccountsDropdownBtn;
  }
)

Then(/^User is on current accounts page and verifies page url and title as includes\"([^\"]*)\" and \"([^\"]*)\" respectively$/,{ wrapperOptions: { retry: 2 } },async (
  httpswwwlloydsbankcomcurrentaccountshtml, openacurrentaccountonlineukbankaccountslloydsbank) => {
    expectChai(await browser.getUrl()).to.include(httpswwwlloydsbankcomcurrentaccountshtml)
    expectChai(await browser.getTitle()).to.include(openacurrentaccountonlineukbankaccountslloydsbank)
    expect(browser).toHaveUrl(httpswwwlloydsbankcomcurrentaccountshtml
    );
    expect(browser).toHaveTitle(openacurrentaccountonlineukbankaccountslloydsbank)
    await homePage.companyLogo.isExisting()

  }
)
Then(/^User verify current account products as \"([^\"]*)\" and \"([^\"]*)\" and \"([^\"]*)\" are displayed$/,{ wrapperOptions: { retry: 2 } },
  async (classicaccount, clublloydsaccount, platinumaccount) => {
    await currentAccountPage.classicAccount.isExisting()
    await expect(currentAccountPage.allCurrentAccounts).toHaveTextContaining(classicaccount)
    await currentAccountPage.clubLloydsAccount.isExisting()
    await expect(currentAccountPage.allCurrentAccounts).toHaveTextContaining(clublloydsaccount)
    await currentAccountPage.platinumAccount.isExisting()
    await expect(currentAccountPage.allCurrentAccounts).toHaveTextContaining(platinumaccount)

  }
)
Then(/^User validates \"([^\"]*)\" for maintaining Platinum account$/,{ wrapperOptions: { retry: 2 } }, async ( $21monthlyfee) => {
        await currentAccountPage.platinumAccountMonthlyFee.isExisting()
        expect(currentAccountPage.platinumAccountMonthlyFee).toHaveTextContaining($21monthlyfee)


  }

)
