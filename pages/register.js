import React from 'react';
import Link from 'next/link';

const Register = () => {
    return (
        <div>
            <h1>Register</h1>
            <form>
                <label>Name:</label>
                <input type="text" required />
                <label>Email:</label>
                <input type="email" required />
                <label>Password:</label>
                <input type="password" required />
                <button type="submit">Register</button>
            </form>
            <p>Already have an account? <Link href="/login">Login here</Link></p>
            <footer>
                <p>&copy; 2023 E-Commerce Store. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default Register;
