import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Col } from 'react-bootstrap';
import ProductList from '../components/ProductList';
import CategoryProductList from '../components/CategoryProductList';
import Cart from '../components/Cart';
import { useState } from 'react';

const ProductListPage = ({ pageType }) => {
  const [cartItems, setCartItems] = useState([]);

  const addItemToCart = (product) => {
    const existingCartItem = cartItems.find(cartItem => cartItem.product.id === product.id);

    if (existingCartItem) {
      //Öka quantity med 1
      setCartItems(cartItems.map(
        cartItem => cartItem.product.id === existingCartItem.product.id ?
          { ...existingCartItem, quantity: existingCartItem.quantity + 1 }
          : cartItem))

    } else {
      const cartItem = { quantity: 1, product: { ...product } };
      setCartItems([...cartItems, cartItem])
    }
  }

  const removeCartItem = (productId) => {
    setCartItems(
      cartItems.filter(cartItem => cartItem.product.id !== productId)
    );
  }

  return (
      <Row>
        <Col md={9}>
          <h2>Produkter</h2>
          { pageType === "category" ? <CategoryProductList addItemToCart={addItemToCart} /> : <ProductList addItemToCart={addItemToCart} /> }
        </Col>
        <Col md={3}>
          <Cart cartItems={cartItems} removeCartItem={removeCartItem} />
        </Col>
      </Row>
  )
}

export default ProductListPage;
