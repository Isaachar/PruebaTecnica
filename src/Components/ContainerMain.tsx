import { Container } from 'semantic-ui-react';

interface IBackGround {
  children: JSX.Element | JSX.Element[]
}

function ContainerMain(props: IBackGround) {
  const { children } = props;
  return (
    <Container fluid className="ContMain">
      {children}
    </Container>
  );
}

export default ContainerMain;
