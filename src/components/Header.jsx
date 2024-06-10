import React, { useState } from 'react';

// Define y exporta el componente funcional Header
export const Header = ({
  allProducts,
  setAllProducts,
  total,
  countProducts,
  setCountProducts,
  setTotal,
}) => {
  // Define el estado local 'active' y una función 'setActive' para cambiar su valor
  const [active, setActive] = useState(false);
  // Función para eliminar un producto del carrito
  const onDeleteProduct = (product) => {
    // Filtra los productos para obtener una nueva lista sin el producto a eliminar
    const results = allProducts.filter((item) => item.id !== product.id);
    // Actualiza el total y la cantidad de productos en el carrito
    setTotal(total - product.price * product.quantity);
    setCountProducts(countProducts - product.quantity);
    // Actualiza la lista de productos en el carrito
    setAllProducts(results);
  };
  // Función para decrementar la cantidad de un producto en el carrito
  const onDecrementProduct = (product) => {
    // Actualiza la cantidad del producto en el carrito y filtra los productos que tengan una cantidad mayor a cero
    const updatedProducts = allProducts
      .map((item) => {
        if (item.id === product.id) {
          return { ...item, quantity: item.quantity - 1 };
        }
        return item;
      })
      .filter((item) => item.quantity > 0);
    // Actualiza la lista de productos en el carrito, el total y la cantidad de productos en el carrito
    setAllProducts(updatedProducts);
    setTotal(total - product.price);
    setCountProducts(countProducts - 1);
  };
  // Función para incrementar la cantidad de un producto en el carrito
  const onAddProduct = (product) => {
    // Actualiza la cantidad del producto en el carrito
    const updatedProducts = allProducts.map((item) => {
      if (item.id === product.id) {
        return { ...item, quantity: item.quantity + 1 };
      }
      return item;
    });
    // Actualiza la lista de productos en el carrito, el total y la cantidad de productos en el carrito
    setAllProducts(updatedProducts);
    setTotal(total + product.price);
    setCountProducts(countProducts + 1);
  };
  // Función para limpiar el carrito
  const onCleanCart = () => {
    // Reinicia la lista de productos en el carrito, el total y la cantidad de productos en el carrito
    setAllProducts([]);
    setTotal(0);
    setCountProducts(0);
  };

  return (
    <header>
      {/* Título del encabezado */}
      <h1></h1>

      {/* Contenedor del icono de carrito y contador de productos */}
      <div className="container-icon">
        {/* Contenedor del icono de carrito y contador */}
        <div className="container-cart-icon" onClick={() => setActive(!active)}>
          {/* Icono de carrito */}
          <img
            className="icon-cart"
            src="https://cdn.pixabay.com/photo/2013/07/12/14/53/cart-148964_1280.png"
            alt="Carrito"
          ></img>

          {/* Contador de productos */}
          <div className="count-products">
            <span id="contador-productos">{countProducts}</span>
          </div>
        </div>

        {/* Contenedor del carrito de compras */}
        <div
          className={`container-cart-products ${active ? '' : 'hidden-cart'}`}
        >
          {/* Condición para mostrar productos en el carrito */}
          {allProducts.length ? (
            <>
              {/* Lista de productos en el carrito */}
              <div className="row-product">
                {allProducts.map((product) => (
                  <div className="cart-product" key={product.id}>
                    {/* Información del producto */}
                    <div className="info-cart-product">
                      {/* Botones para incrementar y decrementar la cantidad */}
                      <button onClick={() => onDecrementProduct(product)}>
                        -
                      </button>
                      <span className="cantidad-producto-carrito">
                        {product.quantity}
                      </span>
                      <button onClick={() => onAddProduct(product)}>+</button>

                      {/* Nombre y precio del producto */}
                      <p className="titulo-producto-carrito">
                        {product.nameProduct}
                      </p>
                      <span className="precio-producto-carrito">
                        ${product.price}
                      </span>
                    </div>

                    {/* Icono para eliminar el producto */}
                    <img
                      className="icon-close"
                      src="https://cdn-icons-png.flaticon.com/512/1017/1017530.png"
                      alt="Eliminar"
                      onClick={() => onDeleteProduct(product)}
                    ></img>
                  </div>
                ))}
              </div>

              {/* Total de la compra y botones */}
              <div className="cart-total">
                <h3>Total:</h3>
                <span className="total-pagar">${total}</span>
              </div>
              <button className="btn-claer-all" onClick={onCleanCart}>
                Vaciar carro de compras
              </button>
              <button className="btn-pago">Proceder al pago</button>
            </>
          ) : (
            // Mensaje de carrito vacío
            <p className="cart-empty">
              No ha añadido ningun articulo al carro de compras
            </p>
          )}
        </div>
      </div>
    </header>
  );
};
