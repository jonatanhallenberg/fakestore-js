import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';
import ProductList from './components/ProductList';

const App = () => (
  <Container>
    <Row>
      <Col>
        <h1>Fakestore</h1>
      </Col>
    </Row>
    <Row>
      <Col md={9}>
        <h2>Produkter</h2>
        <ProductList />
      </Col>  
      <Col md={3}>
        {/* <Cart /> */}
      </Col>
    </Row>
  </Container>
)

export default App;
