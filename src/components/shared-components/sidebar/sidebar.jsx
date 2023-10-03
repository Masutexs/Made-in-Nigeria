import React from 'react'

export function Sidebar() {
  return (
    <div className='border text-black text-left w-[270px] h-[929px] bg-white rounded-[14px] shadow'> 
      <section className="pl-2 flex flex-col">
        <h2 className="font-bold ">Browse Categories</h2>
        <a href="">- Computers and accessories</a>
        <a href="">- Laptop</a>
        <a href="">- Gaming pc</a>
        <a href="">- Computer software</a>
        <a href="">- Desktop and Monitors</a>
        <a href="" className=''>- Projectors & Accessories</a>

      </section>
        <hr className='border border-green-700 ' />
      <section className="flex flex-col">
        <h2 className="font-bold">Price</h2>

        <div className=" ">
        <input name='price' type="radio" />
        <label htmlFor="">Under 2000</label><br />

        <input name='price' type="radio" />
        <label htmlFor="">2000-4000</label><br />

        <input name='price' type="radio" />
        <label htmlFor="">4000-8000</label><br />

        <input name='price' type="radio" />
        <label htmlFor="">8000-12000</label><br />
        <input name='price' type="radio" />
        <label htmlFor="">12000-24000</label><br />
        <input name='price' type="radio" />
        <label htmlFor="">24000-48000</label><br />
        </div>
        <hr className='border border-green-700 ' />

      </section>
      <section className="flex flex-col">
        <h2 className="font-bold">Brands</h2>
          
        <label htmlFor="">HP</label>
        <label htmlFor="">Dell</label>
        <label htmlFor="">Asus</label>
        <label htmlFor="">Lenovo</label>
        <label htmlFor="">Apple</label>
        <label htmlFor="">ZTE</label>
        <hr className='border border-green-700 ' />

      </section>
    </div>
  )

}
