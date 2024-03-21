import React from 'react';

const Footer =()=>{
    return (
        

        <footer className="bg-white rounded-lg shadow dark:bg-gray-900 m-4">
            <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
                <div className="sm:flex sm:items-center sm:justify-between">
                    <a href="#" className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
                        <img src="/assets/icons/LOGO Rs.png" className="h-8" alt="PriceTracker Logo" />
                        <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">PriceTracker</span>
                    </a>
                    <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
                        <li>
                            <a href="/about" className="hover:text-yellow-400 me-4 md:me-6">About</a>
                        </li>
                        <li>
                            <a href="/privacyPolicy" className="hover:text-yellow-400 me-4 md:me-6">Privacy Policies</a>
                        </li>
                        <li>
                            <a href="/components/Category/phone" className="hover:text-yellow-400 me-4 md:me-6">Phones</a>
                        </li>
                        <li>
                            <a href="/components/Category/laptop" className="hover:text-yellow-400 me-4 md:me-6">Laptops</a>
                        </li>
                       
                        
                    </ul>
                </div>
                <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
                <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a href="#" className="hover:text-yellow-400">PriceTraker™</a>. All Rights Reserved.</span>
            </div>
        </footer>


    );    
}
export default Footer;
