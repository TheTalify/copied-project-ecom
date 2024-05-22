import React, { useContext, useState } from 'react';
import { FaEye, FaEyeSlash, FaUserCircle } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import SummaryApi from '../common';
import { toast } from 'react-toastify';
import Context from '../context';

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [data, setData] = useState({
    email: '',
    password: '',
  });
  const navigate = useNavigate();
  const { fetchUserDetails, fetchUserAddToCart } = useContext(Context);

  const handleOnChange = (e) => {
    const { name, value } = e.target;

    setData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const dataResponse = await fetch(SummaryApi.signIn.url, {
      method: SummaryApi.signIn.method,
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    const dataApi = await dataResponse.json();

    if (dataApi.success) {
      toast.success(dataApi.message);
      navigate('/');
      fetchUserDetails();
      fetchUserAddToCart();
    } else if (dataApi.error) {
      toast.error(dataApi.message);
    }
  };

  return (
    <section id='login' className='flex items-center justify-center min-h-screen bg-gradient-to-r from-green-200 to-blue-200'>
      <div className='container mx-auto p-4'>
        <div className='bg-white p-8 rounded-lg shadow-lg w-full max-w-md mx-auto'>
          <div className='flex justify-center mb-4 text-green-600 text-6xl'>
            <FaUserCircle />
          </div>

          <form className='space-y-4' onSubmit={handleSubmit}>
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
              <Link to='/forgot-password' className='text-right block mt-2 text-blue-600 hover:underline'>
                Forgot password?
              </Link>
            </div>

            <button className='bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-full w-full transition-all transform hover:scale-105'>
              Login
            </button>
          </form>

          <p className='mt-6 text-center'>
            Don't have an account?{' '}
            <Link to='/sign-up' className='text-green-600 hover:text-green-700 hover:underline'>
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Login;