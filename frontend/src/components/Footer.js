import React from 'react';

const Footer = () => {
  return (
    <footer className='bg-gradient-to-r from-green-200 to-blue-200 shadow-md text-white'>
      <div className='container mx-auto p-4'>
        <div className='flex justify-center items-center space-x-4'>
          <div className='animate-bounce'>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19V5l7 7-7 7zm0 0v6m0-6H5m14 0a7.5 7.5 0 11-15 0 7.5 7.5 0 0115 0z"/>
            </svg>
          </div>
          <p className='text-center font-bold text-xl'>PakZone</p>
          <div className='animate-bounce'>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 5v14l7-7-7-7zm0 0V5l-7 7 7 7zm0 0v6m0-6H5m14 0a7.5 7.5 0 11-15 0 7.5 7.5 0 0115 0z"/>
            </svg>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
