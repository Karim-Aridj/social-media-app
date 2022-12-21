import mongoose from "mongoose";

const postSchema = mongoose.Schema(
    {
        userId:{
            type: String,
            required: true,
        },
        location: String,
        description: String,
        picturePath: String,
        userPicturePath: String,
        likes: {//checking userId if exist in this map and the value is going to be true always if existant
            type: Map,
            of: Boolean,
        },
        comments: {
            types: Array,
            default: []
        }
    },
    {timestamps: true}
);

const Post = mongoose.model("Post", postSchema);
export default Post;