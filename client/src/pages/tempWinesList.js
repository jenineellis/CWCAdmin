import React from "react";
import Card from "../components/Card";
import API from "../utils/API";

class tempWinesList extends React.Component {

    state = {
        wines: []
    };

    componentDidMount() {
        this.loadWines();
    }

    loadWines = () => {
        API.getWines()
        .then(res =>
            this.setState({ wines: res.data })
        )
        .catch(err => console.log(err));
    };

    render() {
        return (
            <div>
                {this.state.wines.length > 0 ?
                    this.state.wines.map((wine) => (
                        <Card
                            picture = {wine.pictures[0].base_url + wine.pictures[0].public_id}
                            name = {wine.name}
                            varietal = {wine.varietal}
                            shortDescription = {wine.shortDescription}
                            volume = {wine.volume}
                            price = {wine.price}
                        >
                        </Card>
                    ))
                : <div>No wines available</div>} 
            </div>
        )  
    }
}

export default tempWinesList;