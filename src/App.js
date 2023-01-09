import { useState, useTransition } from 'react'

import GenerateProducts  from './data'
import ProductList from './components/ProductList'

const dummyProducts = GenerateProducts()

const filterProducts = (filterTerm) => {
  if (!filterTerm) {
    return dummyProducts
  }
  return dummyProducts.filter((product) => product.includes(filterTerm.trim()))
}

const App = () => {
  const [isPending, startTransition] = useTransition()
  const [filterTerm, setFilterTerm] = useState('')

  const filteredProducts = filterProducts(filterTerm)

  function updateFilterHandler(event) {
    startTransition(()=>{
      setFilterTerm(event.target.value)
    })
    // setFilterTerm(event.target.value)
  }

  return (
    <div id="app">
      <input type="text" onChange={updateFilterHandler} />
      {/* {isPending ? <p style={{color: 'white'}}>Loading...</p>: <ProductList products={filteredProducts} />} */}
      <ProductList products={filteredProducts} />
    </div>
  )
}

export default App
