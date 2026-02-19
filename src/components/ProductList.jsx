import { useEffect, useState } from "react";
import { supabase } from "../services/supabaseClient";

export default function ProductList({ refresh }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts();
  }, [refresh]);

  async function fetchProducts() {
    const { data, error } = await supabase
      .from("products")
      .select("*")
      .order("created_at", { ascending: false });

    if (!error) {
      setProducts(data);
    }
  }

  return (
    <div>
      <h2>Product List</h2>
      {products.length === 0 ? (
        <p>No products added yet.</p>
      ) : (
        products.map((product) => (
          <div key={product.id} style={{ marginBottom: "10px" }}>
            <strong>{product.name}</strong> — ₹{product.price}  
            <br />
            Stock: {product.stock}
          </div>
        ))
      )}
    </div>
  );
}