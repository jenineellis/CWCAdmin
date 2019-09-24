import React from "react";
import { CartCard, CartTable, CartItems, Subtotal } from "../components/CartPage";

class Cart extends React.Component {
    render() {
        return (
            <CartCard>
                <h1>Cart: {this.props.cartItems.length} items</h1>
                {this.props.cartItems.length > 0 ?
                (<CartTable>
                    {this.props.cartItems.map(cartItem => (
                        <CartItems 
                        productName = {cartItem.name}
                        quantity = "1"
                        price = {"$" + cartItem.price.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}
                        >
                        </CartItems>
                    ))}  
                    <Subtotal />
                </CartTable>

                ) : <div>Looks a little empty. Browse our collection of wines.</div>}
                
            </CartCard>
        )
    }
}

export default Cart;