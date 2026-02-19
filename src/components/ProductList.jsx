import { useEffect, useState } from 'react'
import { supabase } from '../services/supabaseClient'

export default function ProductList() {
  const [products, setProducts] = useState([])

  useEffect(() => {
    fetchProducts()
  }, [])

  async function fetchProducts() {
    const { data, error } = await supabase
      .from('products')
      .select('*')

    if (!error) setProducts(data)
  }

  return (
    <div>
      <h3>Product List</h3>
      {products.map((product) => (
        <div key={product.id}>
          {product.name} - ₹{product.price} - Stock: {product.stock}
        </div>
      ))}
    </div>
  )
}