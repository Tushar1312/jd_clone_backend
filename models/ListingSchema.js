const mongoose = require("mongoose");

const ListingSchema = new mongoose.Schema(
    {
        title: String,
        mobile_number: String,
        whatsapp_number: String,
        location: String,
        opening_hour: String,
        year_of_experience: String,
        // segment: String,
        // packages_offered: String,
        // seating_capacity: String,
        // services: String,
        // brands: String,
        // price_listing: {
        //     type: { String }
        // },
        uplod_images: {
            type: { String }
        },
    },
    {
        timestamps: true,
    }
);
const Listing = mongoose.model("Listing", ListingSchema);
module.exports = Listing;