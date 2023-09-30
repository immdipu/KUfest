const City = require("../model/City");

const path = require("path");
const createCity = async (req, res, next) => {
    try {
        let imageFiles = req.files ? req.files.images || [] : [];
        if (!Array.isArray(imageFiles)) {
            imageFiles = [imageFiles];
        }

        const uploadedImagePaths = [];

        if (imageFiles.length > 0) {
            // Upload images and populate uploadedImagePaths array
            for (const imageFile of imageFiles) {
                const file_name =
                    Date.now() + "-" + Math.round(Math.random() * 1E9) + path.extname(imageFile.name);

                await new Promise((resolve, reject) => {
                    imageFile.mv(
                        path.join(__dirname, "../", "uploads/", file_name),
                        (err) => {
                            if (err) {
                                console.error(err);
                                reject(err);
                            } else {
                                uploadedImagePaths.push(file_name);
                                resolve();
                            }
                        }
                    );
                });
            }
        }

        const cityData = {
            ...req.body,
            images: uploadedImagePaths,
            // created_by: req.user._id,
        };

        const city = await City.create(cityData);

        res.status(201).json({ success: true, data: city });
    } catch (error) {
        next(error);
    }
};


const createPlaceInCity = async (req, res, next) => {
    try {
        const cityId = req.params.cityId;
        const { name, description, images, ratings, reviews, posts, articles } = req.body;

        const city = await City.findById(cityId);
        if (!city) {
            return res.status(404).json({ success: false, error: 'City not found' });
        }

        const place = {
            name,
            description,
            images,
            ratings,
            reviews,
            posts,
            articles
        };

        city.places.push(place);
        await city.save();

        res.status(201).json({ success: true, data: place });
    } catch (error) {
        next(error);
    }
};


const getCities = async (req, res, next) => {
    try {
        const places = await City.find();
        res.status(200).json({ success: true, data: places });
    } catch (error) {
        next(error);
    }
};

module.exports = {
    createCity,
    createPlaceInCity,
    getCities
};
