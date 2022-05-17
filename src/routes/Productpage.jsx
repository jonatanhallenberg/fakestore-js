import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Row, Col, Image } from 'react-bootstrap';

const ProductPage = () => {
    const { productId } = useParams();
    const [product, setProduct] = useState();

    useEffect(() => {
        fetch(`https://fakestoreapi.com/products/${productId}`)
            .then(res => res.json())
            .then(json => setProduct(json))
    }, [])

    return <Container>
        <Row>
            <Col>
                {product ? <>
                    <h1>{product.title}</h1>
                    <Image src={product.image}></Image>
                </> : <>Loading...</>}
            </Col>
        </Row>
    </Container>
}

export default ProductPage;