import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image'; // Importing the Image component
import { useCart } from '../context/CartContext'; // Importing the useCart hook
import './styles.css'; // Importing the CSS file

const Products = () => {
    const { addToCart } = useCart(); // Accessing the addToCart function
    const [addedToCart, setAddedToCart] = useState(false); // State to track if an item was added

    // Example product data with images
    const products = [...Array(8)].map((_, index) => ({
        id: index + 1,
        name: `Product ${index + 1}`,
        price: (index + 1) * 10, // Example price
        description: `Description of Product ${index + 1}`,
        image: `/images/product${index + 1}.jpg` // Example image path
    }));

    const handleAddToCart = (product) => {
        addToCart(product);
        setAddedToCart(true); // Set added to cart state
    };

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
            <h1>Our Products</h1>
            <div className="product-grid">
                {products.map((product) => (
                    <div className="product" key={product.id}>
                        <h2>{product.name}</h2>
                        <Image src={product.image} alt={product.name} width={300} height={200} />
                        <p>{product.description}</p>
                        <p>Price: ${product.price}</p>
                        <button onClick={() => handleAddToCart(product)}>Add to Cart</button>
                        <button>View Details</button>
                    </div>
                ))}
            </div>
            {addedToCart && (
                <div>
                    <p>Item added to cart! <Link href="/cart">Go to Cart</Link></p>
                </div>
            )}
            <p><Link href="/">More Products</Link></p>
            <footer>
                <p>&copy; 2023 E-Commerce Store. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default Products;
