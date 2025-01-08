const mongoose = require("mongoose");

const ListingSchema = new mongoose.Schema(
    {
        title: String,
        mobile_number: String,
        whatsapp_number: String,
        location: String,
        opening_hour: String,
        year_of_experience: String,
          // price_listing: {
        //     type: { String }
        // },
        segment:  {
            type: { String }
        },
         packages_offered: {
            type: { String }
        },
         seating_capacity:  {
            type: { String }
        },
         services:  {
            type: { String }
        },
         brands: {
            type: { String }
        },
      
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