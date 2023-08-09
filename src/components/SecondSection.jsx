import React from 'react'
import bigCommerce from '../Bigcommerce.png'
import magento from '../Magento.png'
import opencart from '../Opencart.png'
import shopify from '../Shopify.png'
import woocommerce from '../woocommerce.png'
import wordpress from '../Wordpress.png'
import group18 from '../Group 18.png'
import group19 from '../Group 19.png'
import group20 from '../Group 20.png'
import group21 from '../Group 21.png'


function SecondSection() {
  return (
      <div>
          <div className='w-21 font-bold text-center text-base/4 pt-5 pb-10'>
              Industry leading platforms <br/> process payments with <a href='index.html' className='text-blue-700 text-lg hover:text-blue-400'>Payblauq</a>
          </div>
          <div class="grid grid-cols-3 gap-10 justify-items-center pb-10">
              <div><a href='#'><img src={wordpress} width={175} /></a></div>
              <div><a href='#'><img src={shopify} width={175} /></a></div>
              <div><a href='#'><img src={woocommerce} width={175} /></a></div>
              <div><a href='#'><img src={magento} width={175} /></a></div>
              <div><a href='#'><img src={bigCommerce} width={175} /></a></div>
              <div><a href='#'><img src={opencart} width={175} /></a></div>
          </div>
          <div className='bg-blue-100 pb-20'>
              <div className='text-center font-bold text-lg pt-10 pb-2'>
                  Payment processing services that empower your business today and tomorrow
              </div>
              <div className='text-center text-sm font-semibold pb-20'>
                  Your merchants can start integrated payment processing—and you <br /> can start monetizing payments—quickly and easily with Payblauq.
              </div>
              <div className='grid grid-cols-4 justify-center pl-10'>
                  <div>
                      <img src={group18} width={70} className='pb-5'/>
                      <p className='text-base font-bold pb-2'>Tailored solutions for your needs</p>
                      <p className='text-xs font-semibold'> We build lifelong relationships that scale <br/>over time and support you throughout our <br/>partnership</p>
                  </div>
                  <div>
                      <img src={group19} width={70} className='pb-5'/>
                      <p className='text-base font-bold pb-2'>Revenue expansion</p>
                      <p className='text-xs font-semibold'> Maximize revenue opportunities for your <br />business by monetizing payments the right <br />way.</p>
                  </div>
                  <div>
                      <img src={group20} width={70} className='pb-5' />
                      <p className='text-base font-bold pb-2'>End-to-end financial services</p>
                      <p className='text-xs font-semibold'> Access a complete suite of payment solutions <br />with the scale of a bank and the efficiency of a <br />SaaS provider.</p>
                  </div>
                  <div className='text-align-center'>
                      <img src={group21} width={70} className='pb-5' />
                      <p className='text-base font-bold pb-2'>Innovation and agility</p>
                      <p className='text-xs font-semibold'> Make the most of our best-in- class integrated <br/>payment solutions and easy-to-integrate APIs.</p>
                  </div>
              </div>
          </div>
          
    </div>
  )
}

export default SecondSection