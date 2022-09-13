export interface ICharacter {
  activePage: number;
  listCharacters: Array<{
    id: number;
    name: string;
    species: string;
    lastKnownLocation: string;
    firstSeenIn: string;
    imageProfile: string;
    status: string;
  }>;
  filterCharacters: string;
}
