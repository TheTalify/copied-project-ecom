import React, { useState } from 'react';
import { FaEye, FaEyeSlash, FaUserCircle } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import imageToBase64 from '../helpers/imageTobase64';
import SummaryApi from '../common';
import { toast } from 'react-toastify';

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [data, setData] = useState({
    email: '',
    password: '',
    name: '',
    confirmPassword: '',
    profilePic: '',
  });
  const navigate = useNavigate();

  const handleOnChange = (e) => {
    const { name, value } = e.target;

    setData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleUploadPic = async (e) => {
    const file = e.target.files[0];
    
    // Assume imageToBase64 is defined and implemented properly
    const imagePic = await imageToBase64(file);
    
    setData((prev) => ({
      ...prev,
      profilePic: imagePic,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (data.password === data.confirmPassword) {
      const dataResponse = await fetch(SummaryApi.signUP.url, {
        method: SummaryApi.signUP.method,
        headers: {
          'content-type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const dataApi = await dataResponse.json();

      if (dataApi.success) {
        toast.success(dataApi.message);
        navigate('/login');
      } else if (dataApi.error) {
        toast.error(dataApi.message);
      }
    } else {
      toast.error('Please check password and confirm password');
    }
  };

  return (
    <section id='signup' className='flex items-center justify-center min-h-screen bg-gradient-to-r from-green-200 to-blue-200'>
      <div className='container mx-auto p-4'>
        <div className='bg-white p-8 rounded-lg shadow-lg w-full max-w-md mx-auto'>
          <div className='flex justify-center mb-4 text-green-600 text-6xl'>
            <FaUserCircle />
          </div>

          <form className='space-y-4' onSubmit={handleSubmit}>
            <div>
              <label className='block text-gray-700 font-semibold'>Name:</label>
              <div className='bg-gray-100 p-2 rounded-md'>
                <input
                  type='text'
                  placeholder='Enter your name'
                  name='name'
                  value={data.name}
                  onChange={handleOnChange}
                  className='w-full p-2 outline-none bg-transparent'
                />
              </div>
            </div>

            <div>
              <label className='block text-gray-700 font-semibold'>Email:</label>
              <div className='bg-gray-100 p-2 rounded-md'>
                <input
                  type='email'
                  placeholder='Enter email'
                  name='email'
                  value={data.email}
                  onChange={handleOnChange}
                  className='w-full p-2 outline-none bg-transparent'
                />
              </div>
            </div>

            <div>
              <label className='block text-gray-700 font-semibold'>Password:</label>
              <div className='bg-gray-100 p-2 rounded-md flex items-center'>
                <input
                  type={showPassword ? 'text' : 'password'}
                  placeholder='Enter password'
                  name='password'
                  value={data.password}
                  onChange={handleOnChange}
                  className='w-full p-2 outline-none bg-transparent'
                />
                <div className='cursor-pointer text-xl ml-2' onClick={() => setShowPassword((prev) => !prev)}>
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </div>
              </div>
            </div>

            <div>
              <label className='block text-gray-700 font-semibold'>Confirm Password:</label>
              <div className='bg-gray-100 p-2 rounded-md flex items-center'>
                <input
                  type={showConfirmPassword ? 'text' : 'password'}
                  placeholder='Enter confirm password'
                  name='confirmPassword'
                  value={data.confirmPassword}
                  onChange={handleOnChange}
                  className='w-full p-2 outline-none bg-transparent'
                />
                <div className='cursor-pointer text-xl ml-2' onClick={() => setShowConfirmPassword((prev) => !prev)}>
                  {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
                </div>
              </div>
            </div>

            <button className='bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-full w-full transition-all transform hover:scale-105'>
              Sign Up
            </button>
          </form>

          <p className='mt-6 text-center'>
            Already have an account?{' '}
            <Link to='/login' className='text-green-600 hover:text-green-700 hover:underline'>
              Login
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
};

export default SignUp;
