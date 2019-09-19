import React from "react";
import Card from "react-bootstrap/Card";
import API from "../utils/API";


class Wines extends React.Component {

    state = {
        wines: [],      // List of wines displayed in search results
        regions: [],    // List of regions displayed in dropdown

        color: "",      // User's color choice
        region: ""      // User's region choice
    };

    componentDidMount() {
        this.loadWines();
    }

    loadWines = () => {
        var filter = {};
        if (this.state.color)
            filter.color = this.state.color;
        if (this.state.region)
            filter.region = this.state.region;

        API.getWines(filter)
          .then(res =>
            this.setState({ wines: res.data })
          )
          .catch(err => console.log(err));

        API.getWineRegions(filter)
            .then(res => this.setState({ regions: res.data }))
      };

    handleColorChange = (event) => {
        var colorValue = event.target.value;
        this.setState({ color: colorValue }, () => this.loadWines());
    };

    handleRegionChange = (event) => {
        var regionValue = event.target.value;
        this.setState({ region: regionValue }, () => this.loadWines());
    }
    
    render() {
        return (
            <div>

                <form>

                    {/* Color selector */}
                    <select value={this.state.color} onChange={this.handleColorChange}>
                        <option value="">Color</option>
                        <option value="red">Red</option>
                        <option value="white">White</option>
                        <option value="rose">Rosé</option>
                        <option value="sparkling">Sparkling</option>
                    </select>

                    {/* Region selector */}
                    <select value={this.state.region} onChange={this.handleRegionChange}>
                        <option value="">Region</option>
                        {this.state.regions.map(region => (
                            <option key={region._id} value={region._id}>{region._id} ({region.count})</option>
                        ))}
                    </select>

                    <select>
                        <option selected>Varietal</option>
                        <option value="1">Cabernet Sauvignon</option>
                        <option value="2">Merlot</option>
                        <option value="3">Petit Syrah</option>
                    </select>
                    <select>
                        <option selected>Price Range</option>
                        <option value="1">0-$25</option>
                        <option value="2">$25.01-$49.99</option>
                        <option value="3">$50+</option>
                    </select>
                </form>

                <div id="wineResultsContainer">
                    {this.state.wines.length > 0 ?
                        this.state.wines.map((wine) => (
                            <Card key={wine._id}>
                                <Card.Body>
                                    <Card.Title>{wine.name}</Card.Title>
                                    <img height="300" src={"https://www.wine.com/product/images/h_300,c_fit,q_auto:good,fl_progressive/" + wine.pictures[0].public_id + ".jpg"} />
                                    <Card.Text>
                                        <div dangerouslySetInnerHTML={{ __html: wine.longDescription }}></div>
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        ))
                    : <div>No wines to display</div>
                    }
                </div>

            </div>
        );
    }

}

export default Wines;
