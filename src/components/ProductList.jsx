import { useState, useEffect } from 'react';
import ProductItem from './ProductItem';
import { Container, Row, Col } from 'react-bootstrap';
const ProductList = () => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(json => setProducts(json))
    }, []);

    return (
        <Container>
            <Row>
                {products.map(product => <Col><ProductItem product={product} /></Col>)}
            </Row>
        </Container>
    )
}

export default ProductList; 