import maskify from './exercicio1.js';

console.log(maskify("4556364607935616"));  
console.log(maskify("64607935616"));     
console.log(maskify("1"));                
console.log(maskify("--->"));                
console.log(maskify("Skippy"));          
console.log(maskify("Nanananananananananana Batman!"));

import updateData from './exercicio2.js';

const obj1 = { name: "Marcos", country: "Brasil", age: 22 };
const obj2 = { country: "Japão", age: 33 };
console.log(updateData(obj1, obj2)); 

const obj3 = { name: "Marcos", country: "Brasil", age: 22 };
const obj4 = { price: 89.9, amount: 15, description: "camiseta 100% algodão" };
console.log(updateData(obj3, obj4)); 

const obj5 = { name: "Rafael", country: "Chile", age: 42 };
const obj6 = { name: "Camiseta Polo", price: 59.9, amount: 30 };
console.log(updateData(obj5, obj6)); 

import getRickAndMortyCharacters from './exercicio3.js';

async function test() {
  const characters = await getRickAndMortyCharacters();  // Chama a função assíncrona
  console.log(JSON.stringify(characters, null, 2));  // Exibe os dados formatados no console
}

test();  // Executa o teste
