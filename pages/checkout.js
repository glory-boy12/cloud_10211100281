import React from 'react';
import Link from 'next/link';

const Checkout = () => {
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
            <h1>Checkout</h1>
            <p>Review your order and proceed with payment.</p>
            {/* Add checkout functionality here */}
            <footer>
                <p>&copy; 2023 E-Commerce Store. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default Checkout;
