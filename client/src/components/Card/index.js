import React from "react";
import "./style.css"

class WineCard extends React.Component {

    state = {
        quantity: 1
    }

    render() {
        return (
            <div className="card">
                <div className="row no-gutters">
                    <div className="col-sm-3">
                        <img src={this.props.picture} className="card-img" alt="wineLabel"></img>
                    </div>
                    <div className="col-sm-9">
                        <div className="card-body" data-id={this.props.id}>
                            <h5 className="card-title">{this.props.name}</h5>
                            <p className="card-text">{this.props.varietal}</p>
                            <p className="card-text" dangerouslySetInnerHTML={{ __html: this.props.shortDescription }}></p>
                            <p className="card-text">{this.props.volume} ml | ${this.props.price}</p>

                            <div className="form-row">
                                <div className="col-1">
                                    <input type="text" className="form-control text-center" placeholder="1" value={this.state.quantity} />
                                </div>
                                <div className="col-9">
                                    <button onClick={this.props.onAddToCart} className="btn btn-primary ">Add to Cart</button>
                                </div>
                            </div>

                            <div>{this.props.children}</div>

                            <a href="#" className="card-link">Customer Reviews</a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default WineCard;
