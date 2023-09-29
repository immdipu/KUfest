const mongoose = require("mongoose");

mongoose.connect('mongodb+srv://silenceking80:o64pw35jdATTT4UY@cluster0.zqihu4p.mongodb.net/KUhackfest?retryWrites=true&w=majority')
  .then(() => {
    console.log('Connected to MongoDB!');
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });

mongoose.connection.on('disconnected', () => {
  console.log('Disconnected from MongoDB');
});

mongoose.connection.on('error', (error) => {
  console.error('MongoDB connection error:', error);
});
