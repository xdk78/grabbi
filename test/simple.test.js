jest.setTimeout(100000)
const grabbi = require('../src/index.js')
const url = 'https://example.com/'

describe('GET page content', () => {
  it('should respond with title', async () => {
    const {doc, res} = await grabbi(url)

    expect(res).not.toBeNull()
    expect(res).not.toBeUndefined()
    expect(doc.title).toBe('Example Domain')
  })

  it('should respond with h1', async () => {
    const {doc, res} = await grabbi(url)

    expect(res).not.toBeNull()
    expect(res).not.toBeUndefined()
    expect(doc.getElementsByTagName('h1')[0].textContent).toBe('Example Domain')
    expect(doc.querySelector('h1').textContent).toBe('Example Domain')
  })
})
