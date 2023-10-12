import React from 'react'
import Layout from '../../components/shared/layout/layout'
// import { FaBeer } from 'react-icons/fa';
// import { FaBuffer } from 'react-icons/fa';
import ItemsComponent from '../../components/shared/Items/itemsComponent';
import Computer from './computer';
import { Sidebar, ToggleSidebarr } from '../../components/shared/sidebar/sidebar';

function Home() {
    return (
            <Layout>
                {/* <ItemsComponent/> */}
                {/* <Computer/> */}
                <ToggleSidebarr/>
                {/* <Sidebar/> */}
            </Layout>
    )
}

export default Home