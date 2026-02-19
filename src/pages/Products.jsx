import ProductForm from '../components/ProductForm'
import ProductList from '../components/ProductList'

export default function Products() {
  return (
    <div>
      <h2>Manage Products</h2>
      <ProductForm />
      <ProductList />
    </div>
  )
}