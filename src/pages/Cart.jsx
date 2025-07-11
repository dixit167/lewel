// import { useEffect, useRef } from "react";
// import gsap from "gsap";
// import { Link } from "react-router-dom";
// import { useCart } from "../context/CartContext";
// import Swal from 'sweetalert2';
// const Cart = () => {
//   // const { cartItems, updateQuantity } = useCart();
//   const { cartItems, updateQuantity, setCartItems } = useCart();
//   const cartRef = useRef(null);

//   useEffect(() => {
//     const timeout = setTimeout(() => {
//       if (cartRef.current && cartRef.current.children.length > 0) {
//         gsap.fromTo(
//           cartRef.current.children,
//           { opacity: 0, x: -30 },
//           { opacity: 1, x: 0, duration: 0.6, stagger: 0.1 }
//         );
//       }
//     }, 100); // small delay ensures DOM is ready

//     return () => clearTimeout(timeout);
//   }, [cartItems]);

//   // const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
//   const total = cartItems.reduce((sum, item) => {
//     const price =
//       parseFloat(
//         item.price
//           .toString()
//           .replace(/[^0-9.]/g, "")
//           .replace(/,/g, "")
//       ) || 0;
//     const qty = parseInt(item.quantity) || 0;
//     return sum + price * qty;
//   }, 0);

//   return (
//     <div style={{ paddingTop: "100px" }}>
//       <div className="container py-5">
//         <h1 className="section-title luxury-text">Shopping Cart</h1>

//         {cartItems.length === 0 ? (
//           <div className="text-center py-5">
//             <h3>Your cart is empty</h3>
//             <Link to="/products" className="btn btn-luxury">
//               Continue Shopping
//             </Link>
//           </div>
//         ) : (
//           <div className="row">
//             <div className="col-md-8">
//               <div ref={cartRef}>
//                 {cartItems.map((item) => (
//                   <div key={item.id} className="card card-luxury mb-3">
//                     <div className="card-body">
//                       <div className="row align-items-center">
//                         <div className="col-md-2">
//                           <img
//                             src={item.image}
//                             alt={item.name}
//                             className="img-fluid rounded"
//                           />
//                         </div>
//                         <div className="col-md-4">
//                           <h5 className="luxury-text">{item.name}</h5>
//                         </div>
//                         <div className="col-md-2">
//                           <span className="h5 gold-accent">₹{item.price}</span>
//                         </div>
//                         <div className="col-md-2">
//                           <div className="input-group">
//                             <button
//                               className="btn btn-outline-secondary"
//                               onClick={() =>
//                                 updateQuantity(item.id, item.quantity - 1)
//                               }
//                             >
//                               -
//                             </button>
//                             <span className="form-control text-center">
//                               {item.quantity}
//                             </span>
//                             <button
//                               className="btn btn-outline-secondary"
//                               onClick={() =>
//                                 updateQuantity(item.id, item.quantity + 1)
//                               }
//                             >
//                               +
//                             </button>
//                           </div>
//                         </div>
//                         <div className="col-md-2 text-end">
//                           <button
//                             className="btn btn-outline-danger"
//                             onClick={() => updateQuantity(item.id, 0)}
//                           >
//                             Remove
//                           </button>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>

//             <div className="col-md-4">
//               <div className="card card-luxury">
//                 <div className="card-body">
//                   <h5 className="luxury-text">Order Summary</h5>
//                   <hr />
//                   <div className="d-flex justify-content-between mb-2">
//                     <span>Subtotal:</span>
//                     <span>₹{total.toLocaleString()}</span>
//                   </div>
//                   <div className="d-flex justify-content-between mb-2">
//                     <span>Shipping:</span>
//                     <span>Free</span>
//                   </div>
//                   <div className="d-flex justify-content-between mb-2">
//                     <span>Tax:</span>
//                     <span>₹{(total * 0.08).toFixed(2)}</span>
//                   </div>
//                   <hr />
//                   <div className="d-flex justify-content-between mb-3">
//                     <strong>Total:</strong>
//                     <strong className="gold-accent">
//                       ₹{(total * 1.08).toFixed(2)}
//                     </strong>
//                   </div>
//                   <button
//                     className="btn btn-luxury w-100"
//                     onClick={() => {
//                       setCartItems([]);
//                       Swal.fire({
//                         icon: "success",
//                         title: "Order Placed!",
//                         text: "You will receive your product within 10 days.",
//                         confirmButtonColor: "#d4af37",
//                       });
//                     }}
//                   >
//                     Proceed to Checkout
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Cart;









