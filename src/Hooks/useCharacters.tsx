import { useState, useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { IAPIRickAndMorty } from 'interfaces/ApiRickAndMorty';
import CharactersRecoil from '../Store/characters/CharactersRecoil';

function useCharacters() {
  const [charactersList, setCharactersList] = useRecoilState(CharactersRecoil);
  const [personajes, setPersonajes] = useState([]);
  const [loadingCharacterList, setLoadingCharacterList] = useState(true);

  const getPageCharactersList = async () => {
    const getData = await fetch(`https://rickandmortyapi.com/api/character/?page=${charactersList.activePage}`);
    const data = await getData.json();
    setLoadingCharacterList(false);
    setPersonajes(data.results);
    console.log(data.results);
    return data as IAPIRickAndMorty;
  };

  const handleSearchCharacterListRickAndMorty = async (
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    // Aqui iria la funcionalidad de la busqueda de los personajes
  };
  useEffect(() => {
    getPageCharactersList();
  }, []);

  return {
    charactersList,
    getPageCharactersList,
    handleSearchCharacterListRickAndMorty,
    loadingCharacterList,
  };
}

export default useCharacters;
