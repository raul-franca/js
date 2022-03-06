const names = ['maria', 'josé', 'joão'];

function printName(name) {
  console.log(name);
}


console.log(names)
names.forEach(printName);

console.log(names)
names.forEach(function(name){
  console.log(name)
});


const canais = ["Globo", "Sbt", "Record"];

canais.forEach(function(canal) {
  canais.push("RedeTV"); // este item será ignorado
  console.log(canal);
});

const numbers = [1,2,3,4,5];
const dobro = [];
for (let i = 0; i < numbers.length; i++) {
  dobro.push(numbers[i]*2);
}
console.log(numbers);
console.log(dobro);

