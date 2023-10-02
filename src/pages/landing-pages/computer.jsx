import React from 'react'
import { items } from '../../components/shared-components/Items/itemData';

function Computer() {

    const laptop = items.filter(items =>
        items.productType === 'laptop'
        );
  return (

    <div className='grid grid-cols-5'>  

    {laptop.map(item=>
      <div key={item.id} className='w-[200px] h-[246px] bg-white rounded-[5px] shadow  border-black border-opacity-10' >

        {/* The Image section  */}
        <div className='relative w-[200px]  h-[140px] bg-neutral-400 rounded'>
          {/* The black-blue Hexagon  */}
            
          {/* The Product image  */}
          <img className=' m-auto' src={"../src/assets/"+item.image} alt={item.image} />

        </div>

        {/* Product Details section*/}
        <div className='text-left '>
          {/* Product Name  */}
          <div className="text-black text-sm font-medium font-['Poppins'] pl-3 pt-3">{item.productName} </div>
          <div className='flex space-x-4 pl-3 py-2'> 
           {/* Price  */}
            <p className="text-black text-[11px] font-normal font-['Poppins']">{'NGN '+item.price}</p>
           {/* Slashed Priced  */}
            <del className="text-[#949494] text-[11px] font-normal font-['Poppins']">{'NGN '+item.slashPrice}</del>
          </div>
          <hr className='border border-green-700 ' />
          <div className='flex space-x-14 pl-3 py-2'>
            <p className="text-black text-[11px] font-medium font-['Poppins']">Save up:</p>
           
            {/* Saved Up Ammount  */}
            <p className="text-black text-[11px] font-normal font-['Poppins']">{'NGN '+item.saved}</p>
          </div>
        </div>
      </div>
    )}
    </div>
  )
}

export default Computer

  