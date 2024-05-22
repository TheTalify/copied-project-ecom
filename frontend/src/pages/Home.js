import React from 'react';
import CategoryList from '../components/CategoryList';
import BannerProduct from '../components/BannerProduct';
import HorizontalCardProduct from '../components/HorizontalCardProduct';
import VerticalCardProduct from '../components/VerticalCardProduct';

const Home = () => {
  return (
    // <section id='home' className='min-h-screen bg-gradient-to-br from-blue-200 to-purple-100'>
    //   <div className='container mx-auto p-4'>
    //     <CategoryList />
    //     <BannerProduct />
    //   </div>

    //   <div className='flex justify-center'>
    //     <div className='container mx-auto p-4 overflow-x-scroll scrollbar-thin scrollbar-thumb-purple-500 scrollbar-track-purple-200'>
    //       <HorizontalCardProduct category={'airpodes'} heading={'Top Airpods'} />
    //       <HorizontalCardProduct category={'watches'} heading={'Popular Watches'} />
    //       <VerticalCardProduct category={'mobiles'} heading={'Mobiles'} />
    //       <VerticalCardProduct category={'Mouse'} heading={'Mouse'} />
    //       <VerticalCardProduct category={'televisions'} heading={'Televisions'} />
    //       <VerticalCardProduct category={'camera'} heading={'Camera & Photography'} />
    //       <VerticalCardProduct category={'earphones'} heading={'Wired Earphones'} />
    //       <VerticalCardProduct category={'speakers'} heading={'Bluetooth Speakers'} />
    //       <VerticalCardProduct category={'refrigerator'} heading={'Refrigerator'} />
    //       <VerticalCardProduct category={'trimmers'} heading={'Trimmers'} />
    //     </div>
    //   </div>
    // </section>
    <section id='home' style={{ minHeight: '100vh', backgroundColor: 'white' }}>
      <div style={{ width: '100%', margin: '0 auto', padding: '16px' }}>
        <CategoryList />
        <BannerProduct />
      </div>

      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <div style={{ width: '100%', margin: '0 auto', padding: '16px', overflowX: 'auto', whiteSpace: 'nowrap' }}>
          <HorizontalCardProduct category={'airpodes'} heading={'Top Airpods'} />
          <HorizontalCardProduct category={'watches'} heading={'Popular Watches'} />
          <VerticalCardProduct category={'mobiles'} heading={'Mobiles'} />
          <VerticalCardProduct category={'Mouse'} heading={'Mouse'} />
          <VerticalCardProduct category={'televisions'} heading={'Televisions'} />
          <VerticalCardProduct category={'camera'} heading={'Camera & Photography'} />
          <VerticalCardProduct category={'earphones'} heading={'Wired Earphones'} />
          <VerticalCardProduct category={'speakers'} heading={'Bluetooth Speakers'} />
          <VerticalCardProduct category={'refrigerator'} heading={'Refrigerator'} />
          <VerticalCardProduct category={'trimmers'} heading={'Trimmers'} />
        </div>
      </div>
    </section>
  );
};

export default Home;
