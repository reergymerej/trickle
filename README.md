# trickle

[![Build Status](https://travis-ci.com/reergymerej/trickle.svg?branch=master)](https://travis-ci.com/reergymerej/trickle)



You:  My array is _too big_!  I want to unveil it a bit at a time.

Me:  At what rate?

You:  50 rows / 1000 ms.

Me:


```js
import trickle from 'array-trickle'

trickle({
  rows: 50,
  ms: 1000,
  onData: newRows => console.log(newRows),
})
```
