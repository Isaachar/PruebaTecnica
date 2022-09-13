import { ICharacter } from 'interfaces/Characters';
import { atom } from 'recoil';

const CharactersRecoil = atom({
  key: 'charactersList',
  default: {
    activePage: 1,
    listCharacters: [],
    filterCharacters: '',
  } as ICharacter,
});

export default CharactersRecoil;
