import Express from "express";
import http from "http";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import compression from "compression";
import cors from "cors";
import mongoose from "mongoose";

const app = Express();

app.use(
  cors({
    credentials: true,
  })
);

app.use(compression());
app.use(cookieParser());
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send({ hi: "there" });
});

const server = http.createServer(app);
const PORT = process.env.PORT || 6000;

server.listen(PORT, () => console.log("Running in http://localhost:6000"));

const MONGO_URL =
  "mongodb+srv://JoaoVitorDadas:xYMknCNMZt5YmnbC@cluster0.asgbwzl.mongodb.net/?retryWrites=true&w=majority";
mongoose.Promise = Promise;
mongoose.connect(MONGO_URL);
mongoose.connection.on("error", (error: Error) => console.log(error));
