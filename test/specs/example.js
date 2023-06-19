describe('First Steps with WebdriverIO', () => {

    it('Load BStack Demo Website', () => {
        browser.url('https://www.bstackdemo.com')
        browser.pause(1000)
        expect(browser).toHaveUrl('https://www.bstackdemo.com')
    })

    it('Load WebdriverIO Website', () => {
        browser.url('https://webdriver.io')
        browser.pause(1000)
    })

});

describe('Second Steps with WebdriverIO', () => {

    it('Second load BStack Demo Website', () => {
        browser.url('https://www.bstackdemo.com')
        browser.pause(1000)
        expect(browser).toHaveTitle('BrowserStack Demo')
    })

});