// import { useEffect, useRef, useContext } from "react";
// import gsap from "gsap";
// import { Link } from "react-router-dom";
// import { CartContext } from "../context/CartContext";
// import Swal from 'sweetalert2';

// const Cart = () => {
//   const { cartItems, updateQuantity, setCartItems } = useContext(CartContext);
//   const cartRef = useRef(null);

//   useEffect(() => {
//     const timeout = setTimeout(() => {
//       if (cartRef.current && cartRef.current.children.length > 0) {
//         gsap.fromTo(
//           cartRef.current.children,
//           { opacity: 0, x: -30 },
//           { opacity: 1, x: 0, duration: 0.6, stagger: 0.1 }
//         );
//       }
//     }, 100);

//     return () => clearTimeout(timeout);
//   }, [cartItems]);

//   const total = cartItems.reduce((sum, item) => {
//     const price =
//       parseFloat(
//         item.price
//           .toString()
//           .replace(/[^0-9.]/g, "")
//           .replace(/,/g, "")
//       ) || 0;
//     const qty = parseInt(item.quantity) || 0;
//     return sum + price * qty;
//   }, 0);

//   return (
//     <div style={{ paddingTop: "100px" }}>
//       <div className="container py-5">
//         <h1 className="section-title luxury-text">Shopping Cart</h1>

//         {cartItems.length === 0 ? (
//           <div className="text-center py-5">
//             <h3>Your cart is empty</h3>
//             <Link to="/products" className="btn btn-luxury">
//               Continue Shopping
//             </Link><br />
//             <Link to="/" className="btn btn-luxury m-3">
//               track your order
//             </Link>
//           </div>
//         ) : (
//           <div className="row">
//             <div className="col-md-8">
//               <div ref={cartRef}>
//                 {cartItems.map((item) => (
//                   <div key={item.id} className="card card-luxury mb-3">
//                     <div className="card-body">
//                       <div className="row align-items-center">
//                         <div className="col-md-2">
//                           <img
//                             src={item.image}
//                             alt={item.name}
//                             className="img-fluid rounded"
//                           />
//                         </div>
//                         <div className="col-md-4">
//                           <h5 className="luxury-text">{item.name}</h5>
//                         </div>
//                         <div className="col-md-2">
//                           <span className="h5 gold-accent">₹{item.price}</span>
//                         </div>
//                         <div className="col-md-2">
//                           <div className="input-group">
//                             <button
//                               className="btn btn-outline-secondary"
//                               onClick={() =>
//                                 updateQuantity(item.id, item.quantity - 1)
//                               }
//                             >
//                               -
//                             </button>
//                             <span className="form-control text-center">
//                               {item.quantity}
//                             </span>
//                             <button
//                               className="btn btn-outline-secondary"
//                               onClick={() =>
//                                 updateQuantity(item.id, item.quantity + 1)
//                               }
//                             >
//                               +
//                             </button>
//                           </div>
//                         </div>
//                         <div className="col-md-2 text-end">
//                           <button
//                             className="btn btn-outline-danger"
//                             onClick={() => updateQuantity(item.id, 0)}
//                           >
//                             Remove
//                           </button>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>

