import React from 'react';
import { useRouter } from 'next/router';

const ProductDetail = () => {
    const router = useRouter();
    const { id } = router.query;

    return (
        <div>
            <h1>Product Detail for Product ID: {id}</h1>
            <p>Product description, images, and pricing will go here.</p>
            {/* Add functionality to add to cart here */}
        </div>
    );
};

export default ProductDetail;
