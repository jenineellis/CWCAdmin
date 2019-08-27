const winescrape = require("./winescrape");

winescrape.scrape(function (wines) {
    console.log("Got wines!");
    console.log(wines);
});
