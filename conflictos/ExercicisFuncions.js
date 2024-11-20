// Exercici 1
console.log("----------------1----------------");
const arr1 = [1,2,3,4];
function f1(arr) {
    let nums=0;
    arr.forEach(element => {
        nums+=element;
    });
    return nums/ arr.length;
}
function f2(arr) {
   const min = Math.min(...arr);
   const max = Math.max(...arr);
   return max-min;
}
function fPrincipal (arr, f1, f2) {
    let primerValor = f1(arr);
    let segonValor = f2(arr);
    return Math.pow(primerValor, segonValor);
}
console.log(fPrincipal(arr1,f1,f2))
// Exercici 2
console.log("----------------2----------------");
const student = {
    name : "Antoni",
    surname : "Batllori",
    scores : [40,25,37,65,72,55],
};

function calculScores(student) {
    this.avgScores = f1(this.scores);
    if (this.avgScores>=50) {
        this.overcame = true;
    } else {
        this.overcame = false;
    }
}
calculScores.apply(student, null);
console.log(student);
// Exercici 3
console.log("----------------3----------------");
const students = [
    {name : "Antoni", surname : "Batllori", scores : [40,75,22,78]},
    {name : "Pere", surname : "Rodríguez", scores : [10,28,85,35]},
    {name : "Josepa", surname : "Rovira", scores : [62,71,23,44]},
    {name : "Joan", surname : "Revert", scores : [14,65,18,88]},
    {name : "Maria", surname : "Palau", scores : [52,45,24,55]}
];
students.forEach(student =>{
    calculScores.apply(student, null);
    console.log(student);
})
