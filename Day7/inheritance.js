class Product  {
    constructor(productNames, price) {
          this.productNames = productNames
          this.price = price
          this.qty = 0
    }

    calculateTotalPrice = () => {
        return this.price *this.qty
    }
    toString = () => {
        return "Bok"
    }
}
//                 ini namanya Parent Class
class Book extends Product{
    constructor(productNames, price, author, pages) {
        // kalo super() g ada isinuya hasilnya undefined
        // apapun yang di dalam super itu mangil productNames dan prices dari Product di atas
        super(productNames, price)
        this.author = author
        this.pages = pages
    }
    // override
    // akan nimpa method toString milik Product
    toString = () => {
        return "Book"
    }
}
const bookHP = new Book("Harry Potter", 10000, "J.K. Rowling", 762)
bookHP.qty = 5

class Shirt {
    constructor(size) {
        this.size = size
    }
}