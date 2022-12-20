import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import multer from "multer";
import helmet from "helmet";
import morgan from "morgan";
import path from "path";
import { fileURLToPath } from "url";
import authRoutes from "./routes/auth.js"; 
import userRoutes from "./routes/users.js";
import postRoutes from "./routes/posts.js"
import { register } from "./controllers/auth.js";
import { createPost } from "./controllers/posts.js";
import { verifyToken } from "./middleware/auth.js";

/** CONFIGURATIONS */

const __filename = fileURLToPath(import.meta.url); // we put this configuration to grasb the file url, this is specific when we use modules,we add module we need to use this configuration to use dirct name
const __dirname = path.dirname(__filename)
dotenv.config(); // to invoke
const app = express();
app.use(express.json);
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({policy: "cross-origin"}));
app.use(morgan("common"));
app.use(bodyParser.json({limit: "30mb", extended: true}));
app.use(bodyParser.urlencoded({limit: "30mb", extended: true}));
app.use(cors());
app.use("/assets", express.static(path.join(__dirname, 'public/assets'))); // set the directory where we keep our assets, we will store localy. in real live production app we store in cloud

/**FILE STORAGE */
const storage = multer.diskStorage({
    destination: function (req, file, cb){
        cb(nul, "publc/assets");
    },
    filename: function (req, file, cb){
        cb(null, file.originalname);
    }
}); //this configuration is coming from multer,, anytime anyone uplaods a file to our website its gonna be saved in this folder
const uplaod = multer({storage}); // anytime we need to upload a file we this variable


/*ROUTES WITH FILES*/
app.post("/auth/register", uplaod.single("picture")/*middleware*/, register/*function controller*/);
app.post("/posts", verifyToken, upload.single("picture"), createPost)

/*Routes*/
app.use("/auth", authRoutes);
app.use("/users", userRoutes);
app.use("/posts", postRoutes);

/**MONGOOSE SETUP */
const PORT = process.env.PORT || 6001; // using this port just in case 3001 doesn't work
mongoose.connect(process.env.MONGO_URL, { // we connect to database
    useNewUrlParser: true, 
    useUnifiedTopology: true,
}).then(()=> {
    app.listen(PORT, () => console.log(`Server Port: ${PORT}`))// callback function)
}).catch((error) => console.log(`${error} did not connect`))

