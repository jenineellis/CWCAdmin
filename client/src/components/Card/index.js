import React from "react";
import "./style.css"

function Card() {
    return (
        <div className="card"> 
            <img src="/Countryside-Vinyard-Wine-Label.png" className="card-img-top" alt="wineLabel"></img>
            <div className="card-body"> 
            <h5 className="card-title">Wine Name</h5>
            <p className="card-text">2012 Pinot Noir</p>
            <p className="card-text">WINE WINE WINE WINE WINE DESCRIPTION GOES HERE </p> 
            <p className="card-text">750ml | $25.00</p>
        </div>

        <form>
                <div className="form-row">
                    <div className="col-3">
                        <input type="text" className="form-control text-center" placeholder="1"/>
                    </div>
                    <div className="col-9">
                        <button href="#" className="btn btn-primary btn-block">Add to Cart</button>
                    </div>
                </div>
            </form>

            <a href="#" className="card-link">Customer Reviews</a>
        </div>
    )
}

export default Card;