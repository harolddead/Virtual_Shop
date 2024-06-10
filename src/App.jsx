// Importa el hook useState desde React
import { useState } from 'react';

// Importa los componentes Header y ProductList
import { Header } from './components/Header';
import { ProductList } from './components/ProductList';

// Define el componente principal App
function App() {
  // Declara el estado para todos los productos en el carrito
  const [allProducts, setAllProducts] = useState([]);

  // Declara el estado para el total del precio de los productos en el carrito
  const [total, setTotal] = useState(0);

  // Declara el estado para el conteo de productos en el carrito
  const [countProducts, setCountProducts] = useState(0);

  // Renderiza el componente App
  return (
    <>
      {/* Renderiza el componente Header pasando los estados y sus setters como props */}
      <Header
        allProducts={allProducts}
        setAllProducts={setAllProducts}
        total={total}
        setTotal={setTotal}
        countProducts={countProducts}
        setCountProducts={setCountProducts}
      />
      {/* Renderiza el componente ProductList pasando los estados y sus setters como props */}
      <ProductList
        allProducts={allProducts}
        setAllProducts={setAllProducts}
        total={total}
        setTotal={setTotal}
        countProducts={countProducts}
        setCountProducts={setCountProducts}
      />
    </>
  );
}

// Exporta el componente App como el export por defecto
export default App;

