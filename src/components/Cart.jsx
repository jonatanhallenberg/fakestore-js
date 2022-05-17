import { ListGroup, Button } from 'react-bootstrap';
const Cart = ({ cartItems, removeCartItem }) => {
    return <>
        <h2>Varukorg</h2>

        {cartItems.length ? <ListGroup>
            {cartItems.map(cartItem => (
                <ListGroup.Item>({cartItem.quantity})<b>{cartItem.product.title}</b>, {cartItem.product.price}kr
                    <Button variant="danger" onClick={() => removeCartItem(cartItem.product.id)}>Ta bort</Button>
                </ListGroup.Item>
            ))}
        </ListGroup>
            : <p>Varukorgen är tom!</p>}




    </>
}
export default Cart;