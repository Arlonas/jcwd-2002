const rows = 5

for(let i = 0; i < rows; i++){
 let result = ""
 
    //nambahin spasi
  for(let j = rows - 1; j > i; j--){
      result += " "
    }
  //nambahain bintang
  for (let k = 0; k <= i; k++) {   
        result += "*"
    
    }
console.log(result)
}