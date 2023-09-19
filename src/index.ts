import Express from "express";
import http from "http";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import compression from "compression";
import cors from "cors";
import connectDatabase from "./helpers/connectDatabase";
import router from "./router";
import "dotenv/config";

const app = Express();
const server = http.createServer(app);
const PORT = process.env.PORT || 9090;
const bdUri = process.env.DATABASE_URL as string;

const cors_options = {
  origin: true,
  credentials: true,
};
app.use(cors(cors_options));

app.use(compression());
app.use(cookieParser()); 
app.use(bodyParser.json());

const server_initiation = async () => {
  await connectDatabase(bdUri);
  server.listen(PORT, () => console.log(`Running in http://localhost:${PORT}`));
};

server_initiation();

app.use("/", router());
