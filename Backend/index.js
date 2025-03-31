import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import path from "path";

import bookRoute from "./route/book.route.js";
import userRoute from "./route/user.route.js";

dotenv.config();
const app = express();

app.use(cors({ origin: "*" }));
app.use(express.json());

const PORT = process.env.PORT || 4000;
const URI = process.env.MongoDBURI;

// Connect to MongoDB
mongoose
    .connect(URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("Connected to MongoDB"))
    .catch((error) => console.log("Error:", error));

// Define routes
app.use("/book", bookRoute);
app.use("/user", userRoute);

// Serve React Frontend
const __dirname = path.resolve();
app.use(express.static(path.join(__dirname, "Frontend", "dist")));

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "Frontend", "dist", "index.html"));
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
