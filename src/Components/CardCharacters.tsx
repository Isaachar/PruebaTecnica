import { Card, Image, Grid } from 'semantic-ui-react';

interface ICardCharacters {
  name: string;
  status: string;
  species: string;
  origin: string;
  location: string;
  picture: string;
}

function CardCharacters(props: ICardCharacters) {
  const {
    name, status, species, origin, location, picture,
  } = props;
  return (
    <Grid.Column className="CardCharacters">
      <Card fluid>
        <Image
          src={picture}
          wrapped
          ui={false}
        />
        <Card.Content>
          <Card.Header>
            {name}
          </Card.Header>
          <Card.Meta>
            {status}
            {' '}
            -
            {' '}
            {species}
          </Card.Meta>
        </Card.Content>
        <Card.Content>
          <Card.Description>
            <span>Origin</span>
            <Card.Meta>
              {origin}
            </Card.Meta>
          </Card.Description>
        </Card.Content>
        <Card.Content>
          <Card.Description>
            <span>Location</span>
            <Card.Meta>
              {location}
            </Card.Meta>
          </Card.Description>
        </Card.Content>
      </Card>
    </Grid.Column>
  );
}

export default CardCharacters;
