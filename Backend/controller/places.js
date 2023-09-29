const Place = require("../model/Places");
const createPlace = async (req, res, next) => {
    try {
        const { name, city, description, images, ratings, reviews, posts, articles } = req.body;

        const place = await Place.create({ 
            name,
            city,
            description,
            images,
            ratings,
            reviews,
            posts,
            articles
        });

        res.status(201).json({ success: true, data: place });
    } catch (error) {
        next(error);
    }
};


const postAboutPlace = async (req, res, next) => {
    try {
        const placeId = req.params.placeId;
        const { title, content, images } = req.body;

        const place = await Place.findById(placeId);
        if (!place) {
            return res.status(404).json({ success: false, error: 'Place not found' });
        }

        const post = {
            user: req.user._id, // Assuming you have authentication middleware that sets `req.user`
            title,
            content,
            images,
            date: new Date()
        };

        place.posts.push(post);
        await place.save();

        res.status(201).json({ success: true, data: post });
    } catch (error) {
        next(error);
    }
};

const getPlaces = async (req, res, next) => {
    try {
        const places = await Place.find();
        res.status(200).json({ success: true, data: places });
    } catch (error) {
        next(error);
    }
};

module.exports = {
    postAboutPlace,
    createPlace,
    getPlaces
};
