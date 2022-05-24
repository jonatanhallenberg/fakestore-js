import { Routes, Route } from "react-router-dom";
import ProductListPage from './routes/ProductListPage';
import ProductPage from "./routes/Productpage";
import { Container, Row, Col } from 'react-bootstrap';
import Menu from "./components/Menu";

const App = () => (
  <Container>
    <Row>
      <Col>
        <h1>Fakestore</h1>
      </Col>
    </Row>
    <Menu />
    <Routes>
      <Route path="/" element={<ProductListPage pageType="all" />} />
      <Route path="product/:productId" element={<ProductPage />} />
      <Route path="category/:categoryName" element={<ProductListPage pageType="category" />}></Route>
    </Routes>
  </Container>
)

export default App;