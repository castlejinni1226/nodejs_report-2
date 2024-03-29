import express from "express";
import cookieParser from "cookie-parser";
import UserRouter from "./routers/users.router.js";
import PosterRouter from "./routers/poster.router.js";

const app = express();
const PORT = 3018;

app.use(express.json());
app.use(cookieParser());
app.use("/api", [UserRouter, PosterRouter]);

app.listen(PORT, () => {
  console.log(PORT, "포트로 서버가 열렸어요!");
});
