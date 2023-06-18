// @ts-check
import express from "express";
import "express-async-errors";
import mustacheExpress from "mustache-express";
import path from "node:path";
import { Greet } from "./services/greet-service.js";

const port = process.env.PORT || 3000;
const app = express();

// Mustache 템플릿 설정
app.engine("mustache", mustacheExpress("views/partials"));
app.set("view engine", "mustache");
app.set("views", path.resolve() + "/views");

// 라우팅
app.get("/", (req, res) => {
  const greet = new Greet();

  // views/home.mustache 렌더링
  res.render("home", { message: greet.sayHello() });
});

// 에러 응답
app.use((err, req, res, next) => {
  console.error(err);
  res.render("error", { error: err });
});

// 서버 시작
app.listen(port, () => {
  console.log(`Server started at port ${port}`);
});
