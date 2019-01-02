const server = require('../scripts/server')

test('Starts express server and returns true on success', () => {
  expect(server()).toBeTruthy()
})
