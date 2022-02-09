//conditions
const benar = true
const salah = false
// !false jadi true

const password = "passwor"

//jika password lebih dari 8 karakter -> "strong password"
//jika password sama dengan 8 karakter -> "medium password"
//jika password kurang dari 8 karakter -> 'weak password"
if (password.length > 8) {
    console.log("strong password")
} else if (6 < password.length && password.length <= 8) {
    console.log("medium password")
}else{console.log("weak password")}