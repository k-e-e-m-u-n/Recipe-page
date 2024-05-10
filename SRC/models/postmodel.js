// import  { text }  from "body-parser";
// import pkg from 'body-parser';
// const { text } = pkg;
import mongoose from "mongoose";


const postSchema = mongoose.Schema({
    postedBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref : "Admin",
        required: true
    },
    adminProfilePic: {
      type: String,
    },
    text: {
        type: String,
        maxlength: 3000
    },
    img: [{
      type: String
    }],
    name: {
        type: String,
    }
},
{
    timestamp: Date
}
)

const Post = mongoose.model("Post",postSchema);

export default Post;