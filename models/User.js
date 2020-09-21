// necesitamos importar mongoose
const mongoose = require('mongoose');

// los modelos se crean a partir de un schema
const UserSchema = new mongoose.Schema({
  id: Number,
  name: String,
  mail: String,
  birthday: Date
});

const User = mongoose.model('User', UserSchema);

module.exports = User;
