import React from 'react';
import Link from 'next/link';


const Home = () => {
    return (
        <div>
            <nav>
                <ul>
                    <li><Link href="/">Home</Link></li>
                    <li><Link href="/products">Products</Link></li>
                    <li><Link href="/login">Login</Link></li>
                    <li><Link href="/register">Register</Link></li>
                    <li><Link href="/checkout">Checkout</Link></li>
                    <li><Link href="/cart">Cart</Link></li>
                </ul>
            </nav>
            <h1>Welcome to Our E-Commerce Store</h1>
            
            <div className="about-section">
                <Image src="/images/about.jpg" alt="About Us" className="about-image" width={500} height={300} />
                <div className="about-content">
                    <h2>About Us</h2>
                    <p>We are dedicated to providing the best products and services to our customers.</p>
                </div>
            </div>

            <div className="service-section">
                <Image src="/images/services.jpg" alt="Our Services" className="service-image" width={500} height={300} />
                <div className="service-content">
                    <h2>Our Services</h2>
                    <p>We offer a wide range of services to meet your needs.</p>
                </div>
            </div>

            <footer>
                <p>&copy; 2023 E-Commerce Store. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default Home;
