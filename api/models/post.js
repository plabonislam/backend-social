const mongoose = require("mongoose");

const PostSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  title: { type: String, required: true },
  body: { type: String, required: true },
  image: { type: String, required: true },
  likes: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
  favourite: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
  comments: [
    {
      text: { type: String, required: true },
      postedBy: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
      name:{type: String ,required: true}
    },
  ],
  postedBy: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  // role: { type: Boolean, default: false },
  // phone: {type:String, required:true},
  // gender: {type:String, required:true}
});

module.exports = mongoose.model("Post", PostSchema);
