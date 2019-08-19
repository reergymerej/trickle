export default (data, options) => {
  const { rows, ms, onData } = options
  const d = data.slice()
  const drip = () => {
    onData(d.splice(0, rows))
    if (!d.length) {
      clearInterval(interval)
    }
  }
  drip()
  const interval = setInterval(drip, ms)
}
