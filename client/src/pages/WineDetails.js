import React from "react";
import API from "../utils/API";
import WineCard from "../components/Card";
import VineyardList from "../components/VineyardList";
import { Link } from "react-router-dom";

class WineDetails extends React.Component {
    state = {
        wines: []
    }

    componentDidMount() {
        API.getWine(this.props.match.params.id)
            .then(res => this.setState({ wines: res.data }))
            .catch(err => console.log(err));
    }

    render() {
        return (
            <div>
                <WineCard
                    key = {this.state.wines._id}
                    id = {this.state.wines._id}
                    picture = "http://res.cloudinary.com/winecom/image/upload/wqc1egbfwnlzbg9rerjd"
                    name = {this.state.wines.name}
                    varietal = {this.state.wines.varietal}
                    shortDescription = {this.state.wines.shortDescription}
                    volume = {this.state.wines.volume}
                    price = {this.state.wines.price}
                    >
                    <Link to="/wines">
                        <button className="btn btn-primary">
                            Back to Browse
                        </button>
                    </Link>
                    </WineCard>
                    {/* <VineyardList
                        vineyardName = {this.state.wines.vineyard.fullName}
                        subregion = {this.state.wines.nested_region}
                        vineyardRegion = {this.state.wines.vineyard.region}  vineyardDetails ={this.state.wines.vineyard.longDescription}
                    >
                    </VineyardList> */}
            </div>
        )
    }
}

export default WineDetails;

// This will remove unneccessary tags from appearing on client
// dangerouslySetInnerHTML={{ __html: wine.longDescription }}