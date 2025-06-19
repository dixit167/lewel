





import React, { useEffect, useRef } from 'react';
import ProductCard from '../components/ProductCard';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useNavigate } from 'react-router-dom';
import logo from "../assets/logo.jpg"
import logo1 from "../assets/logo01.png"

gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  const heroRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const ctaRef = useRef(null);
  const featuresRef = useRef(null);
  const heroImgRef = useRef(null);
  const navigate = useNavigate()

  useEffect(() => {
    const tl = gsap.timeline();

    tl.fromTo(
      titleRef.current,
      { opacity: 0, y: 100 },
      { opacity: 1, y: 0, duration: 1.2, ease: 'power2.out' }
    )
      .fromTo(
        subtitleRef.current,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1, ease: 'power2.out' },
        '-=0.8'
      )
      .fromTo(
        ctaRef.current,
        { opacity: 0, scale: 0.8 },
        { opacity: 1, scale: 1, duration: 0.8, ease: 'back.out(1.7)' },
        '-=0.5'
      )
      .fromTo(
        heroImgRef.current,
        { opacity: 0, x: 100 },
        { opacity: 1, x: 0, duration: 1, ease: 'power2.out' },
        '-=0.5'
      );

    gsap.fromTo(
      featuresRef.current.children,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.2,
        scrollTrigger: {
          trigger: featuresRef.current,
          start: 'top 80%',
        },
      }
    );

    const diamonds = Array.from(document.querySelectorAll('.floating-diamond'));
    const heroImage = document.querySelector('.hero-tilt');

    const handleMouseMove = (e) => {
      diamonds.forEach((diamond, i) => {
        gsap.to(diamond, {
          x: e.clientX,
          y: e.clientY,
          ease: 'power3.out',
          duration: 0.3 + i * 0.15,
        });
      });

      const { innerWidth, innerHeight } = window;
      const centerX = innerWidth / 2;
      const centerY = innerHeight / 2;
      const rotateX = (centerY - e.clientY) / 20;
      const rotateY = (e.clientX - centerX) / 20;

      gsap.to(heroImage, {
        rotationX: rotateX,
        rotationY: rotateY,
        transformPerspective: 800,
        transformOrigin: 'center',
        ease: 'power2.out',
        duration: 0.5,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const featuredProducts = [
    {
      id: 1,
      name: 'Diamond Eternity Ring',
      description: 'Brilliant cut diamonds in platinum setting',
      price: '2,499',
      image:
        'https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=400&h=300&fit=crop',
    },
    {
      id: 2,
      name: 'Pearl Elegance Necklace',
      description: 'Cultured pearls with gold clasp',
      price: '899',
      image:
        'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=400&h=300&fit=crop',
    },
    {
      id: 3,
      name: 'Sapphire Tennis Bracelet',
      description: 'Blue sapphires in white gold',
      price: '1,799',
      image:
        'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=400&h=300&fit=crop',
    },
  ];

  return (
    <div>
      <img
        src="https://cdn.pixabay.com/animation/2024/02/22/14/56/14-56-03-65__480.png"
        alt="Diamond1"
        className="floating-diamond"
      />
      <img
        src="https://cdn.pixabay.com/animation/2024/02/22/14/56/14-56-03-65__480.png"
        alt="Diamond2"
        className="floating-diamond"
      />
      <img
        src="https://cdn.pixabay.com/animation/2024/02/22/14/56/14-56-03-65__480.png"
        alt="Diamond3"
        className="floating-diamond"
      />

      <section ref={heroRef} className="hero-section position-relative">
        <div className="hero-overlay"></div>
        <div className="container hero-content">
          <div className="row align-items-center">
            <div className="col-md-6">
              <h1><img src={logo1} alt=""  style={{height: "253px",width: "390px"}}/></h1>
              <h1 ref={titleRef} className="display-2 luxury-text mb-4">
                Timeless <span className="gold-accent">Elegance</span>
              </h1>
              <p ref={subtitleRef} className="lead mb-4">
                Discover our exquisite collection of handcrafted jewelry,
                where each piece tells a story of luxury and sophistication.
              </p>
              <button ref={ctaRef} className="btn btn-luxury btn-lg" onClick={() =>{navigate("/products")}}>
                Explore Collections
              </button>
            </div>
            <div className="col-md-6">
              <img
                ref={heroImgRef}
                src="https://motisonsjewellers.com/media/catalog/product/cache/fe952e4743f2e20a894361b53de9957c/t/r/treasure-_diamond_and_gold_bracelet_-kb500163.png"
                alt="Luxury Jewelry"
                className="img-fluid rounded shadow-lg hero-tilt"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-5">
        <div className="container">
          <h2 className="section-title luxury-text">Why Choose Luxe Jewels</h2>
          <div ref={featuresRef} className="row">
            <div className="col-md-4 text-center">
              <div className="mb-4">
                <div className="display-1 gold-accent">💎</div>
                <h4 className="luxury-text">Premium Quality</h4>
                <p>Only the finest diamonds and precious metals</p>
              </div>
            </div>
            <div className="col-md-4 text-center">
              <div className="mb-4">
                <div className="display-1 gold-accent">👑</div>
                <h4 className="luxury-text">Expert Craftsmanship</h4>
                <p>Handcrafted by master jewelers with decades of experience</p>
              </div>
            </div>
            <div className="col-md-4 text-center">
              <div className="mb-4">
                <div className="display-1 gold-accent">🛡️</div>
                <h4 className="luxury-text">Lifetime Warranty</h4>
                <p>Complete protection and maintenance for your investment</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-5 bg-white">
        <div className="container">
        
          <h3 className='luxury-text section-title' >top selling product </h3>
          <div className="row">
            {featuredProducts.map((product, index) => (
              <ProductCard key={product.id} product={product} index={index} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
