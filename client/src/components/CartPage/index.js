import React from "react";

export function CartCard({ children }) {
    return <div className="card">{children}</div>
}

export function CartTable({ children }) {
    return (
        <div>
            <table className="cartItems table">
                <thead>
                    <tr>
                        <th scope="col">Product</th>
                        <th scope="col">Quantity</th>
                        <th scope="col">Price</th>
                        <th scope="col">Remove Item</th>
                    </tr>
                </thead>
                { children }
            </table>
        </div>
    )
}

export function CartItems(props) {
    return (
            <tbody>
                <tr>
                    <td scope="row">{props.productName}</td>
                    <td>{props.quantity}</td>
                    <td>{props.price}</td>
                    <td><i class="far fa-trash-alt"></i></td>
                </tr>
            </tbody>
    )
}