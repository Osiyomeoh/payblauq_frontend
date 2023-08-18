import React from 'react'
import { personPaying, asset1, asset2, asset3, asset4, group24, world, paykun1, paykun2, paykun3, flatRectangle, crypto, add_card, bolt, lan, payment_suite, signUp, logo, facebook, google_plus, linkedin, Twitter } from '../assets'


function ThirdSection() {
    return (
        <div className='space-y-0'>
            <div className='flex justify-evenly flex-1'>
                <div>
                    <p className='font-bold px-10 pt-10 pb-3'>
                        Introducing <span className='text-lg'>PAYBLAUQ</span>
                    </p>
                    <p className='px-10 pb-5 text-sm font-semibold'>
                        A comprehensive and fully integrated suite of financial and <br /> payments products designed to revolutionize your business <br />operations. Seamlessly manage your payments, reduce costs,<br /> and unlock new revenue streams with our advanced platform,<br /> tailored to both Web2 and Web3 environments.
                    </p>
                    <div className='lg:grid grid-cols-2 px-10 justify-center gap-4'>
                        <div className='bg-blue-600 rounded-lg box-border h-50 w-55'>
                            <div className='flex justify-start pl-5 pt-5 pb-2'>
                                <img src={asset1} width={24} height={5} className='pl-2' />
                                <p className='pl-3 text-sm font-bold text-white'>Payment Methods</p>
                            </div>
                            <div>
                                <p className='text-xs px-5 pt-2 pb-7 font-semibold text-white'>Condimentum pharetra purus <br></br>sociosqu dignissim suspendisse<br /> nec montes non iaculis magnis<br /> hac.</p>
                            </div>
                        </div>

                        <div className='bg-blue-900 rounded-lg box-border h-50 w-55'>
                            <div className='flex justify-start pl-10 pt-5 pb-2'>
                                <img src={asset4} width={24} height={5} className='pl-2' />
                                <p className='pl-3 text-sm font-bold text-white'>e-Wallet</p>
                            </div>
                            <div>
                                <p className='text-xs px-5 pt-2 pb-7 font-semibold text-white'>Condimentum pharetra purus <br></br>sociosqu dignissim suspendisse<br /> nec montes non iaculis magnis<br /> hac.</p>
                            </div>
                        </div>

                        <div className='bg-purple-900 rounded-lg box-border h-50 w-55'>
                            <div className='flex justify-start pl-5'>
                                <img src={asset3} width={24} height={5} className='pl-2 pt-4' />
                                <p className='pl-3 pt-4 text-sm font-bold text-white'>Payment Integrations</p>
                            </div>
                            <div>
                                <p className='text-xs px-5 pt-4 pb-7 font-semibold text-white'>Condimentum pharetra purus <br></br>sociosqu dignissim suspendisse<br /> nec montes non iaculis magnis<br /> hac.</p>
                            </div>
                        </div>

                        <div className='bg-blue-600 rounded-lg box-border h-50 w-55'>
                            <div className='flex justify-start pl-5'>
                                <img src={asset2} width={24} height={5} className='pl-2 pt-4' />
                                <p className='pl-3 pt-4 text-sm font-bold text-white'>Secure Transactions</p>
                            </div>
                            <div>
                                <p className='text-xs px-5 pt-4 pb-7 font-semibold text-white'>Condimentum pharetra purus <br></br>sociosqu dignissim suspendisse<br /> nec montes non iaculis magnis<br /> hac.</p>
                            </div>
                        </div>

                    </div>
                </div>
                <div>
                    <img src={personPaying} width={300} className='pt-10' />
                </div>

            </div>
            <div className="bg-[url('./assets/Group500.png')] bg-cover lg:grid grid-cols-2">
                <img src={group24} className='ml-20 pt-10 w-[650px] h-[550px]' />
                <div className='pt-20 pl-20'>
                    <p className='font-bold pl-2 py-1 ml-20'>OUR PAYMENT SOLUTIONS</p>
                    <img src={flatRectangle} className='w-[180px] mb-7 ml-20 pl-10' />
                    <div className="bg-[url('./assets/Rectangle102.png')] bg-cover w-[400px] h-[100px] flex my-5">
                        <img src={paykun2} className='w-[60px] h-[50px] mx-5 my-5' />
                        <div>
                            <p className='text-xs font-bold pl-5 mt-5'>Smooth Integration with ready plugins <br /> for various Web & App platforms</p>
                            <a href='#' className='text-blue-700 text-xs pl-5 hover:underline'>Learn More</a>
                        </div>
                    </div>

                    <div className="bg-[url('./assets/Rectangle102.png')] bg-cover w-[400px] h-[100px] flex my-5">
                        <img src={paykun3} className='w-[60px] h-[50px] mx-5 my-5' />
                        <div>
                            <p className='text-xs font-bold pl-5 mt-5'>Accept online payments without website <br/>via SMS, e-mail, Whatsapp, etc.</p>
                            <a href='#' className='text-blue-700 text-xs pl-5 hover:underline'>Learn More</a>
                        </div>
                    </div>

                    <div className="bg-[url('./assets/Rectangle102.png')] bg-cover w-[400px] h-[100px] flex my-5">
                        <img src={paykun1} className='w-[60px] h-[50px] mx-5 my-5' />
                        <div>
                            <p className='text-xs font-bold pl-5 mt-5'>Add a button to your website or blog <br/> easily with no technical efforts</p>
                            <a href='#' className='text-blue-700 text-xs pl-5 hover:underline'>Learn More</a>
                        </div>
                    </div>
                    
                </div>

                <div className='mt-60 pt-5 ml-20'>
                    <h1 className='font-bold lg:text-2xl text-white pb-5'>Receive payments directly</h1>
                    <p className='text-white font-semibold pb-2'>
                        Experience the power of non-custodial, blockchain- <br /> powered payments with Payblauq. <br /> <br />
                        No intermediaries, no restrictions, no lock-ups. Just seamless <br />
                        transactions directly into your wallet - anytime,<br />
                        anywhere. <br /><br />
                        You hold your own funds at all times. <br />
                        No deposit. No withdraw. No fraud. No Chargebacks.<br /><br />
                        Just immediate cash-flow.
                    </p>
                </div>

                <img src={world} className='w-[800px] mt-20' />
            </div>

            <div className='flex flex-1 justify-between'>
                <div className='ml-20 pl-10'>
                    <h1 className='font-bold text-2xl mt-10'>Buy cryptocurrency <br /> instantly. Fast, easy<br /> and secure.</h1>
                    <p className='text-base font-semibold mt-5 mb-5'>Sign up to buy crypto at great rates. Buy,<br />
                        store, swap and spend your favorite crypto <br />
                        all in one secure app. Buy crypto with your <br />
                        credit card, debit card or Apple Pay. <br /><br />
                        No hidden fees.</p>
                    <button className='bg-blue-500 hover:bg-blue-700 text-white text-sm  w-[200px] h-[40px] font-bold px-4 rounded-lg'>Buy Crypto</button>        
                </div>

                <img src={crypto} className='w-[720px] h-[400px]'/>
            </div>

            <div className="bg-[url('./assets/Gradient.png')] bg-cover flex my-5">
                <div className='text-white ml-5 pl-10 mt-10 pt-5'>
                    <p className='text-lg font-bold pb-2'>Seamlessly Connecting Web3 API for <br />
                        Enhanced User Experience</p>
                    
                    <p className='font-semibold text-sm pb-5'>At our payment gateway, we go beyond conventional solutions, <br />
                        embracing the dynamic world of Web3 to revolutionize your <br />
                        payment experiences. With seamless integration of Web3 API, <br />
                        users can now enjoy enhanced functionalities and interactions<br />
                        that were previously unimaginable.</p>
                    
                    <p className='text-lg font-bold pb-5'>Key Features of Our Web3-Powered Payment<br />
                        Integration:</p>
                    
                    <div className='flex'>
                        <img src={add_card} className='pr-3' />
                        <p className='font-bold text-sm'>Integrated Payment Solutions</p>
                    </div>

                    <p className='text-xs pl-9 pb-5'>
                        Enable seamless payment processing <br></br>
                        directly on your website or within your  <br></br>
                        application.
                    </p>

                    <div className='flex'>
                        <img src={bolt} className='pr-3' />
                        <p className='font-bold text-sm'>Propel Your Development</p>
                    </div>

                    <p className='text-xs pl-9 pb-5'>
                        Initiate payment support instantly across <br></br>
                        four different blockchains, numerous wallets,<br></br>
                        and a vast array of tokens.
                    </p>

                    <div className='flex'>
                        <img src={lan} className='pr-3' />
                        <p className='font-bold text-sm'>Robust Software Development Kit {'(SDK)'}</p>
                    </div>

                    <p className='text-xs pl-9 pb-5'>
                        Effortlessly integrate the Payblauq Widgets SDK and <br></br>
                        connect it to your backend system.
                    </p>

                    <button className='bg-blue-500 hover:bg-blue-700 text-white text-sm ml-10  w-[150px] h-[40px] font-bold px-4 rounded-lg'>Integrate</button>        

                </div>

                <img src={payment_suite} className='w-[800px]' />
            </div>

            <div className="bg-[url('./assets/Rectangle194.png')] bg-cover h-[200px] flex justify-around">
                <div className='text-white'>
                    <p className='font-bold text-xl ml-20 mt-10 pb-2'>Sign Up and Get Started</p>
                    <p className='text-sm ml-10'>Buy, Sell or Accept Cryptocurrency with Payblauq</p>
                    <br/>
                    <input type="text" id="large-input" class="block w-full ml-5 p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>

                </div>
                <img src={signUp} className='w-[260px] h-[200px] mr-10 overflow-visible'/>
                
            </div>

            <div className="bg-[url('./assets/Rectangle122.png')] bg-cover">
                <img src={logo} className='ml-10 pt-5' />
                <div className='flex'>
                    <div className='ml-10 mt-20'>
                        <p className='text-white text-sm text-opacity-25 py-2'>SIGN UP FOR NEWSLETTER</p>
                        <input placeholder='Email Address' className='bg-blue-400 bg-opacity-0 border-solid border-white py-4'></input> <br />
                        <button className='bg-red-500 hover:bg-blue-700 text-white text-sm ml-5 mt-2 w-[150px] h-[40px]'>Subscribe</button>
                        <div className='flex mt-3 ml-10 pl-3 mb-20'>
                            <a href='#'><img src={facebook} className='w-[20px] h-[17px] pr-2' /></a>
                            <a href='#'><img src={Twitter} className='w-[25px] h-[15px] pr-2' /></a>
                            <a href='#'><img src={linkedin} className='w-[25px] h-[15px] pr-2' /></a>
                            <a href='#'><img src={google_plus} className='w-[25px] h-[15px] pr-2' /></a>
                        </div>
                    </div>
                    <div className='text-white ml-20'>
                        <h1 className='text-sm font-bold py-1'>Developer</h1>
                        <ul>
                            <li className='text-xs py-1'><a href="#">Billing</a></li>
                            <li className='text-xs py-1'><a href="#">Documentation</a></li>
                            <li className='text-xs py-1'><a href="#">Integration</a></li>
                            <li className='text-xs py-1'><a href="#">Supported Currencies</a></li>
                            <li className='text-xs py-1'><a href="#">Insight</a></li>
                            <li className='text-xs py-1'><a href="#">Status</a></li>
                            <li className='text-xs py-1'><a href="#">Open Source</a></li>
                        </ul>
                    </div>

                    <div className='text-white ml-20 pl-5'>
                        <h1 className='text-sm font-bold py-1'>For Business</h1>
                        <ul>
                            <li className='text-xs py-1'><a href="#">Online Crypto Payment</a></li>
                            <li className='text-xs py-1'><a href="#">Small Billing</a></li>
                            <li className='text-xs py-1'><a href="#">Crypto Payment</a></li>
                            <li className='text-xs py-1'><a href="#">Exchange Rates</a></li>
                            <li className='text-xs py-1'><a href="#">Business FAQ</a></li>
                            <li className='text-xs py-1'><a href="#">Pricing</a></li>
                            <li className='text-xs py-1'><a href="#">Resources</a></li>

                        </ul>
                    </div>

                    <div className='text-white ml-20 pl-5'>
                        <h1 className='text-sm font-bold py-1'>Individuals</h1>
                        <ul>
                            <li className='text-xs py-1'><a href="#">Crypto Debit Card</a></li>
                            <li className='text-xs py-1'><a href="#">Crypto Wallet</a></li>
                            <li className='text-xs py-1'><a href="#">Browser Extension</a></li>
                            <li className='text-xs py-1'><a href="#">Buy Crypto</a></li>
                            <li className='text-xs py-1'><a href="#">Support</a></li>
                            <li className='text-xs py-1'><a href="#">Help</a></li>

                        </ul>
                    </div>

                    <div className='text-white ml-20 pl-10'>
                        <h1 className='text-sm font-bold py-1'>Company</h1>
                        <ul>
                            <li className='text-xs py-1'><a href="#">Careers</a></li>
                            <li className='text-xs py-1'><a href="#">Press</a></li>
                            <li className='text-xs py-1'><a href="#">Stats</a></li>
                            <li className='text-xs py-1'><a href="#">Legal</a></li>
                            <li className='text-xs py-1'><a href="#">Privacy</a></li>
                            <li className='text-xs py-1'><a href="#">Complaints</a></li>
                            <li className='text-xs py-1'><a href="#">Managing Cookies</a></li>

                        </ul>
                    </div>
                </div>
                
            </div>

            
      </div>
      
  )
}

export default ThirdSection