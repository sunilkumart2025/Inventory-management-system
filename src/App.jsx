import { useState } from "react";
import ProductForm from "./components/ProductForm";
import ProductList from "./components/ProductList";
import "./index.css";
///htafdjfdhsfd
function App() {
  const [refresh, setRefresh] = useState(false);

  const triggerRefresh = () => {
    setRefresh(!refresh);
  };
//yssgdjdsjhd
  return (
    <div className="container">
      <h1>📦 Inventory Management System</h1>

      <div className="card">
        <ProductForm onProductAdded={triggerRefresh} />
      </div>

      <div className="card">
        <ProductList refresh={refresh} />
      </div>
    </div>
  );
}

export default App;