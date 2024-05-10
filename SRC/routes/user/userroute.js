// import Comment from "../../models/commentmodel.js";
import express from "express"
import { createComment } from "../../controllers/admincontroller.js";


const router = express.Router();

router.post("/newcomment",createComment)

export default router