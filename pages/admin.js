import React from 'react';
import Link from 'next/link';

const Admin = () => {
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
                    <li><Link href="/admin">Admin Dashboard</Link></li>
                </ul>
            </nav>
            <h1>Admin Dashboard</h1>
            <div className="admin-functions">
                <h2>Manage Products</h2>
                <button>Add New Product</button>
                <button>View All Products</button>

                <h2>Manage Users</h2>
                <button>View All Users</button>

                <h2>View Orders</h2>
                <button>View All Orders</button>
            </div>
            <footer>
                <p>&copy; 2023 E-Commerce Store. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default Admin;
