import React from 'react'
import { useState } from 'react';
import "./sidebar.css"

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
          <input className="w-[14px] h-[14px] bg-white rounded-full border border-green-700" name='price' type="button" style={{}} />
          <label htmlFor=""> Under 2000</label><br />

          <input name='price' type="radio" />
          <label > 2000-4000</label><br />

          <input name='price' type="radio" />
          <label > 4000-8000</label><br />

          <input name='price' type="radio" />
          <label > 8000-12000</label><br />
          <input name='price' type="radio" />
          <label > 12000-24000</label><br />
          <input name='price' type="radio" />
          <label > 24000-48000</label><br />
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
export const ToggleSidebarr = () => {
  const [isOpen, setIsopen] = useState(false);

  const ToggleSidebar = () => {
    isOpen === true ? setIsopen(false) : setIsopen(true);
  }
  return (
    <>
      <div className=" ">
        <nav className="flex justify-center text-white bg-green-700 ">
          <div className="w-fit flex justify-center">

            <div className="btn mr-2 " onClick={ToggleSidebar} >
              <i className="fa fa-bars text-white"></i>
            </div>
            <div className="container-fluid p-1 space-x-12">
              <a className=" text-black font-semibold font-['Inter'] text-base  ">All Categories</a>
              <a className=" border h-[34px] px-3 py-2.5 bg-white rounded-[15px] justify-center items-center gap-2.5 inline-flex text-black font-semibold font-['Inter'] text-base  ">Computer and accessories</a>
              <a href="" className=" h-5 text-white text-base font-semibold font-['Inter']">Phones</a>
              <a href="" className=" h-5 text-white text-base font-semibold font-['Inter']">Electronics</a>
              <a href="" className=" h-5 text-white text-base font-semibold font-['Inter']">Home and Kitchen</a>
              <a href="" className=" h-5 text-white text-base font-semibold font-['Inter']">Clothes</a>
              <a href="" className=" h-5 text-white text-base font-semibold font-['Inter']">Cosmetics</a>
              <div className="form-inline ml-auto">
              </div>
            </div>
          </div>
        </nav>
        <div className={`sidebar ${isOpen == true ? 'active' : ''}`}>
          <div className="sd-header">
            <h4 className="mb-0 text-black font-bold">All Categories</h4>
            <div className="btn btn-primary" onClick={ToggleSidebar}><i className="fa fa-times"></i></div>
          </div>
          <div className="sd-body">

            {/* sidebar */}

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
                  <input className="w-[14px] h-[14px] bg-white rounded-full border border-green-700" name='price' type="button" style={{}} />
                  <label htmlFor=""> Under 2000</label><br />

                  <input name='price' type="radio" />
                  <label > 2000-4000</label><br />

                  <input name='price' type="radio" />
                  <label > 4000-8000</label><br />

                  <input name='price' type="radio" />
                  <label > 8000-12000</label><br />
                  <input name='price' type="radio" />
                  <label > 12000-24000</label><br />
                  <input name='price' type="radio" />
                  <label > 24000-48000</label><br />
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
          </div>
        </div>
        <div className={`sidebar-overlay ${isOpen == true ? 'active' : ''}`} onClick={ToggleSidebar}></div>
      </div>

    </>
  )
}
