import axios from '../../utils/axios';

// Fetch products

export const fetchProducts = async () => {
    try {
        const response = await axios.get('/admin/all-clothes'); // Adjust the endpoint as needed
        console.log('API Response:', response.data.createdOrders); // Log the full response to check the structure
        return response.data.createdOrders; // Adjust according to your response structure
    } catch (error) {
        console.error("Could not fetch products:", error.message);
        throw new Error("Could not fetch products: " + error.message);
    }
};

// Update product
export const updateProduct = async (productId, updatedData) => {
    try {
        const response = await axios.put(`/admin/update-cloth/${productId}`, updatedData);
        return response.data; // Return updated product data
    } catch (error) {
        throw new Error('Failed to update product: ' + error.response?.data?.message || error.message);
    }
};

// Delete product
export const deleteProduct = async (productId) => {
    try {
        const response = await axios.delete(`/admin/delete-cloth/${productId}`);
        return response.data; // Return response data if needed
    } catch (error) {
        throw new Error('Failed to delete product: ' + error.response?.data?.message || error.message);
    }
};
