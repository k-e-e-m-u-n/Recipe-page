import mongoose from "mongoose";

const commentSchema = mongoose.Schema({
  text: {
        type: String,
        required: true,
  },
  name: {
        type: String,
  },
})


const Comment = mongoose.model("Comment",commentSchema);

export default Comment;