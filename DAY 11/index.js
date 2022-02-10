const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const duplicateForEach = (arr, callback) => {
  for (let i = 0; i < arr.length; i++) {
     callback(arr[i], i, arr)
    }
}
      
// duplicateForEach(numbers, (val, idx, array) => {
//       console.log(val)
// })


// conditions
// 1. Duplikat method filter
// 2. Filter akan menghasilkan sebuah array -> pasti akan return array
// 3. Gimana car menentukan item yang akan masuk ke array?
// Callback function harus menghasilkan true
// 4. Gimana cara memasukkan item ke dalam array?
// Gunakan method push

const duplicateFilter = (arr, callback) => {
    let resultArr = []
    for (let i = 0; i < arr.length; i++) {
       if (callback(arr[i], i ,arr)) {
           resultArr.push(arr[i])
       }
    }
     return resultArr  
}

let filteredData = duplicateFilter(books, (val) => {
    return val.length > 6
})
// let filterData = books.filter((val) => {
//     return val.length > 6
// })
