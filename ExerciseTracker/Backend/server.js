const express = require("express");
const app = express();
const cors = require("cors");

const userRoutes = require("./routes/User");
const exerciseRoutes = require("./routes/Exercises");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/users", userRoutes);
app.use("/exercises", exerciseRoutes);

app.listen(5000, () => {
  console.log("listening on port 5000");
});
