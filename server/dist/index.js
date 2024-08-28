import express from "express";
import dotenv from "dotenv";
dotenv.config();
const app = express();
const PORT = process.env.PORT || 7000;
app.get("/", (req, res) => {
    return res.send("Hey there 😘😘");
});
app.listen(PORT, () => {
    console.log(`Listenening 💕💕 ${PORT}`);
});
