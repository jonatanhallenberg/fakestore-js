import { Card, Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
const ProductItem = ({ product, addItemToCart }) => (
    <Card style={{ width: '18rem' }}>
        <NavLink to={`/product/${product.id}`}><Card.Img variant="top" src={product.image} /></NavLink>
        <Card.Body>
            <Card.Title>{product.title}</Card.Title>
            <Card.Text>
                {product.description}
            </Card.Text>
            <Button variant="primary" onClick={() => addItemToCart(product)}>Lägg i varukorg</Button>
        </Card.Body>
    </Card>
)

export default ProductItem;