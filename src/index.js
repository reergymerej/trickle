export default (data, options) => {
  const { rows, ms, onData } = options
  let released = []
  let startIndex = 0
  const drip = () => {
    const end = Math.min(data.length, startIndex + rows)
    const next = data.slice(startIndex, end)
    released = [
      ...next,
    ]
    if (end === data.length) {
      clearInterval(interval)
    } else {
      startIndex += rows
    }
    onData && onData(released)
  }
  drip()
  const interval = setInterval(drip, ms)
}
