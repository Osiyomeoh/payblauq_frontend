import React from 'react'
import person_paying from '../person-paying.png'
import asset192 from '../Asset-192.png'
import asset193 from '../Asset-193.png'
import asset194 from '../Asset-194.png'
import asset195 from '../Asset-195.png'
import group24 from '../Group 24.png'
import rectangle124 from '../Rectangle 124.png'

function ThirdSection() {
    return (
        <div>
            <div className='lg:flex justify-center'>
                <div>
                    <p className='font-bold px-10 pt-10 pb-3'>
                        Introducing <span className='text-lg'>PAYBLAUQ</span>
                    </p>
                    <p className='px-10 pb-5 text-sm font-semibold'>
                        A comprehensive and fully integrated suite of financial and <br /> payments products designed to revolutionize your business <br />operations. Seamlessly manage your payments, reduce costs,<br /> and unlock new revenue streams with our advanced platform,<br /> tailored to both Web2 and Web3 environments.
                    </p>
                    <div className='grid grid-cols-2 px-10 justify-center gap-4'>
                        <div className='bg-blue-600 rounded-lg box-border h-50 w-55'>
                            <div className='flex justify-start pl-5 pt-5 pb-2'>
                                <img src={asset192} width={24} height={5} className='pl-2' />
                                <p className='pl-3 text-sm font-bold text-white'>Payment Methods</p>
                            </div>
                            <div>
                                <p className='text-xs px-5 pt-2 pb-7 font-semibold text-white'>Condimentum pharetra purus <br></br>sociosqu dignissim suspendisse<br /> nec montes non iaculis magnis<br /> hac.</p>
                            </div>
                        </div>

                        <div className='bg-blue-900 rounded-lg box-border h-50 w-55'>
                            <div className='flex justify-start pl-10 pt-5 pb-2'>
                                <img src={asset195} width={24} height={5} className='pl-2' />
                                <p className='pl-3 text-sm font-bold text-white'>e-Wallet</p>
                            </div>
                            <div>
                                <p className='text-xs px-5 pt-2 pb-7 font-semibold text-white'>Condimentum pharetra purus <br></br>sociosqu dignissim suspendisse<br /> nec montes non iaculis magnis<br /> hac.</p>
                            </div>
                        </div>

                        <div className='bg-purple-900 rounded-lg box-border h-50 w-55'>
                            <div className='flex justify-start'>
                                <img src={asset194} width={35} height={5} className='pl-4 pt-4' />
                                <p className='pl-3 pt-4 text-sm font-bold text-white'>Payment Integration</p>
                            </div>
                            <div>
                                <p className='text-xs px-5 pt-4 pb-7 font-semibold text-white'>Condimentum pharetra purus <br></br>sociosqu dignissim suspendisse<br /> nec montes non iaculis magnis<br /> hac.</p>
                            </div>
                        </div>

                        <div className='bg-blue-400 rounded-lg box-border h-50 w-55'>
                            <div className='flex justify-start pl-5'>
                                <img src={asset193} width={24} height={5} className='pl-2 pt-4' />
                                <p className='pl-3 pt-4 text-sm font-bold text-white'>Secure Transactions</p>
                            </div>
                            <div>
                                <p className='text-xs px-5 pt-4 pb-7 font-semibold text-white'>Condimentum pharetra purus <br></br>sociosqu dignissim suspendisse<br /> nec montes non iaculis magnis<br /> hac.</p>
                            </div>
                        </div>

                    </div>
                </div>
                <div>
                    <img src={person_paying} width={300} className='pt-10' />
                </div>

            </div>
            <div className="bg-[url('./assets/Group 500.png')] grid grid-cols-2 justify-center">
                <img src={group24} className='pt-10 w-[650px] h-[550px] ml-10' />
                <div className='pt-20'>
                    <div>
                        <p className='font-bold'>OUR PAYMENT SOLUTIONS</p>
                        <img src={rectangle124} />
                    </div>
                    <div>
                        <img />
                        <p className='bg-blue-100 rounded-lg box-border h-50 w-55'>Smooth Integration with ready plugins <br/> for various Web & App platforms</p>
                    </div>
                </div>
                <img src={group24} width={500} className='pt-10' />

                

            </div>

            
      </div>
      
  )
}

export default ThirdSection