const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

let products = [
  { id: 1, name: "Sensor A", stock: 10 },
  { id: 2, name: "Sensor B", stock: 5 }
];

app.get("/products", (req, res) => {
  res.json(products);
});

app.listen(5000, () => {
  console.log("Backend running on http://localhost:5000");
});
