import React from "react";
import "./style.css"

function WineCard(props) {
    return (
        <div className="card">
            <div className="row no-gutters">
                <div className="col-sm-3">
                    <img src={props.picture} className="card-img" alt="wineLabel"></img>
                </div>
                <div className="col-sm-9">
                    <div className="card-body" data-id={props.id}>
                        <h5 className="card-title">{props.name}</h5>
                        <p className="card-text">{props.varietal}</p>
                        <p className="card-text">{props.shortDescription}</p>
                        <p className="card-text">{props.volume} ml | ${props.price}</p>

                    <form>
                        <div className="form-row">
                            <div className="col-1">
                                <input type="text" className="form-control text-center" placeholder="1" />
                            </div>
                            <div className="col-9">
                                <button href="#" className="btn btn-primary ">Add to Cart</button>
                            </div>
                        </div>
                    </form>

                    <a href="#" className="card-link">Customer Reviews</a>
                    </div>
                </div>
            </div>
        </div>
            )
        }
        
export default WineCard;