const rows = 5
let counter = 1

for (let i = 1; i <= rows; i++) {
       let result = ""
        for (let j = 1; j <= i; j++) {
           result  += counter + " " 
           counter += 2
            
        }
    console.log(result)
     }
