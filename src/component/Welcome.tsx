import React, { useEffect, useState } from 'react';

type FormData = {
  firstName: string;
  lastName: string;
  gender: 'male' | 'female' | 'other';
  email: string;
  phone: string;
  password: string;
  confirmPassword: string;
};

const Home: React.FC = () => {
  const [formData, setFormData] = useState<FormData | null>(null);

  useEffect(() => {
    // Retrieve data from localStorage
    const savedData = localStorage.getItem("registrationData");
    if (savedData) {
      setFormData(JSON.parse(savedData));
    }
  }, []);

  if (!formData) return <p>Please register to see your details.</p>;

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
  <div className="text-center">
    <h1 className="text-4xl font-bold text-blue-600 mb-4">Thank you for registering.</h1>
    <p className="text-lg font-bold text-gray-700">Welcome to the Home page</p>
   
    <h2 className="text-lg font-semibold mt-4">Welcome, {formData.firstName}</h2>

    <div className="mt-6 p-6 bg-white rounded-lg shadow-md inline-block text-left">
      <p className="mb-2"><strong>First Name:</strong> {formData.firstName}</p>
      <p className="mb-2"><strong>Last Name:</strong> {formData.lastName}</p>
      <p className="mb-2"><strong>Gender:</strong> {formData.gender}</p>
      <p className="mb-2"><strong>Email:</strong> {formData.email}</p>
      <p className="mb-2"><strong>Phone:</strong> {formData.phone}</p>
    </div>
  </div>
</div>
  
  );
};

export default Home;
