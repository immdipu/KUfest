const Place = require("../model/Places");
const path = require("path");
const createPlace = async (req, res, next) => {
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

        const placeData = {
            ...req.body,
            images: uploadedImagePaths,
            // created_by: req.user._id,
        };

        const city = await Place.create(placeData);

        res.status(201).json({ success: true, data: city });
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
