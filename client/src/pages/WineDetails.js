import React from "react";
import API from "../utils/API";
import WineCard from "../components/Card";
import VineyardList from "../components/VineyardList";

class WineDetails extends React.Component {
    state = {
        wines: [],
    }

    componentDidMount() {
        this.loadWines();
    }

    loadWines = () => {
        API.getWines()
          .then(res => this.setState({ wines: res.data }) )
          .catch(err => console.log(err));
    }

    render() {
        return (
            <div>
                {this.state.wines.length > 0 ?
                    this.state.wines.map((wine) => (
                        <div>
                        <WineCard
                            key = {wine._id}
                            id = {wine._id}
                            picture = {wine.pictures[0].base_url + wine.pictures[0].public_id}
                            name = {wine.name}
                            varietal = {wine.varietal}
                            shortDescription = {wine.shortDescription}
                            volume = {wine.volume}
                            price = {wine.price}
                        >
                        </WineCard>
                        <VineyardList
                            vineyardName = {wine.vineyard.fullName}
                            subregion = {wine.nested_region}
                            vineyardRegion = {wine.vineyard.region}                            
                            vineyardDetails = {wine.vineyard.longDescription}
                        >
                        </VineyardList>
                        </div>
                    ))
                : <div>No wines available</div>}
            </div>
        )
    }


}

export default WineDetails;

// This will remove unneccessary tags from appearing on client
// dangerouslySetInnerHTML={{ __html: wine.longDescription }}