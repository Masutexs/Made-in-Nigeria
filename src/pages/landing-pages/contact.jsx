import React from 'react'
import Layout from '../../components/shared/layout/layout'
import { useParams } from "react-router-dom";
import { items } from '../../components/shared/Items/itemData';
import Comptest from '../../assets/comp3.png'

function Contact() {
  const { id } = useParams();

  const dataItems = items.find(item => item.id === parseInt(id)) || {};


  return (
    <Layout>
      <h1>Product Description</h1>
      <div className='text-black'>
        <h4>{dataItems.productName}</h4>
        <p> {dataItems.slashPrice}</p>

        <section className='overview-top-wrap md:flex justify-center
             '>

          <main className="left md:w-1/2 h-96 w-full ">
            <figure className='overview-img-big-wrap m-auto w-[180px] h-[210px] overflow-hidden border '>
              <img className="overview-img-big m-auto w-auto " src={"../src/assets/" + dataItems.image} />
            </figure>

            <div className='overview-img-small-wrap gap-2 flex w-fit m-auto'>

              {/* product image views */}

              <figure className='overview-img-small overflow-hidden flex h-[fit-content] p-4 w-[90px] shadow-lg ' >
                <img src={"../src/assets/" + dataItems.image} alt="" className='overview-smaller-first w-[80px] ' />
              </figure>

              <figure className='overview-img-small flex h-[fit-content] w-[90px] p-4 shadow-md  '>
                <img src={"../src/assets/" + dataItems.image} alt="" className='overview-smaller-first w-[80px] ' />
              </figure>
            </div>
          </main>
          <aside className='overview-aside py-10 md:w-1/2 h-96 w-full   p-8 '>
            <h4>
              {dataItems.productName}
            </h4>
            <br />
            <h5>Product code: {dataItems.id}</h5>
            <hr className='overview-hr h-1 bg-green-600 my-2' />
            <p className=''>NGN {dataItems.price}
            </p>
            <hr className='overview-hr h-1 bg-green-600 my-2' />
            <div>
              <label htmlFor="button">Quantity:</label>
              <button className='overview-qty-add px-4 ml-2 border border-black'>+</button>
              <span className='overview-qty-count px-2 pt-[2px] pb-[3px] border border-black '>1</span>
              <button className='overview-qty-subtract px-4  border border-black'>-</button>
              <hr className='overview-hr h-1 bg-green-600 my-2' />
              <button className='overview-buy-btn bg-green-600 text-white px-6 rounded py-1 font-bold'>
                Buy Now
              </button>
              <hr className='overview-hr h-1 bg-green-600 my-2' />
            </div>
          </aside>
        </section>
      </div>





    </Layout>
  )
}

export default Contact