import React from 'react'
import '../components/style/Range.css'
import { Link } from 'react-router-dom'

function Range({ Text, word, link }) {
    return (
        <div className='flex items-center justify-between'>
            <div>

                <div className='para1'>
                    <p>{Text}</p>
                </div>

                <div className='range'>
                    <div className='range1'></div>
                    <div className='range2'></div>
                </div>
            </div>

            <div className='para2 flex gap-2'>
                <Link to={link}>
                <span>{ word}</span>
                </Link>
                <svg xmlns="http://www.w3.org/2000/svg" width="9" height="18" viewBox="0 0 9 18" fill="none">
                    <path d="M0.095106 1.2817L0.9114 0.200102L8.30958 8.79033L0.844007 17.322L0.0362523 16.2341L6.55569 8.78342L0.095106 1.2817Z" fill="#018D2D" />
                </svg>
            </div>

        </div>
    )
}

export default Range