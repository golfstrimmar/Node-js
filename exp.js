import express from "express";
import { fileURLToPath } from "url";
import { dirname, join } from "path";
import sassMiddleware from "node-sass-middleware";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const Exp = () => {
  const app = express();
  app.set("view engine", "pug");
  app.set("views", join(__dirname, "views"));
  app.use(express.urlencoded({ extended: false }));
  // Настройка Middleware для компиляции SCSS в CSS
  app.use(
    sassMiddleware({
      src: join(__dirname, "src/scss"),
      dest: join(__dirname, "public/css"),
      prefix: "/css",
      indentedSyntax: false, // true = .sass and false = .scss
      sourceMap: true,
      outputStyle: "compressed",
    }),
  );
  // Указание папки для статических файлов
  app.use(express.static(join(__dirname, "public")));
  // app.use("/css", express.static(join(__dirname, "css"))); // Другой пример каталога
  // Корневая страница
  // app.get("/", (req, res) => {
  //   res.sendFile(join(__dirname, "views", "index.pug"));
  // });
  //использование pug Корневая страница
  app.get("/", (req, res) => {
    res.render("index");
  });
  // Страница "О нас"
  // app.get("/about", (req, res) => {
  //   res.sendFile(join(__dirname, "views", "about.pug"));
  // });
  app.get("/about", (req, res) => {
    res.render("about");
  });
  // Динамическая страница с параметрами/
  app.get("/user/:username", (req, res) => {
    const data = {
      username: req.params.username,
      hobbies: ["Foosball", "Skate", "Basketballl"],
    };
    res.render("user", data);
  });
  // app.get("/user/:username/:id", (req, res) => {
  // res.send(`User ID: ${req.params.id}. Username: ${req.params.username}`);
  // });
  app.post("/check-user", (req, res) => {
    console.log(req.body);
    let username = req.body.username;
    if (username == "") return res.redirect("/");
    else return res.redirect("/user/" + username);
  });
  const Port = 3000;
  app.listen(Port, () => {
    console.log(`Server started : http://localhost:${Port}`);
  });
};
export default Exp;
