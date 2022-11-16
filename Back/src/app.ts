import cors from "cors";
import express from "express";
import "express-async-errors";
import { handleAppErrorMiddleware } from "./middlewares/handleAppError.middleware";
import { accountRoutes } from "./routes/account.routes";
import { transactionsRoutes } from "./routes/transaction.routes";
import { userRoutes } from "./routes/user.routes";

const app = express();

app.use(express.json());
app.use(cors());
app.use("", userRoutes);
app.use("/accounts", accountRoutes);
app.use("/transactions", transactionsRoutes);

app.use(handleAppErrorMiddleware);

export default app;
