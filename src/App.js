// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Navbar from './components/Navbar';
// import Footer from './components/Footer';
// import GlobalStyles from './components/GlobalStyles';
// import Home from './pages/Home';
// import About from './pages/About';
// import Products from './pages/Products';
// import Testimonials from './pages/Testimonials';
// import Contact from './pages/Contact';
// import Login from './pages/Login';
// import Cart from './pages/Cart';


// const App = () => {
//   return (
//     <Router>
//       <div className="App">
//         <GlobalStyles />
//         <Navbar />
//         <main>
//           <Routes>
//             <Route path="/" element={<Home />} />
//             <Route path="/about" element={<About />} />
//             <Route path="/products" element={<Products />} />
//             <Route path="/testimonials" element={<Testimonials />} />
//             <Route path="/contact" element={<Contact />} />
//             <Route path="/login" element={<Login />} />
//             <Route path="/cart" element={<Cart />} />
//           </Routes>
//         </main>
//         <Footer />
//       </div>
//     </Router>
//   );
// };

// export default App;



import { CartProvider } from './context/CartContext';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import GlobalStyles from './components/GlobalStyles';
import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';
import Testimonials from './pages/Testimonials';
import Contact from './pages/Contact';
import Login from './pages/Login';
import Cart from './pages/Cart';

const App = () => {
  return (
    <Router>
      <CartProvider>
        <div className="App">
          <GlobalStyles />
          <Navbar />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/products" element={<Products />} />
              <Route path="/testimonials" element={<Testimonials />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/login" element={<Login />} />
              <Route path="/cart" element={<Cart />} />
            </Routes>
          </main>
          <Footer />
          <ToastContainer position="top-right" autoClose={2000} hideProgressBar />
        </div>
      </CartProvider>
    </Router>
  );
};

export default App;
