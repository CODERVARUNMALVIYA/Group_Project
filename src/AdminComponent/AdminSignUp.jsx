import React, { useState } from 'react';
import { useNavigate } from "react-router-dom"; // Import useNavigate hook
import { useDispatch } from "react-redux";
import { adminSignup } from '../store/Actions/adminActions'; // Assuming you have this action in redux

const AdminSignup = () => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    password: '',
    email: '',
  });

  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate(); // Initialize the useNavigate hook

  // Handle input change
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Dispatch the signup action
      dispatch(adminSignup(formData));
      navigate("/admin/products"); // Navigate to products page after successful signup
    } catch (error) {
      console.error("Failed to sign up admin. Error:", error);
      setErrorMessage("Failed to sign up. Please try again.");
    }
  };

  return (
    <div className="max-w-md mx-auto bg-white p-6 shadow-md rounded">
      <h2 className="text-2xl font-semibold text-center">Admin Signup</h2>
      {errorMessage && <p className="text-center text-red-500">{errorMessage}</p>}
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700">Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full p-2 border border-gray-300 rounded mt-1"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Password:</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
            className="w-full p-2 border border-gray-300 rounded mt-1"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
        >
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default AdminSignup;
