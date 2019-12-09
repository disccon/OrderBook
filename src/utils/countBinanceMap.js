export const countBinanceMap = arr => {
  let sum = 0
  return arr.map(item => {
    const price = parseFloat(item[0])
    const amount = parseFloat(item[1])
    const total = price * amount
    sum += total
    const prettify = (number, fixed) => {
      if (number >= 1000) return number.toFixed(fixed).replace(/،/g, ',')
      return number.toFixed(fixed)
    }
    // /،/g, ","
    // if (number >= 1000) return number.toFixed(fixed).replace(/(\d{1,3}(?=(?:\d\d\d)))/g, '$1,')
    // var i = 1201.59;
    // var re = /(?=\B(?:\d{3})+(?!\d))/g;
    // var j = i.toString().replace( re, ',' )
    // alert(j)
    return [prettify(price, 2), prettify(amount, 6), prettify(total, 8), prettify(sum, 8)]
  })
}
