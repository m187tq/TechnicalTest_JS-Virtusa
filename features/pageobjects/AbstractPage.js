module.exports = class AbstractPage {
    async visit(url) {
      await browser.url(url)
    }

  async waitForFiveSeconds(time) {
    console.log('Pausing for: ' + time + ' seconds.')
    await browser.pause(time)
  }

  async waitUsingFixedTimeout(time) {
    console.log('Pausing for: ' + time + ' seconds.')
    await browser.pause(time)
  }

}
