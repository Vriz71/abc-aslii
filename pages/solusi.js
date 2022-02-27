import React from 'react'
import Link from 'next/link'
import Navbar from './components/Navbar'

export default function Solusi() {
    return (
        <div>
            <title>Solusi kami</title>
            <Navbar />

            {/* Nav second in solution */}
            <ul className='text-sm font-Nunito grid grid-cols-3 mx-10 gap-4 py-20 md:flex md:justify-between md:py-20 md:mx-3 lg:mx-32'>
                <div>
                    <li className='text-main-color font-extra-bold'>Web Development</li>
                    <div className='w-full mt-1 h-1 bg-main-color rounded-lg'></div>
                </div>
                <li className='font-bold text-trans2'>App Development</li>
                <li className='font-bold text-trans2'>UI/UX Design</li>
                <li className='font-bold text-trans2'>Machine Learning</li>
                <li className='font-bold text-trans2'>Flow Automation</li>
                <li className='font-bold text-trans2'>Branding & Digital Ads</li>
            </ul>

            {/* Section 1 */}
            <section className='py-10'>
                {/* Content */}
                <div className='columns-1 mx-12 md:grid md:grid-cols-2 md:px-12 md:mx-auto md:py-20 lg:px-28 lg:w-full'>
                    <img src='/solusi/Web-img.svg' className='mt-10 md:w-80 lg:-mt-16' />
                    <div className='w-full py-10 lg:py-0 lg:-ml-24'>
                        <p className='font-Nunito font-normal text-sxs text-main-color'>WEB DEVELOPMENT</p>
                        <p className='font-Nunito font-extra-bold text-3xl md:text-4xl leading-tight py-3 lg:py-1'>Kamu siap untuk punya website?</p>
                        <p className='font-Nunito font-normal lg:text-md lg:py-2'>Tuangkan segala ide yang kamu simpan selama ini untuk website kamu,
                            saatnya kita buat itu semua jadi kenyataan </p>
                        <button className='bg-main-color hover:bg-main-hover font-Nunito font-bold text-sm text-white rounded-lg p-3 mt-12'><span className='m-2'>Saya siap!</span></button>
                    </div>
                </div>
            </section>

            {/* Section 2 */}
            <section className='bg-background py-10 md:py-12'>
                {/* Content */}
                <div className='columns-1 mx-12 md:grid md:grid-cols-2 md:px-12 md:mx-auto md:py-20 lg:px-32 lg:w-full'>
                    {/* IMG Mobile */}
                    <img src='/solusi/App-img.svg' className='md:hidden mt-10' />
                    <div className='w-full py-10 lg:py-0'>
                        <p className='font-Nunito font-normal text-sxs text-main-color'>APP DEVELOPMENT</p>
                        <p className='font-Nunito font-extra-bold text-3xl md:text-4xl leading-tight py-3 lg:py-1'>“Bangun aplikasi itu susah”,
                            kata mereka, bukan kami</p>
                        <p className='font-Nunito font-normal lg:text-md lg:py-2'>Saat ini (hampir) semua orang pasti memiliki ponsel pintar dan akan selalu
                            membawanya kemanapun mereka berada. Jadi, tunggu apa lagi?</p>
                        <button className='bg-main-color hover:bg-main-hover font-Nunito font-bold text-sm text-white rounded-lg p-3 mt-12'><span className='m-2'>Ayo bangun!</span></button>
                    </div>
                    <img src='/solusi/App-img.svg' className='hidden md:block mt-10 md:w-80 md:mx-auto lg:ml-28 lg:-mt-16' />
                </div>
            </section>

            {/* Section 3 */}
            <section className='py-10 md:py-12'>
                {/* Content */}
                <div className='columns-1 mx-12 md:grid md:grid-cols-2 md:px-12 md:mx-auto md:py-20 lg:px-28 lg:w-full'>
                    <img src='/solusi/Design-img.svg' className='mt-10 md:w-80 lg:-mt-7' />
                    <div className='w-full py-10 lg:py-0 lg:-ml-24'>
                        <p className='font-Nunito font-normal text-sxs text-main-color'>UI/UX DESIGN</p>
                        <p className='font-Nunito font-extra-bold text-3xl md:text-4xl leading-tight py-3 lg:py-1'>Website / aplikasi dengan
                            tampilan “lama”, masih?</p>
                        <p className='font-Nunito font-normal lg:text-md lg:py-2'>Apa yang dilihat pertama kali oleh pengunjung ketika mereka membuka
                            suatu website/aplikasi? Jelas penampilannya dan kemudian pengunaannya</p>
                        <button className='bg-main-color hover:bg-main-hover font-Nunito font-bold text-sm text-white rounded-lg p-3 mt-12'><span className='m-2'>Mau kece dong!</span></button>
                    </div>
                </div>
            </section>

            {/* Section 4 */}
            <section className='bg-background py-10 md:py-12'>
                {/* Content */}
                <div className='columns-1 mx-12 md:grid md:grid-cols-2 md:px-12 md:mx-auto md:py-20 lg:px-32 lg:w-full'>
                    {/* IMG Mobile */}
                    <img src='/solusi/Ml-img.svg' className='md:hidden mt-10' />
                    <div className='w-full py-10 lg:py-0'>
                        <p className='font-Nunito font-normal text-sxs text-main-color'>MACHINE LEARNING</p>
                        <p className='font-Nunito font-extra-bold text-3xl md:text-4xl leading-tight py-3 lg:py-1'>Buat mesin bekerja untuk
                            kamu, bukan sebaliknya</p>
                        <p className='font-Nunito font-normal lg:text-md lg:py-2'>Rasanya ingin mengajarkan mesin untuk bekerja dengan sendirinya
                            tanpa perlu ada kerjaan tambahan?</p>
                        <button className='bg-main-color hover:bg-main-hover font-Nunito font-bold text-sm text-white rounded-lg p-3 mt-12'><span className='m-2'>Ajari mesin kami!</span></button>
                    </div>
                    <img src='/solusi/Ml-img.svg' className='hidden md:block mt-10 md:w-80 md:mx-auto lg:-mt-7 lg:ml-20' />
                </div>
            </section>

            {/* Section 5 */}
            <section className='py-10 md:py-12'>
                {/* Content */}
                <div className='columns-1 mx-12 md:grid md:grid-cols-2 md:px-12 md:mx-auto md:py-20 lg:px-28 lg:w-full'>
                    <img src='/solusi/Workflow-img.svg' className='mt-10 md:w-80 lg:-mt-16' />
                    <div className='w-full py-10 lg:py-0 lg:-ml-24'>
                        <p className='font-Nunito font-normal text-sxs text-main-color'>FLOW AUTOMATION</p>
                        <p className='font-Nunito font-extra-bold text-3xl md:text-4xl leading-tight py-3 lg:py-1'>Kamu masih hobi ngerjain
                            administrasi berulang?</p>
                        <p className='font-Nunito font-normal lg:text-md lg:py-2'>Biarkan proses administrasi manual dan tumpukan dokumen fisik
                            menjadi cerita dan kenangan lama (jangan yang lain-lain ya)</p>
                        <button className='bg-main-color hover:bg-main-hover font-Nunito font-bold text-sm text-white rounded-lg p-3 mt-12'><span className='m-2'>Ayo buat cerita baru!</span></button>
                    </div>
                </div>
            </section>

            {/* Section 6 */}
            <section className='bg-background py-10 md:py-12'>
                {/* Content */}
                <div className='columns-1 mx-12 md:grid md:grid-cols-2 md:px-12 md:mx-auto md:py-20 lg:px-32 lg:w-full'>
                    {/* IMG Mobile */}
                    <img src='/solusi/Branding-img.svg' className='md:hidden mt-10' />
                    <div className='w-full py-10 lg:py-0'>
                        <p className='font-Nunito font-normal text-sxs text-main-color'>BRANDING & DIGITAL ADS</p>
                        <p className='font-Nunito font-extra-bold text-3xl md:text-4xl leading-tight py-3 lg:py-1'>Ingin berkomunikasi lebih
                            baik dengan konsumen?</p>
                        <p className='font-Nunito font-normal lg:text-md lg:py-2'>Nama usaha kamu (asosiasi dan kredibilitas) dan iklan sangat penting
                            dalam membangun hubungan dengan konsumen. Mau tahu lebih?</p>
                        <button className='bg-main-color hover:bg-main-hover font-Nunito font-bold text-sm text-white rounded-lg p-3 mt-12'><span className='m-2'>Mau dong!</span></button>
                    </div>
                    <img src='/solusi/Branding-img.svg' className='hidden md:block mt-10 md:w-80 md:mx-auto lg:-mt-7 lg:ml-20' />
                </div>
            </section>

            {/* Footer */}
            <div className="grid justify-items-center text-center md:w-2/5 md:mx-auto py-12 -mt-16">
                <img src='/footer.svg' className='w-80' />
                <p className='font-Nunito font-extra-bold text-3xl lg:text-4xl'>Apakah kamu siap?</p>
                <div className='w-80 lg:w-96'>
                    <p className='font-Nunito font-normal lg:text-sm lg:px-3 pt-3'>Beritahu kami apa yang mau kamu bangun atau kesulitan apa yang kamu hadapi</p>
                </div>
                <Link href="/hubungi">
                    <button className="border border-main-color mt-12 md:text-sxs lg:text-sm lg:mt-16 font-bold font-Nunito text-main-color hover:text-white hover:bg-main-color rounded-lg p-2 ml-4 mb-2 m-1">Hubungi Kami</button>
                </Link>
            </div>
        </div>
    )
}
