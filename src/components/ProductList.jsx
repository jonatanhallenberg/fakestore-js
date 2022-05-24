import { useState, useEffect } from 'react';
import ProductItem from './ProductItem';
import { Container, Row, Col, Form } from 'react-bootstrap';
const ProductList = ({ addItemToCart }) => {

    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [searchText, setSearchText] = useState("");


    useEffect(() => {
        setIsLoading(true);
        fetch(`https://fakestore-iths-api.herokuapp.com/products?query=${searchText}`)
            .then(res => res.json())
            .then(json => {
                setIsLoading(false)
                setProducts(json)
            }
            )
    }, [searchText]);

    return (
        <Container>
            <Row>
                <Col>
                    <Form.Control type="text" onChange={event => setSearchText(event.target.value)}></Form.Control>
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