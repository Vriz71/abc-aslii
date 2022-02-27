import Link from 'next/link'
import Navbar from './components/Navbar'

export default function Home() {
  return (
    <div>
      <title>Art By Code</title>

      <Navbar />

      {/* First Section */}
      <section className='container columns-1 mx-10 md:grid md:grid-cols-2 md:mx-16 lg:px-28 lg:mx-auto py-32'>
        {/* Content */}
        <div className='w-80 md:mt-24 lg:mt-28'>
          <p className='font-Nunito font-light text-sm font-thin text-trans tracking-wide'>Kami adalah <span className='font-Montserrat font-extrabold text-main-color text-lg'>Art By Code | ABC</span></p>
          <p className='font-Nunito font-extra-bold text-3xl py-6'>
            Ayo ciptakan sesuatu yang indah dari sebuah kode
          </p>
          <button className='bg-main-color hover:bg-main-hover font-Nunito font-normal text-xs text-white rounded-lg p-3'><span className='m-1'>Mau tau lebih banyak</span></button>
        </div>
        <div className='mr-8 pt-20 md:pt-6 md:-ml-12 md:w-full lg:pt-4 lg:ml-16 lg:w-4/5'>
          <img src='/homepage.png' />
        </div>
      </section>

      {/* Second Section */}
      <section className='py-16 lg:mx-auto'>
        <div className="grid justify-items-center">
          <div className='w-7 h-1 bg-main-color rounded-lg'></div>
          <p className='pt-2 font-Nunito font-extra-bold text-3xl'>Solusi Kami</p>

          {/* Solution content */}
          <div className='pt-20 md:grid md:grid-cols-2 md:pt-20 lg:grid-cols-3 lg:gap-2 lg:mt-6'>
            <div className='mx-5 ml-8 pb-20 md:w-80'>
              <img src='web-logo.svg' />
              <div className='pt-5 ml-8'>
                <button className='flex'>
                  <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="25" cy="25" r="24.5" fill="#2C2C2C" fillOpacity="0.1" stroke="#2C2C2C" />
                    <path d="M30.8333 15.8334H19.1667C18.062 15.8347 17.003 16.2741 16.2218 17.0552C15.4407 17.8363 15.0013 18.8954 15 20V30.0001C15.0013 31.1047 15.4407 32.1638 16.2218 32.9449C17.003 33.726 18.062 34.1654 19.1667 34.1667H30.8333C31.938 34.1654 32.997 33.726 33.7781 32.9449C34.5593 32.1638 34.9987 31.1047 35 30.0001V20C34.9987 18.8954 34.5593 17.8363 33.7781 17.0552C32.997 16.2741 31.938 15.8347 30.8333 15.8334V15.8334ZM19.1667 17.5H30.8333C31.4964 17.5 32.1323 17.7634 32.6011 18.2323C33.0699 18.7011 33.3333 19.337 33.3333 20V20.8334H16.6667V20C16.6667 19.337 16.9301 18.7011 17.3989 18.2323C17.8677 17.7634 18.5036 17.5 19.1667 17.5V17.5ZM30.8333 32.5001H19.1667C18.5036 32.5001 17.8677 32.2367 17.3989 31.7678C16.9301 31.299 16.6667 30.6631 16.6667 30.0001V22.5H33.3333V30.0001C33.3333 30.6631 33.0699 31.299 32.6011 31.7678C32.1323 32.2367 31.4964 32.5001 30.8333 32.5001ZM30.8333 25.8334C30.8333 26.0544 30.7455 26.2664 30.5893 26.4226C30.433 26.5789 30.221 26.6667 30 26.6667H20C19.779 26.6667 19.567 26.5789 19.4107 26.4226C19.2545 26.2664 19.1667 26.0544 19.1667 25.8334C19.1667 25.6124 19.2545 25.4004 19.4107 25.2441C19.567 25.0878 19.779 25 20 25H30C30.221 25 30.433 25.0878 30.5893 25.2441C30.7455 25.4004 30.8333 25.6124 30.8333 25.8334ZM27.5 29.1667C27.5 29.3877 27.4122 29.5997 27.2559 29.756C27.0996 29.9123 26.8877 30.0001 26.6667 30.0001H20C19.779 30.0001 19.567 29.9123 19.4107 29.756C19.2545 29.5997 19.1667 29.3877 19.1667 29.1667C19.1667 28.9457 19.2545 28.7337 19.4107 28.5775C19.567 28.4212 19.779 28.3334 20 28.3334H26.6667C26.8877 28.3334 27.0996 28.4212 27.2559 28.5775C27.4122 28.7337 27.5 28.9457 27.5 29.1667ZM17.5 19.1667C17.5 19.0019 17.5489 18.8408 17.6404 18.7037C17.732 18.5667 17.8622 18.4599 18.0144 18.3968C18.1667 18.3337 18.3343 18.3172 18.4959 18.3494C18.6576 18.3815 18.806 18.4609 18.9226 18.5775C19.0391 18.694 19.1185 18.8425 19.1507 19.0041C19.1828 19.1658 19.1663 19.3333 19.1032 19.4856C19.0402 19.6379 18.9333 19.768 18.7963 19.8596C18.6593 19.9512 18.4981 20 18.3333 20C18.1123 20 17.9004 19.9122 17.7441 19.756C17.5878 19.5997 17.5 19.3877 17.5 19.1667ZM20 19.1667C20 19.0019 20.0489 18.8408 20.1404 18.7037C20.232 18.5667 20.3622 18.4599 20.5144 18.3968C20.6667 18.3337 20.8343 18.3172 20.9959 18.3494C21.1576 18.3815 21.306 18.4609 21.4226 18.5775C21.5391 18.694 21.6185 18.8425 21.6507 19.0041C21.6828 19.1658 21.6663 19.3333 21.6032 19.4856C21.5402 19.6379 21.4333 19.768 21.2963 19.8596C21.1593 19.9512 20.9981 20 20.8333 20C20.6123 20 20.4004 19.9122 20.2441 19.756C20.0878 19.5997 20 19.3877 20 19.1667ZM22.5 19.1667C22.5 19.0019 22.5489 18.8408 22.6404 18.7037C22.732 18.5667 22.8622 18.4599 23.0144 18.3968C23.1667 18.3337 23.3343 18.3172 23.4959 18.3494C23.6576 18.3815 23.806 18.4609 23.9226 18.5775C24.0391 18.694 24.1185 18.8425 24.1507 19.0041C24.1828 19.1658 24.1663 19.3333 24.1032 19.4856C24.0402 19.6379 23.9333 19.768 23.7963 19.8596C23.6593 19.9512 23.4981 20 23.3333 20C23.1123 20 22.9004 19.9122 22.7441 19.756C22.5878 19.5997 22.5 19.3877 22.5 19.1667Z" fill="#2C2C2C" />
                  </svg>
                  <span className='font-Nunito font-extra-bold ml-5 mt-3 text-lg'>Web Development</span>
                </button>
              </div>
            </div>
            <div className='mx-5 ml-8 pb-20 md:w-80'>
              <img src='/mobile-logo.svg' />
              <div className='pt-5 ml-8'>
                <button className='flex'>
                  <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="25" cy="25" r="24.5" fill="#2C2C2C" fillOpacity="0.1" stroke="#2C2C2C" />
                    <path d="M27.5 15H22.5C21.3954 15.0013 20.3363 15.4407 19.5552 16.2218C18.7741 17.003 18.3347 18.062 18.3334 19.1667V30.8333C18.3347 31.938 18.7741 32.997 19.5552 33.7781C20.3363 34.5593 21.3954 34.9987 22.5 35H27.5C28.6047 34.9987 29.6637 34.5593 30.4449 33.7781C31.226 32.997 31.6654 31.938 31.6667 30.8333V19.1667C31.6654 18.062 31.226 17.003 30.4449 16.2218C29.6637 15.4407 28.6047 15.0013 27.5 15V15ZM22.5 16.6667H27.5C28.1631 16.6667 28.799 16.9301 29.2678 17.3989C29.7366 17.8677 30 18.5036 30 19.1667V28.3333H20V19.1667C20 18.5036 20.2634 17.8677 20.7323 17.3989C21.2011 16.9301 21.837 16.6667 22.5 16.6667ZM27.5 33.3333H22.5C21.837 33.3333 21.2011 33.0699 20.7323 32.6011C20.2634 32.1323 20 31.4964 20 30.8333V30H30V30.8333C30 31.4964 29.7366 32.1323 29.2678 32.6011C28.799 33.0699 28.1631 33.3333 27.5 33.3333Z" fill="#2C2C2C" />
                    <path d="M25 32.5C25.4602 32.5 25.8333 32.127 25.8333 31.6667C25.8333 31.2065 25.4602 30.8334 25 30.8334C24.5397 30.8334 24.1666 31.2065 24.1666 31.6667C24.1666 32.127 24.5397 32.5 25 32.5Z" fill="#2C2C2C" />
                  </svg>
                  <span className='font-Nunito font-extra-bold ml-5 mt-3 text-lg'>App Development</span>
                </button>
              </div>
            </div>
            <div className='mx-5 ml-8 pb-20 md:w-80'>
              <img src='ui-logo.svg' />
              <div className='pt-5 ml-8'>
                <button className='flex'>
                  <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="25" cy="25" r="24.5" fill="#2C2C2C" fillOpacity="0.1" stroke="#2C2C2C" />
                    <path d="M30 22.5534C30.0001 22.2182 29.9339 21.8863 29.8052 21.5768C29.6765 21.2673 29.4878 20.9863 29.25 20.75C28.7634 20.2857 28.1167 20.0267 27.4442 20.0267C26.7716 20.0267 26.1249 20.2857 25.6383 20.75L15.75 30.6409C15.2987 31.1248 15.0529 31.7651 15.0644 32.4267C15.0758 33.0883 15.3438 33.7196 15.8116 34.1876C16.2795 34.6556 16.9107 34.9236 17.5724 34.9353C18.234 34.9469 18.8743 34.7013 19.3583 34.25L29.25 24.3592C29.4882 24.1227 29.6771 23.8413 29.8058 23.5314C29.9345 23.2214 30.0005 22.889 30 22.5534ZM18.18 33.0734C18.0115 33.234 17.7877 33.3235 17.555 33.3235C17.3223 33.3235 17.0984 33.234 16.93 33.0734C16.7645 32.9075 16.6716 32.6827 16.6716 32.4484C16.6716 32.214 16.7645 31.9893 16.93 31.8234L23.4042 25.3484L24.6583 26.6025L18.18 33.0734ZM28.0733 23.18L25.8333 25.4209L24.5833 24.1667L26.8242 21.9267C26.904 21.8355 27.0018 21.7616 27.1114 21.7096C27.221 21.6577 27.3401 21.6288 27.4613 21.6248C27.5825 21.6208 27.7033 21.6417 27.8161 21.6863C27.9289 21.7308 28.0313 21.798 28.1171 21.8838C28.2028 21.9695 28.2701 22.072 28.3146 22.1848C28.3592 22.2976 28.3801 22.4183 28.376 22.5396C28.372 22.6608 28.3431 22.7799 28.2912 22.8895C28.2393 22.9991 28.1654 23.0968 28.0742 23.1767L28.0733 23.18ZM19.0525 17.3792L20.3442 17.0109L20.7125 15.7192C20.7718 15.5119 20.897 15.3296 21.0692 15.1999C21.2413 15.0701 21.4511 14.9999 21.6667 14.9999C21.8822 14.9999 22.092 15.0701 22.2641 15.1999C22.4363 15.3296 22.5615 15.5119 22.6208 15.7192L22.9892 17.0109L24.2808 17.3792C24.4881 17.4385 24.6704 17.5638 24.8002 17.7359C24.93 17.9081 25.0002 18.1178 25.0002 18.3334C25.0002 18.549 24.93 18.7587 24.8002 18.9308C24.6704 19.103 24.4881 19.2282 24.2808 19.2875L22.9892 19.6559L22.6208 20.9475C22.5615 21.1548 22.4363 21.3371 22.2641 21.4669C22.092 21.5967 21.8822 21.6669 21.6667 21.6669C21.4511 21.6669 21.2413 21.5967 21.0692 21.4669C20.897 21.3371 20.7718 21.1548 20.7125 20.9475L20.3442 19.6559L19.0525 19.2875C18.8452 19.2282 18.6629 19.103 18.5331 18.9308C18.4034 18.7587 18.3332 18.549 18.3332 18.3334C18.3332 18.1178 18.4034 17.9081 18.5331 17.7359C18.6629 17.5638 18.8452 17.4385 19.0525 17.3792ZM34.2808 29.2875L32.9892 29.6559L32.6208 30.9475C32.5615 31.1548 32.4363 31.3371 32.2641 31.4669C32.092 31.5967 31.8822 31.6669 31.6667 31.6669C31.4511 31.6669 31.2413 31.5967 31.0692 31.4669C30.897 31.3371 30.7718 31.1548 30.7125 30.9475L30.3442 29.6559L29.0525 29.2875C28.8452 29.2282 28.6629 29.103 28.5331 28.9308C28.4034 28.7587 28.3332 28.549 28.3332 28.3334C28.3332 28.1178 28.4034 27.9081 28.5331 27.7359C28.6629 27.5638 28.8452 27.4385 29.0525 27.3792L30.3442 27.0109L30.7125 25.7192C30.7718 25.5119 30.897 25.3296 31.0692 25.1999C31.2413 25.0701 31.4511 24.9999 31.6667 24.9999C31.8822 24.9999 32.092 25.0701 32.2641 25.1999C32.4363 25.3296 32.5615 25.5119 32.6208 25.7192L32.9892 27.0109L34.2808 27.3792C34.4881 27.4385 34.6704 27.5638 34.8002 27.7359C34.93 27.9081 35.0002 28.1178 35.0002 28.3334C35.0002 28.549 34.93 28.7587 34.8002 28.9308C34.6704 29.103 34.4881 29.2282 34.2808 29.2875ZM29.7958 17.0834L30.9258 16.7609L31.25 15.6292C31.3028 15.4491 31.4125 15.2909 31.5627 15.1783C31.7129 15.0658 31.8956 15.0049 32.0833 15.0049C32.271 15.0049 32.4537 15.0658 32.6039 15.1783C32.7542 15.2909 32.8639 15.4491 32.9167 15.6292L33.2392 16.7592L34.3692 17.0817C34.5493 17.1345 34.7075 17.2442 34.8201 17.3944C34.9326 17.5447 34.9934 17.7273 34.9934 17.915C34.9934 18.1028 34.9326 18.2854 34.8201 18.4357C34.7075 18.5859 34.5493 18.6956 34.3692 18.7484L33.2392 19.0709L32.9167 20.2034C32.8639 20.3835 32.7542 20.5417 32.6039 20.6543C32.4537 20.7668 32.271 20.8277 32.0833 20.8277C31.8956 20.8277 31.7129 20.7668 31.5627 20.6543C31.4125 20.5417 31.3028 20.3835 31.25 20.2034L30.9275 19.0742L29.7958 18.75C29.6157 18.6973 29.4575 18.5876 29.3449 18.4373C29.2324 18.2871 29.1715 18.1044 29.1715 17.9167C29.1715 17.729 29.2324 17.5463 29.3449 17.3961C29.4575 17.2459 29.6157 17.1361 29.7958 17.0834Z" fill="#2C2C2C" />
                  </svg>
                  <span className='font-Nunito font-extra-bold ml-5 mt-3 text-lg'>UI/UX Design</span>
                </button>
              </div>
            </div>
            <div className='mx-5 ml-8 pb-20 md:w-80'>
              <img src='ml-logo.svg' />
              <div className='pt-5 ml-8'>
                <button className='flex'>
                  <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M25 16.6667C26.1054 16.6703 27.1991 16.8931 28.2179 17.3222C29.2366 17.7513 30.1601 18.3782 30.935 19.1667H28.3333C28.1123 19.1667 27.9004 19.2544 27.7441 19.4107C27.5878 19.567 27.5 19.779 27.5 20C27.5 20.221 27.5878 20.433 27.7441 20.5892C27.9004 20.7455 28.1123 20.8333 28.3333 20.8333H31.7858C32.1962 20.8331 32.5897 20.67 32.8798 20.3798C33.17 20.0897 33.3331 19.6962 33.3333 19.2858V15.8333C33.3333 15.6123 33.2455 15.4003 33.0892 15.2441C32.933 15.0878 32.721 15 32.5 15C32.279 15 32.067 15.0878 31.9107 15.2441C31.7545 15.4003 31.6667 15.6123 31.6667 15.8333V17.565C30.2893 16.3245 28.5938 15.492 26.7701 15.1606C24.9463 14.8292 23.0664 15.0121 21.3407 15.6887C19.615 16.3653 18.1117 17.509 16.9992 18.9916C15.8867 20.4742 15.2089 22.2373 15.0417 24.0833C15.0309 24.1994 15.0444 24.3164 15.0814 24.4269C15.1183 24.5374 15.1779 24.6391 15.2563 24.7253C15.3347 24.8115 15.4302 24.8805 15.5367 24.9278C15.6433 24.9751 15.7585 24.9997 15.875 25C16.0788 25.0026 16.2763 24.929 16.4287 24.7937C16.5812 24.6584 16.6776 24.471 16.6992 24.2683C16.8847 22.1939 17.8391 20.2639 19.3751 18.8573C20.911 17.4508 22.9173 16.6694 25 16.6667Z" fill="#2C2C2C" />
                    <path d="M34.1259 25C33.9221 24.9974 33.7246 25.071 33.5722 25.2063C33.4198 25.3416 33.3233 25.529 33.3017 25.7317C33.164 27.3177 32.5742 28.8309 31.6023 30.0919C30.6304 31.3528 29.3172 32.3084 27.8185 32.8455C26.3199 33.3825 24.6986 33.4784 23.147 33.1218C21.5955 32.7651 20.1788 31.9709 19.0651 30.8334H21.6667C21.8878 30.8334 22.0997 30.7456 22.256 30.5893C22.4123 30.433 22.5001 30.221 22.5001 30C22.5001 29.779 22.4123 29.567 22.256 29.4108C22.0997 29.2545 21.8878 29.1667 21.6667 29.1667H18.2142C18.011 29.1666 17.8097 29.2065 17.6219 29.2843C17.4341 29.362 17.2635 29.476 17.1198 29.6197C16.976 29.7634 16.8621 29.9341 16.7843 30.1219C16.7066 30.3097 16.6666 30.5109 16.6667 30.7142V34.1667C16.6667 34.3877 16.7545 34.5997 16.9108 34.756C17.0671 34.9122 17.2791 35 17.5001 35C17.7211 35 17.9331 34.9122 18.0893 34.756C18.2456 34.5997 18.3334 34.3877 18.3334 34.1667V32.435C19.7108 33.6755 21.4063 34.508 23.23 34.8394C25.0537 35.1708 26.9337 34.9879 28.6594 34.3113C30.3851 33.6347 31.8884 32.4911 33.0009 31.0084C34.1134 29.5258 34.7912 27.7627 34.9584 25.9167C34.9692 25.8006 34.9557 25.6836 34.9187 25.5731C34.8817 25.4625 34.8222 25.3609 34.7438 25.2747C34.6654 25.1884 34.5699 25.1195 34.4634 25.0722C34.3568 25.0249 34.2416 25.0003 34.1251 25H34.1259Z" fill="#2C2C2C" />
                    <circle cx="25" cy="25" r="24.5" fill="#2C2C2C" fillOpacity="0.1" stroke="#2C2C2C" />
                  </svg>
                  <span className='font-Nunito font-extra-bold ml-5 mt-3 text-lg'>Machine Learning</span>
                </button>
              </div>
            </div>
            <div className='mx-5 ml-8 pb-20 md:w-80'>
              <img src='workflow-logo.svg' />
              <div className='pt-5 ml-8'>
                <button className='flex'>
                  <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M25 21.6667C24.3407 21.6667 23.6962 21.8622 23.1481 22.2285C22.5999 22.5947 22.1727 23.1153 21.9204 23.7244C21.6681 24.3335 21.6021 25.0037 21.7307 25.6503C21.8593 26.2969 22.1768 26.8909 22.6429 27.357C23.1091 27.8232 23.7031 28.1407 24.3497 28.2693C24.9963 28.3979 25.6665 28.3319 26.2756 28.0796C26.8847 27.8273 27.4053 27.4001 27.7715 26.8519C28.1378 26.3038 28.3333 25.6593 28.3333 25C28.3333 24.116 27.9821 23.2681 27.357 22.643C26.7319 22.0179 25.884 21.6667 25 21.6667ZM25 26.6667C24.6703 26.6667 24.3481 26.5689 24.074 26.3858C23.7999 26.2027 23.5863 25.9424 23.4602 25.6378C23.334 25.3333 23.301 24.9982 23.3653 24.6749C23.4296 24.3516 23.5884 24.0546 23.8215 23.8215C24.0545 23.5884 24.3515 23.4297 24.6748 23.3654C24.9981 23.3011 25.3332 23.3341 25.6378 23.4602C25.9423 23.5864 26.2026 23.8 26.3858 24.0741C26.5689 24.3482 26.6666 24.6704 26.6666 25C26.6666 25.442 26.491 25.866 26.1785 26.1785C25.8659 26.4911 25.442 26.6667 25 26.6667Z" fill="#2C2C2C" />
                    <path d="M32.745 26.5833L32.375 26.37C32.5416 25.4637 32.5416 24.5346 32.375 23.6283L32.745 23.415C33.0296 23.2508 33.279 23.0323 33.479 22.7717C33.6791 22.5112 33.8259 22.2138 33.911 21.8965C33.9961 21.5792 34.0179 21.2483 33.9751 20.9226C33.9324 20.5969 33.8258 20.2829 33.6617 19.9983C33.4975 19.7138 33.279 19.4644 33.0184 19.2643C32.7579 19.0643 32.4605 18.9175 32.1432 18.8324C31.8259 18.7473 31.495 18.7255 31.1693 18.7682C30.8436 18.811 30.5296 18.9175 30.245 19.0817L29.8742 19.2958C29.1738 18.6974 28.3689 18.2335 27.5 17.9275V17.5C27.5 16.837 27.2366 16.2011 26.7678 15.7322C26.299 15.2634 25.6631 15 25 15C24.337 15 23.7011 15.2634 23.2323 15.7322C22.7634 16.2011 22.5 16.837 22.5 17.5V17.9275C21.6312 18.2346 20.8266 18.6997 20.1267 19.2992L19.7542 19.0833C19.1796 18.7518 18.4968 18.6621 17.856 18.834C17.2153 19.006 16.6691 19.4254 16.3375 20C16.006 20.5746 15.9163 21.2574 16.0883 21.8982C16.2602 22.5389 16.6796 23.0851 17.2542 23.4167L17.6242 23.63C17.4576 24.5363 17.4576 25.4654 17.6242 26.3717L17.2542 26.585C16.6796 26.9165 16.2602 27.4627 16.0883 28.1035C15.9163 28.7442 16.006 29.427 16.3375 30.0017C16.6691 30.5763 17.2153 30.9957 17.856 31.1676C18.4968 31.3395 19.1796 31.2498 19.7542 30.9183L20.125 30.7042C20.8257 31.3026 21.6309 31.7665 22.5 32.0725V32.5C22.5 33.163 22.7634 33.7989 23.2323 34.2678C23.7011 34.7366 24.337 35 25 35C25.6631 35 26.299 34.7366 26.7678 34.2678C27.2366 33.7989 27.5 33.163 27.5 32.5V32.0725C28.3689 31.7654 29.1735 31.3003 29.8734 30.7008L30.2459 30.9158C30.8205 31.2473 31.5033 31.337 32.144 31.1651C32.7848 30.9932 33.331 30.5738 33.6625 29.9992C33.9941 29.4245 34.0837 28.7417 33.9118 28.101C33.7399 27.4602 33.3205 26.914 32.7459 26.5825L32.745 26.5833ZM30.6217 23.4367C30.9039 24.4592 30.9039 25.5391 30.6217 26.5617C30.5724 26.7396 30.5837 26.9289 30.6536 27.0998C30.7236 27.2707 30.8484 27.4135 31.0084 27.5058L31.9117 28.0275C32.1032 28.138 32.243 28.3201 32.3002 28.5336C32.3575 28.7472 32.3276 28.9747 32.2171 29.1662C32.1066 29.3577 31.9245 29.4975 31.711 29.5548C31.4974 29.6121 31.2699 29.5822 31.0784 29.4717L30.1734 28.9483C30.0133 28.8556 29.8269 28.8188 29.6436 28.8437C29.4603 28.8686 29.2904 28.9538 29.1609 29.0858C28.4191 29.843 27.4847 30.3833 26.4584 30.6483C26.2792 30.6944 26.1205 30.7987 26.0072 30.9449C25.8939 31.0911 25.8324 31.2709 25.8325 31.4558V32.5C25.8325 32.721 25.7447 32.933 25.5885 33.0892C25.4322 33.2455 25.2202 33.3333 24.9992 33.3333C24.7782 33.3333 24.5662 33.2455 24.4099 33.0892C24.2537 32.933 24.1659 32.721 24.1659 32.5V31.4567C24.166 31.2717 24.1045 31.092 23.9912 30.9458C23.8779 30.7996 23.7192 30.6952 23.54 30.6492C22.5137 30.3831 21.5795 29.8416 20.8384 29.0833C20.7088 28.9513 20.539 28.8661 20.3557 28.8412C20.1723 28.8163 19.986 28.8531 19.8259 28.9458L18.9225 29.4683C18.8277 29.5239 18.7229 29.5602 18.614 29.5751C18.5051 29.59 18.3943 29.5832 18.2881 29.5551C18.1818 29.527 18.0822 29.4782 17.9949 29.4114C17.9076 29.3446 17.8343 29.2613 17.7794 29.1661C17.7244 29.0709 17.6889 28.9658 17.6747 28.8568C17.6605 28.7479 17.6681 28.6371 17.6969 28.5311C17.7257 28.425 17.7751 28.3257 17.8425 28.2388C17.9098 28.152 17.9937 28.0793 18.0892 28.025L18.9925 27.5033C19.1525 27.411 19.2773 27.2682 19.3473 27.0973C19.4172 26.9264 19.4285 26.7371 19.3792 26.5592C19.097 25.5366 19.097 24.4567 19.3792 23.4342C19.4276 23.2566 19.4158 23.0679 19.3457 22.8977C19.2756 22.7275 19.1511 22.5853 18.9917 22.4933L18.0884 21.9717C17.8969 21.8612 17.7571 21.6791 17.6998 21.4655C17.6425 21.252 17.6724 21.0244 17.783 20.8329C17.8935 20.6414 18.0755 20.5016 18.2891 20.4444C18.5026 20.3871 18.7302 20.417 18.9217 20.5275L19.8267 21.0508C19.9864 21.1438 20.1724 21.181 20.3555 21.1567C20.5386 21.1324 20.7085 21.048 20.8384 20.9167C21.5801 20.1594 22.5146 19.6192 23.5409 19.3542C23.7206 19.308 23.8797 19.2031 23.9931 19.0562C24.1064 18.9094 24.1675 18.7289 24.1667 18.5433V17.5C24.1667 17.279 24.2545 17.067 24.4108 16.9107C24.5671 16.7545 24.779 16.6667 25 16.6667C25.221 16.6667 25.433 16.7545 25.5893 16.9107C25.7456 17.067 25.8334 17.279 25.8334 17.5V18.5433C25.8333 18.7283 25.8947 18.908 26.008 19.0542C26.1213 19.2004 26.2801 19.3048 26.4592 19.3508C27.4859 19.6168 28.4204 20.1582 29.1617 20.9167C29.2913 21.0487 29.4611 21.1339 29.6444 21.1588C29.8277 21.1837 30.0141 21.1469 30.1742 21.0542L31.0775 20.5317C31.1723 20.4761 31.2772 20.4398 31.3861 20.4249C31.495 20.41 31.6057 20.4168 31.712 20.4449C31.8182 20.473 31.9179 20.5218 32.0052 20.5886C32.0925 20.6553 32.1657 20.7387 32.2207 20.8339C32.2756 20.9291 32.3112 21.0342 32.3254 21.1432C32.3395 21.2521 32.332 21.3628 32.3032 21.4689C32.2744 21.575 32.2249 21.6743 32.1576 21.7611C32.0903 21.848 32.0064 21.9207 31.9109 21.975L31.0075 22.4967C30.8484 22.5889 30.7243 22.7312 30.6545 22.9014C30.5847 23.0716 30.5732 23.2601 30.6217 23.4375V23.4367Z" fill="#2C2C2C" />
                    <circle cx="25" cy="25" r="24.5" fill="#2C2C2C" fillOpacity="0.1" stroke="#2C2C2C" />
                  </svg>
                  <span className='font-Nunito font-extra-bold ml-5 mt-3 text-lg'>Workflow Automation</span>
                </button>
              </div>
            </div>
            <div className='mx-5 ml-8 pb-20 md:w-80'>
              <img src='/branding-logo.svg' />
              <div className='pt-5 ml-8'>
                <button className='flex'>
                  <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="25" cy="25" r="24.5" fill="#2C2C2C" fillOpacity="0.1" stroke="#2C2C2C" />
                    <path d="M29.1667 15C28.9457 15 28.7337 15.0878 28.5774 15.2441C28.4211 15.4004 28.3333 15.6123 28.3333 15.8333C28.3333 18.2908 26.1808 19.1667 24.1667 19.1667H18.3333C17.4493 19.1667 16.6014 19.5179 15.9763 20.143C15.3512 20.7681 15 21.6159 15 22.5V24.1667C15.0018 24.6656 15.1162 25.1577 15.3347 25.6063C15.5531 26.0549 15.87 26.4484 16.2617 26.7575L19.2383 33.4008C19.45 33.8767 19.7951 34.2811 20.2319 34.5649C20.6686 34.8487 21.1783 34.9998 21.6992 35C22.1136 34.9997 22.5214 34.8958 22.8854 34.6977C23.2494 34.4996 23.5581 34.2137 23.7834 33.8658C24.0086 33.518 24.1433 33.1193 24.1752 32.7061C24.2071 32.2929 24.1351 31.8783 23.9658 31.5L22.1325 27.5H24.1667C26.1808 27.5 28.3333 28.3758 28.3333 30.8333C28.3333 31.0543 28.4211 31.2663 28.5774 31.4226C28.7337 31.5789 28.9457 31.6667 29.1667 31.6667C29.3877 31.6667 29.5996 31.5789 29.7559 31.4226C29.9122 31.2663 30 31.0543 30 30.8333V15.8333C30 15.6123 29.9122 15.4004 29.7559 15.2441C29.5996 15.0878 29.3877 15 29.1667 15V15ZM22.4475 32.1825C22.5027 32.3072 22.5259 32.4436 22.515 32.5795C22.5042 32.7154 22.4595 32.8464 22.3852 32.9607C22.3109 33.075 22.2092 33.169 22.0894 33.234C21.9696 33.2991 21.8355 33.3332 21.6992 33.3333C21.5003 33.3332 21.3058 33.2753 21.1392 33.1667C20.9727 33.0582 20.8412 32.9035 20.7608 32.7217L18.4208 27.5H20.2992L22.4475 32.1825ZM28.3333 27.1667C27.1427 26.2493 25.6686 25.7776 24.1667 25.8333H18.3333C17.8913 25.8333 17.4674 25.6577 17.1548 25.3452C16.8423 25.0326 16.6667 24.6087 16.6667 24.1667V22.5C16.6667 22.058 16.8423 21.634 17.1548 21.3215C17.4674 21.0089 17.8913 20.8333 18.3333 20.8333H24.1667C25.6681 20.8902 27.1422 20.42 28.3333 19.5042V27.1667ZM34.9167 27.8767C34.8678 27.9746 34.8001 28.062 34.7174 28.1338C34.6347 28.2056 34.5387 28.2604 34.4349 28.2951C34.331 28.3298 34.2213 28.3436 34.1121 28.3359C34.0029 28.3281 33.8963 28.299 33.7983 28.25L32.1317 27.4167C31.9339 27.3179 31.7834 27.1445 31.7134 26.9348C31.6434 26.7251 31.6595 26.4961 31.7583 26.2983C31.8571 26.1005 32.0305 25.9501 32.2402 25.8801C32.4499 25.81 32.6789 25.8262 32.8767 25.925L34.5433 26.7583C34.7401 26.8571 34.8898 27.0297 34.9598 27.2384C35.0297 27.4472 35.0142 27.6751 34.9167 27.8725V27.8767ZM31.7583 20.3767C31.7094 20.2787 31.6802 20.1721 31.6725 20.0629C31.6647 19.9537 31.6786 19.844 31.7133 19.7401C31.7479 19.6363 31.8027 19.5403 31.8745 19.4576C31.9463 19.3749 32.0337 19.3072 32.1317 19.2583L33.7983 18.425C33.9961 18.3262 34.2251 18.31 34.4348 18.3801C34.6445 18.4501 34.8179 18.6005 34.9167 18.7983C35.0155 18.9961 35.0316 19.2251 34.9616 19.4348C34.8916 19.6445 34.7411 19.8179 34.5433 19.9167L32.8767 20.75C32.7787 20.799 32.6721 20.8281 32.5629 20.8359C32.4537 20.8436 32.344 20.8298 32.2401 20.7951C32.1363 20.7604 32.0403 20.7056 31.9576 20.6338C31.8749 20.562 31.8072 20.4746 31.7583 20.3767V20.3767ZM31.6667 23.3333C31.6667 23.1123 31.7545 22.9004 31.9107 22.7441C32.067 22.5878 32.279 22.5 32.5 22.5H34.1667C34.3877 22.5 34.5996 22.5878 34.7559 22.7441C34.9122 22.9004 35 23.1123 35 23.3333C35 23.5543 34.9122 23.7663 34.7559 23.9226C34.5996 24.0789 34.3877 24.1667 34.1667 24.1667H32.5C32.279 24.1667 32.067 24.0789 31.9107 23.9226C31.7545 23.7663 31.6667 23.5543 31.6667 23.3333Z" fill="#2C2C2C" />
                  </svg>
                  <span className='font-Nunito font-extra-bold ml-5 mt-3 text-lg'>Branding & Digital Ads</span>
                </button>
              </div>
            </div>

          </div>
          <div className='grid justify-items-center'>
            <button className='bg-main-color hover:bg-main-hover rounded-lg font-Nunito font-normal text-xs text-white p-3'><span className='m-1'>Lihat detailnya dong</span></button>
          </div>
        </div>
      </section>

      {/* Third Section */}
      <section className='py-16'>
        <div className="grid justify-items-center">
          <div className='w-7 h-1 bg-main-color rounded-lg'></div>
          <p className='pt-2 font-Nunito font-extra-bold text-3xl'>Klien Kami</p>

          {/* Client content */}
          <div className='pt-20 ml-10 md:mx-auto md:w-9/12'>
            <div className='grid grid-cols-3 px-8 md:grid-cols-6 md:px-2 lg:grid-cols-6 lg:items-center gap-8'>
              <img src='/client/CT Corp.svg' />
              <img src='/client/Transmall.svg' />
              <img src='/client/Kyoob.svg' />
              <img src='/client/Mufit.svg' />
              <img src='/client/VBD.svg' />
              <img src='/client/Schoolmedia.svg' />
            </div>
            <div className='grid grid-cols-2 md:grid-cols-4 md:px-2 lg:items-center mt-10 px-10 gap-8'>
              <img src='/client/Al Fajar Bekasi.svg' className='w-3/5' />
              <img src='/client/Peradi.svg' className='mt-3 lg:mt-0 lg:-ml-10' />
              <img src='/client/LSP Menbiska.svg' />
              <img src='/client/Medco.svg' className='mt-2' />
              <img src='/client/Bank DKI.svg' className='mt-4 md:ml-40 lg:ml-48' />
              <img src='/client/Docotel.svg' className='md:ml-40 lg:ml-52' />
            </div>
          </div>
        </div>
      </section>


      {/* Footer */}
      <div className="grid justify-items-center text-center ml-10 py-12 -mt-16 md:w-2/5 md:mx-auto">
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
