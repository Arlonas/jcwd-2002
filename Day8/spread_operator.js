const product = {
    productName: "LOTR",
    price: 10000,
    quantity: 0
}
// object destruction
const {productName, quantity, price} = product
//     variable     variable  variable
// console.log(productName)

const numbers = [1, 2, 3, 4]

const [a, b] = numbers

const [a, b]






// knp masih pkae kurung kurawal
// karena kurung kurawalnya udh di hapus sama spreadoperator
const newProduct = {
    ...product,
    productNames:"Harry Potter",
    // hasil output nya harry potter krn itu yg paling bawah begitu jg sebaliknya
    author: "Seto"
}

product.price = 9999

console.log(newProduct)