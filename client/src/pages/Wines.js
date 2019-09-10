import React from "react";
import Card from "react-bootstrap/Card";
import "./wines.css";

class Wines extends React.Component {

    render() {
        var wineResults = [

            {
                "_id": "5d6c69788ea24c185dcd2174",
                "name": "Ghost Block Oakville Estate Cabernet Sauvignon 2016",
                "region": "California",
                "nested_region": "Oakville",
                "varietal": "Cabernet Sauvignon",
                "alcohol_percent": 14,
                "vintage": "2016",
                "price": 74.99,
                "vineyard": "Ghost Block",
                "shortDescription": "2016 Oakville Estate Cabernet Sauvignon",
                "longDescription": "<p>The fruit for the 2016 Ghost Block Cabernet Sauvignon primarily (82%) comes from our family-owned Rock Cairn vineyard. The 30- year-old vineyard in Oakville, Napa Valley is 100% Certified Organic. This site is comprised of deep, gravelly loam with a western exposure, and the vines produce very concentrated fruit late in the season. In this particular vintage, we have blended in four of our other estate vineyards in Yountville and Oakville to bring you this magical wine.</p><p>Intense, overt aromas of dark plum and black cherry burst from the glass. This wine has a beautiful balance between tannin and fruit. The palate has enticing flavors of darker red fruits—black cherry, cassis, and cranberry. The structure &amp; body is lengthened in your mouth by the well-integrated oak notes that frame this wine. The soft and silky tannins allow for a long-lasting finish, making this wine friendly and attractive to every type of winedrinker!</p>",
                "stock": 126,
                "pictures": [
                    {
                        "media_type_id": "front-label",
                        "base_url": "http://res.cloudinary.com/winecom/image/upload/",
                        "public_id": "khreqrtnhlqa1bxfpjof",
                        "height": 640,
                        "width": 399,
                        "priority_order": 0,
                        "alt_text": "Flat front label of wine",
                        "title": null,
                        "credit": null,
                        "description": ""
                    },
                    {
                        "media_type_id": "front-bottle-shot",
                        "base_url": "http://res.cloudinary.com/winecom/image/upload/",
                        "public_id": "yhgejmnbpqxouwj3evxv",
                        "height": 2338,
                        "width": 592,
                        "priority_order": 1,
                        "alt_text": "Front shot of wine bottle",
                        "title": "",
                        "credit": "",
                        "description": ""
                    }
                ],
                "color": "red"
            },


            {
                "_id": "5d6c69788ea24c185dcd2177",
                "name": "Heitz Cellar Napa Valley Cabernet Sauvignon 2014",
                "region": "California",
                "nested_region": "Napa Valley",
                "varietal": "Cabernet Sauvignon",
                "alcohol_percent": 14,
                "vintage": "2014",
                "price": 63,
                "vineyard": "Heitz Cellar",
                "shortDescription": "2014 Napa Valley Cabernet Sauvignon",
                "longDescription": "<p>One sniff and anticipation takes hold. Beautiful aromas of vine-ripened blackberry contrast perfectly with spicy notes of nutmeg. There are a luscious weight and texture to the wine, but also a racy edge of well-balanced acidity on the palate.</p><p>This is an extraordinary Cabernet – powerful, yet elegant, with all the wonderful aging potential you’ve come to expect from Heitz wines.</p>",
                "stock": 101,
                "pictures": [
                    {
                        "media_type_id": "front-label",
                        "base_url": "http://res.cloudinary.com/winecom/image/upload/",
                        "public_id": "afdaqtzb82zes1cvaanb",
                        "height": 691,
                        "width": 731,
                        "priority_order": 0,
                        "alt_text": "Flat front label of wine",
                        "title": "",
                        "credit": "",
                        "description": ""
                    }
                ],
                "color": "red"
            }
        ];
        
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

                <div id="wineResultsContainer">
                    {wineResults.map((wine) => (
                        <Card>
                            <Card.Img variant="top" src={wine.pictures[0].base_url + wine.pictures[0].public_id}></Card.Img>
                            <Card.Body>
                                <Card.Title>{wine.name}</Card.Title>
                                <Card.Text>
                                    {wine.longDescription}
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    ))}
                </div>
                
            </div>
        );
    }

}

export default Wines;
