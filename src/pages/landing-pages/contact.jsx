import React from 'react'
import Layout from '../../components/shared/layout/layout'
import { useParams } from "react-router-dom";
import { items } from '../../components/shared/Items/itemData';

function Contact() {
  const { id } = useParams();

  const dataItems = items.find(item => item.id === parseInt(id)) || {};


  return (
    <Layout>
      <div className='text-black'>
        <h1>Product Description</h1>
      <h4>{dataItems.productName}</h4>
      <p> {dataItems.price}</p>
      <p> {dataItems.slashPrice}</p>

      </div>
       
    </Layout>
  )
}

export default Contact