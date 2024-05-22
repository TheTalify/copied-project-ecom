import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import productCategory from '../helpers/productCategory';
import VerticalCard from '../components/VerticalCard';
import SummaryApi from '../common';

const CategoryProduct = () => {
    const [data, setData] = useState([]);
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const location = useLocation();
    const urlSearch = new URLSearchParams(location.search);
    const urlCategoryListinArray = urlSearch.getAll('category');

    const urlCategoryListObject = {};
    urlCategoryListinArray.forEach(el => {
        urlCategoryListObject[el] = true;
    });

    const [selectCategory, setSelectCategory] = useState(urlCategoryListObject);
    const [filterCategoryList, setFilterCategoryList] = useState([]);

    const [sortBy, setSortBy] = useState('');

    const fetchData = async () => {
        const response = await fetch(SummaryApi.filterProduct.url, {
            method: SummaryApi.filterProduct.method,
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify({
                category: filterCategoryList,
            }),
        });

        const dataResponse = await response.json();
        setData(dataResponse?.data || []);
    };

    const handleSelectCategory = e => {
        const { name, value, checked } = e.target;

        setSelectCategory(prev => {
            return {
                ...prev,
                [value]: checked,
            };
        });
    };

    useEffect(() => {
        fetchData();
    }, [filterCategoryList]);

    useEffect(() => {
        const arrayOfCategory = Object.keys(selectCategory)
            .map(categoryKeyName => {
                if (selectCategory[categoryKeyName]) {
                    return categoryKeyName;
                }
                return null;
            })
            .filter(el => el);

        setFilterCategoryList(arrayOfCategory);

        //format for url change when change on the checkbox
        const urlFormat = arrayOfCategory.map((el, index) => {
            if (arrayOfCategory.length - 1 === index) {
                return `category=${el}`;
            }
            return `category=${el}&&`;
        });

        navigate('/product-category?' + urlFormat.join(''));
    }, [selectCategory]);

    const handleOnChangeSortBy = e => {
        const { value } = e.target;

        setSortBy(value);

        if (value === 'asc') {
            setData(prev => prev.sort((a, b) => a.sellingPrice - b.sellingPrice));
        }

        if (value === 'dsc') {
            setData(prev => prev.sort((a, b) => b.sellingPrice - a.sellingPrice));
        }
    };

    return (
        <div className="flex h-screen overflow-hidden bg-blue-100">
            {/* Sidebar */}
            <div className="w-1/4 h-full bg-gray-900 p-4">
                <div className="text-white">
                    {/* Sort by */}
                    <h3 className="text-lg font-medium border-b pb-2 mb-4">Sort by</h3>
                    <form className="flex flex-col gap-3">
                        <div className="flex items-center gap-2">
                            <input type="radio" name="sortBy" checked={sortBy === 'asc'} onChange={handleOnChangeSortBy} value="asc" />
                            <label htmlFor="sortByAsc" className="text-sm">Price - Low to High</label>
                        </div>
                        <div className="flex items-center gap-2">
                            <input type="radio" name="sortBy" checked={sortBy === 'dsc'} onChange={handleOnChangeSortBy} value="dsc" />
                            <label htmlFor="sortByDsc" className="text-sm">Price - High to Low</label>
                        </div>
                    </form>
                </div>
                <div className="mt-6 text-white">
                    {/* Filter by Category */}
                    <h3 className="text-lg font-medium border-b pb-2 mb-4">Category</h3>
                    <form className="flex flex-col gap-2">
                        {productCategory.map((categoryName, index) => (
                            <div key={index} className="flex items-center gap-2">
                                <input type="checkbox" name="category" checked={selectCategory[categoryName.value]} value={categoryName.value} id={categoryName.value} onChange={handleSelectCategory} />
                                <label htmlFor={categoryName.value} className="text-sm">{categoryName.label}</label>
                            </div>
                        ))}
                    </form>
                </div>
            </div>
            {/* Products */}
            <div className="w-3/4 h-full px-4 py-6 overflow-y-auto">
                <p className="text-gray-800 font-medium mb-4">Search Results: {data.length}</p>
                <div className="min-h-[calc(100vh-220px)]">
                    {data.length !== 0 && !loading && <VerticalCard data={data} loading={loading} />}
                </div>
            </div>
        </div>
    );
};

export default CategoryProduct;
