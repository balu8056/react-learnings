import { useDeferredValue } from "react"

const ProductList = ({ products }) => {
    const deferredProducts = useDeferredValue(products)
  return (
    <ul>
      {deferredProducts.map((product) => (
        <li>{product}</li>
      ))}
    </ul>
  )
}

export default ProductList
