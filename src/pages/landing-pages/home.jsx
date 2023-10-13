import React from 'react';
import Layout from '../../components/shared/layout/layout';
// import { FaBeer } from 'react-icons/fa';
// import { FaBuffer } from 'react-icons/fa';
import ItemsComponent from '../../components/shared/Items/itemsComponent';
import Computer from './computer';
import { Sidebar } from '../../components/shared/sidebar/sidebar';


function Home() {
  return (
    <Layout>
      {/* <ItemsComponent /> */}
      {/* <Computer /> */}
      <Sidebar />
    </Layout>
  );
}

export default Home;
