// ------------------- TESTES EXERCÍCIO 1: Maskify -------------------

import maskify from './exercicio1.js';

function testMaskify() {
  console.log("Exercício 1 - Teste: Maskify");

  const testCases = [
    { input: "4556364607935616", expected: "############5616" },
    { input: "64607935616", expected: "######5616" },
    { input: "1", expected: "1" },
    { input: "--->", expected: "#-->" },
    { input: "Skippy", expected: "##ippy" },
    { input: "Nanananananananananana Batman!", expected: "##########################man!" }
  ];

  testCases.forEach(({ input, expected }, index) => {
    const result = maskify(input);
    console.log(`Teste ${index + 1}: Input = "${input}", Expected = "${expected}", Resultado = "${result}"`);
  });
}

// ------------------- TESTES EXERCÍCIO 2: Update Data -------------------

import updateData from './exercicio2.js';

function testUpdateData() {
  console.log("\nExercício 2 - Teste: Update Data");

  const testCases = [
    {
      obj1: { name: "Marcos", country: "Brasil", age: 22 },
      obj2: { country: "Japão", age: 33 },
      expected: { name: "Marcos", country: "Japão", age: 33 }
    },
    {
      obj1: { name: "Marcos", country: "Brasil", age: 22 },
      obj2: { price: 89.9, amount: 15, description: "camiseta 100% algodão" },
      expected: { name: "Marcos", country: "Brasil", age: 22 }
    },
    {
      obj1: { name: "Rafael", country: "Chile", age: 42 },
      obj2: { name: "Camiseta Polo", price: 59.9, amount: 30 },
      expected: { name: "Camiseta Polo", country: "Chile", age: 42 }
    }
  ];

  testCases.forEach(({ obj1, obj2, expected }, index) => {
    const result = updateData(obj1, obj2);
    console.log(`Teste ${index + 1}:`);
    console.log("Entrada obj1:", JSON.stringify(obj1, null, 2));
    console.log("Entrada obj2:", JSON.stringify(obj2, null, 2));
    console.log("Resultado:", JSON.stringify(result, null, 2));
    console.log("Esperado:", JSON.stringify(expected, null, 2));
    console.log(result && JSON.stringify(result) === JSON.stringify(expected) ? "Passou" : "Falhou");
    console.log('---------------------------------------------');
  });
}

// ------------------- TESTES EXERCÍCIO 3: Get Rick and Morty Characters -------------------

import getRickAndMortyCharacters from './exercicio3.js';

async function testGetRickAndMortyCharacters() {
  console.log("\nExercício 3 - Teste: Get Rick and Morty Characters");

  try {
    const characters = await getRickAndMortyCharacters();
    console.log(JSON.stringify(characters, null, 2)); // Formatação para visualização bonita
  } catch (error) {
    console.error("Erro ao buscar personagens:", error);
  }
}

// ------------------- TESTES EXERCÍCIO 4: Check First Letter Uppercase -------------------

import isFirstLetterUppercase from './exercicio4.js';

function testIsFirstLetterUppercase() {
  console.log("\nExercício 4 - Teste: First Letter Uppercase");

  const testCases = [
    { input: "Brasil", expected: true },
    { input: "mobiauto", expected: false },
    { input: "xXx xXx", expected: false },
    { input: "xDD", expected: false },
    { input: "Deu Certo!", expected: true },
    { input: "", expected: false }
  ];

  testCases.forEach(({ input, expected }, index) => {
    const result = isFirstLetterUppercase(input);
    console.log(`Teste ${index + 1}: Input = "${input}", Expected = ${expected}, Resultado = ${result}`);
  });
}

// ------------------- EXECUÇÃO DOS TESTES -------------------

function runTests() {
  testMaskify();
  testUpdateData();
  testGetRickAndMortyCharacters();
  testIsFirstLetterUppercase();
}

runTests();
