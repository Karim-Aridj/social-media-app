import express from "express";
import { getFeedPosts, getUserPosts, likePost} from "../controllers/posts.js";
import { verifyToken } from "../middleware/auth.js";

const router = express.Router();

/*Read*/
router.get("/", verifyToken, getFeedPosts);// grab user feed on hompage everysingle post in database
router.get("/:userId/posts", verifyToken, getUserPosts);

/*Update*/
router.patch("/:id/like", verifyToken, likePost);

export default router;