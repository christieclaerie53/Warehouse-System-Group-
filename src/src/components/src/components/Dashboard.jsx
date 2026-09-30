import React, { useEffect, useState } from "react";
import { getProducts } from "../services/api";

function Dashboard() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch data dari backend bila component load
    getProducts().then(setProducts);
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h2>Warehouse Dashboard</h2>
      <ul>
        {products.map((p) => (
          <li key={p.id}>
            {p.name} - {p.stock} units
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Dashboard;
