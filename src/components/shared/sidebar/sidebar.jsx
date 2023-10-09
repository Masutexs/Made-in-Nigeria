import React from 'react'

export function Sidebar() {
  return (
    <div className='border text-black text-left w-[270px] h-[929px] bg-white rounded-[14px] shadow'>
      <section className="pl-2 flex flex-col py-8 ">
        <h2 className=" pb-4 text-black text-base font-medium font-['Poppins'] ">Browse Categories</h2>
        <div className="flex  flex-col space-y-2 text-black text-xs font-normal font-['Poppins']">

          <a href="">- Computers and accessories</a>
          <a href="">- Laptop</a>
          <a href="">- Gaming pc</a>
          <a href="">- Computer software</a>
          <a href="">- Desktop and Monitors</a>
          <a href="" className=''>- Projectors & Accessories</a>
        </div>

      </section>
      <hr className='border border-green-700 ' />
      <section className="pl-2 flex flex-col py-6">
        <h2 className="  pb-4 text-black text-base font-medium font-['Poppins']">Price</h2>

        <div className="text-black text-xs font-normal font-['Poppins'] space-y-2 ">
          <input className="w-[9px] h-[9px] bg-zinc-300 rounded-full border border-green-700"  name='price' type="button" style={{}}/>
          <label htmlFor=""> Under 2000 hello</label><br />

          <input name='price' type="radio" />
          <label htmlFor=""> 2000-4000</label><br />

          <input name='price' type="radio" />
          <label htmlFor=""> 4000-8000</label><br />

          <input name='price' type="radio" />
          <label htmlFor=""> 8000-12000</label><br />
          <input name='price' type="radio" />
          <label htmlFor=""> 12000-24000</label><br />
          <input name='price' type="radio" />
          <label htmlFor=""> 24000-48000</label><br />
        </div>
        <h3 className="text-black text-xs font-normal font-['Poppins'] py-2 pt-4">Custom price range</h3>
        <div className='flex space-x-3'>
          <input type="text" className="w-[50px] h-[21px] bg-white border border-green-700" name="" id="" />
          <input type="text" className="w-[50px] h-[21px] bg-white border border-green-700" name="" id="" />
          <input type="button" className="w-[50px] h-[21px] bg-white rounded-lg border border-green-700 text-black text-[11px] font-normal font-['Poppins']" value="Search" />
        </div>

      </section>
      <hr className='border border-green-700 ' />
      <section className="flex flex-col pl-2 py-6">
        <h2 className="pb-2 text-black text-base font-normal font-['Poppins']">Brands</h2>
        <div className='flex space-x-4 pb-4 '>

          <input type="text" className="w-[136px] h-[21px] bg-white rounded-[5px] border border-green-700" name="" placeholder='Search' id="" />
          <button className="w-[50px] h-[21px] bg-white rounded-lg border border-green-700 text-black text-[11px] font-normal font-['Poppins']">search</button>
        </div>
        <div className="flex flex-col space-y-2 text-black text-xs font-normal font-['Poppins'] ">

        <label htmlFor="">HP</label>
        <label htmlFor="">Dell</label>
        <label htmlFor="">Asus</label>
        <label htmlFor="">Lenovo</label>
        <label htmlFor="">Apple</label>
        <label htmlFor="">ZTE</label>

        </div>
      </section>
      <hr className='border border-green-700 ' />
    </div>
  )

}
