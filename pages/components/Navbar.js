import Link from 'next/link';
import React from 'react';

export default function Navbar() {
    return (
        <div>
            <nav className="fixed border-b-2 bg-white top-0 left-0 px-20 w-full md:px-20 lg:px-36 lg:mx-0 shadow z-10">
                <div className='flex justify-between items-center font-Nunito'>
                    {/* Brand */}
                    <Link href="/">
                        <img src='/logo-abc.png' className='-ml-8 mt-2' />
                    </Link>
                    <ul className='hidden md:flex md:ml-12 md:text-xs lg:flex lg:ml-12 lg:text-sm font-bold items-center cursor-pointer'>
                        <Link href="/tentang">
                            <li className='py-4 px-6'>Tentang Kami</li>
                        </Link>
                        <Link href="/solusi">
                            <li className='py-4 px-6'>Solusi Kami</li>
                        </Link>
                        <svg className='-ml-3' width="15" height="7" viewBox="0 0 15 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8.56559 8.57101C8.64146 8.4954 8.70496 8.41226 8.76065 8.32563L14.5746 2.51165C15.1415 1.94422 15.1421 1.02433 14.5746 0.456625C14.0072 -0.110271 13.0876 -0.110809 12.5196 0.456625L7.51305 5.46371L2.47987 0.431334C1.91243 -0.135831 0.992809 -0.1361 0.425106 0.431334C0.141793 0.715454 -0.000536587 1.08702 1.52009e-06 1.45858C-0.000536587 1.83041 0.141793 2.20224 0.425644 2.48529L6.26491 8.32536C6.32061 8.41226 6.38464 8.49513 6.46105 8.57101C6.75109 8.86105 7.13261 9.00068 7.51305 8.99396C7.89296 9.00095 8.27555 8.86105 8.56559 8.57101Z" fill="#2C2C2C" />
                        </svg>
                        <Link href="/carakerja">
                            <li className='py-4 px-6'>Cara Kerja</li>
                        </Link>
                        <li className='py-4 px-6'>Karya Kami</li>
                        <Link href="/hubungi">
                            <button className="border border-main-color md:text-sxs lg:text-sm font-bold text-main-color hover:text-white hover:bg-main-color rounded-lg p-2 ml-4 mb-2 m-1">Hubungi Kami</button>
                        </Link>
                    </ul>

                    {/* Mobile menu */}
                    <button className='block md:hidden -mr-7 rounded-lg focus:outline-none hover:bg-gray-200 group'>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                        <div className='absolute mt-5 -right-full opacity-0 w-full bg-white border transform group-focus:right-0 group-focus:opacity-100 transition-all duration-300'>
                            <ul className='flex flex-col items-center w-full text-lg font-bold pt-10 cursor-pointer'>
                                <Link href="/tentang">
                                    <li className='py-4 px-6 w-full'>Tentang Kami</li>
                                </Link>
                                <Link href="/solusi">
                                    <img src='nav-solusi.svg' className='py-4 mx-auto'/>
                                </Link>
                                <Link href="/carakerja">
                                    <li className='py-4 px-6 w-full'>Cara Kerja</li>
                                </Link>
                                <li className='py-4 px-6 w-full'>Karya Kami</li>
                                <Link href="/hubungi">
                                    <button className="w-5/6 border font-bold rounded-lg p-4 bg-main-color text-white hover:bg-main-hover">Hubungi Kami</button>
                                </Link>
                            </ul>
                        </div>
                    </button>
                </div>
            </nav>
        </div>
    )
}
