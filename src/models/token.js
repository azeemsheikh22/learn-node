const mongoose = require("mongoose");

const tokenSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "User",
  },
  token: {
    type: String,
    required: true,
  },
  expiredAt: {
    type: Date,
    required: true,
  },
});

tokenSchema.index({ expiredAt: 1 }, { expireAfterSeconds: 0 });

module.exports = mongoose.model("Token", tokenSchema);
