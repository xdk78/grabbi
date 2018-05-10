const grabbi = require('../src/index.js')
const url = 'https://example.com/'

describe('GET page content', () => {
  it('should respond with title', async () => {
    const {res, raw} = await grabbi(url)

    expect(raw).not.toBeNull()
    expect(raw).not.toBeUndefined()
    expect(res.title).toBe('Example Domain')
  })

  it('should respond with h1', async () => {
    const {res, raw} = await grabbi(url)

    expect(raw).not.toBeNull()
    expect(raw).not.toBeUndefined()
    expect(res.getElementsByTagName('h1')[0].textContent).toBe('Example Domain')
    expect(res.querySelector('h1').textContent).toBe('Example Domain')
  })
})
