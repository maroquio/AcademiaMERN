import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import connectDatabase from "./config/db.js";
import routeAlunos from "./routes/alunoRoutes.js";
import routeAuth from "./routes/authRoutes.js";
import { errorHandling } from "./utils/error.js";
import cors from "cors";
import { verificarToken } from "./utils/verificarToken.js";

const app = express();
dotenv.config();

// const corsOptions = {
//     credentials: true,
//     origin: "http://localhost:3000",
//     allowedHeaders: ["Content-Type", "Authorization"],
// };

app.use(cors());
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(errorHandling);
app.use("/api/alunos", verificarToken, routeAlunos);
app.use("/api/auth", routeAuth);

app.listen(8080, () => {
    connectDatabase();
    console.log("Servidor rodando na porta 8080.");
});
