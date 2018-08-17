const server = require('../library/server')

test('Starts express server and returns true on success', () => {
  expect(server()).toBeTruthy()
})
