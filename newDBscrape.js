// This file empties the Wines collection in the db and inserts the wines got by scraping
const mongoose = require("mongoose");
const db = require("../models");
const winescrape = require("./winescrape");

// Read environment variables from .env
// Please make sure you have a ".env" file in the Fantastic4 folder
require('dotenv').config()

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/CDCDB", { useNewUrlParser: true });

winescrape.scrapeAll()
    .then(async (wineSeed) => {
        // wineSeed is an array of wines obtained from scraping wine.com
        try {
            wineSeed.map(async data => {

                const vineyard = await db.Vineyard.findOne({ fullName: data.vineyard.fullName })
                const newWine = await db.WineReport.create(data)
                if (!vineyard) {
                    const newVineyard = await db.Vineyard.create(data.vineyard);
                    const updateResp = await db.Vineyard.findByIdAndUpdate(newVineyard._id, {
                        $push: {
                            Wines: newWine._id
                        }
                    })
                    return updateResp
                }
                const updateResp = await db.Vineyard.findByIdAndUpdate(vineyard._id, {
                    $push: {
                        Wines: newWine._id
                    }
                })
                return updateResp;
            })
        } catch (error) {
            console.log(error)
        }
        //   .then(() => db.Wine.collection.insertMany(wineSeed))
        //   .then(data => {
        //     console.log(data.result.n + " records inserted!");
        //     process.exit(0);
        //   })
        //   .catch(err => {
        //     console.log(err);
        //     process.exit(1);
        //   })
    });


  ///
