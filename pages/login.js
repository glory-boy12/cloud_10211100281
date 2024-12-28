import React from 'react';
import Link from 'next/link';

const Login = () => {
    return (
        <div>
            <h1>Login</h1>
            <form>
                <div>
                    <label htmlFor="username">Username:</label>
                    <input type="text" id="username" name="username" required />
                </div>
                <div>
                    <label htmlFor="password">Password:</label>
                    <input type="password" id="password" name="password" required />
                </div>
                <button type="submit">Login</button>
            </form>
            <p>Don&apos;t have an account? <Link href="/register">Register here</Link></p>
            <p>Forgot your password? <Link href="/reset-password">Reset it here</Link></p>
            <p>By logging in, you agree to our terms and conditions.</p>
        </div>
    );
};

export default Login;
