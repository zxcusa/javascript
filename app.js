const S = 1000;
const p = 10;

let summa = S;
let k = 0;

while (summa <=2 * S) {
    summa += summa * p / 100;
    k++;
}

console.log("Oylar soni:", k);
console.log("Bankdagi summa:", summa);




let n = salom