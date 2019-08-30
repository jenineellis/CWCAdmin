// winescrape.js
// Scrapes wine.com website

const axios = require("axios");
const cheerio = require("cheerio");


function scrape(callback) {

    console.log("Scraping wine.com...");
    axios.get("https://www.wine.com/list/wine/california/7155-106870")
        .then((response) => {
            console.log("Received " + response.status + " " + response.statusText);
            const html = response.data;

            // Parse html using Cheerio library
            const $ = cheerio.load(html, { xmlMode: false });

            const scriptContents = $('script[name="sharify"]').get(0).children[0].data;
            const startIndex = scriptContents.indexOf('{');
            const stopIndex = scriptContents.lastIndexOf('}');
            const jsonString = scriptContents.substring(startIndex, stopIndex + 1);
            const json = JSON.parse(jsonString);
            const models = json.model.collection.models;

            // Holds the array of scraped wines
            var scrapedWines = [];

            for (var i = 0; i < models.length; i++) {
                var wine = models[i];
                console.log("Name: " + wine.catalogModel.fullName);
                console.log("Region: " + wine.catalogModel.region);
                console.log("Nested region: " + wine.catalogModel.nestedRegionName);
                console.log("Varietal: " + wine.catalogModel.varietal.shortDesc);
                console.log("Alcohol %: " + wine.catalogModel.alcoholPercent);
                console.log("Vintage: " + wine.catalogModel.vintage);
                console.log("Volume: " + wine.catalogModel.volume);
                // TODO add cents to the price
                console.log("Price: " + wine.catalogModel.regularPrice.whole);
                console.log("Vineyard: " + wine.catalogModel.vineyard.fullName);
                console.log("Stock: " + wine.catalogModel.stock);
                // console.log(wine.catalogModel.longDescription);
                console.log("---");

                scrapedWines.push({
                    name: wine.catalogModel.fullName,
                    region: wine.catalogModel.region,
                    nested_region: wine.catalogModel.nestedRegionName,
                    varietal: wine.catalogModel.varietal.shortDesc,
                    alcohol_percent: wine.catalogModel.alcoholPercent,
                    vintage: wine.catalogModel.vintage,
                    price: wine.catalogModel.regularPrice.whole,
                    vineyard: wine.catalogModel.vineyard.fullName,
                    stock: wine.catalogModel.stock
                });
            }

            callback(scrapedWines);

        });
};

module.exports = {
    scrape: scrape
};
