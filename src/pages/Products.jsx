// src/pages/Products.jsx
import React, { useState, useRef, useEffect } from 'react';
import gsap from 'gsap';
import ProductCard from '../components/ProductCard';

const Products = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const productsRef = useRef(null);

  const allProducts = [
    {
      id: 1,
      name: "Diamond Solitaire Ring",
      description: "Classic 1-carat diamond in platinum",
      price: "3,299",
      category: "rings",
      image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=400&h=300&fit=crop"
    },
    {
      id: 2,
      name: "Pearl Drop Earrings",
      description: "Tahitian pearls with diamond accents",
      price: "1,199",
      category: "earrings",
      image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=400&h=300&fit=crop"
    },
    {
      id: 3,
      name: "Gold Chain Necklace",
      description: "18k gold Italian chain",
      price: "899",
      category: "necklaces",
      image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=400&h=300&fit=crop"
    },
    {
      id: 4,
      name: "Ruby Tennis Bracelet",
      description: "Burmese rubies in white gold setting",
      price: "2,199",
      category: "bracelets",
      image: "https://d25g9z9s77rn4i.cloudfront.net/uploads/product/1552/1728719668_e903cf2dff9c27f19764.jpg"
    },
    {
      id: 5,
      name: " Gold Plated Bracelet",
      description: "Gold Plated with Diamond Lovely Design Bracelet for Ladies ",
      price: "2,599",
      category: "bracelets",
      image: "https://www.soni.fashion/cdn/shop/files/1-gram-gold-plated-with-diamond-lovely-design-bracelet-for-ladies-style-a366_3.jpg?v=1744793453&width=600"
    },
    {
      id: 6,
      name: "Diamond Stud Earrings",
      description: "Brilliant cut diamonds, 2 carats total",
      price: "1,899",
      category: "earrings",
      image: "https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?w=400&h=300&fit=crop"
    },
    {
      id: 7,
      name: "Gold Stud Bracelet",
      description: "Brilliant cut rodraksha, 2 carats total",
      price: "1,899",
      category: "bracelets",
      image: "https://japam.in/cdn/shop/products/12.jpg?v=1681143118&width=675"
    },
    {
      id: 8,
      name: "Diamond Stud Ring",
      description: "Brilliant cut diamonds, 2 carats total",
      price: "1,899",
      category: "rings",
      image: "https://cdnss.caratlane.us/e1597c3d-5e7c-4b01-a191-bfcbe1827055/https://cdn.caratlane.us/media/catalog/product/j/r/jri01683-yc1a-000000000-00-18kt-yellow-gold-rings-image-2.jpg"
    },
     {
      id: 9,
      name: "Emerald Engagement  Necklace",
      description: "Colombian emerald with diamond halo",
      price: "4,599",
      category: "necklaces",
      image: "https://amispearl.com.au/cdn/shop/products/20211013_141825_1024x1024@2x.jpg?v=1634103339"
    },
     {
      id: 10,
      name: "Gold-Diamond Ring",
      description: "Real Diamond Ring, Yellow Gold",
      price: "1,899",
      category: "rings",
      image: "https://5.imimg.com/data5/SELLER/Default/2023/12/371125094/ES/ND/XD/28036856/diamond-pendant-set-1000x1000.jpg"
    },
    {
      id: 11,
      name: "Gold Stud Bracelet",
      description: "Real Diamond Bracelet,rose Gold",
      price: "1,899",
      category: "bracelets",
      image: "https://5.imimg.com/data5/XB/QB/IW/SELLER-2283740/rj-427.jpg"
    },
     {
      id: 12,
      name: "Diamond Stud Earrings",
      description: "Brilliant cut diamonds, 2 carats total",
      price: "1,899",
      category: "earrings",
      image: "https://cdn.bradojewellery.com/p/1440x/1746013853430.jpeg"
    },
  ];

  const filteredProducts = activeCategory === 'all'
    ? allProducts
    : allProducts.filter(product => product.category === activeCategory);

  useEffect(() => {
    gsap.fromTo(productsRef.current.children,
      { opacity: 0, scale: 0.8 },
      { opacity: 1, scale: 1, duration: 0.6, stagger: 0.1 }
    );
  }, [activeCategory]);

  return (
    <div style={{ paddingTop: '100px' }}>
      <div className="container py-5">
        <h1 className="section-title luxury-text">Our Collections</h1>

        <div className="text-center mb-5">
          <div className="btn-group" role="group">
            {['all', 'rings', 'necklaces', 'earrings', 'bracelets'].map(category => (
              <button
                key={category}
                className={`btn ${activeCategory === category ? 'btn-luxury' : 'btn-outline-secondary'}`}
                onClick={() => setActiveCategory(category)}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </div>
        </div>

        <div ref={productsRef} className="row">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;