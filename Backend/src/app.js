import express from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";

import authRoutes from "./modules/auth/auth.routes.js";

import taskRoutes from "./modules/tasks/task.routes.js";

import { errorHandler } from "./middlewares/error.middleware.js";


const app = express();


// Global middlewares
app.use(express.json());
app.use(cors());
app.use(helmet());
app.use(morgan("dev"));

app.use("/api/v1/auth", authRoutes);

app.use("/api/v1/tasks", taskRoutes);

// Health check
app.get("/health", (req, res) => {
  res.status(200).json({ success: true, message: "API is running" });
});

app.use(errorHandler);


import swaggerUi from "swagger-ui-express";
import swaggerSpec from "./docs/swagger.js";

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

export default app;
