import { useState, useEffect } from 'react';
import ProductItem from './ProductItem';
import { Container, Row, Col, Form, InputGroup, Button } from 'react-bootstrap';
import { fetchProducts } from '../app/productsSlice';
import { useDispatch, useSelector } from 'react-redux';

const ProductList = ({ addItemToCart }) => {

    const dispatch = useDispatch();

    const products = useSelector(state => state.products.items);
    const isLoading = useSelector(state => state.products.isLoading);
    const [searchText, setSearchText] = useState("");
    const [productsUrl, setProductsUrl] = useState("https://fakestore-iths-api.herokuapp.com/products");

    const onFormSubmit = (event) => {
        event.preventDefault();
        setProductsUrl(`https://fakestore-iths-api.herokuapp.com/products?query=${searchText}`);
    }

    useEffect(() => {
        dispatch(fetchProducts());
    }, [productsUrl]);

    return (
        <Container>
            <Row>
                <Col>
                    <Form onSubmit={onFormSubmit}>
                        <InputGroup>
                            <Form.Control type="text" onChange={event => setSearchText(event.target.value)}></Form.Control>
                            <Button type="submit">Sök</Button>
                        </InputGroup>
                    </Form>
                </Col>
            </Row>
            <Row>
                {isLoading ?
                    <p>Laddar...</p> : products.length === 0 ?
                        <p>Inga produkter hittades!</p> : products.map(product => <Col key={product.id}><ProductItem product={product} addItemToCart={addItemToCart} /></Col>)}
            </Row>
        </Container>
    )
}

export default ProductList; 