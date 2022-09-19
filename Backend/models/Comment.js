import mongoose from "mongoose";

const Comment = new mongoose.CommentSchema({
  userId: {
    type: String,
    required: true,
  },

  videoId: {
    type: String,
    required: true,
  },
  desc: {
    type: String,
    required: true,
  },
});

export default mongoose.model("Comment", CommentSchema);
