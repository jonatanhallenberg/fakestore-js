import { Routes, Route } from "react-router-dom";
import ProductListPage from './routes/ProductListPage';
import ProductPage from "./routes/Productpage";
import { Container, Row, Col } from 'react-bootstrap';
import Menu from "./components/Menu";
import { useDispatch } from 'react-redux';
import { increase, decrease } from './app/counterSlice';

const App = () => {

  const dispatch = useDispatch();

  return (
    <Container>
      <Row>
        <Col>
          <h1>Fakestore</h1>
          <button type="button" onClick={() => dispatch(increase())}>Öka</button>
          <button type="button" onClick={() => dispatch(decrease())}>Minskar</button>
        </Col>
      </Row>
      <Menu />
      <Routes>
        <Route path="/" element={<ProductListPage pageType="all" />} />
        <Route path="product/:productId" element={<ProductPage />} />
        <Route path="category/:categoryName" element={<ProductListPage pageType="category" />}></Route>
      </Routes>
    </Container >
  )
}

export default App;