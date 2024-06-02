require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const app = express();
const userRoutes = require('../routes/userRoutes');
const medicalRecordRoutes = require('../routes/medicalRecordRoutes');
const articleRoutes = require('../routes/articleRoutes');
const port = 8080;
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send(`<main>
  <style>
    @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800&display=swap');
    main{
      display: flex;
      justify-content: center;
      flex-direction: column;
      align-items: center;
      min-height: 100vh;
      font-family: 'Poppins', sans-serif;
      color: #1B2430;
    }
    img {
      width: 200px;
    }
    p, h2 {
      text-align: center;
    }
  </style>
  <div>
    <h2>DiCheck Backend</h2>
    <p>Ver 1.0</p>
  </div>
</main>`);
});

app.use("/api/user", userRoutes);
app.use("/api/record", medicalRecordRoutes);
app.use("/api/article", articleRoutes);
app.use((req, res, next) => {
  console.log(req.path, req.method);
  console.log(`Received ${req.method} request to ${req.url}`);
  next();
});
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(port, () => {
      console.log(`Connected to db & express app listening at http://localhost:${port}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });
  
  module.exports = app;