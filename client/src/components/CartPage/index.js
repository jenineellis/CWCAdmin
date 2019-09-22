import React from "react";

export function CartCard({ children }) {
    return <div className="card">{children}</div>
}

export function CartTable({ children }) {
    return (
        <div>
            <table className="cartItems">
                <thead>
                    <tr>
                        <th>Product</th>
                        <th>Quantity</th>
                        <th>Price</th>
                        <th></th>
                    </tr>
                </thead>
                { children }
            </table>
        </div>
    )
}

export function CartItems(props) {
    return (
        <div>
            <tbody>
                <tr>
                    <td>{props.productName}</td>
                    <td>{props.quantity}</td>
                    <td>{props.price}</td>
                    <td></td>
                </tr>
            </tbody>
        </div>
    )
}