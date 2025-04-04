import fetch from 'node-fetch';
import ApiUrlsEnum from './enum/ApiUrlsEnum.js';

function mapGenderToPortuguese(gender) {
  return gender === 'Male' ? 'Homem' : 'Mulher';
}

function formatCharacterData(character) {
  return {
    nome: character.name,
    genero: mapGenderToPortuguese(character.gender),
    avatar: character.image,
    especie: character.species,
  };
}

async function fetchCharacterData(id) {
  try {
    const response = await fetch(`${ApiUrlsEnum.RICK_AND_MORTY}${id}`);
    if (!response.ok) throw new Error(`Erro ao buscar personagem com ID ${id}`);
    return response.json();
  } catch (error) {
    console.error(`Erro ao buscar dados do personagem ${id}:`, error);
    return null;  
  }
}

async function getRickAndMortyCharacters() {
  const characterIds = [1, 2, 3, 4, 5]; 

  try {
    const characters = await Promise.all(characterIds.map(fetchCharacterData));
    const validCharacters = characters.filter(character => character !== null); 

    return validCharacters.map(formatCharacterData);
  } catch (error) {
    console.error('Erro ao buscar dados dos personagens:', error);
    return []; 
  }
}

export default getRickAndMortyCharacters;
