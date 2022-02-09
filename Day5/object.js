// untuk akses array pakai index
const buku = {
  title: "Harry Potter",
  author: {
    name: "J.K. Rowling",
    age: 50,
    nationality: "Inggris",
  },
  pages: 658,
  yearReleased: "2001",
  // new Date() -> ini namanay class
  alternativeTitles: ["Sang Penyihir", "The Wizard"],
  // ini properties
  sequels: [
    {
      title: "Harry Potter 2",
      yearReleased: "2003",
    },
    {
      title: "Harry Potter 3",
      yearReleased: "2005",
    },
    {
      title: "Harry Potter 4",
      yearReleased: "2007",
    },
  ],
};
// object destructuring
let { yearReleased, title, pages } = buku;
// console.log(yearReleased, title, pages)
// atau
// console.log(yearReleased)
// console.log(title)
// console.log(pages)

// console.log(buku.sequels[1].yearReleased)

// cara mengubah data sama seperti array
// buku.title = "Purwadhika"
// buku.publiser = "Purwadhika"
// console.log(buku)
// Hapus property
// supaya tidak hilang datanya dipindahin dulu
// buku.judul = buku.title;
// delete buku.title;
// console.log(buku)
// dot notation
// console.log(buku.title)
// console.log(buku.author.name)
//console.log(buku.alternativeTitles[0])
// bracket notation
// kalau pakai bracket notation harus pakai string
// const title = "pages"
// console.log(buku["title"])
// console.log(buku[title])

// array object
// const products = [
//   {
//     nama: "Leci",
//     harga: 7000,
//   },

//   {
//     nama: "Mangga",
//     harga: 8000,
//   },

//   {
//     nama: "Jeruk",
//     harga: 9000,
//   },
// ];
    if(product.qty == 0){
        continue
    }
// unutk munculin suggestion control spasi
// for (let i = 0; 1 < products.length; i++) {
  //    console.log(`Name : ${products[i].nama} || Harga : Rp. ${products[i].harga.toLocaleString()}`)
// }

// console.log(products[0].nama)

let cars = [
  {
    brand: "Toyota",
    year: "2010",
    colors: ["Red", "Black"],
  },
  {
    brand: "Honda",
    year: "2007",
    colors: ["Gray", "Black", "White"],
  },
];

for (let i = 0; i < cars.length; i++) {
  let car = cars[i];
  // let row = ` Brand : ${cars[i].brand} || Year: ${cars[i].year} || Colors: ${car.colors.join(" ")}`
  let row = `${i + 1}. Brand : ${car.brand} || Year: ${car.year} || Colors: `;
  // Looping colors
  for (let j = 0; j < car.colors.length; j++) {
    row += `${car.colors[j]}`;
  }
  console.log(row);
}

//primitive value = number string
//reference type = itu object array
const obj1 = {
    name: "foo",
    bar: "baz"
}

const obj2 = obj1
obj1.name = "steve"

console.log(obj2.name)
//let a = 5
// let b = a
//console.log(b)

//spreadoperator
