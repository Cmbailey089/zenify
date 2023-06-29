const mongoose = require('mongoose');

<<<<<<< HEAD
mongoose.connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/ZenifyDB', {
=======
mongoose.connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/zenifyDB', {
>>>>>>> 3e577cd5d38e6918bc740b6ca3a4819e82ee35fd
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = mongoose.connection;