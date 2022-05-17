import { Card, Button } from 'react-bootstrap';
const ProductItem = ({ product }) => (
    <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={product.image} />
        <Card.Body>
            <Card.Title>{product.title}</Card.Title>
            <Card.Text>
                {product.description}
            </Card.Text>
            <Button variant="primary">Lägg i varukorg</Button>
        </Card.Body>
    </Card>
)

export default ProductItem;