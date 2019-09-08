import React from "react";

class Wines extends React.Component {

    render() {
        return (
            <div>

                <form>
                    <select>
                        <option selected>Vineyard</option>
                        <option value="1">Caymus</option>
                        <option value="2">Silver Oak</option>
                        <option value="3">Stag's Leap</option>
                    </select>
                    <select>
                        <option selected>Nested Region</option>
                        <option value="1">Carneros</option>
                        <option value="2">Howell Mountain</option>
                        <option value="3">Oakville</option>
                    </select>
                    <select>
                        <option selected>Vintage</option>
                        <option value="1">2018</option>
                        <option value="2">2017</option>
                        <option value="3">2016</option>
                    </select>
                    <select>
                        <option selected>Alcohol Percentage</option>
                        <option value="1">0-9.9%</option>
                        <option value="2">10-14.9%</option>
                        <option value="3">15+%</option>
                    </select>
                    <select>
                        <option selected>Price Range</option>
                        <option value="1">0-$25</option>
                        <option value="2">$25.01-$49.99</option>
                        <option value="3">$50+</option>
                    </select>
                    <select>
                        <option selected>Varietal</option>
                        <option value="1">Cabernet Sauvignon</option>
                        <option value="2">Merlot</option>
                        <option value="3">Petit Syrah</option>
                    </select>
                    <select>
                        <option selected>Color</option>
                        <option value="1">Red</option>
                        <option value="2">White</option>
                        <option value="3">Rosé</option>
                        <option value="4">Sparkling</option>
                    </select>
                </form>

                <p>Wine search results are displayed here</p>

            </div>
        );
    }

}

export default Wines;
