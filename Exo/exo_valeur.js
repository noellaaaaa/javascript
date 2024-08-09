// !---------------------------------------------------- Exo VALEUR JS ---------------------->

let a = 2;
a = a - 1
a++
console.log(a)

let b = 8
b += 2
console.log(b)

let c = a + b * b
let d = a * b + b
let e = a * (b + b)
let f = a * b / a
let g = b / a * a
console.log(c)
console.log(d)
console.log(e)
console.log(f)
console.log(g)

// !----------------------------------------- Exo 2 tva JS ------------------------------------>

let horsTaxe = prompt("Prix HT :");
console.log("Le prix TTC est de : " + horsTaxe * 1.2 + "€.");
document.write("<h2>Résultat<br />Le prix TTC est de " + horsTaxe * 1.2 + "€.</h2>",);



// !-----------------------------------Exo 3 CALCUL ------------------------------------------>

let number1 = prompt("Entrez un premier chiffre");
let number2 = prompt("Entrez un second chiffre");

let result = parseInt(number1) + parseInt(number2);

document.write(`<h2>Le rÃ©sultat du calcul est: ${result}</h2>`);