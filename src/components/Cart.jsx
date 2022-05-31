import { ListGroup, Button } from 'react-bootstrap';
import { useSelector } from 'react-redux';
const Cart = ({ cartItems, removeCartItem }) => {

    const count = useSelector(state => state.count.count);

    return <>
        <h2>Varukorg</h2>
        <p>Count: {count}</p>
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