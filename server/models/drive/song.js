const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define our model
const SongSchema = new Schema({
  name: String,
  band: String,
  driveFileId: String,
  webContentLink: String,
  waveWebContentLink: String,
  createdTime: String,
  size: String,
  driveWaveId: String,
  album: String
});

// Create the model class
const ModelClass = mongoose.model('song', SongSchema);

// Export the model
module.exports = ModelClass;
