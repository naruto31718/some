const products = []
let length = window.params.imgpaths.length
for (let i = 0; i < length; i++) {
  products.push({
    id: i + 1,
    image: window.params.imgpaths[i],
    price: 10,
    opprice: window.params.oprices[i],
    dpprice: window.params.dprices[i],
  })
}

console.log(products)

export default products
