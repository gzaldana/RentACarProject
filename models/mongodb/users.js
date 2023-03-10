const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  updated_at: { type: Date, default: Date.now },
});

module.exports = mongoose.model('User', UserSchema);

// const mongoose = require("mongoose");

// const UserScheme = new mongoose.Schema(
//   {
//     name: {
//       type: String,
//     },
//     age: {
//       type: Number,
//     },
//     email: {
//       type: String,
//       unique: true,
//     },
//     password: {
//       type: String,
//     },
//     role: {
//       type: ["user", "admin"],
//       default: "user",
//     },
//   },
//   {
//     timestamps: true,
//     versionKey: false,
//   }
// );

// module.exports = mongoose.model( UserScheme);
