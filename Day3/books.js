//=================== Arrays===========
const books = [
    "LOTR",
    "Harry Potter",
    "Sherlock",
    "Naruto",
    "One Piece",
    "Doraemon",
]

books.length // -> 6
books[books.length] = "Test" 
console.log(books)


// untuk tambah data ke paling akhir
    books.push("The Hobbit")
    books.push("Bleach")

// untuk modify data
// books[3] = "Boruto"

books.indexOf("Naruto")

// console.log(books[books.indexOf("Naruto")])
//console.log(books[books.length - 1]) // untuk mendapatkan index terakhir

// for( let i = 0; i < books.length; i++){
//     console.log(books[i])
// }

// ===== duplicate indexOf ========
// let searchText = "One Piece"
// let resultIndex
// for (let i = 0; i < books.length; i++){
//    if( books[i] == searchText){
//        resultIndex = i
//        break
//    }
// }
// //  console.log(books[resultIndex])
// console.log(resultIndex)
// books.sort()

// const numbers = [1, 3, 4, 17, 21, 13, 2, 8, 40]
// // cara menghapus
// numbers.splice(3, 1)
// // unutk menghapus yg index terakhir
// numbers.pop()

// console.log(numbers)

// const sentence = "Halo selamat datang di rumah saya"

// const words = sentence.split(" ") // gap disini unutk memisahkan kata sebelum dan sesudah gap tersebut

// console.log(words)