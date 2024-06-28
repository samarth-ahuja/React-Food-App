import Modal from "./UI/Modal";
import Button from './UI/Button';
import { useContext } from "react";
import { CartContext } from "../store/CartContext";
import { UserProgressContext } from "../store/UserProgressContext";
import Checkout from "./Checkout";

export default function Cart({ modalOpen, ...props }) {
    console.log('modalOpen', modalOpen)
    const { items,addItem,removeItem} = useContext(CartContext);
    const {hideCart,showCheckout} = useContext(UserProgressContext);
    return (
        <>
        {open && <Modal open={modalOpen} {...props}>
            <h2>Your Cart</h2>
            <table className="cart">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Quantity</th>
                    </tr>
                </thead>
                {items.map((item) => {
                    return (<tbody key={item.id}>
                        <tr >
                            <td>{item.name}</td>
                            <td>$ {item.price}</td>
                            <td className="cart-item-actions">
                                <button onClick={()=>removeItem(item)}>-</button>
                                {item.quantity}
                                <button onClick={()=>addItem(item)}>+</button>
                            </td>
                        </tr>
                    </tbody>)
                })}
            </table>
            <div className="cart-total">
                <Button onClick={hideCart}>Close</Button>
                {items.length>0?<Button onClick={showCheckout}>Checkout</Button>:null}
                {'$ ' + items.reduce((acc, item) => +acc + (+item.price * item.quantity), 0)}
            </div>
        </Modal>}
        {<Checkout />}
        </>
    );
}