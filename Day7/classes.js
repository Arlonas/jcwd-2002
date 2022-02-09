//Classes?
// method adalah property isinya function
// class Car {
//   constructor(year = "2000", brand, color) {
//       this.year = year
//       this.brand = brand
//       this.color = color
//       //this.price = 0
//   }
// }

// const mobilBaru = new Car("2000", "Toyota", "White")
// const mobilLama = new Car("1990", "Ford", "Red")

// console.log(mobilBaru)
// console.log(mobilLama)

// const cars = [
//     new Car("2000", "Toyota", "White"),
//     new Car(undefined, "Ford", "Red")
//     // undefiend buat trigger default parameter diatas
// ]

class Book {
  constructor(products, productPrices) {
    this.products = products;
    this.productPrices = productPrices;
    this.productQty = 5;
    this.productBought = 0;
  }

  calculateTotalPrice = () => {
    // kalo tidak di return undefined by default memang seperti itu
    return this.productPrices * this.productQty
  }

  toString = () => {
     return `${this.products} || Rp. ${this.productPrices.toLocaleString()} x ${this.productQty} = ${
     this.calculateTotalPrice().toLocaleString()} `
  }
}

const bukuHP =new Book("Harry Potter", 70000)

console.log(bukuHP.toString())


// const toko = [
//   new Book("LOTR", 50000),
//   new Book("Harry Potter", 70000),
//   new Book("Sherlock", 100000),
//   new Book("Naruto", 150000),
// ];

// console.log(toko[1].products);
