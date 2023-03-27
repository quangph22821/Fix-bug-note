import express from "express"
import router from "./routers/product.js";
import routerAuth from "./routers/auth.js";
import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config()
const app = express();



app.use(express.json())


// app.listen(process.env.PORT, () => {
//     console.log(`App running on http://localhost:${process.env.PORT}`);
// });
mongoose.connect(`${process.env.URI_DB}`)

app.use("/api", router);
app.use("/api",routerAuth);
export const viteNodeApp = app;

// Step 1: tạo file db.json
// Step 2: cài đặt json-server.
// Step 3: cài đặt concurrently
// Step 4: config lại package.json
// Step 5: install axios
// Step 6: Code getlist, getdetails

