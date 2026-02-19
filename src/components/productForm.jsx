import { useState } from "react";
import { supabase } from "../services/supabaseClient";

export default function ProductForm({ onProductAdded }) {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name || !price) {
      alert("Please fill all fields");
      return;
    }

    const { error } = await supabase.from("products").insert([
      {
        name,
        price: parseFloat(price),
        stock: 0,
      },
    ]);

    if (error) {
      alert(error.message);
    } else {
      alert("✅ Product Added Successfully");
      setName("");
      setPrice("");
      onProductAdded();
    }
  };

  return (
    <div>
      <h2>Add Product</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Product Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="number"
          placeholder="Product Price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
}