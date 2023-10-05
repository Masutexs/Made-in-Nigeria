import React from 'react'
import { Outlet, Link } from 'react-router-dom'


function Navbar() {
  return (
    <div>
      <nav className="w-[1330px] h-[53px] bg-black flex">

        {/* Logo section */}
        <img className="w-[78px] h-[83px]" src="logooo.png" />

        {/* search input fill section */}
        <div className="w-[423px] h-8 bg-white rounded-lg ">
          <input className="w-[423px] h-8 bg-white rounded-lg relative" type="text" name="" id="search" placeholder='search' />
          <svg xmlns="http://www.w3.org/2000/svg" className='absolute' width="16" height="15" viewBox="0 0 16 15" fill="none" >
            <path fill-rule="evenodd" clip-rule="evenodd" d="M1.65361 7.52432C1.17878 5.09713 2.48468 2.67254 4.77262 1.73338C7.06061 0.794216 9.6934 1.60207 11.0608 3.66289C12.4282 5.7237 12.1494 8.46346 10.3949 10.2066C8.64041 11.9497 5.89885 12.2107 3.84697 10.8299C2.70648 10.0625 1.91752 8.87338 1.65361 7.52432Z" stroke="#949494" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M12.8246 10.6212L15.41 12.3605" stroke="#949494" stroke-linecap="round" stroke-linejoin="round" />
          </svg>

        </div>
        {/* search button  */}
        <div className="w-[66px] h-8 px-2 py-[7px] bg-white rounded-[9px] justify-center items-center gap-2.5 inline-flex">
          <button className="text-stone-900 text-sm font-normal font-['Poppins']">Search</button>
        </div>

        {/* account */}
        <div className="w-[109px] h-[31px] px-2 py-[7px] bg-white rounded-[9px] justify-start items-center gap-1 inline-flex">
          <select className="w-[109px] h-[31px] px-2 py-[7px] bg-white rounded-[9px] justify-start items-center gap-1 inline-flex" name="" id="Account" placeholder='Account'></select>
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="17" viewBox="0 0 18 17" fill="none">
            <path d="M17.0071 8.46403C16.986 3.92946 13.1622 0.257021 8.4829 0.277471C3.80528 0.297914 0.0171663 4.00369 0.0382662 8.53819C0.0593603 13.0714 3.8818 16.743 8.55942 16.7225C13.2387 16.7021 17.0281 12.9973 17.0071 8.46403ZM3.3292 13.2175C2.14044 11.9891 1.40268 10.3453 1.39425 8.53226C1.37652 4.72248 4.55919 1.60884 8.48895 1.59167C12.4201 1.57449 15.6332 4.66023 15.6509 8.46996C15.6594 10.2833 14.9363 11.9338 13.758 13.1726C12.785 11.2778 10.766 10.0286 8.52818 10.0383C6.29314 10.0481 4.28628 11.3146 3.3292 13.2175ZM8.53437 11.3525C10.3779 11.3445 12.0178 12.457 12.6871 14.0957C11.5222 14.9122 10.0974 15.4016 8.55324 15.4084C7.00918 15.4151 5.58002 14.9379 4.40794 14.1312C5.06395 12.487 6.69319 11.3606 8.53437 11.3525Z" fill="#1E1E1E" />
            <path d="M11.4365 6.20778C11.4292 4.64559 10.111 3.3801 8.49737 3.38716C6.88543 3.3942 5.57998 4.67115 5.58725 6.23334C5.59453 7.79684 6.91181 9.06292 8.52375 9.05587C10.1373 9.04882 11.4438 7.77127 11.4365 6.20778ZM6.94323 6.22741C6.93933 5.38968 7.63934 4.70513 8.50342 4.70135C9.36885 4.69757 10.0765 5.37597 10.0804 6.2137C10.0843 7.05242 9.38293 7.7379 8.51756 7.74168C7.65349 7.74546 6.94714 7.06613 6.94323 6.22741Z" fill="#1E1E1E" />
          </svg>
        </div>

        {/* help */}

        <div>
          <select className="w-[90px] h-[31px] px-2 py-[7px] bg-white rounded-[9px] flex-col justify-start items-start gap-2.5 inline-flex" name="" id="Help" placeholder="Help"></select>
          <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 19 19" fill="none">
            <path d="M9.5 10.0312C9.5 7.90625 11.0938 8.4375 11.0938 6.84375C11.0938 6.14648 10.5625 5.25 9.5 5.25C8.4375 5.25 7.90625 5.78125 7.375 6.3125M9.5 13.2188V11.625M18 9.5C18 14.1944 14.1944 18 9.5 18C4.80558 18 1 14.1944 1 9.5C1 4.80558 4.80558 1 9.5 1C14.1944 1 18 4.80558 18 9.5Z" stroke="#1E1E1E" />
          </svg>
        </div>


        {/* cart */}
        <div>
          lin
        </div>

      </nav>
      <Link to={'/'}>Home</Link>
      <Link to={'/about'}>About</Link>
      <Link to={'/contact'}>Contact</Link>
      <Link to={'/computer'}>Computer and accessories</Link>

      <Outlet />
    </div>
  )
}

export default Navbar