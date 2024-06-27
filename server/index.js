const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const fileUpload = require("express-fileupload");
const path = require("path");
const connectDB = require("./config/db");

// Load environment variables
dotenv.config();

// Initialize Express
const app = express();

// Connect to MongoDB
connectDB();

app.use(cors());

// Middleware to parse JSON bodies
app.use(express.json());

// Middleware to handle file uploads
app.use(fileUpload());

// Routes
app.get("/", (req, res) => res.send("Express on Vercel"));

const adminRoutes = require("./routes/admin.routes");
app.use("/admin", adminRoutes);

// const userRoutes = require('./routes/user.routes');
// app.use('/api/user', userRoutes);

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
