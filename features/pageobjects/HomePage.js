const AbstractPage = require('./AbstractPage')

class HomePage extends AbstractPage {

    get personalServiceBtn () {
        return $('li.primary-item:nth-child(2) > button:nth-child(2)').moveTo()
    }

    get clickOnCurrentAccountsDropdownBtn () {
        return $('li.primary-item:nth-child(2) > div:nth-child(3) > ul:nth-child(1) > li:nth-child(1) > a:nth-child(1) > span:nth-child(1)').click()
    }

    get currentAccountsDropdownBtn () {
        return $('li.primary-item:nth-child(2) > div:nth-child(3) > ul:nth-child(1) > li:nth-child(1) > a:nth-child(1) > span:nth-child(1)')
    }


    get companyLogo() {
        return $('.col-sm-5 > div:nth-child(1) > a:nth-child(1) > div:nth-child(1) > div:nth-child(1) > icon:nth-child(1) > svg:nth-child(1) > g:nth-child(1) > g:nth-child(1) > g:nth-child(1) > g:nth-child(2) > path:nth-child(4)')
    }
    get carousel() {
        return $('.themable');
    }

    async navigateToHomePage(httpswwwlloydsbankcom)
    {
        await browser.url(httpswwwlloydsbankcom)
    }

    get hoverOverPersonalServiceBtn() {
        return $('li.primary-item:nth-child(2) > button:nth-child(2)').moveTo()

    }

    async goToApplicationUrl(httpswwwlloydsbankcom) {
        await browser.url(httpswwwlloydsbankcom)
    }

    }


    module.exports = new HomePage()
