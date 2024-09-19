import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import giftData from "../data/gifts.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const router = express.Router();

router.get("/", (req, res) => {
    res.status(200).send(giftData);
});

router.get("/:id", (req, res) => {
    console.log("here");
    res.status(200).sendFile(
        path.resolve(__dirname, "../../client/public/gift.html")
    );
});

export default router;
