import React from 'react';
import { items } from './itemData.js';
export default function ItemsComponent() {
  return (
    <>  
    {items.map(item=>
      <div key={item.id} className='w-[200px] h-[246px] bg-white rounded-[5px] shadow  border-black border-opacity-10' >

        {/* The Image section  */}
        <div className='relative w-[200px]  h-[140px] bg-neutral-400 rounded'>
          {/* The black-blue Hexagon  */}
          <span className=' absolute right-2 top-1'>
            <svg className=' ' width="40" height="46" viewBox="0 0 40 46" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M37 12.9997L20 3L3 12.9997V32.9998L20 43L37 32.9998V12.9997Z" fill="#2F88FF" stroke="black" strokeWidth="5" strokeLinejoin="round" />

            </svg>
            <p className="mt-[-33px] text-[7px] font-normal font-['Poppins']">{item.off+'%'} <br /> OFF</p>
          </span>
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
    </>
  )
}

