import React from 'react'
import Link from 'next/link'
import Navbar from './components/Navbar'

export default function Tentang() {
    return (
        <div>
            <title>Tentang kami</title>
            <Navbar />

            <section className='container columns-1 mx-12 md:grid md:grid-cols-2 md:mx-16 lg:grid lg:grid-cols-2 lg:px-28 lg:mx-0 lg:pt-44 py-20 md:py-32'>
                {/* IMG Mobile */}
                <img src='/tentang/tentang_kami.svg' className='-ml-6 px-4 mt-10 pb-16 md:hidden' />
                <div className='lg:w-full'>
                    <p className='font-Nunito font-normal text-sxs text-main-color'>OUR BELIEF</p>
                    <p className='font-Nunito font-light text-3xl py-4 leading-tight'>Kami percaya pada pemberdayaan teknologi untuk semua, dan sadar bahwa <span className='font-extra-bold'>kami dapat membuat perubahan dengan memberikan layanan teknologi yang berkualitas</span></p>
                    <div className='w-9 h-1 bg-main-color rounded-lg'></div>
                </div>
                {/* IMG MD and LG */}
                <img src='/tentang/tentang_kami.svg' className='hidden md:block md:w-80 md:mt-0 lg:w-80 lg:ml-40 lg:mt-0 mt-10' />
            </section>

            {/* Section Mobile */}
            <section className='container mx-12 w-80 block md:hidden md:mx-16 md:-mt-44'>
                {/* Content */}
                <div className='lg:w-1/2 lg:mx-12 pb-12'>
                    <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="25" cy="25" r="24.5" fill="#1DC0AD" fillOpacity="0.1" stroke="#1DC0AD" />
                        <path d="M29.5832 16.5974C28.6448 16.612 27.7269 16.874 26.9222 17.3568C26.1174 17.8397 25.4543 18.5263 24.9999 19.3474C24.5454 18.5263 23.8823 17.8397 23.0776 17.3568C22.2728 16.874 21.3549 16.612 20.4165 16.5974C18.9207 16.6624 17.5113 17.3168 16.4964 18.4176C15.4814 19.5184 14.9434 20.9762 14.9999 22.4724C14.9999 26.2616 18.9882 30.3999 22.3332 33.2057C23.0801 33.8334 24.0243 34.1774 24.9999 34.1774C25.9754 34.1774 26.9197 33.8334 27.6665 33.2057C31.0115 30.3999 34.9999 26.2616 34.9999 22.4724C35.0563 20.9762 34.5183 19.5184 33.5034 18.4176C32.4885 17.3168 31.0791 16.6624 29.5832 16.5974ZM26.5957 31.9307C26.149 32.3069 25.5838 32.5132 24.9999 32.5132C24.4159 32.5132 23.8507 32.3069 23.404 31.9307C19.1224 28.3382 16.6665 24.8916 16.6665 22.4724C16.6096 21.418 16.9719 20.3839 17.6744 19.5955C18.3768 18.8071 19.3626 18.3285 20.4165 18.2641C21.4705 18.3285 22.4562 18.8071 23.1587 19.5955C23.8612 20.3839 24.2235 21.418 24.1665 22.4724C24.1665 22.6934 24.2543 22.9054 24.4106 23.0617C24.5669 23.2179 24.7789 23.3057 24.9999 23.3057C25.2209 23.3057 25.4329 23.2179 25.5891 23.0617C25.7454 22.9054 25.8332 22.6934 25.8332 22.4724C25.7762 21.418 26.1385 20.3839 26.841 19.5955C27.5435 18.8071 28.5292 18.3285 29.5832 18.2641C30.6372 18.3285 31.6229 18.8071 32.3254 19.5955C33.0279 20.3839 33.3902 21.418 33.3332 22.4724C33.3332 24.8916 30.8774 28.3382 26.5957 31.9274V31.9307Z" fill="#1DC0AD" />
                    </svg>
                    <p className='font-Nunito font-extra-bold text-xl py-4'>Siapa yang kami bantu?</p>
                    <p className='font-Nunito font-normal lg:text-md'>Dari usaha kecil, menengah, sampai dengan besar yang mencari teknologi
                        dalam pengembangan dan efisiensi bisnis. Kami bertujuan untuk menjadi
                        rekan strategis jangka panjang yang dapat mewujudkan kebutuhan dan
                        juga menjadi lawan diskusi dari para rekan kami.</p>
                </div>
                <div className='lg:w-1/2 lg:mx-12'>
                    <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="25" cy="25" r="24.5" fill="#1DC0AD" fillOpacity="0.1" stroke="#1DC0AD" />
                        <path d="M33.9775 21.4342C33.5867 20.9839 33.1038 20.6228 32.5613 20.3753C32.0189 20.1279 31.4296 19.9999 30.8333 20H27.5092L27.7892 18.2992C27.8882 17.7002 27.7687 17.0856 27.4524 16.5675C27.1361 16.0493 26.644 15.6621 26.066 15.4765C25.488 15.2909 24.8625 15.3193 24.3036 15.5564C23.7448 15.7936 23.2898 16.2237 23.0217 16.7684L21.4267 20H19.1667C18.062 20.0014 17.003 20.4408 16.2218 21.2219C15.4407 22.003 15.0013 23.062 15 24.1667L15 28.3334C15.0013 29.438 15.4407 30.4971 16.2218 31.2782C17.003 32.0593 18.062 32.4987 19.1667 32.5H30.25C31.2529 32.4959 32.221 32.132 32.9782 31.4743C33.7353 30.8167 34.2313 29.9091 34.3758 28.9167L34.9633 24.75C35.0461 24.159 35.0009 23.557 34.8308 22.985C34.6607 22.4129 34.3697 21.884 33.9775 21.4342ZM16.6667 28.3334V24.1667C16.6667 23.5037 16.9301 22.8678 17.3989 22.3989C17.8677 21.9301 18.5036 21.6667 19.1667 21.6667H20.8333V30.8334H19.1667C18.5036 30.8334 17.8677 30.57 17.3989 30.1011C16.9301 29.6323 16.6667 28.9964 16.6667 28.3334ZM33.3092 24.5159L32.7208 28.6825C32.6348 29.2775 32.3381 29.8219 31.8847 30.2166C31.4312 30.6113 30.8512 30.8302 30.25 30.8334H22.5V21.445C22.5785 21.3766 22.6435 21.2941 22.6917 21.2017L24.5158 17.5059C24.5842 17.3825 24.681 17.2771 24.798 17.1983C24.9151 17.1196 25.0492 17.0698 25.1892 17.0529C25.3293 17.0361 25.4714 17.0527 25.6038 17.1015C25.7362 17.1502 25.8551 17.2297 25.9508 17.3334C26.0327 17.4286 26.0926 17.5407 26.1261 17.6617C26.1597 17.7827 26.1661 17.9096 26.145 18.0334L25.705 20.7C25.6857 20.8192 25.6925 20.9411 25.7249 21.0574C25.7574 21.1736 25.8147 21.2815 25.8929 21.3734C25.9711 21.4653 26.0684 21.5392 26.178 21.5898C26.2875 21.6405 26.4068 21.6667 26.5275 21.6667H30.8333C31.1912 21.6667 31.5448 21.7434 31.8705 21.8918C32.1961 22.0402 32.486 22.2568 32.7207 22.5269C32.9554 22.797 33.1294 23.1143 33.231 23.4575C33.3325 23.8006 33.3591 24.1615 33.3092 24.5159Z" fill="#1DC0AD" />
                    </svg>
                    <p className='font-Nunito font-extra-bold text-xl py-4'>Apa yang kami percayai?</p>
                    <p className='font-Nunito font-normal lg:text-md'>Bekerjalah dengan sepenuh hati dan integritas untuk memberikan hasil yang
                        terbaik, karena kesuksesan rekan kami akan menjadi pendorong kita untuk
                        bisa lebih berkembang juga</p>
                </div>
            </section>

            {/* Section MD and LG */}
            <section className='hidden mx-10 md:block md:mx-16 md:-mt-20 lg:-mt-44'>
                {/* Content */}
                <div className='lg:w-1/2 lg:mx-12 pb-12'>
                    <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="25" cy="25" r="24.5" fill="#1DC0AD" fillOpacity="0.1" stroke="#1DC0AD" />
                        <path d="M29.5832 16.5974C28.6448 16.612 27.7269 16.874 26.9222 17.3568C26.1174 17.8397 25.4543 18.5263 24.9999 19.3474C24.5454 18.5263 23.8823 17.8397 23.0776 17.3568C22.2728 16.874 21.3549 16.612 20.4165 16.5974C18.9207 16.6624 17.5113 17.3168 16.4964 18.4176C15.4814 19.5184 14.9434 20.9762 14.9999 22.4724C14.9999 26.2616 18.9882 30.3999 22.3332 33.2057C23.0801 33.8334 24.0243 34.1774 24.9999 34.1774C25.9754 34.1774 26.9197 33.8334 27.6665 33.2057C31.0115 30.3999 34.9999 26.2616 34.9999 22.4724C35.0563 20.9762 34.5183 19.5184 33.5034 18.4176C32.4885 17.3168 31.0791 16.6624 29.5832 16.5974ZM26.5957 31.9307C26.149 32.3069 25.5838 32.5132 24.9999 32.5132C24.4159 32.5132 23.8507 32.3069 23.404 31.9307C19.1224 28.3382 16.6665 24.8916 16.6665 22.4724C16.6096 21.418 16.9719 20.3839 17.6744 19.5955C18.3768 18.8071 19.3626 18.3285 20.4165 18.2641C21.4705 18.3285 22.4562 18.8071 23.1587 19.5955C23.8612 20.3839 24.2235 21.418 24.1665 22.4724C24.1665 22.6934 24.2543 22.9054 24.4106 23.0617C24.5669 23.2179 24.7789 23.3057 24.9999 23.3057C25.2209 23.3057 25.4329 23.2179 25.5891 23.0617C25.7454 22.9054 25.8332 22.6934 25.8332 22.4724C25.7762 21.418 26.1385 20.3839 26.841 19.5955C27.5435 18.8071 28.5292 18.3285 29.5832 18.2641C30.6372 18.3285 31.6229 18.8071 32.3254 19.5955C33.0279 20.3839 33.3902 21.418 33.3332 22.4724C33.3332 24.8916 30.8774 28.3382 26.5957 31.9274V31.9307Z" fill="#1DC0AD" />
                    </svg>
                    <p className='font-Nunito font-extra-bold text-xl py-4'>Siapa yang kami bantu?</p>
                    <p className='font-Nunito font-normal lg:text-md'>Dari usaha kecil, menengah, sampai dengan besar yang mencari teknologi
                        dalam pengembangan dan efisiensi bisnis. Kami bertujuan untuk menjadi <br />
                        rekan strategis jangka panjang yang dapat mewujudkan kebutuhan dan <br />
                        juga menjadi lawan diskusi dari para rekan kami.</p>
                </div>
                <div className='lg:w-1/2 lg:mx-12'>
                    <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="25" cy="25" r="24.5" fill="#1DC0AD" fillOpacity="0.1" stroke="#1DC0AD" />
                        <path d="M33.9775 21.4342C33.5867 20.9839 33.1038 20.6228 32.5613 20.3753C32.0189 20.1279 31.4296 19.9999 30.8333 20H27.5092L27.7892 18.2992C27.8882 17.7002 27.7687 17.0856 27.4524 16.5675C27.1361 16.0493 26.644 15.6621 26.066 15.4765C25.488 15.2909 24.8625 15.3193 24.3036 15.5564C23.7448 15.7936 23.2898 16.2237 23.0217 16.7684L21.4267 20H19.1667C18.062 20.0014 17.003 20.4408 16.2218 21.2219C15.4407 22.003 15.0013 23.062 15 24.1667L15 28.3334C15.0013 29.438 15.4407 30.4971 16.2218 31.2782C17.003 32.0593 18.062 32.4987 19.1667 32.5H30.25C31.2529 32.4959 32.221 32.132 32.9782 31.4743C33.7353 30.8167 34.2313 29.9091 34.3758 28.9167L34.9633 24.75C35.0461 24.159 35.0009 23.557 34.8308 22.985C34.6607 22.4129 34.3697 21.884 33.9775 21.4342ZM16.6667 28.3334V24.1667C16.6667 23.5037 16.9301 22.8678 17.3989 22.3989C17.8677 21.9301 18.5036 21.6667 19.1667 21.6667H20.8333V30.8334H19.1667C18.5036 30.8334 17.8677 30.57 17.3989 30.1011C16.9301 29.6323 16.6667 28.9964 16.6667 28.3334ZM33.3092 24.5159L32.7208 28.6825C32.6348 29.2775 32.3381 29.8219 31.8847 30.2166C31.4312 30.6113 30.8512 30.8302 30.25 30.8334H22.5V21.445C22.5785 21.3766 22.6435 21.2941 22.6917 21.2017L24.5158 17.5059C24.5842 17.3825 24.681 17.2771 24.798 17.1983C24.9151 17.1196 25.0492 17.0698 25.1892 17.0529C25.3293 17.0361 25.4714 17.0527 25.6038 17.1015C25.7362 17.1502 25.8551 17.2297 25.9508 17.3334C26.0327 17.4286 26.0926 17.5407 26.1261 17.6617C26.1597 17.7827 26.1661 17.9096 26.145 18.0334L25.705 20.7C25.6857 20.8192 25.6925 20.9411 25.7249 21.0574C25.7574 21.1736 25.8147 21.2815 25.8929 21.3734C25.9711 21.4653 26.0684 21.5392 26.178 21.5898C26.2875 21.6405 26.4068 21.6667 26.5275 21.6667H30.8333C31.1912 21.6667 31.5448 21.7434 31.8705 21.8918C32.1961 22.0402 32.486 22.2568 32.7207 22.5269C32.9554 22.797 33.1294 23.1143 33.231 23.4575C33.3325 23.8006 33.3591 24.1615 33.3092 24.5159Z" fill="#1DC0AD" />
                    </svg>
                    <p className='font-Nunito font-extra-bold text-xl py-4'>Apa yang kami percayai?</p>
                    <p className='font-Nunito font-normal lg:text-md'>Bekerjalah dengan sepenuh hati dan integritas untuk memberikan hasil yang
                        terbaik, karena kesuksesan rekan kami akan menjadi pendorong kita untuk <br />
                        bisa lebih berkembang juga</p>
                </div>
            </section>

            <div className="grid justify-items-center text-center md:w-2/5 md:mx-auto ml-10 py-12 -mt-16">
                <img src='/footer.svg' className='w-80'/>
                <p className='font-Nunito font-extra-bold text-3xl lg:text-4xl'>Apakah kamu siap?</p>
                <div className='lg:w-96'>
                    <p className='font-Nunito font-normal lg:text-sm lg:px-3 pt-3'>Beritahu kami apa yang mau kamu bangun atau kesulitan apa yang kamu hadapi</p>
                </div>
                <Link href="/hubungi">
                    <button className="border border-main-color mt-12 md:text-sxs lg:text-sm lg:mt-16 font-bold font-Nunito text-main-color hover:text-white hover:bg-main-color rounded-lg p-2 ml-4 mb-2 m-1">Hubungi Kami</button>
                </Link>
            </div>
        </div>
    )
}
