export const countBinanceMap = arr => {
  let sum = 0
  return arr.map(item => {
    const price = parseFloat(item[0])
    const amount = parseFloat(item[1])
    const total = price * amount
    sum += total
    return [price.toFixed(2), amount.toFixed(7), total.toFixed(7), sum.toFixed(7)]
  })
}
