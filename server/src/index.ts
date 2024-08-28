import express, { Application, Request, Response } from "express";
import dotenv from "dotenv";

dotenv.config();

const app: Application = express();

const PORT = process.env.PORT || 7000;

app.get("/", (req: Request, res: Response) => {
  return res.send("Hey there 😘😘");
});

app.listen(PORT, () => {
  console.log(`Listenening 💕💕 ${PORT}`);
});
