import { Grid, Input } from 'semantic-ui-react';
import useCharacters from '../Hooks/useCharacters';

function SearchApi() {
  const { handleSearchCharacterListRickAndMorty } = useCharacters();

  return (
    <Grid centered columns={2}>
      <Grid.Row centered>
        <Grid.Column widescreen={10}>
          <Input
            className="searchInput"
            fluid
            size="huge"
            placeholder="Search Characters"
            action={{
              icon: 'search',
              content: 'Buscar',
              labelPosition: 'right',
              style: {
                backgroundColor: '#fadaec',
              },
            }}
            onChange={handleSearchCharacterListRickAndMorty}
          />
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
}

export default SearchApi;
