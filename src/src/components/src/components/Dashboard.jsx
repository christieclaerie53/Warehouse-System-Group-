import React, { useEffect, useState } from "react";
import { getProducts } from "../services/api";

function Dashboard() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const data = await getProducts();
      setProducts(data);
    }
    fetchData();
  }, []);

  return (
    <div>
      <h2>Warehouse Dashboard</h2>
      <ul>
        {products.map((p) => (
          <li key={p.id}>{p.name} - {p.stock} units</li>
        ))}
      </ul>
    </div>
  );
}

export default Dashboard;
