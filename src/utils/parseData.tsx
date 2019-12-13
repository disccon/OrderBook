export const parseData = (arr: Array<Array<string>>): Array<Array<string>> => {
  let sum = 0
  return arr.map(item => {
    const price = parseFloat(item[0])
    const amount = parseFloat(item[1])
    const total = price * amount
    sum += total
    const prettify = (number: number, fixed: number) => {
      const parts = number.toFixed(fixed).toString().split('.')
      parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',')
      return parts.join('.')
    }
    return [prettify(price, 2), prettify(amount, 6), prettify(total, 8), prettify(sum, 8)]
  })
}
