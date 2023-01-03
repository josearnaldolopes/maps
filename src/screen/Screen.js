import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Search from './Search';
import Add from './Add';

function Screen() {
  return (
    <Container>
      <Row>
        <Col md={2} sm={2}>
          <Add />
        </Col>
        <Col md={10} sm={10}>
          <Search />
        </Col>
      </Row>
     </Container>
  );
}

export default Screen;