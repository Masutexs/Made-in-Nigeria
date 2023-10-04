import React from 'react'
import { items } from '../../components/shared-components/Items/itemData';
import Layout from '../../components/shared-components/layout/layout';

function Computer() {

    const laptop = items.filter(items =>
        items.productType === 'laptop'
        );
  return (

    <Layout>
    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5 md:grid-cols-3'>

{laptop.map(item =>
  <div key={item.id} className="w-[200px] h-[337px] bg-white rounded-[5px] mx-auto shadow border border-black border-opacity-10" >

    {/* The Image section  */}
    <div className="w-[199gitpx] h-[140px] bg-neutral-400 rounded">
      {/* The black-blue Hexagon  */}

      {/* The Product image  */}
      <img className=' m-auto h-[140px]' src={"../src/assets/" + item.image} alt={item.image} />

    </div>

    {/* Product Details section*/}
    <div className='text-left '>
      {/* Product Name  */}
      <div className="text-black text-sm font-medium font-['Poppins'] pl-3 pt-3">{item.productName} </div>
      <div className='flex space-x-4 pl-3 py-2'>
        {/* Price  */}
        <p className="text-black text-[11px] font-normal font-['Poppins']">{'NGN ' + item.price}</p>
        {/* Slashed Priced  */}
        <del className="text-[#949494] text-[11px] font-normal font-['Poppins']">{'NGN ' + item.slashPrice}</del>
        <div className="text-white text-[6px] font-normal font-['Poppins']">-50</div>
      </div>
      <hr className='border border-green-700 ' />
      <div className='flex space-x-14 pl-3 py-2'>
        <p className="text-black text-[11px] font-medium font-['Poppins']">Save up:</p>

        {/* Saved Up Ammount  */}
        <p className="text-black text-[11px] font-normal font-['Poppins']">{'NGN ' + item.saved}</p>
      </div>
      <div className="w-[177px] h-8 px-2 py-1.5 bg-green-600 rounded-[5px] border border-green-700 border-opacity-80 flex-col justify-center items-center gap-2.5 inline-flex mx-auto ml-2.5">
        <div className="justify-center items-center inline-flex ">
          <div className="text-black text-[13px] font-normal font-['Poppins'] m-0">Add Cart</div>
        </div>
      </div>
      <div className="text-black text-[11px] font-normal font-['Poppins']">Ratings:</div>
    </div>
  </div>
)}
</div>
    </Layout>
  )
}

export default Computer

  