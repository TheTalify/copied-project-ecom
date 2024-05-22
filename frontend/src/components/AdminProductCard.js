import React, { useState } from 'react';
import { MdModeEditOutline } from "react-icons/md";
import AdminEditProduct from './AdminEditProduct';
import displayINRCurrency from '../helpers/displayCurrency';

const AdminProductCard = ({
    data,
    fetchdata
}) => {
    const [editProduct, setEditProduct] = useState(false);

    return (
        <>
            <div className='bg-white hover:bg-purple-300 p-4 rounded-md text-black shadow-md transition duration-300 transform hover:shadow-lg hover:-translate-y-1'>
                <div className='w-40 mx-auto'>
                    <div className='w-32 h-32 flex justify-center items-center mx-auto'>
                        <img src={data?.productImage[0]} className='object-cover w-full h-full' alt={data.productName} />
                    </div>
                    <h1 className='text-ellipsis line-clamp-2 text-center mt-2 font-semibold'>{data.productName}</h1>

                    <div className='flex justify-between items-center mt-2'>
                        <p className='font-semibold'>{displayINRCurrency(data.sellingPrice)}</p>
                        <div className='p-2 bg-blue-600 hover:bg-blue-700 rounded-full hover:text-white cursor-pointer' onClick={() => setEditProduct(true)}>
                            <MdModeEditOutline />
                        </div>
                    </div>
                </div>
            </div>

            {editProduct && (
                <div className="fixed inset-0 flex items-center justify-center z-50 bg-gray-900 bg-opacity-50">
                    <AdminEditProduct productData={data} onClose={() => setEditProduct(false)} fetchdata={fetchdata} />
                </div>
            )}
        </>
    );
};

export default AdminProductCard;
