module.exports = function holdUp (
  condition,
  timeoutInterval = 8000,
  retryInterval = 50
) {
  return new Promise((resolve, reject) => {
    const timeout = setTimeout(() => {
      clearInterval(retry)
      reject(new Error('Timed out'))
    }, timeoutInterval)
    const retry = setInterval(run, retryInterval)

    function run () {
      if (condition()) {
        resolve()
        clearTimeout(timeout)
        clearInterval(retry)
      }
    }

    run()
  })
}