//             <div className="col-md-4">
//               <div className="card card-luxury">
//                 <div className="card-body">
//                   <h5 className="luxury-text">Order Summary</h5>
//                   <hr />
//                   <div className="d-flex justify-content-between mb-2">
//                     <span>Subtotal:</span>
//                     <span>₹{total.toLocaleString()}</span>
//                   </div>
//                   <div className="d-flex justify-content-between mb-2">
//                     <span>Shipping:</span>
//                     <span>Free</span>
//                   </div>
//                   <div className="d-flex justify-content-between mb-2">
//                     <span>Tax:</span>
//                     <span>₹{(total * 0.08).toFixed(2)}</span>
//                   </div>
//                   <hr />
//                   <div className="d-flex justify-content-between mb-3">
//                     <strong>Total:</strong>
//                     <strong className="gold-accent">
//                       ₹{(total * 1.08).toFixed(2)}
//                     </strong>
//                   </div>
//                   <button
//                     className="btn btn-luxury w-100"
//                     onClick={() => {
//                       setCartItems([]);
//                       localStorage.setItem('cartItems', JSON.stringify());
//                       Swal.fire({
//                         icon: "success",
//                         title: "Order Placed!",
//                         text: "You will receive your product within 10 days.",
//                         confirmButtonColor: "#d4af37",
//                       });
//                     }}
//                   >
//                     Proceed to Checkout
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Cart;






import { useEffect, useRef, useContext, useState } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import Swal from 'sweetalert2';

gsap.registerPlugin(ScrollTrigger);

const Cart = () => {
  const { cartItems, updateQuantity, setCartItems } = useContext(CartContext);
  const cartRef = useRef(null);
  const [showTracking, setShowTracking] = useState(false);
  const trackingRef = useRef(null);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (cartRef.current && cartRef.current.children.length > 0) {
        gsap.fromTo(
          cartRef.current.children,
          { opacity: 0, x: -30 },
          { opacity: 1, x: 0, duration: 0.6, stagger: 0.1 }
        );
      }
    }, 100);

    return () => clearTimeout(timeout);
  }, [cartItems]);

  // useEffect(() => {
  //   if (showTracking && trackingRef.current) {
  //     gsap.from(trackingRef.current.children, {
  //       opacity: 0,
  //       y: 60,
  //       duration: 1,
  //       stagger: 0.2,
  //       ease: "power3.out",
  //       scrollTrigger: {
  //         trigger: trackingRef.current,
  //         start: "top 80%",
  //         toggleActions: "play none none reverse",
  //       },
  //     });

  //     // Scroll to the section smoothly
  //     trackingRef.current.scrollIntoView({ behavior: "smooth" });
  //   }
  // }, [showTracking]);


//   useEffect(() => {
//   if (showTracking && trackingRef.current) {
//     const ctx = gsap.context(() => {
//       const tl = gsap.timeline({
//         scrollTrigger: {
//           trigger: trackingRef.current,
//           start: "top center",
//           end: "+=400",
//           scrub: 1,
//           pin: true,
//           markers: false,
//         },
//       });

//       tl.from(".track-title", {
//         y: 100,
//         opacity: 0,
//         duration: 1,
//         ease: "power4.out",
//       })
//         .from(".track-text", {
//           x: -100,
//           opacity: 0,
//           duration: 1,
//         }, "-=0.5")
//         .from(".track-input", {
//           y: 100,
//           opacity: 0,
//           duration: 1,
//         }, "-=0.3")
//         .from(".track-note", {
//           scale: 0.8,
//           opacity: 0,
//           duration: 1,
//         }, "-=0.5");
//     }, trackingRef);

//     return () => ctx.revert();
//   }
// }, [showTracking]);

