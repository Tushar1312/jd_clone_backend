const Listing = require("../models/ListingSchema");


exports.Listing = async (req, res) => {
    console.log(req.body);

    const { title, mobile_number, whatsapp_number, location, opening_hour, year_of_experience,
        segment, packages_offered, seating_capacity, services, brands, price_listing, uplod_images } = req.body

    const result = await Listing.create({
        title: title,
        whatsapp_number: whatsapp_number,
        location: location,
        opening_hour: opening_hour,
        mobile_number: mobile_number,
        year_of_experience: year_of_experience,
        // segment: segment,
        // packages_offered: packages_offered,
        // seating_capacity: seating_capacity,
        // services: services,
        // brands: brands,
        // price_listing: price_listing,
        // uplod_images:uplod_images,

    });
    if (result) {
        res.json({ status: 201, result: 'Data Uploaded Successfully' });
    } else {
        res.json({ status: 422, result: 'Data not getting updated' });
    }
};

