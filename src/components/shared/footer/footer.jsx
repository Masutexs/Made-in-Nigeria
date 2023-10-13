
import React from 'react'
import Gmail from '../../../assets/footer_assets/Gmail.svg'
import Phone from '../../../assets/footer_assets/phone.svg'
import Augusta from '../../../assets/footer_assets/WhatsApp.svg'



function Footer() {
  return (
    <div className='text-black shadow py-8 text-[20px]'>
      <footer>

        <section className='contact-icons-wrapper bg-green-700 px-[110px] py-3 flex justify-between items-center '>

          <div className='contact-container flex gap-2'>
            <img src={Gmail} className='gmail-icon w-10  ' alt="" />
            <div className='gmail-icon text-sm md:block hidden py-3'>
              <h5 className='icon-text text-left text-sm '>EMAIL SUPPORT <br />
                help@madeinNigeria
                test</h5>
            </div>
          </div>

          <div className='contact-container flex gap-2'>
            <img src={Phone} className='gmail-icon w-10  ' alt="" />
            <div className='gmail-icon text-sm md:block hidden py-3'>
              <h5 className='icon-text text-left text-sm '>PHONE SUPPORT <br />
                0708 063 5700, </h5>
            </div>
          </div>

          <div className='contact-container flex gap-2'>
            <img src={Augusta} className='gmail-icon w-10  ' alt="" />
            <div className='gmail-icon text-sm md:block hidden py-3'>
              <h5 className='icon-text text-left text-sm '>WHATSAPP <br />
                0907 0038 400, 0809 460 5555</h5>
            </div>
          </div>

          <div className='contact-input w-60 rounded-lg h-12 bg-white flex overflow-hidden ' >
            <input type="text" placeholder='Email address' className='contact-inp w-[137px] pl-4 placeholder:text-lg  ' />
            <button className='contact-inp-btn w-28 h-12 text-white bg-black rounded-lg'>Send</button>
          </div>
        </section>
        <section className='footer-bottom h-72 w-full bg-black md:flex '>
          <div className='about-info border border-white h-full md:w-1/2 flex
          text-white gap-8 pl-10 pt-10 text-lg'>
            <div className='text-left'>
              <h5>
                MORE INFO <br />
                Track My Order
                <br />
                Privacy Policy
                <br />
                Authentic Items Policy
              </h5>
            </div>
            <div className='text-left'>
              PAYMENT<br />
              Mastercard<br />
              Visa<br />
            </div>
            <div className='text-left'>
              ABOUT Made in Nigeria<br />
              Contact Us<br />
              About Us<br />
              Forum<br />
              Terms & Conditions
            </div>
          </div>
          <div></div>
        </section>
      </footer>
    </div>

  )
}

export default Footer