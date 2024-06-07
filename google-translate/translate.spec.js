const translateText = require('./index')

describe('return translate 200', () => {
    test('test return google translate PTBR', async () => {
        const result = await translateText('olá mundo','en')

        console.log(result)
        expect(result.toLocaleLowerCase()).toBe('hello world')
    })
})