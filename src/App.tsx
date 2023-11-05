
import './App.css'
import ProductCard from './components/Productcard'
import { productList } from './data'

function App() {
  const renderProductListe = productList.map(product => <ProductCard key={product.id} prduct={product}/>)
  return (
    <main className='container mx-auto'>
    <div className='m-5 grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-4 gap-2 md:gap-4 p-2 rounded-md'>
      {renderProductListe}
    </div>
    </main>
  )
}

export default App
