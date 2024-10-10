import React, { useEffect, useState } from 'react';
import { fetchProducts } from '../store/Actions/productAction'; // Import the function

const AdminProducts = () => {
    const [products, setProducts] = useState([]); // State to hold product data
    const [loading, setLoading] = useState(true); // State to manage loading state
    const [error, setError] = useState(null); // State to manage error messages

    useEffect(() => {
        const getProducts = async () => {
            setLoading(true);
            try {
                const fetchedProducts = await fetchProducts(); // Fetch products from action
                console.log('Fetched Products:', fetchedProducts); // Log the fetched products
                setProducts(fetchedProducts); // Set the product data
            } catch (err) {
                setError(err.message); // Set error message if fetching fails
            } finally {
                setLoading(false); // Stop loading once the fetch is done
            }
        };

        getProducts();
    }, []);

    if (loading) return <div>Loading...</div>; // Loading state
    if (error) return <div className="text-red-500">{error}</div>; // Error state

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {products.length > 0 ? (
                products.map(product => (
                    <div 
                        key={product._id || product.id}  // Use correct ID key based on your API response
                        className="border rounded shadow-md p-4 cursor-pointer hover:shadow-lg transition-shadow duration-300"
                    >
                        <img 
                            src={product.imageUrl || 'https://via.placeholder.com/150'} 
                            alt={product.name} 
                            className="w-full h-32 object-cover mb-2 rounded" 
                        />
                        <h2 className="text-xl font-semibold">{product.name}</h2>
                        <p className="text-gray-700">{product.description}</p>
                        <p className="text-lg font-bold">${product.price.toFixed(2)}</p>
                    </div>
                ))
            ) : (
                <div>No products available.</div>
            )}
        </div>
    );
};

export default AdminProducts;
