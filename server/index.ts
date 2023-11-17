import http from "http";
import express from "express";
import path from "path";
import createDatabase from "./database";
import cors from "cors";
import dotenv from "dotenv";
import fileUpload from "express-fileupload";
import Repositories from "./repositories";
import Controllers from "./controllers";
import adminMiddleware from "./middlewares/adminMiddleware";
import childrenMiddleware from "./middlewares/childrenMiddleware";

dotenv.config();

const APP_PORT = Number(process.env.APP_PORT ?? -1);

const DB_HOST = process.env.DB_HOST ?? "";
const DB_PORT = process.env.DB_PORT ?? "";
const DB_PASSWORD = process.env.DB_PASSWORD ?? "";
const DB_DATABASE = process.env.DB_DATABASE ?? "";
const DB_USER = process.env.DB_USER ?? "";

async function bootstrap() {
  const app = express();

  app.use(express.json());
  app.use(
    fileUpload({
      useTempFiles: true,
      tempFileDir: path.join(__dirname, "./tmp/"),
      debug: false,
      limits: { fileSize: 30 * 1024 * 1024 },
    })
  );

  app.use(
    cors({
      origin: "*",
      methods: "GET,PUT,PATCH,POST,DELETE",
      optionsSuccessStatus: 200,
    })
  );

  app.use("/uploads", express.static("uploads"));

  const server = http.createServer(app);

  const database = createDatabase({
    host: DB_HOST,
    port: DB_PORT,
    password: DB_PASSWORD,
    user: DB_USER,
    database: DB_DATABASE,
  });

  const repositories = new Repositories(database);
  const controllers = new Controllers(repositories);

  app.get("/api/children", controllers.childrenController.getChildren);
  app.get("/api/children/filters", controllers.childrenController.getChildrenFilters);
  app.get("/api/children/:childId", controllers.childrenController.getChild);

  app.post("/api/admin/auth/login", controllers.authController.login);

  app.get("/api/admin/children", adminMiddleware, controllers.adminChildrenController.getAdminChildren);
  app.post("/api/admin/children", adminMiddleware, controllers.adminChildrenController.createChild);
  app.post("/api/admin/children/:childId/switch", adminMiddleware, controllers.adminChildrenController.switchChild);
  app.delete("/api/admin/children/:childId/delete", adminMiddleware, controllers.adminChildrenController.deleteChild);

  app.post("/api/admin/children/:childId/publish", childrenMiddleware, controllers.adminChildrenController.publishChild);
  app.get("/api/admin/children/:childId", childrenMiddleware, controllers.adminChildrenController.getAdminChild);
  app.post("/api/admin/children/:childId", childrenMiddleware, controllers.adminChildrenController.changeChild);
  app.post("/api/admin/children/:childId/avatar", childrenMiddleware, controllers.adminChildrenController.changeChildAvatar);
  app.post("/api/admin/children/:childId/image", childrenMiddleware, controllers.adminChildrenController.addImage);
  app.delete("/api/admin/children/:childId/image/:imageId", childrenMiddleware, controllers.adminChildrenController.deleteImage);

  server.listen(APP_PORT, () => {
    console.log(`http://localhost:${APP_PORT}`);
  });
}

bootstrap();
