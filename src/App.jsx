import { useState } from 'react'
import './App.css'
import ProductTable from './components/ProductTable'
import Searchbar from './components/Searchbar'

function App() {
  const PRODUCTS = [
    { category: "Fruits", price: "₹120", stocked: true, name: "Apple" },
    // { category: "Fruits", price: "₹120", stocked: false, name: "Grapes" },
    { category: "Fruits", price: "₹20", stocked: true, name: "Dragonfruit" },
    { category: "Fruits", price: "₹220", stocked: false, name: "Passionfruit" },
    { category: "Vegetables", price: "₹80", stocked: true, name: "Spinach" },
    { category: "Vegetables", price: "₹20", stocked: false, name: "Pumpkin" },
    { category: "Vegetables", price: "₹50", stocked: true, name: "Peas" },
    { category: "Vegetables", price: "₹50", stocked: true, name: "Potato" }
  ]

  const [filterText, setFilterText] = useState('');
  const [inStockOnly, setInStockOnly] = useState(false);

  return (
    <>
      <p><b>Filterable Product Table</b></p>
      <Searchbar filterText={filterText} inStockOnly={inStockOnly} setFilterText={setFilterText} setInStockOnly={setInStockOnly} />
      <ProductTable filterText={filterText} inStockOnly={inStockOnly} products={PRODUCTS} />
    </>
  )
}

export default App
