import { useState } from 'react'
import { supabase } from '../services/supabaseClient'

export default function ProductForm() {
  const [name, setName] = useState('')
  const [price, setPrice] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()

    const { error } = await supabase
      .from('products')
      .insert([{ name, price }])

    if (error) {
      alert(error.message)
    } else {
      alert('Product Added')
      setName('')
      setPrice('')
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Product Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="number"
        placeholder="Price"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />
      <button type="submit">Add Product</button>
    </form>
  )
}