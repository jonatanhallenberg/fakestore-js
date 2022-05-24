import { useState, useEffect } from 'react';
import ProductItem from './ProductItem';
import { Container, Row, Col } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

const CategoryProductList = ({ addItemToCart }) => {

    const params = useParams();
    console.log(params);

    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        fetch(`https://fakestoreapi.com/products/category/${params.categoryName}`)
            .then(res => res.json())
            .then(json => {
                setIsLoading(false);
                setProducts(json);
            })
    }, [params.categoryName]);

    return (
        <Container>
            <Row>
                {isLoading ? <p>Laddar...</p> : products.map(product => <Col key={product.id}><ProductItem product={product} addItemToCart={addItemToCart} /></Col>)}
            </Row>
        </Container>
    )
}

export default CategoryProductList; 