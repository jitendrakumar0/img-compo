import React from 'react'

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay, Pagination } from 'swiper/modules';


import blog_1 from '../../assets/img/blog-1.jpg'
import blog_2 from '../../assets/img/blog-2.jpg'
import blog_3 from '../../assets/img/headless-1.jpg'
import blog_4 from '../../assets/img/headless-2.jpg'
import blog_5 from '../../assets/img/headless-3.jpg'
import blog_6 from '../../assets/img/screens-1.jpg'
import blog_7 from '../../assets/img/screens-2.jpg'
import blog_8 from '../../assets/img/screens-3.jpg'
const Blog = () => {
  return (
   <>
   <section className='p-6 lg:px-20 pt-20 pb-8'>
   <main className='max-w-3xl  mx-auto relative z-20  xl:max-w-none'>
    <header className='mb-20 max-w-xl'>
        <p className='mb-4 text-sm leading-6 font-semibold text-sky-500 dark:text-sky-400'>Resources</p>
        <h1 className="mb-2 text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-slate-200">Everything else you need to build awesome Tailwind CSS websites</h1>
        <p className="text-lg text-slate-700 dark:text-slate-400">We think Tailwind is an amazing CSS framework, but you need more than just a CSS framework to produce visually awesome work.</p>
    </header>
    <div className='space-y-16'>
        <section>
            <h2 className="mb-2 text-2xl leading-7 tracking-tight text-slate-900 font-bold dark:text-slate-200">Design resources</h2>
            <div className='mb-10 prose prose-slate text-slate-600 max-w-3xl dark:prose-dark'>
            <p>Design is hard so we made a few resources to help you with it. These resources are a great way to help you with your designs and a great way to support the development of the framework.</p>
            </div>
            
        </section>
    </div>
    <section>
    <div  className='w-max-7xl mx-auto'>
    <Swiper
        slidesPerView={1}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        autoplay={{
            delay: 2500,
            disableOnInteraction:false,
          }}
        modules={[ Autoplay, Pagination]}
        className="mySwiper">
        <SwiperSlide>
            <ul className='sm:space-y-6'>
                <li className='-mx-4 p-4 pb-10 bg-slate-50 flex flex-col-reverse items-start sm:mx-0 sm:p-10 sm:rounded-2xl xl:flex-row dark:bg-slate-800/50'>
                  <div className="flex-auto px-3 md:px-0">
                    <h3 className="mb-4 text-sm leading-6 font-semibold text-blue-500">
                    Refactoring UI
                    </h3>
                    <p className='mb-2 text-xl font-semibold tracking-tight text-slate-900 dark:text-slate-200'>Learn UI Design</p>
                    <div className='mb-6 text-sm leading-6 text-slate-600 space-y-4 dark:text-slate-400'>
                    <p>Refactoring UI is a design-for-developers book + video series put together by Adam Wathan and Steve Schoger. It covers literally everything we know about making things look awesome.</p>
                    <p>Almost 10,000 people have picked it up so far and have all sorts of awesome things to say about how it helped them improve their work.</p>
                    </div>
                    <a class="group inline-flex items-center h-9 rounded-full text-sm font-semibold whitespace-nowrap px-3 focus:outline-none focus:ring-2 bg-slate-700 text-white hover:bg-slate-800 focus:ring-offset-2 focus:ring-offset-slate-50 focus:ring-slate-400 dark:focus:ring-offset-0 dark:bg-slate-700 dark:text-slate-100 dark:hover:bg-slate-600 dark:hover:text-white dark:focus:ring-slate-500" href="https://refactoringui.com/?ref=resources">Learn more<span class="sr-only">, Refactoring UI</span><svg class="overflow-visible ml-3 text-slate-300 group-hover:text-slate-200 dark:text-slate-500 dark:group-hover:text-slate-400" width="3" height="6" viewBox="0 0 3 6" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M0 0L3 3L0 6"></path></svg>
                    </a>
                  </div>
                  <div className='w-full flex-none mb-10 xl:mb-0 xl:ml-8 xl:w-[29rem]'>
                    <div className='aspect-w-[1216] aspect-h-[606] sm:aspect-w-[1376] sm:aspect-h-[664] shadow-lg rounded-lg bg-slate-100 overflow-hidden dark:bg-slate-800'>
                       <img src={blog_1} alt="" />
                        
                    </div>
                  </div>
                </li>
            </ul>
        </SwiperSlide>
        <SwiperSlide>
            <ul className='sm:space-y-6'>
                <li className='-mx-4 p-4 pb-10 bg-slate-50 flex flex-col-reverse items-start sm:mx-0 sm:p-10 sm:rounded-2xl xl:flex-row dark:bg-slate-800/50'>
                  <div className="flex-auto px-3 md:px-0">
                    <h3 className="mb-4 text-sm leading-6 font-semibold text-blue-500">
                    Refactoring UI
                    </h3>
                    <p className='mb-2 text-xl font-semibold tracking-tight text-slate-900 dark:text-slate-200'>Learn UI Design</p>
                    <div className='mb-6 text-sm leading-6 text-slate-600 space-y-4 dark:text-slate-400'>
                    <p>Refactoring UI is a design-for-developers book + video series put together by Adam Wathan and Steve Schoger. It covers literally everything we know about making things look awesome.</p>
                    <p>Almost 10,000 people have picked it up so far and have all sorts of awesome things to say about how it helped them improve their work.</p>
                    </div>
                    <a class="group inline-flex items-center h-9 rounded-full text-sm font-semibold whitespace-nowrap px-3 focus:outline-none focus:ring-2 bg-slate-700 text-white hover:bg-slate-800 focus:ring-offset-2 focus:ring-offset-slate-50 focus:ring-slate-400 dark:focus:ring-offset-0 dark:bg-slate-700 dark:text-slate-100 dark:hover:bg-slate-600 dark:hover:text-white dark:focus:ring-slate-500" href="https://refactoringui.com/?ref=resources">Learn more<span class="sr-only">, Refactoring UI</span><svg class="overflow-visible ml-3 text-slate-300 group-hover:text-slate-200 dark:text-slate-500 dark:group-hover:text-slate-400" width="3" height="6" viewBox="0 0 3 6" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M0 0L3 3L0 6"></path></svg>
                    </a>
                  </div>
                  <div className='w-full flex-none mb-10 xl:mb-0 xl:ml-8 xl:w-[29rem]'>
                    <div className='aspect-w-[1216] aspect-h-[606] sm:aspect-w-[1376] sm:aspect-h-[664] shadow-lg rounded-lg bg-slate-100 overflow-hidden dark:bg-slate-800'>
                       <img src={blog_1} alt="" />
                        
                    </div>
                  </div>
                </li>
            </ul>
        </SwiperSlide>
        <SwiperSlide>
            <ul className='sm:space-y-6'>
                <li className='-mx-4 p-4 pb-10 bg-slate-50 flex flex-col-reverse items-start sm:mx-0 sm:p-10 sm:rounded-2xl xl:flex-row dark:bg-slate-800/50'>
                  <div className="flex-auto px-3 md:px-0">
                    <h3 className="mb-4 text-sm leading-6 font-semibold text-blue-500">
                    Refactoring UI
                    </h3>
                    <p className='mb-2 text-xl font-semibold tracking-tight text-slate-900 dark:text-slate-200'>Learn UI Design</p>
                    <div className='mb-6 text-sm leading-6 text-slate-600 space-y-4 dark:text-slate-400'>
                    <p>Refactoring UI is a design-for-developers book + video series put together by Adam Wathan and Steve Schoger. It covers literally everything we know about making things look awesome.</p>
                    <p>Almost 10,000 people have picked it up so far and have all sorts of awesome things to say about how it helped them improve their work.</p>
                    </div>
                    <a class="group inline-flex items-center h-9 rounded-full text-sm font-semibold whitespace-nowrap px-3 focus:outline-none focus:ring-2 bg-slate-700 text-white hover:bg-slate-800 focus:ring-offset-2 focus:ring-offset-slate-50 focus:ring-slate-400 dark:focus:ring-offset-0 dark:bg-slate-700 dark:text-slate-100 dark:hover:bg-slate-600 dark:hover:text-white dark:focus:ring-slate-500" href="https://refactoringui.com/?ref=resources">Learn more<span class="sr-only">, Refactoring UI</span><svg class="overflow-visible ml-3 text-slate-300 group-hover:text-slate-200 dark:text-slate-500 dark:group-hover:text-slate-400" width="3" height="6" viewBox="0 0 3 6" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M0 0L3 3L0 6"></path></svg>
                    </a>
                  </div>
                  <div className='w-full flex-none mb-10 xl:mb-0 xl:ml-8 xl:w-[29rem]'>
                    <div className='aspect-w-[1216] aspect-h-[606] sm:aspect-w-[1376] sm:aspect-h-[664] shadow-lg rounded-lg bg-slate-100 overflow-hidden dark:bg-slate-800'>
                       <img src={blog_1} alt="" />
                        
                    </div>
                  </div>
                </li>
            </ul>
        </SwiperSlide>
        <SwiperSlide>
            <ul className='sm:space-y-6'>
                <li className='-mx-4 p-4 pb-10 bg-slate-50 flex flex-col-reverse items-start sm:mx-0 sm:p-10 sm:rounded-2xl xl:flex-row dark:bg-slate-800/50'>
                  <div className="flex-auto px-3 md:px-0">
                    <h3 className="mb-4 text-sm leading-6 font-semibold text-blue-500">
                    Refactoring UI
                    </h3>
                    <p className='mb-2 text-xl font-semibold tracking-tight text-slate-900 dark:text-slate-200'>Learn UI Design</p>
                    <div className='mb-6 text-sm leading-6 text-slate-600 space-y-4 dark:text-slate-400'>
                    <p>Refactoring UI is a design-for-developers book + video series put together by Adam Wathan and Steve Schoger. It covers literally everything we know about making things look awesome.</p>
                    <p>Almost 10,000 people have picked it up so far and have all sorts of awesome things to say about how it helped them improve their work.</p>
                    </div>
                    <a class="group inline-flex items-center h-9 rounded-full text-sm font-semibold whitespace-nowrap px-3 focus:outline-none focus:ring-2 bg-slate-700 text-white hover:bg-slate-800 focus:ring-offset-2 focus:ring-offset-slate-50 focus:ring-slate-400 dark:focus:ring-offset-0 dark:bg-slate-700 dark:text-slate-100 dark:hover:bg-slate-600 dark:hover:text-white dark:focus:ring-slate-500" href="https://refactoringui.com/?ref=resources">Learn more<span class="sr-only">, Refactoring UI</span><svg class="overflow-visible ml-3 text-slate-300 group-hover:text-slate-200 dark:text-slate-500 dark:group-hover:text-slate-400" width="3" height="6" viewBox="0 0 3 6" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M0 0L3 3L0 6"></path></svg>
                    </a>
                  </div>
                  <div className='w-full flex-none mb-10 xl:mb-0 xl:ml-8 xl:w-[29rem]'>
                    <div className='aspect-w-[1216] aspect-h-[606] sm:aspect-w-[1376] sm:aspect-h-[664] shadow-lg rounded-lg bg-slate-100 overflow-hidden dark:bg-slate-800'>
                       <img src={blog_1} alt="" />
                        
                    </div>
                  </div>
                </li>
            </ul>
        </SwiperSlide>
        <SwiperSlide>
            <ul className='sm:space-y-6'>
                <li className='-mx-4 p-4 pb-10 bg-slate-50 flex flex-col-reverse items-start sm:mx-0 sm:p-10 sm:rounded-2xl xl:flex-row dark:bg-slate-800/50'>
                  <div className="flex-auto px-3 md:px-0">
                    <h3 className="mb-4 text-sm leading-6 font-semibold text-blue-500">
                    Refactoring UI
                    </h3>
                    <p className='mb-2 text-xl font-semibold tracking-tight text-slate-900 dark:text-slate-200'>Learn UI Design</p>
                    <div className='mb-6 text-sm leading-6 text-slate-600 space-y-4 dark:text-slate-400'>
                    <p>Refactoring UI is a design-for-developers book + video series put together by Adam Wathan and Steve Schoger. It covers literally everything we know about making things look awesome.</p>
                    <p>Almost 10,000 people have picked it up so far and have all sorts of awesome things to say about how it helped them improve their work.</p>
                    </div>
                    <a class="group inline-flex items-center h-9 rounded-full text-sm font-semibold whitespace-nowrap px-3 focus:outline-none focus:ring-2 bg-slate-700 text-white hover:bg-slate-800 focus:ring-offset-2 focus:ring-offset-slate-50 focus:ring-slate-400 dark:focus:ring-offset-0 dark:bg-slate-700 dark:text-slate-100 dark:hover:bg-slate-600 dark:hover:text-white dark:focus:ring-slate-500" href="https://refactoringui.com/?ref=resources">Learn more<span class="sr-only">, Refactoring UI</span><svg class="overflow-visible ml-3 text-slate-300 group-hover:text-slate-200 dark:text-slate-500 dark:group-hover:text-slate-400" width="3" height="6" viewBox="0 0 3 6" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M0 0L3 3L0 6"></path></svg>
                    </a>
                  </div>
                  <div className='w-full flex-none mb-10 xl:mb-0 xl:ml-8 xl:w-[29rem]'>
                    <div className='aspect-w-[1216] aspect-h-[606] sm:aspect-w-[1376] sm:aspect-h-[664] shadow-lg rounded-lg bg-slate-100 overflow-hidden dark:bg-slate-800'>
                       <img src={blog_1} alt="" />
                        
                    </div>
                  </div>
                </li>
            </ul>
        </SwiperSlide>
        <SwiperSlide>
            <ul className='sm:space-y-6'>
                <li className='-mx-4 p-4 pb-10 bg-slate-50 flex flex-col-reverse items-start sm:mx-0 sm:p-10 sm:rounded-2xl xl:flex-row dark:bg-slate-800/50'>
                  <div className="flex-auto px-3 md:px-0">
                    <h3 className="mb-4 text-sm leading-6 font-semibold text-blue-500">
                    Refactoring UI
                    </h3>
                    <p className='mb-2 text-xl font-semibold tracking-tight text-slate-900 dark:text-slate-200'>Learn UI Design</p>
                    <div className='mb-6 text-sm leading-6 text-slate-600 space-y-4 dark:text-slate-400'>
                    <p>Refactoring UI is a design-for-developers book + video series put together by Adam Wathan and Steve Schoger. It covers literally everything we know about making things look awesome.</p>
                    <p>Almost 10,000 people have picked it up so far and have all sorts of awesome things to say about how it helped them improve their work.</p>
                    </div>
                    <a class="group inline-flex items-center h-9 rounded-full text-sm font-semibold whitespace-nowrap px-3 focus:outline-none focus:ring-2 bg-slate-700 text-white hover:bg-slate-800 focus:ring-offset-2 focus:ring-offset-slate-50 focus:ring-slate-400 dark:focus:ring-offset-0 dark:bg-slate-700 dark:text-slate-100 dark:hover:bg-slate-600 dark:hover:text-white dark:focus:ring-slate-500" href="https://refactoringui.com/?ref=resources">Learn more<span class="sr-only">, Refactoring UI</span><svg class="overflow-visible ml-3 text-slate-300 group-hover:text-slate-200 dark:text-slate-500 dark:group-hover:text-slate-400" width="3" height="6" viewBox="0 0 3 6" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M0 0L3 3L0 6"></path></svg>
                    </a>
                  </div>
                  <div className='w-full flex-none mb-10 xl:mb-0 xl:ml-8 xl:w-[29rem]'>
                    <div className='aspect-w-[1216] aspect-h-[606] sm:aspect-w-[1376] sm:aspect-h-[664] shadow-lg rounded-lg bg-slate-100 overflow-hidden dark:bg-slate-800'>
                       <img src={blog_1} alt="" />
                        
                    </div>
                  </div>
                </li>
            </ul>
        </SwiperSlide>
       
      </Swiper>
    </div>
   </section>
   {/* <section>
    <div  className='w-max-7xl mx-auto mt-8'>
    <Swiper
        slidesPerView={1}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        autoplay={{
            delay: 2500,
            disableOnInteraction:false,
          }}
        modules={[ Autoplay, Pagination]}
        className="mySwiper">
        <SwiperSlide>
            <ul className='sm:space-y-6'>
                <li className='-mx-4 p-4 pb-10 bg-slate-50 flex flex-col-reverse items-start sm:mx-0 sm:p-10 sm:rounded-2xl xl:flex-row dark:bg-slate-800/50'>
                  <div className="flex-auto px-3 md:px-0">
                    <h3 className="mb-4 text-sm leading-6 font-semibold text-sky-500">
                    Tailwind UI
                    </h3>
                    <p className='mb-2 text-xl font-semibold tracking-tight text-slate-900 dark:text-slate-200'>Beautiful UI components, crafted by the creators of Tailwind CSS</p>
                    <div className='mb-6 text-sm leading-6 text-slate-600 space-y-4 dark:text-slate-400'>
                    <p>Refactoring UI is a design-for-developers book + video series put together by Adam Wathan and Steve Schoger. It covers literally everything we know about making things look awesome.</p>
                    <p>Almost 10,000 people have picked it up so far and have all sorts of awesome things to say about how it helped them improve their work.</p>
                    </div>
                    <a class="group inline-flex items-center h-9 rounded-full text-sm font-semibold whitespace-nowrap px-3 focus:outline-none focus:ring-2 bg-slate-700 text-white hover:bg-slate-800 focus:ring-offset-2 focus:ring-offset-slate-50 focus:ring-slate-400 dark:focus:ring-offset-0 dark:bg-slate-700 dark:text-slate-100 dark:hover:bg-slate-600 dark:hover:text-white dark:focus:ring-slate-500" href="https://refactoringui.com/?ref=resources">Learn more<span class="sr-only">, Refactoring UI</span><svg class="overflow-visible ml-3 text-slate-300 group-hover:text-slate-200 dark:text-slate-500 dark:group-hover:text-slate-400" width="3" height="6" viewBox="0 0 3 6" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M0 0L3 3L0 6"></path></svg>
                    </a>
                  </div>
                  <div className='w-full flex-none mb-10 xl:mb-0 xl:ml-8 xl:w-[29rem]'>
                    <div className='aspect-w-[1216] aspect-h-[606] sm:aspect-w-[1376] sm:aspect-h-[664] shadow-lg rounded-lg bg-slate-100 overflow-hidden dark:bg-slate-800'>
                       <img src={blog_2} alt="" />
                        
                    </div>
                  </div>
                </li>
            </ul>
        </SwiperSlide>
        <SwiperSlide>
            <ul className='sm:space-y-6'>
                <li className='-mx-4 p-4 pb-10 bg-slate-50 flex flex-col-reverse items-start sm:mx-0 sm:p-10 sm:rounded-2xl xl:flex-row dark:bg-slate-800/50'>
                  <div className="flex-auto px-3 md:px-0">
                    <h3 className="mb-4 text-sm leading-6 font-semibold text-sky-500">
                    Tailwind UI
                    </h3>
                    <p className='mb-2 text-xl font-semibold tracking-tight text-slate-900 dark:text-slate-200'>Beautiful UI components, crafted by the creators of Tailwind CSS</p>
                    <div className='mb-6 text-sm leading-6 text-slate-600 space-y-4 dark:text-slate-400'>
                    <p>Refactoring UI is a design-for-developers book + video series put together by Adam Wathan and Steve Schoger. It covers literally everything we know about making things look awesome.</p>
                    <p>Almost 10,000 people have picked it up so far and have all sorts of awesome things to say about how it helped them improve their work.</p>
                    </div>
                    <a class="group inline-flex items-center h-9 rounded-full text-sm font-semibold whitespace-nowrap px-3 focus:outline-none focus:ring-2 bg-slate-700 text-white hover:bg-slate-800 focus:ring-offset-2 focus:ring-offset-slate-50 focus:ring-slate-400 dark:focus:ring-offset-0 dark:bg-slate-700 dark:text-slate-100 dark:hover:bg-slate-600 dark:hover:text-white dark:focus:ring-slate-500" href="https://refactoringui.com/?ref=resources">Learn more<span class="sr-only">, Refactoring UI</span><svg class="overflow-visible ml-3 text-slate-300 group-hover:text-slate-200 dark:text-slate-500 dark:group-hover:text-slate-400" width="3" height="6" viewBox="0 0 3 6" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M0 0L3 3L0 6"></path></svg>
                    </a>
                  </div>
                  <div className='w-full flex-none mb-10 xl:mb-0 xl:ml-8 xl:w-[29rem]'>
                    <div className='aspect-w-[1216] aspect-h-[606] sm:aspect-w-[1376] sm:aspect-h-[664] shadow-lg rounded-lg bg-slate-100 overflow-hidden dark:bg-slate-800'>
                       <img src={blog_2} alt="" />
                        
                    </div>
                  </div>
                </li>
            </ul>
        </SwiperSlide>
        <SwiperSlide>
            <ul className='sm:space-y-6'>
                <li className='-mx-4 p-4 pb-10 bg-slate-50 flex flex-col-reverse items-start sm:mx-0 sm:p-10 sm:rounded-2xl xl:flex-row dark:bg-slate-800/50'>
                  <div className="flex-auto px-3 md:px-0">
                    <h3 className="mb-4 text-sm leading-6 font-semibold text-sky-500">
                    Tailwind UI
                    </h3>
                    <p className='mb-2 text-xl font-semibold tracking-tight text-slate-900 dark:text-slate-200'>Beautiful UI components, crafted by the creators of Tailwind CSS</p>
                    <div className='mb-6 text-sm leading-6 text-slate-600 space-y-4 dark:text-slate-400'>
                    <p>Refactoring UI is a design-for-developers book + video series put together by Adam Wathan and Steve Schoger. It covers literally everything we know about making things look awesome.</p>
                    <p>Almost 10,000 people have picked it up so far and have all sorts of awesome things to say about how it helped them improve their work.</p>
                    </div>
                    <a class="group inline-flex items-center h-9 rounded-full text-sm font-semibold whitespace-nowrap px-3 focus:outline-none focus:ring-2 bg-slate-700 text-white hover:bg-slate-800 focus:ring-offset-2 focus:ring-offset-slate-50 focus:ring-slate-400 dark:focus:ring-offset-0 dark:bg-slate-700 dark:text-slate-100 dark:hover:bg-slate-600 dark:hover:text-white dark:focus:ring-slate-500" href="https://refactoringui.com/?ref=resources">Learn more<span class="sr-only">, Refactoring UI</span><svg class="overflow-visible ml-3 text-slate-300 group-hover:text-slate-200 dark:text-slate-500 dark:group-hover:text-slate-400" width="3" height="6" viewBox="0 0 3 6" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M0 0L3 3L0 6"></path></svg>
                    </a>
                  </div>
                  <div className='w-full flex-none mb-10 xl:mb-0 xl:ml-8 xl:w-[29rem]'>
                    <div className='aspect-w-[1216] aspect-h-[606] sm:aspect-w-[1376] sm:aspect-h-[664] shadow-lg rounded-lg bg-slate-100 overflow-hidden dark:bg-slate-800'>
                       <img src={blog_2} alt="" />
                        
                    </div>
                  </div>
                </li>
            </ul>
        </SwiperSlide>
        <SwiperSlide>
            <ul className='sm:space-y-6'>
                <li className='-mx-4 p-4 pb-10 bg-slate-50 flex flex-col-reverse items-start sm:mx-0 sm:p-10 sm:rounded-2xl xl:flex-row dark:bg-slate-800/50'>
                  <div className="flex-auto px-3 md:px-0">
                    <h3 className="mb-4 text-sm leading-6 font-semibold text-sky-500">
                    Tailwind UI
                    </h3>
                    <p className='mb-2 text-xl font-semibold tracking-tight text-slate-900 dark:text-slate-200'>Beautiful UI components, crafted by the creators of Tailwind CSS</p>
                    <div className='mb-6 text-sm leading-6 text-slate-600 space-y-4 dark:text-slate-400'>
                    <p>Refactoring UI is a design-for-developers book + video series put together by Adam Wathan and Steve Schoger. It covers literally everything we know about making things look awesome.</p>
                    <p>Almost 10,000 people have picked it up so far and have all sorts of awesome things to say about how it helped them improve their work.</p>
                    </div>
                    <a class="group inline-flex items-center h-9 rounded-full text-sm font-semibold whitespace-nowrap px-3 focus:outline-none focus:ring-2 bg-slate-700 text-white hover:bg-slate-800 focus:ring-offset-2 focus:ring-offset-slate-50 focus:ring-slate-400 dark:focus:ring-offset-0 dark:bg-slate-700 dark:text-slate-100 dark:hover:bg-slate-600 dark:hover:text-white dark:focus:ring-slate-500" href="https://refactoringui.com/?ref=resources">Learn more<span class="sr-only">, Refactoring UI</span><svg class="overflow-visible ml-3 text-slate-300 group-hover:text-slate-200 dark:text-slate-500 dark:group-hover:text-slate-400" width="3" height="6" viewBox="0 0 3 6" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M0 0L3 3L0 6"></path></svg>
                    </a>
                  </div>
                  <div className='w-full flex-none mb-10 xl:mb-0 xl:ml-8 xl:w-[29rem]'>
                    <div className='aspect-w-[1216] aspect-h-[606] sm:aspect-w-[1376] sm:aspect-h-[664] shadow-lg rounded-lg bg-slate-100 overflow-hidden dark:bg-slate-800'>
                       <img src={blog_2} alt="" />
                        
                    </div>
                  </div>
                </li>
            </ul>
        </SwiperSlide>
        <SwiperSlide>
            <ul className='sm:space-y-6'>
                <li className='-mx-4 p-4 pb-10 bg-slate-50 flex flex-col-reverse items-start sm:mx-0 sm:p-10 sm:rounded-2xl xl:flex-row dark:bg-slate-800/50'>
                  <div className="flex-auto px-3 md:px-0">
                    <h3 className="mb-4 text-sm leading-6 font-semibold text-sky-500">
                    Tailwind UI
                    </h3>
                    <p className='mb-2 text-xl font-semibold tracking-tight text-slate-900 dark:text-slate-200'>Beautiful UI components, crafted by the creators of Tailwind CSS</p>
                    <div className='mb-6 text-sm leading-6 text-slate-600 space-y-4 dark:text-slate-400'>
                    <p>Refactoring UI is a design-for-developers book + video series put together by Adam Wathan and Steve Schoger. It covers literally everything we know about making things look awesome.</p>
                    <p>Almost 10,000 people have picked it up so far and have all sorts of awesome things to say about how it helped them improve their work.</p>
                    </div>
                    <a class="group inline-flex items-center h-9 rounded-full text-sm font-semibold whitespace-nowrap px-3 focus:outline-none focus:ring-2 bg-slate-700 text-white hover:bg-slate-800 focus:ring-offset-2 focus:ring-offset-slate-50 focus:ring-slate-400 dark:focus:ring-offset-0 dark:bg-slate-700 dark:text-slate-100 dark:hover:bg-slate-600 dark:hover:text-white dark:focus:ring-slate-500" href="https://refactoringui.com/?ref=resources">Learn more<span class="sr-only">, Refactoring UI</span><svg class="overflow-visible ml-3 text-slate-300 group-hover:text-slate-200 dark:text-slate-500 dark:group-hover:text-slate-400" width="3" height="6" viewBox="0 0 3 6" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M0 0L3 3L0 6"></path></svg>
                    </a>
                  </div>
                  <div className='w-full flex-none mb-10 xl:mb-0 xl:ml-8 xl:w-[29rem]'>
                    <div className='aspect-w-[1216] aspect-h-[606] sm:aspect-w-[1376] sm:aspect-h-[664] shadow-lg rounded-lg bg-slate-100 overflow-hidden dark:bg-slate-800'>
                       <img src={blog_2} alt="" />
                        
                    </div>
                  </div>
                </li>
            </ul>
        </SwiperSlide>
        <SwiperSlide>
            <ul className='sm:space-y-6'>
                <li className='-mx-4 p-4 pb-10 bg-slate-50 flex flex-col-reverse items-start sm:mx-0 sm:p-10 sm:rounded-2xl xl:flex-row dark:bg-slate-800/50'>
                  <div className="flex-auto px-3 md:px-0">
                    <h3 className="mb-4 text-sm leading-6 font-semibold text-sky-500">
                    Tailwind UI
                    </h3>
                    <p className='mb-2 text-xl font-semibold tracking-tight text-slate-900 dark:text-slate-200'>Beautiful UI components, crafted by the creators of Tailwind CSS</p>
                    <div className='mb-6 text-sm leading-6 text-slate-600 space-y-4 dark:text-slate-400'>
                    <p>Refactoring UI is a design-for-developers book + video series put together by Adam Wathan and Steve Schoger. It covers literally everything we know about making things look awesome.</p>
                    <p>Almost 10,000 people have picked it up so far and have all sorts of awesome things to say about how it helped them improve their work.</p>
                    </div>
                    <a class="group inline-flex items-center h-9 rounded-full text-sm font-semibold whitespace-nowrap px-3 focus:outline-none focus:ring-2 bg-slate-700 text-white hover:bg-slate-800 focus:ring-offset-2 focus:ring-offset-slate-50 focus:ring-slate-400 dark:focus:ring-offset-0 dark:bg-slate-700 dark:text-slate-100 dark:hover:bg-slate-600 dark:hover:text-white dark:focus:ring-slate-500" href="https://refactoringui.com/?ref=resources">Learn more<span class="sr-only">, Refactoring UI</span><svg class="overflow-visible ml-3 text-slate-300 group-hover:text-slate-200 dark:text-slate-500 dark:group-hover:text-slate-400" width="3" height="6" viewBox="0 0 3 6" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M0 0L3 3L0 6"></path></svg>
                    </a>
                  </div>
                  <div className='w-full flex-none mb-10 xl:mb-0 xl:ml-8 xl:w-[29rem]'>
                    <div className='aspect-w-[1216] aspect-h-[606] sm:aspect-w-[1376] sm:aspect-h-[664] shadow-lg rounded-lg bg-slate-100 overflow-hidden dark:bg-slate-800'>
                       <img src={blog_2} alt="" />
                        
                    </div>
                  </div>
                </li>
            </ul>
        </SwiperSlide>
       
      </Swiper>
    </div>
   </section> */}
   <section>
    <h2 className='mb-2 text-2xl leading-7 tracking-tight mt-16 text-slate-900 font-bold dark:text-slate-200'>
        Additional resources
    </h2>
    <div className='mb-10 prose prose-slate text-slate-600 max-w-3xl dark:prose-dark'>
    <p>Tailwind isn’t the only open-source project we maintain. We’ve made a few other resources to help you with your design and development workflow.
    </p>  
    </div>
    <ul className='grid grid-cols-1 xl:grid-cols-3 gap-y-10 gap-x-6 items-start'>
        <li className='relative flex flex-col sm:flex-row xl:flex-col md:p-3 rounded-xl duration-300 md:hover:-translate-y-1 items-start group md:hover:shadow-2xl cursor-pointer'>
            <div className='order-1 sm:ml-6 xl:ml-0'>
            <div className='flex justify-between items-center mb-2'>
             
            <div className='text-sm font-semibold text-indigo-500'>Mar 06, 2024</div>
            
            <div class="rounded-full bg-gray-50 px-3 py-1.5 text-sm text-gray-600 hover:bg-gray-100">Mobile App</div>
            
            </div>
                <h3 className='mb-1 text-slate-900 font-semibold dark:text-slate-200'> 
                Completely unstyled, fully accessible UI components 
                </h3>
                <div class="prose prose-slate prose-sm text-slate-600 dark:prose-dark"><p>Completely unstyled, fully accessible UI components, designed to integrate beautifully with Tailwind CSS.</p>
                </div>
                <div class="relative mt-2 flex items-center gap-x-4">
                               <img src={blog_6} alt="" class="h-10 w-10 object-cover rounded-full bg-gray-50" />
                                <div class="text-sm leading-6">
                                    <p class="font-semibold text-indigo-500">Written by</p>
                                    <p class="text-gray-600">David Luis</p>
                                </div>
                            </div>
              
            </div>
            <img src={blog_3} alt="" className='shadow-md rounded-lg bg-slate-50 w-full mb-2  xl:w-full before:absolute before:size-full' width="1216" height="640" />
            
        </li>
        <li className='relative flex flex-col sm:flex-row xl:flex-col md:p-3 rounded-xl duration-300 md:hover:-translate-y-1 items-start group md:hover:shadow-2xl cursor-pointer'>
            <div className='order-1 sm:ml-6 xl:ml-0'>
            <div className='flex justify-between items-center mb-2'>
             
            <div className='text-sm font-semibold text-purple-500'>Mar 06, 2024</div>
            
            <div class="rounded-full bg-gray-50 px-3 py-1.5 text-sm text-gray-600 hover:bg-gray-100">Mobile App</div>
            
            </div>
                <h3 className='mb-1 text-slate-900 font-semibold dark:text-slate-200'> 
                Completely unstyled, fully accessible UI components 
                </h3>
                <div class="prose prose-slate prose-sm text-slate-600 dark:prose-dark"><p>Completely unstyled, fully accessible UI components, designed to integrate beautifully with Tailwind CSS.</p>
                </div>
                <div class="relative mt-2 flex items-center gap-x-4">
                               <img src={blog_6} alt="" class="h-10 w-10 object-cover rounded-full bg-gray-50" />
                                <div class="text-sm leading-6">
                                    <p class="font-semibold text-purple-500">Written by</p>
                                    <p class="text-gray-600">David Luis</p>
                                </div>
                            </div>
              
            </div>
            <img src={blog_4} alt="" className='shadow-md rounded-lg bg-slate-50 w-full mb-2  xl:w-full before:absolute before:size-full' width="1216" height="640" />
            
        </li>
        <li className='relative flex flex-col sm:flex-row xl:flex-col md:p-3 rounded-xl duration-300 md:hover:-translate-y-1 items-start group md:hover:shadow-2xl cursor-pointer'>
            <div className='order-1 sm:ml-6 xl:ml-0'>
            <div className='flex justify-between items-center mb-2'>
             
            <div className='text-sm font-semibold text-cyan-500'>Mar 06, 2024</div>
            
            <div class="rounded-full bg-gray-50 px-3 py-1.5 text-sm text-gray-600 hover:bg-gray-100">Mobile App</div>
            
            </div>
                <h3 className='mb-1 text-slate-900 font-semibold dark:text-slate-200'> 
                Completely unstyled, fully accessible UI components 
                </h3>
                <div class="prose prose-slate prose-sm text-slate-600 dark:prose-dark"><p>Completely unstyled, fully accessible UI components, designed to integrate beautifully with Tailwind CSS.</p>
                </div>
                <div class="relative mt-2 flex items-center gap-x-4">
                               <img src={blog_6} alt="" class="h-10 w-10 object-cover rounded-full bg-gray-50" />
                                <div class="text-sm leading-6">
                                    <p class="font-semibold text-cyan-500">Written by</p>
                                    <p class="text-gray-600">David Luis</p>
                                </div>
                            </div>
              
            </div>
            <img src={blog_5} alt="" className='shadow-md rounded-lg bg-slate-50 w-full mb-2  xl:w-full before:absolute before:size-full' width="1216" height="640" />
            
        </li>
    </ul>
   </section>
   <section className='border-t border-slate-100 mt-16 dark:border-slate-200/5'>
    <h2 className='mb-2 pt-16 text-xl tracking-tight text-slate-900 font-bold dark:text-slate-200'>
        Screencasts
        </h2>
        <div class="mb-10 prose prose-slate text-slate-600 max-w-3xl dark:prose-dark"><p>Head over to our official YouTube channel and dive into dozens of videos that will teach you everything from Tailwind basics to advanced concepts.</p>
        </div>
        <ul className='grid grid-cols-1 xl:grid-cols-3 gap-y-10 gap-x-6 items-start mb-10'>
            <li className='relative flex flex-col sm:flex-row xl:flex-col items-start'>
                <div className='order-1 sm:ml-6 xl:ml-0'>
                <h3 class="mb-1 text-slate-900 font-semibold dark:text-slate-200"><a href="https://www.youtube.com/watch?v=cZc4Jn5nK3k" class="before:absolute before:inset-0 hover:text-slate-600 dark:hover:text-white"><span class="mb-1 block text-sm leading-6 text-sky-500">Fundamentals</span>Translating a Custom Design System to Tailwind CSS</a></h3>
                <div class="prose prose-slate prose-sm text-slate-600 dark:prose-dark"><p>Learn how to configure Tailwind to create your own utility framework tuned specifically for your project.
                </p>
                </div>
                </div>
                <img src={blog_6} alt="" className="mb-6 shadow-md rounded-lg bg-slate-50 w-full sm:w-[17rem] sm:mb-0 xl:mb-6 xl:w-full" width="1216" height="640"/>
            </li>
            <li className='relative flex flex-col sm:flex-row xl:flex-col items-start'>
                <div className='order-1 sm:ml-6 xl:ml-0'>
                <h3 class="mb-1 text-slate-900 font-semibold dark:text-slate-200"><a href="https://www.youtube.com/watch?v=cZc4Jn5nK3k" class="before:absolute before:inset-0 hover:text-slate-600 dark:hover:text-white"><span class="mb-1 block text-sm leading-6 text-pink-500">Fundamentals</span>Adding Tailwind CSS to an Existing Project</a></h3>
                <div class="prose prose-slate prose-sm text-slate-600 dark:prose-dark"><p>Learn how to configure Tailwind to create your own utility framework tuned specifically for your project.
                </p>
                </div>
                </div>
                <img src={blog_7} alt="" className="mb-6 shadow-md rounded-lg bg-slate-50 w-full sm:w-[17rem] sm:mb-0 xl:mb-6 xl:w-full" width="1216" height="640"/>
            </li>
            <li className='relative flex flex-col sm:flex-row xl:flex-col items-start'>
                <div className='order-1 sm:ml-6 xl:ml-0'>
                <h3 class="mb-1 text-slate-900 font-semibold dark:text-slate-200"><a href="https://www.youtube.com/watch?v=cZc4Jn5nK3k" class="before:absolute before:inset-0 hover:text-slate-600 dark:hover:text-white">
                    <span class="mb-1 block text-sm leading-6 text-indigo-500">How we’d build it</span>
                    Building a Headless Ecommerce Store with Tailwind CSS, Shopify, and Next.js</a>
                    </h3>
                <div class="prose prose-slate prose-sm text-slate-600 dark:prose-dark"><p>Learn how to configure Tailwind to create your own utility framework tuned specifically for your project.
                </p>
                </div>
                </div>
                <img src={blog_8} alt="" className="mb-6 shadow-md rounded-lg bg-slate-50 w-full sm:w-[17rem] sm:mb-0 xl:mb-6 xl:w-full" width="1216" height="640"/>
            </li>
        </ul>
        <a class="group inline-flex items-center h-9 rounded-full text-sm font-semibold whitespace-nowrap px-3 focus:outline-none focus:ring-2 bg-slate-100 text-slate-700 hover:bg-slate-200 hover:text-slate-900 focus:ring-slate-500 dark:bg-slate-700 dark:text-slate-100 dark:hover:bg-slate-600 dark:hover:text-white dark:focus:ring-slate-500" href="https://www.youtube.com/tailwindlabs">
            See all our screencasts
        <svg class="overflow-visible ml-3 text-slate-300 group-hover:text-slate-400 dark:text-slate-500 dark:group-hover:text-slate-400" width="3" height="6" viewBox="0 0 3 6" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M0 0L3 3L0 6"></path>
        </svg>
        </a>
   </section>
   <section className='border-t border-slate-100 mt-16 dark:border-slate-200/5'>
    <h2 className='mb-2 pt-6 text-xl tracking-tight text-slate-900 font-bold dark:text-slate-200'>
        Connect and contribute
        </h2>
        <div class="mb-10 prose prose-slate text-slate-600 max-w-3xl dark:prose-dark">
            <p>Whether you're a beginner or an advanced user, getting involved in the Tailwind community is a great way to connect with like-minded folks who are building awesome things with the framework.
            </p>
            </div>
            <ul className='grid grid-cols-1 gap-y-10 gap-x-16 sm:grid-cols-2'>
                <li className='relative flex flex-row-reverse'>
                    <div className='peer group flex-auto px-3 md:px-0 ml-6'>
                        <h3 className='mb-2 font-semibold text-slate-900 dark:text-slate-200'>
                        <a href="/discord" class="before:absolute before:-inset-3 before:rounded-2xl sm:before:-inset-4">
                            Discord
                        <svg viewBox="0 0 3 6" class="ml-3 w-auto h-1.5 overflow-visible inline -mt-px text-slate-400 opacity-0 group-hover:opacity-100 group-focus-within:opacity-100"><path d="M0 0L3 3L0 6" fill="none" stroke-width="2" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path>
                        </svg>
                        </a>
                        </h3>
                        <p class="text-sm leading-6 text-slate-600 dark:text-slate-400">Join over 10,000 members on the Discord group to chat about Tailwind and other related topics.
                        </p>
                    </div>
                    <div className='flex-none size-16  rounded-full shadow overflow-hidden pointer-events-none ring-1 ring-slate-900/10 dark:bg-indigo-500 dark:ring-0 dark:highlight-white/20'>
                   <div className='relative pt-full rounded-full ring-1 ring-inset size-full ring-slate-900/5 bg-[#838CF1]/[0.15] dark:bg-indigo-700'>
                    <div className='absolute inset-0 flex items-center justify-center'>
                    <svg viewBox="0 0 24 26" fill="#838CF1" xmlns="http://www.w3.org/2000/svg" class="w-6 h-auto dark:fill-indigo-200">
                        <path d="M9.434 10C8.632 10 8 10.675 8 11.5S8.646 13 9.434 13c.801 0 1.434-.675 1.434-1.5.014-.825-.633-1.5-1.434-1.5zm5.132 0c-.801 0-1.434.675-1.434 1.5s.646 1.5 1.434 1.5c.802 0 1.434-.675 1.434-1.5s-.632-1.5-1.434-1.5z"></path>
                    <path d="M21.188 0H2.812c-.37 0-.737.07-1.078.206a2.832 2.832 0 00-.913.58 2.666 2.666 0 00-.609.869A2.55 2.55 0 000 2.677v17.577c0 .351.071.698.212 1.023.141.324.348.62.609.868s.571.446.913.58c.341.136.708.206 1.078.206h15.55l-.726-2.404 1.756 1.547 1.659 1.456L24 26V2.678c0-.35-.071-.698-.212-1.022a2.667 2.667 0 00-.609-.868 2.833 2.833 0 00-.913-.581A2.953 2.953 0 0021.188 0zm-5.294 16.978s-.493-.559-.905-1.053c1.797-.481 2.482-1.547 2.482-1.547a7.997 7.997 0 01-1.577.766 9.396 9.396 0 01-1.988.56c-1.175.205-2.38.2-3.552-.013a11.992 11.992 0 01-2.016-.559 8.246 8.246 0 01-1-.442c-.043-.026-.083-.04-.124-.065a.173.173 0 01-.055-.039c-.247-.13-.384-.221-.384-.221s.659 1.04 2.4 1.534c-.412.494-.92 1.079-.92 1.079-3.03-.09-4.181-1.976-4.181-1.976 0-4.186 1.974-7.58 1.974-7.58C8.023 6.02 9.9 6.059 9.9 6.059l.138.157C7.57 6.89 6.432 7.917 6.432 7.917s.301-.156.809-.377c1.467-.61 2.633-.78 3.113-.819.083-.013.15-.026.234-.026a11.704 11.704 0 016.898 1.223s-1.085-.976-3.416-1.653l.193-.207s1.88-.04 3.853 1.365c0 0 1.975 3.394 1.975 7.579 0 0-1.166 1.885-4.197 1.976z"></path>
                    </svg>
                    </div>
                   </div>
                    </div>
                    <div class="absolute -z-10 -inset-3 rounded-2xl bg-slate-50 dark:bg-slate-800/50 opacity-0 peer-hover:opacity-100 sm:-inset-4"></div>
                </li>
                <li className='relative flex flex-row-reverse'>
                    <div className='peer group flex-auto px-3 md:px-0 ml-6'>
                        <h3 className='mb-2 font-semibold text-slate-900 dark:text-slate-200'>
                        <a href="/discord" class="before:absolute before:-inset-3 before:rounded-2xl sm:before:-inset-4">
                            Discord
                        <svg viewBox="0 0 3 6" class="ml-3 w-auto h-1.5 overflow-visible inline -mt-px text-slate-400 opacity-0 group-hover:opacity-100 group-focus-within:opacity-100"><path d="M0 0L3 3L0 6" fill="none" stroke-width="2" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path>
                        </svg>
                        </a>
                        </h3>
                        <p class="text-sm leading-6 text-slate-600 dark:text-slate-400">Join over 10,000 members on the Discord group to chat about Tailwind and other related topics.
                        </p>
                    </div>
                    <div className='flex-none size-16  rounded-full shadow overflow-hidden pointer-events-none ring-1 ring-slate-900/10 dark:bg-slate-900 dark:ring-0 dark:highlight-white/20'>
                   <div className='relative pt-full rounded-full ring-1 ring-inset size-full ring-slate-900/5 bg-[#838CF1]/[0.15] dark:bg-slate-900'>
                    <div className='absolute inset-0 flex items-center justify-center'>
                    <svg viewBox="0 0 24 26" fill="#838CF1" xmlns="http://www.w3.org/2000/svg" class="w-6 h-auto dark:fill-indigo-200">
                        <path d="M9.434 10C8.632 10 8 10.675 8 11.5S8.646 13 9.434 13c.801 0 1.434-.675 1.434-1.5.014-.825-.633-1.5-1.434-1.5zm5.132 0c-.801 0-1.434.675-1.434 1.5s.646 1.5 1.434 1.5c.802 0 1.434-.675 1.434-1.5s-.632-1.5-1.434-1.5z"></path>
                    <path d="M21.188 0H2.812c-.37 0-.737.07-1.078.206a2.832 2.832 0 00-.913.58 2.666 2.666 0 00-.609.869A2.55 2.55 0 000 2.677v17.577c0 .351.071.698.212 1.023.141.324.348.62.609.868s.571.446.913.58c.341.136.708.206 1.078.206h15.55l-.726-2.404 1.756 1.547 1.659 1.456L24 26V2.678c0-.35-.071-.698-.212-1.022a2.667 2.667 0 00-.609-.868 2.833 2.833 0 00-.913-.581A2.953 2.953 0 0021.188 0zm-5.294 16.978s-.493-.559-.905-1.053c1.797-.481 2.482-1.547 2.482-1.547a7.997 7.997 0 01-1.577.766 9.396 9.396 0 01-1.988.56c-1.175.205-2.38.2-3.552-.013a11.992 11.992 0 01-2.016-.559 8.246 8.246 0 01-1-.442c-.043-.026-.083-.04-.124-.065a.173.173 0 01-.055-.039c-.247-.13-.384-.221-.384-.221s.659 1.04 2.4 1.534c-.412.494-.92 1.079-.92 1.079-3.03-.09-4.181-1.976-4.181-1.976 0-4.186 1.974-7.58 1.974-7.58C8.023 6.02 9.9 6.059 9.9 6.059l.138.157C7.57 6.89 6.432 7.917 6.432 7.917s.301-.156.809-.377c1.467-.61 2.633-.78 3.113-.819.083-.013.15-.026.234-.026a11.704 11.704 0 016.898 1.223s-1.085-.976-3.416-1.653l.193-.207s1.88-.04 3.853 1.365c0 0 1.975 3.394 1.975 7.579 0 0-1.166 1.885-4.197 1.976z"></path>
                    </svg>
                    </div>
                   </div>
                    </div>
                    <div class="absolute -z-10 -inset-3 rounded-2xl bg-slate-50 dark:bg-slate-800/50 opacity-0 peer-hover:opacity-100 sm:-inset-4"></div>
                </li>
            </ul>

   </section>
   
   </main>
   <footer class="text-sm leading-6 mt-16">
    <div class="pt-10 pb-28 border-t border-slate-200 sm:flex justify-between text-slate-500 dark:border-slate-200/5">
    <div class="mb-6 sm:mb-0 sm:flex">
    <p>Copyright © 2024 Tailwind Labs Inc.</p><p class="sm:ml-4 sm:pl-4 sm:border-l sm:border-slate-200 dark:sm:border-slate-200/5"><a class="hover:text-slate-900 dark:hover:text-slate-400" href="/brand">Trademark Policy</a>
   </p>
   </div>
   <div class="flex space-x-10 text-slate-400 dark:text-slate-500"><a href="https://github.com/tailwindlabs/tailwindcss" class="hover:text-slate-500 dark:hover:text-slate-400"><span class="sr-only">GitHub</span
   ><svg width="25" height="24" fill="currentColor">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M12.846 0c-6.63 0-12 5.506-12 12.303 0 5.445 3.435 10.043 8.205 11.674.6.107.825-.262.825-.585 0-.292-.015-1.261-.015-2.291-3.015.569-3.795-.754-4.035-1.446-.135-.354-.72-1.446-1.23-1.738-.42-.23-1.02-.8-.015-.815.945-.015 1.62.892 1.845 1.261 1.08 1.86 2.805 1.338 3.495 1.015.105-.8.42-1.338.765-1.645-2.67-.308-5.46-1.37-5.46-6.075 0-1.338.465-2.446 1.23-3.307-.12-.308-.54-1.569.12-3.26 0 0 1.005-.323 3.3 1.26.96-.276 1.98-.415 3-.415s2.04.139 3 .416c2.295-1.6 3.3-1.261 3.3-1.261.66 1.691.24 2.952.12 3.26.765.861 1.23 1.953 1.23 3.307 0 4.721-2.805 5.767-5.475 6.075.435.384.81 1.122.81 2.276 0 1.645-.015 2.968-.015 3.383 0 .323.225.707.825.585a12.047 12.047 0 0 0 5.919-4.489 12.537 12.537 0 0 0 2.256-7.184c0-6.798-5.37-12.304-12-12.304Z"></path>
    </svg>
    </a>
    <a href="/discord" class="hover:text-slate-500 dark:hover:text-slate-400"><span class="sr-only">Discord</span><svg width="23" height="24" fill="currentColor">
    <path d="M9.555 9.23c-.74 0-1.324.624-1.324 1.385S8.827 12 9.555 12c.739 0 1.323-.624 1.323-1.385.013-.761-.584-1.385-1.323-1.385Zm4.737 0c-.74 0-1.324.624-1.324 1.385S13.564 12 14.292 12c.74 0 1.324-.624 1.324-1.385s-.584-1.385-1.324-1.385Z"></path>
   <path d="M20.404 0H3.442c-.342 0-.68.065-.995.19a2.614 2.614 0 0 0-.843.536 2.46 2.46 0 0 0-.562.801c-.13.3-.197.62-.196.944v16.225c0 .324.066.645.196.944.13.3.321.572.562.801.241.23.527.412.843.537.315.124.653.189.995.19h14.354l-.67-2.22 1.62 1.428 1.532 1.344L23 24V2.472c0-.324-.066-.644-.196-.944a2.46 2.46 0 0 0-.562-.8A2.614 2.614 0 0 0 21.4.19a2.726 2.726 0 0 0-.995-.19V0Zm-4.886 15.672s-.456-.516-.836-.972c1.659-.444 2.292-1.428 2.292-1.428a7.38 7.38 0 0 1-1.456.707 8.67 8.67 0 0 1-1.836.517 9.347 9.347 0 0 1-3.279-.012 11.074 11.074 0 0 1-1.86-.516 7.621 7.621 0 0 1-.924-.409c-.039-.023-.076-.035-.113-.06-.027-.011-.04-.023-.052-.035-.228-.12-.354-.204-.354-.204s.608.96 2.215 1.416c-.38.456-.848.996-.848.996-2.797-.084-3.86-1.824-3.86-1.824 0-3.864 1.822-6.996 1.822-6.996 1.823-1.296 3.557-1.26 3.557-1.26l.127.145c-2.278.623-3.33 1.57-3.33 1.57s.279-.143.747-.347c1.355-.564 2.43-.72 2.873-.756.077-.012.14-.024.216-.024a10.804 10.804 0 0 1 6.368 1.129s-1.001-.9-3.153-1.526l.178-.19s1.735-.037 3.557 1.259c0 0 1.823 3.133 1.823 6.996 0 0-1.076 1.74-3.874 1.824Z"></path>
   </svg>
   </a>
      </div>
     </div>
   </footer>
   </section>


  
  
   </>
  )
}

export default Blog