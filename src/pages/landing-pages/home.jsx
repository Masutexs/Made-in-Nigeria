import React from 'react'
import Layout from '../../components/shared-components/layout/layout'
import { FaBeer } from 'react-icons/fa';
import { FaBuffer } from 'react-icons/fa';

function Home() {
    return (
            <Layout>
                <div className='text-center'>
                    Hello Made in Nigeria Showroom
                    <FaBeer />
                    <FaBuffer />
                </div>
            </Layout>
    )
}

export default Home