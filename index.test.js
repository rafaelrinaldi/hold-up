const holdUp = require('./')

test('Should resolve once condition passes', async () => {
  expect.assertions(1)
  let flag

  setTimeout(() => (flag = true), 250)
  await expect(holdUp(() => flag)).resolves.toBeUndefined()
})

test('Should time out if condition is not met within specified wait interval', async () => {
  await expect(holdUp(() => false, 150, 500)).rejects.toThrow()
})

test('Should immediately resolve if condition is already met', () => {
  expect(holdUp(() => true)).resolves.toBeUndefined()
})
