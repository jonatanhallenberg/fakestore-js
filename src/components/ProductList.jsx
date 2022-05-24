import { useState, useEffect } from 'react';
import ProductItem from './ProductItem';
import { Container, Row, Col, Form, InputGroup, Button } from 'react-bootstrap';
const ProductList = ({ addItemToCart }) => {

    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [searchText, setSearchText] = useState("");
    const [productsUrl, setProductsUrl] = useState("https://fakestore-iths-api.herokuapp.com/products");

    const onFormSubmit = (event) => {
        event.preventDefault();
        setProductsUrl(`https://fakestore-iths-api.herokuapp.com/products?query=${searchText}`);
    }

    useEffect(() => {
        setIsLoading(true);
        fetch(productsUrl)
            .then(res => res.json())
            .then(json => {
                setIsLoading(false)
                setProducts(json)
            }
            )
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