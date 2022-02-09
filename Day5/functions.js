//Do not
//Repeat
//Yourself
//DRY

// ada dua tipe programming dynamic typed dan static typed 
// dynamic typed itu javascript dan pyhton 
// static typed itu c c++ csharp dan laen laen
//NaN -> Not a Number

// Gunanya function it untuk mrngumpulkan sekelompok urutan program di dalam 1 proses/variable
// function sumTwoValues(firstValue = 0, secondValue = 0) {
//     let result = firstValue + secondValue

//     console.log(result)

// itu jadi 0 defaultnya kalo sumtwovaluesnya g di isi jadi 0
// }

// sumTwoValues() // cara execute function
// kalo dimasukin ke functionnya nanit jadi infinite loop krn fucntionnya execute dirinya sendiri
//cara isi varibalenya masukin ke sumtwovalues yg di luar function

// function differenceOfTwoValues(a, b){
//     let result = a - b

//     console.log(result)

// }
// const a = 5
// const b = 7

// differenceOfTwoValues(a, b)

// ========= Pembuatan Function ===============
// function displayMenu () {
//     console.log(("Hello World!"))
// }

// displayMenu()
//=============================================

//============ Parameter Function =============
// function displayUsername (username = "Naruto") {
//                               default parameter
//     console.log(`Hello ${username}`)
// }

// displayUsername("Doraemon")

// ada parameter ada arguements
// function displayUsername (username = "Naruto", greeting) {
//     //                               default parameter
//         console.log(`${greeting} ${username}`)
//     }

//     let username = "Doraemon"
//     let greeting = "Good Morning"

//     displayUsername(username, greeting)

// let productsList = "";
// function showdata(products = products[i], productPrices = productPrices[i]) {
//   for (let i = 0; i < products.length; i++) {
//     productsList += `${i + 1}. ${products[i]} || Rp. ${productPrices[
//       i
//     ].toLocaleString()} \n`;
//   }
//   console.log(`${productsList} `);
// }
// let products = ["LOTR", "Harry Potter", "Sherlock", "Naruto"];
// let productPrices = [10000, 7000, 12000, 15000];

// showdata(products, productPrices);
// let books = ["LOTR", "Harry Potter", "Sherlock", "Naruto"];
// let bookPrices = [10000, 7000, 12000, 15000];

// let items = ["Leci", "Apel", "Jeruk", "Mangga"]
// let itemPrices = [7000, 5000, 3000, 10000]
// // kalau mau buat function 3 parameter aja mentok
// function displayMenu (itemNames = [], itemPrices = []){
//     // let result = ""
//     for (let i = 0; i < itemNames.length; i++) {
//             console.log(`${i + 1}. ${itemNames[i]} || Rp. ${itemPrices[i].toLocalString()}`)
//     }
//     // console.log(`${i + 1}. ${itemNames[i]} || Rp. ${itemPrices[i].toLocalString()}`)

    

// }


// console.log("============== Books =================")
// displayMenu(books, bookPrices)
// console.log("\n")

// console.log("============== Fruits =================")
// displayeMenu(fruits, fruitPrices)

function sumTwoNumbers (a = 0, b = 0){
  if ( typeof a !== "number" || typeof b !== "number"){
      return `Gunakan tipe data yang benar`
// console.log(typeof a)
  }
//   isNaN itu bolean hasilnya true or false
  if (isNaN(a) || isNaN(b)){
      return "Pastikan number anda sesuai"
  }
    let hasil = a + b
   return hasil
   // kalau retrun lgsgn break sama seperti looping

//    if(hasil > 10){
//        return "Angka anda lebih dari 10"
//    }else{
// //        return "Angka anda 10 atau lebih kecil"
//    }

//    return "Angka anda 10 atau lebih kecil"
}
let result = sumTwoNumbers(7, NaN)
// console.log(result)


// ================= anonymous function ============
const a = function () {
    // console.log("aneh")
}
// console.log("===========")
a()
// =================================================


// =============== Arrow Function ===================
const b = (z, y) => {
    return z + y 
}
// //  bisa g pake kurung kalo satu parameter
// // kalo onel ienr lgsng di return g perlu ketik returnya     
// console.log(b(3,2))

// const b = (z, y) => z + y
// //  bisa g pake kurung kalo satu parameter
// // kalo onel ienr lgsng di return g perlu ketik returnya     
// console.log(b(3,2))


const tambah = (first, second, callback) => {
    return callback(first, second)
}
// const callback = (a, b) =>{
    // return a + b

console.log(
    tambah(3, 5, (a, b) => {
        return a + b
    })
)


"Oty.push(0)"