useEffect(() => {
  if (showTracking && trackingRef.current) {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: trackingRef.current,
          start: "top top",
          end: "+=400",
          scrub: true,
          pin: true,
          markers: false,
        },
      });

      tl.from(".track-title", {
        y: 100,
        opacity: 0,
        duration: 1,
      })
        .from(".track-text", {
          x: -100,
          opacity: 0,
          duration: 1,
        }, "-=0.5")
        .from(".track-input", {
          y: 100,
          opacity: 0,
          duration: 1,
        }, "-=0.3")
        .from(".track-note", {
          scale: 0.8,
          opacity: 0,
          duration: 1,
        }, "-=0.5");
    }, trackingRef);

    return () => ctx.revert();
  }
}, [showTracking]);


  const total = cartItems.reduce((sum, item) => {
    const price =
      parseFloat(
        item.price
          .toString()
          .replace(/[^0-9.]/g, "")
          .replace(/,/g, "")
      ) || 0;
    const qty = parseInt(item.quantity) || 0;
    return sum + price * qty;
  }, 0);

  return (
    <div style={{ paddingTop: "100px" }}>
      <div className="container py-5">
        <h1 className="section-title luxury-text">Shopping Cart</h1>

        {cartItems.length === 0 ? (
          <div className="text-center py-5">
            <h3>Your cart is empty</h3>
            <Link to="/products" className="btn btn-luxury">
              Continue Shopping
            </Link><br />

            <button
              className="btn btn-luxury m-3"
              onClick={() => setShowTracking(true)}
            >
              Track Your Order
            </button>

            {/* 🔥 Tracking Animation Section */}
            {/* {showTracking && (
              <div ref={trackingRef} className="container py-5">
                <h2 className="luxury-text">Track Your Order</h2>
                <p className="lead">Please enter your order ID to track your shipment.</p>
                <div className="input-group mb-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter Order ID"
                  />
                  <button className="btn btn-luxury">Track</button>
                </div>
                <p className="text-muted">
                  You will receive an update shortly via SMS/email.
                </p>
              </div>
            )} */}

            {showTracking && (
  <div
    ref={trackingRef}
    className="container py-5"
    style={{
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
    }}
  >
    <h2 className="luxury-text track-title">Track Your Order</h2>
    <p className="lead track-text">
      Enter your order ID below to track your shipment in real-time.
    </p>
    <div className="input-group mb-3 track-input">
      <input
        type="text"
        className="form-control"
        placeholder="Enter Order ID"
      />
      <button className="btn btn-luxury">Track</button>
    </div>
    <p className="text-muted track-note">
      You’ll receive live status updates via email and SMS.
    </p>
  </div>
)}

          </div>
        ) : (
          <div className="row">
            <div className="col-md-8">
              <div ref={cartRef}>
                {cartItems.map((item) => (
                  <div key={item.id} className="card card-luxury mb-3">
                    <div className="card-body">
                      <div className="row align-items-center">
                        <div className="col-md-2">
                          <img
                            src={item.image}
                            alt={item.name}
                            className="img-fluid rounded"
                          />
                        </div>
                        <div className="col-md-4">
                          <h5 className="luxury-text">{item.name}</h5>
                        </div>
                        <div className="col-md-2">
                          <span className="h5 gold-accent">₹{item.price}</span>
                        </div>
                        <div className="col-md-2">
                          <div className="input-group">
                            <button
                              className="btn btn-outline-secondary"
                              onClick={() =>
                                updateQuantity(item.id, item.quantity - 1)
                              }
                            >
                              -
                            </button>
                            <span className="form-control text-center">
                              {item.quantity}
                            </span>
                            <button
                              className="btn btn-outline-secondary"
                              onClick={() =>
                                updateQuantity(item.id, item.quantity + 1)
                              }
                            >
                              +
                            </button>
                          </div>
                        </div>
                        <div className="col-md-2 text-end">
                          <button
                            className="btn btn-outline-danger"
                            onClick={() => updateQuantity(item.id, 0)}
                          >
                            Remove
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="col-md-4">
              <div className="card card-luxury">
                <div className="card-body">
                  <h5 className="luxury-text">Order Summary</h5>
                  <hr />
                  <div className="d-flex justify-content-between mb-2">
                    <span>Subtotal:</span>
                    <span>₹{total.toLocaleString()}</span>
                  </div>
                  <div className="d-flex justify-content-between mb-2">
                    <span>Shipping:</span>
                    <span>Free</span>
                  </div>
                  <div className="d-flex justify-content-between mb-2">
                    <span>Tax:</span>
                    <span>₹{(total * 0.08).toFixed(2)}</span>
                  </div>
                  <hr />
                  <div className="d-flex justify-content-between mb-3">
                    <strong>Total:</strong>
                    <strong className="gold-accent">
                      ₹{(total * 1.08).toFixed(2)}
                    </strong>
                  </div>
                  <button
                    className="btn btn-luxury w-100"
                    onClick={() => {
                      setCartItems([]);
                      localStorage.setItem('cartItems', JSON.stringify());
                      Swal.fire({
                        icon: "success",
                        title: "Order Placed!",
                        text: "You will receive your product within 10 days.",
                        confirmButtonColor: "#d4af37",
                      });
                    }}
                  >
                    Proceed to Checkout
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
