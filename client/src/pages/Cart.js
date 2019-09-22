import React from "react";
import { CartCard, CartTable, CartItems } from "../components/CartPage";

class Cart extends React.Component {
    render() {
        return (
            <CartCard>
                <CartTable>
                    {this.props.cartItems.map(cartItem => (
                        <CartItems 
                        productName = {cartItem.name}
                        quantity = {cartItem.quantity}
                        price = {cartItem.price}
                        >
                        </CartItems>
                    ))}  
                </CartTable>
            </CartCard>
        )
    }
}

export default Cart;