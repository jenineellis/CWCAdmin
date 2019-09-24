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
                        quantity = "1"
                        price = {"$" + cartItem.price.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}
                        >
                        </CartItems>
                    ))}  
                </CartTable>
            </CartCard>
        )
    }
}

export default Cart;