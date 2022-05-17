import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import { useState } from 'react';

const App = () => {
  const [cartItems, setCartItem] = useState([]);

  const addItemToCart = (product) => {
    const existingCartItem = cartItems.find(cartItem => cartItem.product.id === product.id);

    console.log(cartItems);
    if (existingCartItem) {
      //Öka quantity med 1
      setCartItem(cartItems.map(
          cartItem => cartItem.product.id === existingCartItem.product.id ?
            { ...existingCartItem, quantity: existingCartItem.quantity + 1 }
            : cartItem))

    } else {
      const cartItem = { quantity: 1, product: { ...product } };
      setCartItem([...cartItems, cartItem])
    }
  }

  return (
    <Container>
      <Row>
        <Col>
          <h1>Fakestore</h1>
        </Col>
      </Row>
      <Row>
        <Col md={9}>
          <h2>Produkter</h2>
          <ProductList addItemToCart={addItemToCart} />
        </Col>
        <Col md={3}>
          <Cart cartItems={cartItems} />
        </Col>
      </Row>
    </Container>
  )
}

export default App;
