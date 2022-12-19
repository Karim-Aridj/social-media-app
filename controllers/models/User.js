import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    firstName:{
        type: String,
        required: true,
        min: 2, //minimum values
        max: 50, //minimum values
    },
    lastName:{
        type: String,
        required: true,
        min: 2, 
        max: 50, 
    },
    email:{
        type: String,
        required: true,
        max: 50, 
        unique: true, // it has to be unique to avoid duplicates
    },
    password:{
        type: String,
        required: true,
        min: 5,
    },
    picturePath:{
        type: String,
        default: "",
    },
    freinds:{
        type: Array,
        default: [],
    },
    location: String,
    occupation: String,
    viewedProfile: Number,
    impressions: Number,

}, 
{timestamps: true} //automatic dates when its created or updated
);

const User = mongoose.model("User", UserSchema) //when we create a mngoose model we need to create mongoose schema first and then we pass it to mongoose.moedel and then user...
export default User;