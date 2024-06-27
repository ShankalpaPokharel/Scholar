const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const fileUpload = require("express-fileupload")

// const connectDB = require('./config/db');


// Load environment variables
dotenv.config();

// Initialize Express
const app = express();

// Connect to MongoDB
// connectDB();


app.use(cors());


// Routes
app.get("/", (req, res) => res.send("Express on Vercel"));

// const authRoutes = require('./routes/auth.routes');
// app.use('/auth', authRoutes);

// const userRoutes = require('./routes/user.routes');
// app.use('/api/user', userRoutes);

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));