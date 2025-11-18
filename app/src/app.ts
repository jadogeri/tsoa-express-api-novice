// src/app.ts
import express, {json, urlencoded} from "express";
import { Response as ExResponse, Request as ExRequest } from "express";

import { RegisterRoutes } from "../build/routes";

export const app = express();

// src/app.ts

import swaggerUi from "swagger-ui-express";

// ...

app.use("/docs", swaggerUi.serve, async (_req: ExRequest, res: ExResponse) => {
  return res.send(
    swaggerUi.generateHTML(await import("../build/swagger.json"))
  );
});

// Use body parser to read sent json payloads
app.use(
  urlencoded({
    extended: true,
  })
);
app.use(json());

RegisterRoutes(app);