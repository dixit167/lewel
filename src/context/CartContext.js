// // context/CartContext.js
// import { createContext, useContext, useState } from 'react';

// const CartContext = createContext();

// export const CartProvider = ({ children }) => {
//   const [cartItems, setCartItems] = useState([]);

//   const updateQuantity = (id, newQuantity) => {
//     setCartItems(prevItems => {
//       if (newQuantity <= 0) {
//         return prevItems.filter(item => item.id !== id);
//       }

//       return prevItems.map(item =>
//         item.id === id ? { ...item, quantity: newQuantity } : item
//       );
//     });
//   };

//   const addToCart = (newItem) => {
//     setCartItems(prevItems => {
//       const existingItem = prevItems.find(item => item.id === newItem.id);
//       if (existingItem) {
//         return prevItems.map(item =>
//           item.id === newItem.id
//             ? { ...item, quantity: item.quantity + 1 }
//             : item
//         );
//       }
//       return [...prevItems, { ...newItem, quantity: 1 }];
//     });
//   };

//   const clearCart = () => setCartItems([]);

//   return (
//     <CartContext.Provider value={{ cartItems, setCartItems, updateQuantity, addToCart, clearCart }}>
//       {children}
//     </CartContext.Provider>
//   );
// };

// export const useCart = () => useContext(CartContext);

// import React, { createContext, useState, useEffect } from 'react';

// export const CartContext = createContext();

// export const CartProvider = ({ children }) => {
//   const [cartItems, setCartItems] = useState([]);

//   useEffect(() => {
//     const storedCart = localStorage.getItem('cartItems');
//     if (storedCart) {
//       setCartItems(JSON.parse(storedCart));
//     }
//   }, []);

//   useEffect(() => {
//     localStorage.setItem('cartItems', JSON.stringify(cartItems));
//   }, [cartItems]);

//   const addToCart = (product) => {
//     const existingItem = cartItems.find(item => item.id === product.id);
//     if (existingItem) {
//       setCartItems(prev =>
//         prev.map(item =>
//           item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
//         )
//       );
//     } else {
//       setCartItems(prev => [...prev, { ...product, quantity: 1 }]);
//     }
//   };

//   return (
//     <CartContext.Provider value={{ cartItems, addToCart }}>
//       {children}
//     </CartContext.Provider>
//   );
// };







// import React, { createContext, useState, useEffect } from 'react';

// export const CartContext = createContext();

// export const CartProvider = ({ children }) => {
//   const [cartItems, setCartItems] = useState([]);

//   // useEffect(() => {
//   //   const storedCart = localStorage.getItem('cartItems');
//   //   if (storedCart) {
//   //     setCartItems(JSON.parse(storedCart));
//   //   }
//   // }, []);


//   useEffect(() => {
//   if (cartItems.length > 0) {
//     localStorage.setItem('cartItems', JSON.stringify(cartItems));
//   }
// }, [cartItems]);


//   useEffect(() => {
//     localStorage.setItem('cartItems', JSON.stringify(cartItems));
//   }, [cartItems]);

//   const addToCart = (product) => {
//     const existingItem = cartItems.find(item => item.id === product.id);
//     if (existingItem) {
//       setCartItems(prev =>
//         prev.map(item =>
//           item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
//         )
//       );
//     } else {
//       setCartItems(prev => [...prev, { ...product, quantity: 1 }]);
//     }
//   };

//   // ✅ Define and add this function
//   const updateQuantity = (id, newQuantity) => {
//     setCartItems(prev =>
//       prev
//         .map(item =>
//           item.id === id ? { ...item, quantity: newQuantity } : item
//         )
//         .filter(item => item.quantity > 0) // Remove items with 0 quantity
//     );
//   };

//   return (
//     <CartContext.Provider value={{ cartItems, addToCart, setCartItems, updateQuantity }}>
//       {children}
//     </CartContext.Provider>
//   );
// };


import React, { createContext, useState, useEffect } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    try {
      const storedCart = localStorage.getItem('cartItems');
      if (storedCart) {
        setCartItems(JSON.parse(storedCart));
      }
    } catch (e) {
      console.error("Could not load cart from localStorage", e);
    }
  }, []);

  useEffect(() => {
    if (cartItems.length > 0) {
      localStorage.setItem('cartItems', JSON.stringify(cartItems));
    }
  }, [cartItems]);

  const addToCart = (product) => {
    const existingItem = cartItems.find(item => item.id === product.id);
    if (existingItem) {
      setCartItems(prev =>
        prev.map(item =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        )
      );
    } else {
      setCartItems(prev => [...prev, { ...product, quantity: 1 }]);
    }
  };

  const updateQuantity = (id, newQuantity) => {
    setCartItems(prev =>
      prev
        .map(item =>
          item.id === id ? { ...item, quantity: newQuantity } : item
        )
        .filter(item => item.quantity > 0)
    );
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, setCartItems, updateQuantity }}>
      {children}
    </CartContext.Provider>
  );
};
