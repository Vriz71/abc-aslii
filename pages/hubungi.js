import React from 'react'
import Navbar from './components/Navbar'

export default function Hubungi() {
    return (
        <div>
            <title>Sudah siap?</title>
            <Navbar />

            <section className='container columns-1 mx-10 md:grid md:grid-cols-2 md:mx-16 lg:grid lg:grid-cols-2 lg:px-28 lg:mx-0 py-24 md:py-32'>
                {/* IMG Mobile */}
                <img src='/hubungi/Hubungi Kami.svg' className='-ml-6 pb-16 md:hidden'/>
                <div className='lg:w-96'>
                    <p className='font-Nunito font-normal text-sxs text-main-color'>CONTACT US</p>
                    <p className='font-Nunito font-normal text-3xl py-2'>Apakah <span className='font-extra-bold'>kamu siap?</span></p>
                    <p className='font-Nunito text-md'>Kami selalu siap untuk menjawab segala pertanyaan dan kebutuhan kamu</p>

                    <form className='pt-10 font-Nunito'>
                        <input className='p-4 lg:p-3 lg:w-96 w-80 text-sm rounded-lg border border-trans' placeholder='Beritahu kami nama kamu ...' />
                        <input className='p-4 lg:p-3 lg:w-96 w-80 text-sm rounded-lg border border-trans mt-3' placeholder='Beritahu kami nama organisasi kamu ...' />
                        <input className='p-4 lg:p-3 lg:w-96 w-80 text-sm rounded-lg border border-trans mt-3' placeholder='Beritahu kami peranmu dalam organisasi ...' />
                        <input className='p-4 lg:p-3 lg:w-96 w-80 text-sm rounded-lg border border-trans mt-3' placeholder='Beritahu kami email kamu ...' />
                        <select className='p-4 lg:p-3 lg:w-96 w-80 text-md rounded-lg border border-trans mt-3 font-extra-bold'>
                            <option>Web Development</option>
                            <option>App Development</option>
                            <option>UI/UX Design</option>
                            <option>Machine Learning</option>
                            <option>Workflow Automation</option>
                            <option>Branding & Digital Ads</option>
                        </select>

                        <button className='p-4 lg:p-3 lg:w-96 w-80 text-md text-white rounded-lg bg-main-color mt-12 font-extra-bold'><span>Aku siap! Kirimkan Pesan!</span></button>
                    </form>
                </div>
                {/* IMG MD and LG */}
                <img src='/hubungi/Hubungi Kami.svg' className='hidden md:block lg:ml-10 lg:mt-0 mt-10'/>
            </section>
        </div>
    )
}
