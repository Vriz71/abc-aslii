import React from 'react'
import Link from 'next/link'
import Navbar from './components/Navbar'

export default function Carakerja() {
    return (
        <div>
            <title>Cara kerja kami</title>
            <Navbar />

            {/* Section 1 */}
            <section className='md:py-12'>
                {/* Div 1 */}
                <div className='columns-1 mx-12 md:grid md:grid-cols-2 md:mx-16 lg:px-28 lg:mx-auto py-32'>
                    <div className='w-full'>
                        <p className='font-Nunito font-normal text-sxs text-main-color'>COLLABORATION</p>
                        <p className='font-Nunito font-light text-4xl py-1'>Kami suka</p>
                        <p className='font-Nunito font-extra-bold text-4xl py-1'>berkolaborasi</p>
                        <p className='font-Nunito font-normal lg:text-md py-4'>Komunikasi dan transparansi adalah fondasi dari hubungan <br className='hidden lg:block' />
                            jangka panjang yang kita semua inginkan. Jadi, ayo ngobrol <br className='hidden lg:block' />
                            dan gali lebih dalam lagi kebutuhan kamu! </p>
                        <div className='w-9 h-1 bg-main-color rounded-lg'></div>
                    </div>
                    <img src='/cara kerja/Collab.svg' className='mt-10 block md:w-80 md:ml-10 md:-mt-10 lg:ml-40 lg:mt-6' />
                </div>

                {/* Div 2 */}
                <div className='grid w-64 -mt-16 mx-auto md:grid-cols-3 md:w-4/5 md:-mt-28 md:mx-16 lg:w-1/2 lg:flex lg:mx-28 lg:gap-10 lg:-mt-60 '>
                    <div className='md:w-5/6 lg:w-3/4 py-4'>
                        <button>
                            <img src='/cara kerja/Perencanaan-btn.svg' />
                        </button>
                        <p className='font-Nunito font-extra-bold text-lg py-4'>Perencanaan proyek</p>
                        <p className='font-Nunito text-trans text-sm font-normal lg:text-md'>Membahas perencanaan
                            pengembangan kebutuhan
                            kamu yang transparan</p>
                    </div>
                    <div className='md:w-5/6 lg:w-2/3 py-4 '>
                        <button>
                            <img src='/cara kerja/Laporan-btn.svg' />
                        </button>
                        <p className='font-Nunito font-extra-bold text-lg py-4'>Laporan eksekutif</p>
                        <p className='font-Nunito text-trans text-sm font-normal lg:text-md'>Dapatkan laporan berkala
                            mengenai pengembangan
                            yang telah dikerjakan</p>
                    </div>
                    <div className='md:w-full lg:w-4/5 py-4 lg:-mr-9'>
                        <button>
                            <img src='/cara kerja/Komunikasi-btn.svg' />
                        </button>
                        <p className='font-Nunito font-extra-bold text-lg py-4'>Komunikasi rutin</p>
                        <p className='font-Nunito text-trans text-sm font-normal lg:text-md'>Kami siap menjawab semua
                            pertanyaan dan memberikan
                            informasi yang kamu butuhkan</p>
                    </div>
                </div>
            </section>


            {/* Section 2 */}
            <section className='md:py-12 bg-background'>
                {/* Content Mobile */}
                <div className='mx-12 columns-1 md:grid md:grid-cols-2 '>
                    <img src='/cara kerja/Passion.svg' className='mt-10 md:w-80 md:mt-0 lg:ml-20' />

                    <div className='lg:-ml-16'>
                        <p className='font-Nunito font-normal text-sxs text-main-color'>PASSION</p>
                        <p className='font-Nunito font-light text-4xl py-1'>Kami membangun dengan</p>
                        <p className='font-Nunito font-extra-bold text-4xl py-1'>sepenuh hati</p>
                        <p className='font-Nunito font-normal lg:text-md py-4'>Membangun sesuatu bukan hanya merupakan sebuah pekerjaan bagi kami. <br className='hidden lg:block' />
                            Kami suka (dengan penuh hasrat) membangun solusi luar biasa untuk <br className='hidden lg:block' />
                            orang-orang luar biasa!</p>
                        <div className='w-9 h-1 bg-main-color rounded-lg'></div>

                        <div className='grid w-64 mx-auto mt-6 md:hidden lg:mx-0 lg:w-full lg:flex lg:mt-2 lg:gap-10'>
                            <div className='lg:w-3/4 py-4'>
                                <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="25" cy="25" r="24.5" fill="#1DC0AD" fillOpacity="0.1" stroke="#1DC0AD" />
                                    <path d="M34.8634 22.3283C34.6929 21.7857 34.3524 21.3124 33.8921 20.9784C33.4318 20.6443 32.8763 20.4672 32.3076 20.4733H28.6667L27.5609 17.0267C27.387 16.4841 27.0453 16.0108 26.585 15.6751C26.1248 15.3393 25.5698 15.1583 25.0001 15.1583C24.4303 15.1583 23.8753 15.3393 23.4151 15.6751C22.9548 16.0108 22.6131 16.4841 22.4392 17.0267L21.3334 20.4733H17.6925C17.1257 20.4741 16.5735 20.6541 16.115 20.9874C15.6565 21.3208 15.3151 21.7905 15.1395 22.3295C14.9639 22.8685 14.9631 23.4492 15.1373 23.9887C15.3114 24.5281 15.6516 24.9988 16.1092 25.3333L19.0725 27.5L17.9459 30.9892C17.7638 31.5303 17.7615 32.1158 17.9393 32.6584C18.1171 33.201 18.4655 33.6716 18.9325 34C19.3916 34.339 19.9479 34.5206 20.5185 34.5177C21.0891 34.5149 21.6436 34.3277 22.0992 33.9842L25.0001 31.8492L27.9017 33.9817C28.3599 34.3187 28.9132 34.5018 29.482 34.5045C30.0508 34.5073 30.6059 34.3296 31.0674 33.9971C31.5288 33.6645 31.873 33.1942 32.0503 32.6537C32.2276 32.1132 32.229 31.5305 32.0542 30.9892L30.9276 27.5L33.8942 25.3333C34.3571 25.003 34.7013 24.5323 34.8758 23.9911C35.0504 23.4499 35.046 22.8669 34.8634 22.3283ZM32.9109 23.9875L29.4576 26.5117C29.3157 26.6151 29.2102 26.7608 29.156 26.9278C29.1018 27.0948 29.1018 27.2746 29.1559 27.4417L30.4684 31.5C30.5348 31.7058 30.5342 31.9274 30.4668 32.1329C30.3993 32.3384 30.2684 32.5172 30.0929 32.6436C29.9174 32.7701 29.7064 32.8376 29.4901 32.8365C29.2738 32.8354 29.0634 32.7657 28.8892 32.6375L25.4934 30.1375C25.3504 30.0324 25.1775 29.9758 25.0001 29.9758C24.8226 29.9758 24.6497 30.0324 24.5067 30.1375L21.1109 32.6375C20.9368 32.7674 20.7258 32.8385 20.5086 32.8405C20.2914 32.8425 20.0792 32.7752 19.9027 32.6484C19.7263 32.5217 19.5948 32.3421 19.5274 32.1356C19.4599 31.9291 19.46 31.7064 19.5275 31.5L20.8442 27.4417C20.8983 27.2746 20.8983 27.0948 20.8441 26.9278C20.7899 26.7608 20.6844 26.6151 20.5425 26.5117L17.0892 23.9875C16.9153 23.8602 16.7861 23.6811 16.72 23.4759C16.6539 23.2708 16.6544 23.05 16.7213 22.8451C16.7882 22.6402 16.9181 22.4617 17.0926 22.335C17.267 22.2084 17.477 22.1401 17.6925 22.14H21.9425C22.119 22.14 22.2909 22.084 22.4334 21.9801C22.576 21.8761 22.6819 21.7296 22.7359 21.5617L24.0276 17.5358C24.0939 17.3298 24.2238 17.1502 24.3987 17.0227C24.5736 16.8953 24.7845 16.8266 25.0009 16.8266C25.2173 16.8266 25.4281 16.8953 25.6031 17.0227C25.778 17.1502 25.9079 17.3298 25.9742 17.5358L27.2659 21.5617C27.3199 21.7296 27.4258 21.8761 27.5683 21.9801C27.7109 22.084 27.8828 22.14 28.0592 22.14H32.3092C32.5248 22.1401 32.7348 22.2084 32.9092 22.335C33.0836 22.4617 33.2136 22.6402 33.2805 22.8451C33.3474 23.05 33.3479 23.2708 33.2818 23.4759C33.2157 23.6811 33.0865 23.8602 32.9126 23.9875H32.9109Z" fill="#1DC0AD" />
                                </svg>
                                <p className='font-Nunito font-extra-bold text-lg py-4'>Kualitas kode</p>
                                <p className='font-Nunito text-trans text-sm font-normal lg:text-md'>Memberikan kode <br className='hidden lg:block' />
                                    berkualitas baik yang telah
                                    kami tinjau dan uji</p>
                            </div>
                            <div className='lg:w-2/3 py-4'>
                                <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="25" cy="25" r="24.5" fill="#1DC0AD" fillOpacity="0.1" stroke="#1DC0AD" />
                                    <path d="M30 15H20C19.7789 15 19.567 15.0878 19.4107 15.2441C19.2544 15.4004 19.1666 15.6123 19.1666 15.8333C19.1666 16.0543 19.2544 16.2663 19.4107 16.4226C19.567 16.5789 19.7789 16.6667 20 16.6667H20.8333V30.8333C20.8333 31.9384 21.2723 32.9982 22.0537 33.7796C22.8351 34.561 23.8949 35 25 35C26.105 35 27.1648 34.561 27.9462 33.7796C28.7276 32.9982 29.1666 31.9384 29.1666 30.8333V16.6667H30C30.221 16.6667 30.4329 16.5789 30.5892 16.4226C30.7455 16.2663 30.8333 16.0543 30.8333 15.8333C30.8333 15.6123 30.7455 15.4004 30.5892 15.2441C30.4329 15.0878 30.221 15 30 15V15ZM25 33.3333C24.3369 33.3333 23.701 33.0699 23.2322 32.6011C22.7634 32.1323 22.5 31.4964 22.5 30.8333V22.5H27.5V30.8333C27.5 31.4964 27.2366 32.1323 26.7677 32.6011C26.2989 33.0699 25.663 33.3333 25 33.3333ZM27.5 20.8333H22.5V16.6667H27.5V20.8333Z" fill="#1DC0AD" />
                                </svg>
                                <p className='font-Nunito font-extra-bold text-lg py-4'>Tes otomatis</p>
                                <p className='font-Nunito text-trans text-sm font-normal lg:text-md'>Melakukan rangkaian tes
                                    otomatis dengan solusi
                                    internasional</p>
                            </div>
                            <div className=' lg:w-4/5 py-4'>
                                <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="25" cy="25" r="24.5" fill="#1DC0AD" fillOpacity="0.1" stroke="#1DC0AD" />
                                    <path d="M25.0001 20C24.7791 20 24.5671 20.0878 24.4108 20.2441C24.2545 20.4004 24.1667 20.6123 24.1667 20.8333V25C24.1668 25.221 24.2546 25.4329 24.4109 25.5892L26.9109 28.0892C27.0681 28.241 27.2786 28.325 27.4971 28.3231C27.7156 28.3212 27.9246 28.2335 28.0791 28.079C28.2336 27.9245 28.3213 27.7155 28.3232 27.497C28.3251 27.2785 28.2411 27.068 28.0893 26.9108L25.8334 24.655V20.8333C25.8334 20.6123 25.7456 20.4004 25.5893 20.2441C25.4331 20.0878 25.2211 20 25.0001 20Z" fill="#1DC0AD" />
                                    <path d="M34.1667 24.1667C33.9457 24.1667 33.7337 24.2545 33.5774 24.4107C33.4212 24.567 33.3334 24.779 33.3334 25C33.3401 26.9377 32.6737 28.8177 31.448 30.3185C30.2222 31.8193 28.5133 32.8478 26.6133 33.2282C24.7132 33.6086 22.7401 33.3173 21.031 32.404C19.322 31.4908 17.9831 30.0124 17.2434 28.2214C16.5036 26.4304 16.4089 24.4381 16.9753 22.585C17.5417 20.7319 18.7342 19.133 20.3488 18.0617C21.9635 16.9904 23.9001 16.5131 25.8276 16.7115C27.7552 16.9098 29.554 17.7715 30.9167 19.1492C30.8893 19.1566 30.8615 19.1625 30.8334 19.1667H28.3334C28.1123 19.1667 27.9004 19.2545 27.7441 19.4107C27.5878 19.567 27.5 19.779 27.5 20C27.5 20.221 27.5878 20.433 27.7441 20.5893C27.9004 20.7455 28.1123 20.8333 28.3334 20.8333H30.8334C31.4964 20.8333 32.1323 20.5699 32.6011 20.1011C33.07 19.6323 33.3334 18.9964 33.3334 18.3333V15.8333C33.3334 15.6123 33.2456 15.4004 33.0893 15.2441C32.933 15.0878 32.721 15 32.5 15C32.279 15 32.0671 15.0878 31.9108 15.2441C31.7545 15.4004 31.6667 15.6123 31.6667 15.8333V17.5542C29.9605 16.0288 27.7825 15.1351 25.4966 15.0226C23.2107 14.91 20.9554 15.5854 19.1076 16.9358C17.2598 18.2862 15.9314 20.2298 15.3444 22.4419C14.7574 24.654 14.9473 27.0006 15.8825 29.0895C16.8176 31.1783 18.4413 32.883 20.4823 33.9187C22.5232 34.9543 24.8577 35.2581 27.0958 34.7794C29.3338 34.3006 31.3397 33.0683 32.7784 31.2884C34.2171 29.5084 35.0013 27.2887 35 25C35 24.779 34.9122 24.567 34.756 24.4107C34.5997 24.2545 34.3877 24.1667 34.1667 24.1667Z" fill="#1DC0AD" />
                                </svg>
                                <p className='font-Nunito font-extra-bold text-lg py-4'>Selalu terkini</p>
                                <p className='font-Nunito text-trans text-sm font-normal lg:text-md'>Membangun solusi kamu
                                    dengan teknologi dan <br className='hidden lg:block' />
                                    informasi terkini</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Content MD */}
                <div className='hidden lg:hidden md:grid md:grid-cols-3 md:w-4/5 md:mx-16'>
                    <div className='md:w-3/4 py-4'>
                        <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="25" cy="25" r="24.5" fill="#1DC0AD" fillOpacity="0.1" stroke="#1DC0AD" />
                            <path d="M34.8634 22.3283C34.6929 21.7857 34.3524 21.3124 33.8921 20.9784C33.4318 20.6443 32.8763 20.4672 32.3076 20.4733H28.6667L27.5609 17.0267C27.387 16.4841 27.0453 16.0108 26.585 15.6751C26.1248 15.3393 25.5698 15.1583 25.0001 15.1583C24.4303 15.1583 23.8753 15.3393 23.4151 15.6751C22.9548 16.0108 22.6131 16.4841 22.4392 17.0267L21.3334 20.4733H17.6925C17.1257 20.4741 16.5735 20.6541 16.115 20.9874C15.6565 21.3208 15.3151 21.7905 15.1395 22.3295C14.9639 22.8685 14.9631 23.4492 15.1373 23.9887C15.3114 24.5281 15.6516 24.9988 16.1092 25.3333L19.0725 27.5L17.9459 30.9892C17.7638 31.5303 17.7615 32.1158 17.9393 32.6584C18.1171 33.201 18.4655 33.6716 18.9325 34C19.3916 34.339 19.9479 34.5206 20.5185 34.5177C21.0891 34.5149 21.6436 34.3277 22.0992 33.9842L25.0001 31.8492L27.9017 33.9817C28.3599 34.3187 28.9132 34.5018 29.482 34.5045C30.0508 34.5073 30.6059 34.3296 31.0674 33.9971C31.5288 33.6645 31.873 33.1942 32.0503 32.6537C32.2276 32.1132 32.229 31.5305 32.0542 30.9892L30.9276 27.5L33.8942 25.3333C34.3571 25.003 34.7013 24.5323 34.8758 23.9911C35.0504 23.4499 35.046 22.8669 34.8634 22.3283ZM32.9109 23.9875L29.4576 26.5117C29.3157 26.6151 29.2102 26.7608 29.156 26.9278C29.1018 27.0948 29.1018 27.2746 29.1559 27.4417L30.4684 31.5C30.5348 31.7058 30.5342 31.9274 30.4668 32.1329C30.3993 32.3384 30.2684 32.5172 30.0929 32.6436C29.9174 32.7701 29.7064 32.8376 29.4901 32.8365C29.2738 32.8354 29.0634 32.7657 28.8892 32.6375L25.4934 30.1375C25.3504 30.0324 25.1775 29.9758 25.0001 29.9758C24.8226 29.9758 24.6497 30.0324 24.5067 30.1375L21.1109 32.6375C20.9368 32.7674 20.7258 32.8385 20.5086 32.8405C20.2914 32.8425 20.0792 32.7752 19.9027 32.6484C19.7263 32.5217 19.5948 32.3421 19.5274 32.1356C19.4599 31.9291 19.46 31.7064 19.5275 31.5L20.8442 27.4417C20.8983 27.2746 20.8983 27.0948 20.8441 26.9278C20.7899 26.7608 20.6844 26.6151 20.5425 26.5117L17.0892 23.9875C16.9153 23.8602 16.7861 23.6811 16.72 23.4759C16.6539 23.2708 16.6544 23.05 16.7213 22.8451C16.7882 22.6402 16.9181 22.4617 17.0926 22.335C17.267 22.2084 17.477 22.1401 17.6925 22.14H21.9425C22.119 22.14 22.2909 22.084 22.4334 21.9801C22.576 21.8761 22.6819 21.7296 22.7359 21.5617L24.0276 17.5358C24.0939 17.3298 24.2238 17.1502 24.3987 17.0227C24.5736 16.8953 24.7845 16.8266 25.0009 16.8266C25.2173 16.8266 25.4281 16.8953 25.6031 17.0227C25.778 17.1502 25.9079 17.3298 25.9742 17.5358L27.2659 21.5617C27.3199 21.7296 27.4258 21.8761 27.5683 21.9801C27.7109 22.084 27.8828 22.14 28.0592 22.14H32.3092C32.5248 22.1401 32.7348 22.2084 32.9092 22.335C33.0836 22.4617 33.2136 22.6402 33.2805 22.8451C33.3474 23.05 33.3479 23.2708 33.2818 23.4759C33.2157 23.6811 33.0865 23.8602 32.9126 23.9875H32.9109Z" fill="#1DC0AD" />
                        </svg>
                        <p className='font-Nunito font-extra-bold text-lg py-4'>Kualitas kode</p>
                        <p className='font-Nunito text-trans text-sm font-normal lg:text-md'>Memberikan kode <br className='hidden lg:block' />
                            berkualitas baik yang telah
                            kami tinjau dan uji</p>
                    </div>
                    <div className='md:w-2/3 py-4'>
                        <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="25" cy="25" r="24.5" fill="#1DC0AD" fillOpacity="0.1" stroke="#1DC0AD" />
                            <path d="M30 15H20C19.7789 15 19.567 15.0878 19.4107 15.2441C19.2544 15.4004 19.1666 15.6123 19.1666 15.8333C19.1666 16.0543 19.2544 16.2663 19.4107 16.4226C19.567 16.5789 19.7789 16.6667 20 16.6667H20.8333V30.8333C20.8333 31.9384 21.2723 32.9982 22.0537 33.7796C22.8351 34.561 23.8949 35 25 35C26.105 35 27.1648 34.561 27.9462 33.7796C28.7276 32.9982 29.1666 31.9384 29.1666 30.8333V16.6667H30C30.221 16.6667 30.4329 16.5789 30.5892 16.4226C30.7455 16.2663 30.8333 16.0543 30.8333 15.8333C30.8333 15.6123 30.7455 15.4004 30.5892 15.2441C30.4329 15.0878 30.221 15 30 15V15ZM25 33.3333C24.3369 33.3333 23.701 33.0699 23.2322 32.6011C22.7634 32.1323 22.5 31.4964 22.5 30.8333V22.5H27.5V30.8333C27.5 31.4964 27.2366 32.1323 26.7677 32.6011C26.2989 33.0699 25.663 33.3333 25 33.3333ZM27.5 20.8333H22.5V16.6667H27.5V20.8333Z" fill="#1DC0AD" />
                        </svg>
                        <p className='font-Nunito font-extra-bold text-lg py-4'>Tes otomatis</p>
                        <p className='font-Nunito text-trans text-sm font-normal lg:text-md'>Melakukan rangkaian tes
                            otomatis dengan solusi
                            internasional</p>
                    </div>

                    <div className='md:w-4/5 py-4'>
                        <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="25" cy="25" r="24.5" fill="#1DC0AD" fillOpacity="0.1" stroke="#1DC0AD" />
                            <path d="M25.0001 20C24.7791 20 24.5671 20.0878 24.4108 20.2441C24.2545 20.4004 24.1667 20.6123 24.1667 20.8333V25C24.1668 25.221 24.2546 25.4329 24.4109 25.5892L26.9109 28.0892C27.0681 28.241 27.2786 28.325 27.4971 28.3231C27.7156 28.3212 27.9246 28.2335 28.0791 28.079C28.2336 27.9245 28.3213 27.7155 28.3232 27.497C28.3251 27.2785 28.2411 27.068 28.0893 26.9108L25.8334 24.655V20.8333C25.8334 20.6123 25.7456 20.4004 25.5893 20.2441C25.4331 20.0878 25.2211 20 25.0001 20Z" fill="#1DC0AD" />
                            <path d="M34.1667 24.1667C33.9457 24.1667 33.7337 24.2545 33.5774 24.4107C33.4212 24.567 33.3334 24.779 33.3334 25C33.3401 26.9377 32.6737 28.8177 31.448 30.3185C30.2222 31.8193 28.5133 32.8478 26.6133 33.2282C24.7132 33.6086 22.7401 33.3173 21.031 32.404C19.322 31.4908 17.9831 30.0124 17.2434 28.2214C16.5036 26.4304 16.4089 24.4381 16.9753 22.585C17.5417 20.7319 18.7342 19.133 20.3488 18.0617C21.9635 16.9904 23.9001 16.5131 25.8276 16.7115C27.7552 16.9098 29.554 17.7715 30.9167 19.1492C30.8893 19.1566 30.8615 19.1625 30.8334 19.1667H28.3334C28.1123 19.1667 27.9004 19.2545 27.7441 19.4107C27.5878 19.567 27.5 19.779 27.5 20C27.5 20.221 27.5878 20.433 27.7441 20.5893C27.9004 20.7455 28.1123 20.8333 28.3334 20.8333H30.8334C31.4964 20.8333 32.1323 20.5699 32.6011 20.1011C33.07 19.6323 33.3334 18.9964 33.3334 18.3333V15.8333C33.3334 15.6123 33.2456 15.4004 33.0893 15.2441C32.933 15.0878 32.721 15 32.5 15C32.279 15 32.0671 15.0878 31.9108 15.2441C31.7545 15.4004 31.6667 15.6123 31.6667 15.8333V17.5542C29.9605 16.0288 27.7825 15.1351 25.4966 15.0226C23.2107 14.91 20.9554 15.5854 19.1076 16.9358C17.2598 18.2862 15.9314 20.2298 15.3444 22.4419C14.7574 24.654 14.9473 27.0006 15.8825 29.0895C16.8176 31.1783 18.4413 32.883 20.4823 33.9187C22.5232 34.9543 24.8577 35.2581 27.0958 34.7794C29.3338 34.3006 31.3397 33.0683 32.7784 31.2884C34.2171 29.5084 35.0013 27.2887 35 25C35 24.779 34.9122 24.567 34.756 24.4107C34.5997 24.2545 34.3877 24.1667 34.1667 24.1667Z" fill="#1DC0AD" />
                        </svg>
                        <p className='font-Nunito font-extra-bold text-lg py-4'>Selalu terkini</p>
                        <p className='font-Nunito text-trans text-sm font-normal lg:text-md'>Membangun solusi kamu
                            dengan teknologi dan
                            informasi terkini</p>
                    </div>
                </div>
            </section>



            {/* Section 3 */}
            <section className='lg:py-12'>
                {/* Content */}
                <div className='columns-1 mx-12 md:grid md:grid-cols-2 md:mx-16 lg:px-28 lg:w-full lg:mx-auto py-32'>
                    <div className='w-full'>
                        <p className='font-Nunito font-normal text-sxs text-main-color'>CLEAN CODE</p>
                        <p className='font-Nunito font-light text-4xl py-1'>Kami percaya dengan</p>
                        <p className='font-Nunito font-extra-bold text-4xl py-1'>kode yang bersih</p>
                        <p className='font-Nunito font-normal lg:text-md py-4'>Kode yang bersih dapat berbicara lebih jelas dibandingan dengan catatan berwarna yang menumpuk - kami belajar dari pengalaman. Fokus kami
                            adalah untuk membangun dengan prinsip kode yang bersih (yang tentunya
                            akan membuat tenang tim IT kamu juga) demi produk yang berjangka
                            panjang dan dapat selalu dikembangkan.</p>
                    </div>
                    <img src='/cara kerja/Clean code.svg' className='mt-10 md:w-80 md:ml-10 md:-mt-10 lg:ml-40 lg:-mt-10' />
                </div>
            </section>

            {/* Section 4 */}
            <section className='lg:py-12 bg-background'>
                {/* Content */}
                <div className='mx-12 columns-1 md:grid md:grid-cols-2 py-32'>
                    <img src='/cara kerja/Technical expertise.svg' className='md:w-80 md:mt-0 lg:ml-20' />

                    <div className='mt-10 md:-mt-20 lg:-ml-16'>
                        <p className='font-Nunito font-normal text-sxs text-main-color'>TECHNICAL EXPERTISE</p>
                        <p className='font-Nunito font-light text-4xl py-1'>Kemampuan</p>
                        <p className='font-Nunito font-extra-bold text-4xl py-1'>teknis kami</p>
                        <p className='font-Nunito font-normal lg:text-md py-4'>Kami tidak akan pernah berhenti
                            belajar bahasa dan teknologi
                            terbaru agar dapat memberikan
                            solusi yang terbaik bagi kamu</p>
                        <div className='w-9 h-1 bg-main-color rounded-lg'></div>

                        <div className='md:grid md:grid-cols-2'>
                            <div className=''>
                                <div className='py-5'>
                                    <p className='font-Nunito font-extra-bold text-main-color py-1'>Mobile Development</p>
                                    <p className='font-Nunito font-normal'>Flutter, Dart, Kotlin</p>
                                </div>
                                <div className='py-5'>
                                    <p className='font-Nunito font-extra-bold text-main-color py-1'>Framework Backend & Frontend</p>
                                    <p className='font-Nunito font-normal'>Laravel, Django, Flask, Next JS,  Nuxt JS,
                                        React JS, Vue JS, Angular JS</p>
                                </div>
                                <div className='py-5'>
                                    <p className='font-Nunito font-extra-bold text-main-color py-1'>Programming Language Development</p>
                                    <p className='font-Nunito font-normal'>PHP, Node JS, Golang, Python, Javascript</p>
                                </div>
                                <div className='py-5'>
                                    <p className='font-Nunito font-extra-bold text-main-color py-1'>Middleware</p>
                                    <p className='font-Nunito font-normal'>Spatial Laravel, JSON Web Token (JWT)</p>
                                </div>
                            </div>

                            <div>
                                <div className='py-5 md:mx-3'>
                                    <p className='font-Nunito font-extra-bold text-main-color py-1'>Database</p>
                                    <p className='font-Nunito font-normal'>MySQL, PostgreSQL, Redis DB</p>
                                </div>
                                <div className='py-5 lg:py-1.5 lg:mt-1.5 md:-mt-2 md:mx-3'>
                                    <p className='font-Nunito font-extra-bold text-main-color py-1'>Framework CSS</p>
                                    <p className='font-Nunito font-normal'>Tailwind CSS, Bootstrap 5</p>
                                </div>
                                <div className='py-5 lg:py-1.5 lg:mt-1.5 md:-mt-2 md:mx-3'>
                                    <p className='font-Nunito font-extra-bold text-main-color py-1'>Stack</p>
                                    <p className='font-Nunito font-normal'>MERN, MEVN, MEAN, TALL</p>
                                </div>
                                <div className='py-5 lg:py-1.5 lg:mt-1.5 md:-mt-2 md:mx-3'>
                                    <p className='font-Nunito font-extra-bold text-main-color py-1'>Notification</p>
                                    <p className='font-Nunito font-normal'>Firebase</p>
                                </div>
                                <div className='py-5 lg:py-1.5 lg:mt-1.5 md:-mt-0.5 md:mx-3'>
                                    <p className='font-Nunito font-extra-bold text-main-color py-1'>Design</p>
                                    <p className='font-Nunito font-normal'>Figma, Zeplin</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className='py-16'>
                {/* Content */}
                <div className="grid justify-items-center">
                    <div className='w-7 h-1 bg-main-color rounded-lg'></div>
                    <p className='pt-2 font-Nunito font-extra-bold text-3xl'>Alat Kolaborasi</p>

                    <div className='font-Nunito mx-12 mt-10 grid grid-cols-2 md:grid-cols-5 md:mt-16 lg:w-3/4 lg:ml-32 gap-4'>
                        <div className=''>
                            <img src='/cara kerja/alat/Telegram.svg' />
                            <p className='font-extra-bold text-Telegram py-3'>Telegram</p>
                            <p>for ongoing
                                communication
                                with the team</p>
                        </div>
                        <div className='-mt-7'>
                            <img src='/cara kerja/alat/Microsoft.svg' className='mt-3 -ml-8' />
                            <p className='font-extra-bold text-Microsoft py-3 -mt-3'>Microsoft Teams</p>
                            <p>for video conferencing
                                and coordination</p>
                        </div>
                        <div className=''>
                            <img src='/cara kerja/alat/Google docs.svg' />
                            <p className='font-extra-bold text-Google py-3'>Google Docs</p>
                            <p>for dynamic
                                collaboration n
                                documentation</p>
                        </div>
                        <div className=''>
                            <img src='/cara kerja/alat/Figma.svg' />
                            <p className='font-extra-bold text-Figma py-3'>Figma</p>
                            <p>for designing and
                                presenting the
                                mockup design</p>
                        </div>
                        <div className=''>
                            <img src='/cara kerja/alat/Whimsical.svg' />
                            <p className='font-extra-bold text-Whimsical py-3'>Whimsical</p>
                            <p>for designing and
                                presenting the
                                wireframe</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <div className="grid justify-items-center text-center md:w-2/5 md:mx-auto mx-8 -mt-20 py-12 lg:py-16">
                <img src='/footer.svg' className='w-80' />
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
