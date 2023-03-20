import React,{ useState } from 'react'
import Head from './Head'
import Cart from './Cart'
import Main from './Main'
import data from './data'

const SellM = () => {
  const [cartItems, setCartItems] = useState([]);
  const { products } = data
  
  const onAdd = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist) {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, qty: 1 }]);
    }
  };

  const onRemove = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist.qty === 1) {
      setCartItems(cartItems.filter((x) => x.id !== product.id));
    } else {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x
        )
      );
    }
  };

  return (<>

    <div>

      <Head countCartItems={cartItems.length} />
      <Main 
        products={products}
        onAdd={onAdd} 
      />
      <Cart 
        cartItems={cartItems}
        onAdd={onAdd}
        onRemove={onRemove}
      />

    
    </div>

  </>)
}

export default SellM