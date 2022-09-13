import { useEffect } from 'react';
import { Dimmer, Grid, Loader } from 'semantic-ui-react';
import useCharacters from '../Hooks/useCharacters';
import CardCharacters from './CardCharacters';

function CharactersList() {
  const {
    loadingCharacterList,
    charactersList,
  } = useCharacters();

  if (loadingCharacterList) {
    return (
      <Dimmer active>
        <Loader size="large">Cargando Personajes</Loader>
      </Dimmer>
    );
  }

  return (
    <Grid className="CharactersList" centered container columns={2}>
      {
        !charactersList.filterCharacters ? (
          charactersList.listCharacters.map((item) => (
            <CardCharacters
              key={item.id}
              name={item.name}
              location={item.lastKnownLocation}
              origin={item.firstSeenIn}
              picture={item.imageProfile}
              species={item.species}
              status={item.status}
            />
          ))
        ) : (
          charactersList.listCharacters.map((item) => (
            <CardCharacters
              key={item.id}
              name={item.name}
              location={item.lastKnownLocation}
              origin={item.firstSeenIn}
              picture={item.imageProfile}
              species={item.species}
              status={item.status}
            />
          )).filter(
            (item) => item.props.name
              .toLowerCase()
              .includes(charactersList.filterCharacters.toLowerCase()),
          )
        )
      }
    </Grid>
  );
}

export default CharactersList;
