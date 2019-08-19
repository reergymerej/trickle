import trickle from '.'
jest.useFakeTimers()

it('should execute a callback as data is available', () => {
  const rows = 2
  const ms = 3000
  const data = [
    1, 2,
    3, 1,
    2, 3,
    1,
  ]
  const onData = jest.fn()
  trickle(data, {
    rows,
    ms,
    onData,
  })
  expect(onData).toHaveBeenLastCalledWith([1, 2])

  jest.advanceTimersByTime(ms)
  expect(onData).toHaveBeenLastCalledWith([3, 1])

  // jest.advanceTimersByTime(ms)
  // expect(onData).toHaveBeenLastCalledWith([2, 3])

  jest.advanceTimersByTime(9999999)
  expect(onData).toHaveBeenLastCalledWith([1])

  expect(onData).toHaveBeenCalledTimes(4)
})
