import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { FaRegCircleUser } from 'react-icons/fa6';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import ROLE from '../common/role';

const AdminPanel = () => {
  const user = useSelector((state) => state?.user?.user);
  const navigate = useNavigate();

  useEffect(() => {
    if (user?.role !== ROLE.ADMIN) {
      navigate('/');
    }
  }, [user]);

  return (
    <div className='min-h-[calc(100vh-120px)] md:flex hidden bg-gradient-to-br from-blue-200 to-purple-100'>

      <aside className='bg-gray-700 min-h-full w-full max-w-60 customShadow flex flex-col items-center'>
        <div className='relative mt-8 mb-4'>
          {
            user?.profilePic ? (
              <img src={user?.profilePic} className='w-20 h-20 rounded-full' alt={user?.name} />
            ) : (
              <FaRegCircleUser className='text-5xl text-gray-400' />
            )
          }
        </div>
        <p className='capitalize text-lg font-semibold mb-1 text-white'>{user?.name}</p>
        <p className='text-sm mb-4 text-white'>{user?.role}</p>

        <nav className='flex flex-col items-center'>
          <ul className='space-y-2'>
            <li>
              <Link to={'all-users'} className='block px-4 py-2 rounded-md hover:bg-blue-100 text-white'>All Users</Link>
            </li>
            <li>
              <Link to={'all-products'} className='block px-4 py-2 rounded-md hover:bg-blue-100 text-white'>All Products</Link>
            </li>
          </ul>
        </nav>
      </aside>

      <main className='w-full h-full p-2'>
        <Outlet />
      </main>
    </div>
  );
};

export default AdminPanel;
