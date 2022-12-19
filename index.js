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

/** CONFIGURATIONS */

const __filename = fileURLToPath(import.meta.url); // we put this configuration to grasb the file url, this is specific when we use modules,we add module we need to use this configuration to use dirct name
const __dirname = path.dirname(__filename)
dotenv.config(); // to invoke
const app = express();
app.use(express.json);
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({policy: "cross-origin"}));
app.use(morgan("common"));
