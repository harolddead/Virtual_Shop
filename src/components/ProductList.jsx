// Importa la biblioteca React desde el paquete 'react'
import React from 'react';

// Importa el arreglo de datos 'data' desde el archivo '../data'
import { data } from '../data';

// Define y exporta el componente funcional ProductList
export const ProductList = ({ allProducts, setAllProducts, countProducts, setCountProducts, total, setTotal }) => {
    
    // Función para añadir un producto al carrito
    const onAddProduct = (product) => {
        // Verifica si el producto ya está en el carrito
        if (allProducts.find(item => item.id === product.id)) {
            // Actualiza la cantidad del producto en el carrito
            const products = allProducts.map(item => item.id === product.id ? {...item, quantity: item.quantity + 1 } : item);
            // Actualiza el total y la cantidad de productos en el carrito
            setTotal(total + product.price * product.quantity);
            setCountProducts(countProducts + product.quantity);
            // Actualiza la lista de productos en el carrito
            return setAllProducts([...products]);
        }

        // Si el producto no está en el carrito, lo añade
        setTotal(total + product.price * product.quantity);
        setCountProducts(countProducts + product.quantity);
        setAllProducts([...allProducts, product]);
    };
    
    // Renderiza el componente ProductList
    return (
        <div className='container-items'>
            {/* Mapea sobre los datos y renderiza cada producto */}
            {data.map(product => (
                <div className='item' key={product.id}>
                    <figure>
                        <img src={product.img} alt={product.nameProduct} />
                    </figure>
                    <div className="info-product">
                        <h2>{product.nameProduct}</h2>
                        <p className="price">${product.price}</p>
                        {/* Botón para añadir el producto al carrito */}
                        <button className="btn-add-cart" onClick={() => onAddProduct(product)}>Añadir al carrito</button>
                    </div>
                </div>
            ))}
        </div>
    );
};
