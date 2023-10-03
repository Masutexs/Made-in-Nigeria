import React from 'react'
import Layout from '../../components/shared-components/layout/layout'
// import { FaBeer } from 'react-icons/fa';
// import { FaBuffer } from 'react-icons/fa';
import ItemsComponent from '../../components/shared-components/Items/itemsComponent';

function Home() {
    return (
            <Layout>
                <ItemsComponent/>
                
            </Layout>
    )
}

export default Home