import React, { Fragment } from 'react'
import userProfile from '../../assets/img/user.webp'
import backgrounImg from '../../assets/img/backgroundImg.jpg'
import heroBg from '../../assets/img/beams1.webp'
import backbg2 from '../../assets/img/bg2.jpg'
import cardImg1 from '../../assets/img/classic-utility-jacket.82031370.jpg'

import heroBg2 from '../../assets/img/herobg.png'


import { useState } from 'react'
import { Tab } from '@headlessui/react'








const Home = () => {




  return (
    <>
   <div className='relative h-dvh min-h-[650px] overflow-hidden'>
   <div class="absolute inset-0 bg-top bg-no-repeat GridLockup_beams-0___8Vns -z-10 xl:top-8">
          <img src={heroBg} alt="" />
        </div>
   <div class="absolute inset-x-0 top-0 h-96 z-0 text-slate-600/10 [mask-image:linear-gradient(to_top,transparent,white)] pointer-events-none">
            <svg class="absolute inset-0 h-full w-full" xmlns="http://www.w3.org/2000/svg">
                <defs>
                    <pattern id="ryhhgfby" width="32" height="32" patternUnits="userSpaceOnUse" x="50%" y="100%" patternTransform="translate(0 -1)">
                        <path d="M0 32V.5H32" fill="none" stroke="currentColor"></path>
                    </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#ryhhgfby)"></rect>
            </svg>
  </div>
    <div class="mx-auto max-w-7xl p-6 lg:px-8 flex items-center justify-center flex-col h-full">
          <h1 class="text-slate-900 font-extrabold text-3xl sm:text-5xl lg:text-6xl tracking-tight text-center dark:text-white">
            Rapidly build modern websites without ever leaving your HTML.
          </h1>
          <p class="mt-6 text-lg text-slate-600 text-center max-w-3xl mx-auto dark:text-slate-400">A utility-first CSS framework packed with classes like <code class="font-mono font-medium text-sky-500 dark:text-sky-400">flex</code>, <code class="font-mono font-medium text-sky-500 dark:text-sky-400">pt-4</code>,    <code class="font-mono font-medium text-sky-500 dark:text-sky-400">text-center</code> and<code class="font-mono font-medium text-sky-500 dark:text-sky-400">rotate-90</code> that can be composed to build any design, directly in your markup.</p>
      
        <div class="mt-6 sm:mt-10 flex justify-center space-x-6 text-sm">
          <a class="bg-slate-900 hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 text-white font-semibold h-12 px-6 rounded-lg w-full flex items-center justify-center sm:w-auto dark:bg-sky-500 dark:highlight-white/20 dark:hover:bg-sky-400" href="/docs/installation">Get started</a>
          <button type="button" class="hidden sm:flex items-center w-72 text-left space-x-3 px-4 h-12 bg-white ring-1 ring-slate-900/10 hover:ring-slate-300 focus:outline-none focus:ring-2 focus:ring-sky-500 shadow-sm rounded-lg text-slate-400 dark:bg-slate-800 dark:ring-0 dark:text-slate-300 dark:highlight-white/5 dark:hover:bg-slate-700">
            <svg width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="flex-none text-slate-300 dark:text-slate-400" aria-hidden="true"><path d="m19 19-3.5-3.5"></path><circle cx="11" cy="11" r="6"></circle></svg>
            <span class="flex-auto">Quick search...</span>
            <kbd class="font-sans font-semibold dark:text-slate-500">
              <abbr title="Control" class="no-underline text-slate-300 dark:text-slate-500">Ctrl </abbr> K</kbd>
          </button>
        </div>
      </div>
   </div>
   
<section className="lg:pb-16 pb-12 relative overflow-hidden">
  <div className='mx-auto max-w-7xl p-6 lg:px-8 text-center'>
      <div className="text-slate-900 text-4xl tracking-tight font-extrabold sm:text-5xl dark:text-white">“Best practices” don’t actually work.</div>
    <div>
        <div><p className="mt-6 max-w-3xl mx-auto text-lg">I’ve written <a href="https://adamwathan.me/css-utility-classes-and-separation-of-concerns/" class="text-sky-500 font-semibold dark:text-sky-400">a few thousand words</a> 
      on why traditional “semantic class names” are the reason CSS is hard to maintain, but the truth is you’re never going to believe me until you actually try it. If you can suppress the urge to retch long enough to give it a chance, I really think you’ll wonder how you ever worked with CSS any other way.</p>
      </div>
          <div className="mt-6 flex items-center justify-center space-x-4 text-left">
            <img src={userProfile} alt="" class="w-14 h-14 rounded-full"/>
              <div>
                <div className="text-slate-900 font-semibold dark:text-white">Adam Wathan</div><div className="mt-0.5 text-sm leading-6">Creator of Tailwind CSS</div>
              </div>
        </div>
    </div>
  </div>
</section>

<section className='relative overflow-hidden'>
    <div className='mx-auto max-w-7xl p-6 lg:px-8'>
    <div className="w-full">
      <div className='content'>
        
          <div className="font-semibold text-indigo-500 dark:text-indigo-400">Constraint-based</div>
          <div className="mt-4 text-3xl sm:text-4xl text-slate-900 font-extrabold tracking-tight dark:text-slate-50 ">An API for your design&nbsp;system.</div>
          <div className="mt-4 max-w-3xl space-y-6 ">Utility classes help you work within the constraints of a system instead of littering your stylesheets with arbitrary values. They make it easy to be consistent with color choices, spacing, typography, shadows, and everything else that makes up a well-engineered design system.</div>
          <div>
          <a class="group inline-flex items-center h-9 rounded-full text-sm font-semibold whitespace-nowrap px-3 focus:outline-none focus:ring-2 bg-indigo-50 text-indigo-600 hover:bg-indigo-200 hover:text-indigo-700 focus:ring-indigo-500 dark:bg-slate-700 dark:text-slate-100 dark:hover:bg-slate-600 dark:hover:text-white dark:focus:ring-slate-500 mt-8" href="/docs/utility-first">Learn more<span class="sr-only">, utility-first fundamentals</span><svg class="overflow-visible ml-3 text-indigo-300 group-hover:text-indigo-400 dark:text-slate-500 dark:group-hover:text-slate-400" width="3" height="6" viewBox="0 0 3 6" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M0 0L3 3L0 6"></path></svg></a>
          </div>
      </div>
      <div className='tabgroups mt-10'>
      <Tab.Group>
      <Tab.List className='flex items-center overflow-x-auto lg:gap-20 md:gap-16 gap-10'>
        <Tab className='border-0 shadow-none focus-visible:outline-none'> 
        <button type="button" class="group text-sm font-semibold w-full p-2 flex flex-col items-center text-indigo-600 dark:text-indigo-400">
          <svg fill="none" aria-hidden="true" class="sm:mb-6 mb-4 md:size-12 size-11 text-indigo-500 dark:text-indigo-400"><rect x="5" y="5" width="28" height="28" rx="4" fill="currentColor" fill-opacity=".1" stroke="currentColor" stroke-width="2"></rect><path d="M5 41h28M33 39v4M5 39v4M39 5h4M39 33h4M41 33V5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
          Sizing
      </button>
        </Tab>
        <Tab className='border-0 shadow-none focus-visible:outline-none'>
        <button type="button" class="group text-sm font-semibold w-full p-2 flex flex-col items-center "><svg fill="none" aria-hidden="true" class="sm:mb-6 mb-4 md:size-12 size-11 text-slate-300 group-hover:text-slate-400 dark:text-slate-600 dark:group-hover:text-slate-500"><path d="M17.687 42.22 40.57 29.219a4 4 0 0 0 1.554-5.36L39 18" stroke="currentColor" stroke-width="2" stroke-linecap="round"></path><path d="M27.477 7.121a1 1 0 1 0-.954 1.758l.954-1.758Zm5.209 3.966.477-.879-.477.88Zm1.555 5.515-.866-.5-.003.006.87.494ZM26.523 8.88l5.686 3.087.954-1.758-5.686-3.087-.954 1.758Zm6.849 7.23-12.616 22.21 1.738.987 12.617-22.21-1.74-.988Zm-1.163-4.143a3 3 0 0 1 1.166 4.136l1.732 1a5 5 0 0 0-1.944-6.894l-.954 1.758Z" fill="currentColor"></path><path d="M5 9a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4v25a9 9 0 1 1-18 0V9Z" fill="currentColor" fill-opacity="0" stroke="currentColor" stroke-width="2"></path><circle cx="14" cy="34" r="3" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"></circle></svg>Colors</button>
        </Tab>
        <Tab className='border-0 shadow-none focus-visible:outline-none'><button type="button" class="group text-sm font-semibold w-full p-2 flex flex-col items-center "><svg fill="none" aria-hidden="true" class="sm:mb-6 mb-4 md:size-12 size-11 text-slate-300 group-hover:text-slate-400 dark:text-slate-600 dark:group-hover:text-slate-500"><path d="M5 13a8 8 0 0 1 8-8h22a8 8 0 0 1 8 8v22a8 8 0 0 1-8 8H13a8 8 0 0 1-8-8V13Z" fill="currentColor" fill-opacity="0" stroke="currentColor" stroke-width="2"></path><path d="M15.5 25h9M13 31l5.145-12.748c.674-1.67 3.036-1.67 3.71 0L27 31" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M31 13s2 0 2 1.833v18.334C33 35 31 35 31 35M35 13s-2 0-2 1.833v18.334C33 35 35 35 35 35M31 24h4" stroke="currentColor" stroke-width="2" stroke-linecap="round"></path></svg>Typography</button></Tab>
        <Tab className='border-0 shadow-none focus-visible:outline-none'><button type="button" class="group text-sm font-semibold w-full p-2 flex flex-col items-center "><svg fill="none" aria-hidden="true" class="sm:mb-6 mb-4 md:size-12 size-11 text-slate-300 group-hover:text-slate-400 dark:text-slate-600 dark:group-hover:text-slate-500"><path d="M24 43c10.493 0 19-8.507 19-19S34.493 5 24 5m-4 .422C11.427 7.259 5 14.879 5 24c0 9.121 6.427 16.741 15 18.578" stroke="currentColor" stroke-width="2" stroke-linecap="round"></path><path d="M24 42.819V5.181c0-.1.081-.181.181-.181C34.574 5 43 13.607 43 24c0 10.394-8.426 19-18.819 19a.181.181 0 0 1-.181-.181Z" fill="currentColor" fill-opacity="0" stroke="currentColor" stroke-width="2" stroke-linejoin="round"></path><path d="M28 10h3M28 14h7M28 18h10M28 22h11M28 26h10M28 30h9M28 34h7M28 38h3" stroke="currentColor" stroke-width="2" stroke-linecap="round"></path></svg>Shadows</button></Tab>

      </Tab.List>
      <Tab.Panels>
        <Tab.Panel className="relative">
        <div class="absolute inset-0 bg-top bg-no-repeat GridLockup_beams-0___8Vns -z-10 xl:top-8">
          <img src={backgrounImg} alt="" />
        </div>
        <div class="absolute inset-x-0 top-0 h-96 z-0 text-slate-600/10 [mask-image:linear-gradient(to_top,transparent,white)] pointer-events-none">
            <svg class="absolute inset-0 h-full w-full" xmlns="http://www.w3.org/2000/svg">
                <defs>
                    <pattern id="ryhhgfby" width="32" height="32" patternUnits="userSpaceOnUse" x="50%" y="100%" patternTransform="translate(0 -1)">
                        <path d="M0 32V.5H32" fill="none" stroke="currentColor"></path>
                    </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#ryhhgfby)"></rect>
            </svg>
        </div>
        <div className='lg:grid lg:grid-cols-12 lg:gap-8 mt-10'>
          <div className="lg:col-span-5 xl:col-span-6 flex flex-col">
              <div class="relative z-10 bg-white ring-1 ring-slate-900/5 rounded-lg shadow-xl px-6 py-5 my-auto xl:mt-18 dark:bg-slate-800"><div class="absolute inset-x-0 inset-y-5 border-t border-b border-slate-100 pointer-events-none dark:border-slate-700"></div><div class="absolute inset-x-6 inset-y-0 border-l border-r border-slate-100 pointer-events-none dark:border-slate-700"></div>
                  <div class="bg-slate-50 flex overflow-hidden h-[22rem] dark:bg-slate-900/50">
                    <div class="relative bg-white/40  sm:w-[28rem] lg:w-64 xl:w-[28rem] mx-auto border-r border-slate-100 dark:bg-transparent dark:border-slate-100/5"><div class="absolute inset-0 dark:hidden" >
                      </div>
                     
                      <ul class="relative font-bold text-xs pt-6 space-y-4 ">
                        <li>
                          <div class="h-6 origin-left bg-white shadow ring-1 ring-slate-700/5 px-1 flex items-center dark:bg-indigo-500 md:w-96 w-64 dark:text-white dark:highlight-white/10" ><div class="flex-none w-0.5 h-1 bg-slate-300 dark:bg-white"></div>
                          <span class="flex-auto text-center">w-96</span><div class="flex-none w-0.5 h-1 bg-slate-300 dark:bg-white"></div>
                          </div>
                        </li>
                        <li>
                            <div class="h-6 origin-left bg-white shadow ring-1 ring-slate-700/5 px-1 flex items-center dark:bg-indigo-500 md:w-80 w-56 dark:text-white dark:highlight-white/10" >
                              <div class="flex-none w-0.5 h-1 bg-slate-300 dark:bg-white"></div><span class="flex-auto text-center">w-80</span><div class="flex-none w-0.5 h-1 bg-slate-300 dark:bg-white"></div></div></li>
                        <li>
                              <div class="h-6 origin-left bg-white shadow ring-1 ring-slate-700/5 px-1 flex items-center dark:bg-indigo-500 md:w-72 w-52 dark:text-white dark:highlight-white/10" >
                              <div class="flex-none w-0.5 h-1 bg-slate-300 dark:bg-white"></div><span class="flex-auto text-center">w-72</span><div class="flex-none w-0.5 h-1 bg-slate-300 dark:bg-white"></div></div></li>
                        <li>
                          <div class="h-6 origin-left bg-white shadow ring-1 ring-slate-700/5 px-1 flex items-center dark:bg-indigo-500 md:w-64 w-48 dark:text-white dark:highlight-white/10" >
                          <div class="flex-none w-0.5 h-1 bg-slate-300 dark:bg-white"></div><span class="flex-auto text-center">w-64</span><div class="flex-none w-0.5 h-1 bg-slate-300 dark:bg-white"></div></div></li>
                        <li>
                              <div class="h-6 origin-left bg-white shadow ring-1 ring-slate-700/5 px-1 flex items-center dark:bg-indigo-500 md:w-60 w-44 dark:text-white dark:highlight-white/10" >
                              <div class="flex-none w-0.5 h-1 bg-slate-300 dark:bg-white"></div><span class="flex-auto text-center">w-60</span><div class="flex-none w-0.5 h-1 bg-slate-300 dark:bg-white"></div></div>
                        </li>
                        <li>
                            <div class="h-6 origin-left bg-white shadow ring-1 ring-slate-700/5 px-1 flex items-center dark:bg-indigo-500 md:w-56 w-40 dark:text-white dark:highlight-white/10" >
                            <div class="flex-none w-0.5 h-1 bg-slate-300 dark:bg-white"></div><span class="flex-auto text-center">w-56</span><div class="flex-none w-0.5 h-1 bg-slate-300 dark:bg-white"></div></div>
                        </li>
                        <li>
                          <div class="h-6 origin-left bg-white shadow ring-1 ring-slate-700/5 px-1 flex items-center dark:bg-indigo-500 md:w-52 w-36 dark:text-white dark:highlight-white/10" >
                            <div class="flex-none w-0.5 h-1 bg-slate-300 dark:bg-white"></div><span class="flex-auto text-center">w-52</span><div class="flex-none w-0.5 h-1 bg-slate-300 dark:bg-white"></div>
                          </div>
                        </li>
                        <li>
                              <div class="h-6 origin-left bg-white shadow ring-1 ring-slate-700/5 px-1 flex items-center dark:bg-indigo-500 md:w-48 w-32 dark:text-white dark:highlight-white/10" >
                              <div class="flex-none w-0.5 h-1 bg-slate-300 dark:bg-white"></div><span class="flex-auto text-center">w-48</span>
                            
                              </div>
                        </li>
                      </ul>
                    </div>
                  </div>
              </div>
          </div>
        <div className='mt-4 -mx-4 sm:mx-0 lg:mt-0 lg:col-span-7 xl:col-span-6'>
          <div className='relative overflow-hidden shadow-xl flex bg-slate-800 h-[31.625rem] max-h-[60vh] sm:max-h-[none] sm:rounded-xl lg:h-[34.6875rem] xl:h-[31.625rem] dark:bg-slate-900/70 dark:backdrop-blur dark:ring-1 dark:ring-inset dark:ring-white/10'>
            <div className='relative w-full flex flex-col'>
              <div className='relative w-full flex flex-col'>
              <div className="flex-none border-b border-slate-500/30">
                <div className="flex items-center h-8 space-x-1.5 px-3">
                  <div className="w-2.5 h-2.5 bg-slate-600 rounded-full"></div>
                  <div className="w-2.5 h-2.5 bg-slate-600 rounded-full"></div>
                  <div className="w-2.5 h-2.5 bg-slate-600 rounded-full"></div>
                </div>
              </div>
              <div className='relative min-h-0 flex-auto flex flex-col'>
                <div className='w-full flex-auto flex min-h-0'>
                  <div className='w-full flex-auto flex min-h-0 overflow-auto'>
                    <div className='w-full relative flex-auto'>

                    </div>
                  </div>
                </div>
              </div>
              </div>
            </div>
          </div>
        </div>
        </div>
        </Tab.Panel>

        <Tab.Panel className="relative">
        <div class="absolute inset-0 bg-top bg-no-repeat GridLockup_beams-0___8Vns -z-10 xl:top-8">
          <img src={backgrounImg} alt="" />
        </div>
        <div class="absolute inset-x-0 top-0 h-96 z-0 text-slate-600/10 [mask-image:linear-gradient(to_top,transparent,white)] pointer-events-none">
            <svg class="absolute inset-0 h-full w-full" xmlns="http://www.w3.org/2000/svg">
                <defs>
                    <pattern id="ryhhgfby" width="32" height="32" patternUnits="userSpaceOnUse" x="50%" y="100%" patternTransform="translate(0 -1)">
                        <path d="M0 32V.5H32" fill="none" stroke="currentColor"></path>
                    </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#ryhhgfby)"></rect>
            </svg>
        </div>
        <div className='lg:grid lg:grid-cols-12 lg:gap-8 mt-10'>
          <div className="lg:col-span-5 xl:col-span-6 flex flex-col">
              <div class="relative z-10 bg-white ring-1 ring-slate-900/5 rounded-lg shadow-xl px-6 py-5 my-auto xl:mt-18 dark:bg-slate-800"><div class="absolute inset-x-0 inset-y-5 border-t border-b border-slate-100 pointer-events-none dark:border-slate-700"></div><div class="absolute inset-x-6 inset-y-0 border-l border-r border-slate-100 pointer-events-none dark:border-slate-700"></div>
                  <div class="bg-slate-50 flex overflow-hidden h-[22rem] dark:bg-slate-900/50">
                    <div class="relative bg-white/40  sm:w-[28rem] lg:w-64 xl:w-[28rem] mx-auto border-r border-slate-100 dark:bg-transparent dark:border-slate-100/5"><div class="absolute inset-0 dark:hidden" >
                      </div>
                     
                      <ul class="relative space-y-6 font-mono text-[0.625rem] leading-5 pt-5 px-5">
                        <li class="bg-white rounded-lg shadow ring-1 ring-slate-700/5 p-2 dark:bg-slate-900 dark:ring-white/10 opacity-100" >
                          <ul class="grid grid-cols-5 sm:grid-cols-10 lg:grid-cols-5 xl:grid-cols-10 gap-2 *:size-8">
                            <li class="pt-full rounded-sm ring-1 ring-inset ring-slate-900/5 dark:ring-0 dark:highlight-white/10 bg-sky-50" ></li>
                            <li class="pt-full rounded-sm ring-1 ring-inset ring-slate-900/5 dark:ring-0 dark:highlight-white/10 bg-sky-100"></li>
                            <li class="pt-full rounded-sm ring-1 ring-inset ring-slate-900/5 dark:ring-0 dark:highlight-white/10 bg-sky-200"></li>
                            <li class="pt-full rounded-sm ring-1 ring-inset ring-slate-900/5 dark:ring-0 dark:highlight-white/10 bg-sky-300" ></li>
                            <li class="pt-full rounded-sm ring-1 ring-inset ring-slate-900/5 dark:ring-0 dark:highlight-white/10 bg-sky-400"></li>
                            <li class="pt-full rounded-sm ring-1 ring-inset ring-slate-900/5 dark:ring-0 dark:highlight-white/10 bg-sky-400"></li>
                            <li class="pt-full rounded-sm ring-1 ring-inset ring-slate-900/5 dark:ring-0 dark:highlight-white/10 bg-sky-500"></li>
                            <li class="pt-full rounded-sm ring-1 ring-inset ring-slate-900/5 dark:ring-0 dark:highlight-white/10 bg-sky-600"></li>
                            <li class="pt-full rounded-sm ring-1 ring-inset ring-slate-900/5 dark:ring-0 dark:highlight-white/10 bg-sky-700" ></li>
                            <li class="pt-full rounded-sm ring-1 ring-inset ring-slate-900/5 dark:ring-0 dark:highlight-white/10 bg-sky-800" ></li>
                            </ul>
                            <div class="mt-2 flex items-center justify-between text-slate-500">
                              <span class="flex-1">sky-50</span>
                              <svg width="47" height="4" viewBox="0 0 47 4" fill="currentColor"><circle cx="1.5" cy="2" r="1.5" class="text-slate-200 dark:text-slate-800"></circle><circle cx="12.5" cy="2" r="1.5" class="text-slate-300 dark:text-slate-700"></circle><circle cx="23.5" cy="2" r="1.5" class="text-slate-400 dark:text-slate-600"></circle><circle cx="34.5" cy="2" r="1.5" class="text-slate-300 dark:text-slate-700"></circle><circle cx="45.5" cy="2" r="1.5" class="text-slate-200 dark:text-slate-800"></circle></svg>
                              <span class="flex-1 text-right">sky-900</span>
                            </div>
                        </li>
                        <li class="bg-white rounded-lg shadow ring-1 ring-slate-700/5 p-2 dark:bg-slate-900 dark:ring-white/10 opacity-100" >
                          <ul class="grid grid-cols-5 sm:grid-cols-10 lg:grid-cols-5 xl:grid-cols-10 gap-2 *:size-8">
                          <li class="pt-full rounded-sm ring-1 ring-inset ring-slate-900/5 dark:ring-0 dark:highlight-white/10 bg-blue-50"></li>
                          <li class="pt-full rounded-sm ring-1 ring-inset ring-slate-900/5 dark:ring-0 dark:highlight-white/10 bg-blue-100"></li>
                          <li class="pt-full rounded-sm ring-1 ring-inset ring-slate-900/5 dark:ring-0 dark:highlight-white/10 bg-blue-200" ></li>
                          <li class="pt-full rounded-sm ring-1 ring-inset ring-slate-900/5 dark:ring-0 dark:highlight-white/10 bg-blue-300"></li>
                          <li class="pt-full rounded-sm ring-1 ring-inset ring-slate-900/5 dark:ring-0 dark:highlight-white/10 bg-blue-400"></li>
                          <li class="pt-full rounded-sm ring-1 ring-inset ring-slate-900/5 dark:ring-0 dark:highlight-white/10 bg-blue-500"></li>
                          <li class="pt-full rounded-sm ring-1 ring-inset ring-slate-900/5 dark:ring-0 dark:highlight-white/10 bg-blue-600"></li>
                          <li class="pt-full rounded-sm ring-1 ring-inset ring-slate-900/5 dark:ring-0 dark:highlight-white/10 bg-blue-700"></li>
                          <li class="pt-full rounded-sm ring-1 ring-inset ring-slate-900/5 dark:ring-0 dark:highlight-white/10 bg-blue-800"></li>
                          <li class="pt-full rounded-sm ring-1 ring-inset ring-slate-900/5 dark:ring-0 dark:highlight-white/10 bg-blue-900"></li>
                          </ul>
                          <div class="mt-2 flex items-center justify-between text-slate-500"><span class="flex-1">blue-50</span><svg width="47" height="4" viewBox="0 0 47 4" fill="currentColor"><circle cx="1.5" cy="2" r="1.5" class="text-slate-200 dark:text-slate-800"></circle><circle cx="12.5" cy="2" r="1.5" class="text-slate-300 dark:text-slate-700"></circle><circle cx="23.5" cy="2" r="1.5" class="text-slate-400 dark:text-slate-600"></circle><circle cx="34.5" cy="2" r="1.5" class="text-slate-300 dark:text-slate-700"></circle><circle cx="45.5" cy="2" r="1.5" class="text-slate-200 dark:text-slate-800"></circle></svg><span class="flex-1 text-right">blue-900</span></div>
                        </li>
                        <li class="bg-white rounded-lg shadow ring-1 ring-slate-700/5 p-2 dark:bg-slate-900 dark:ring-white/10 opacity-100" >
                          <ul class="grid grid-cols-5 sm:grid-cols-10 lg:grid-cols-5 xl:grid-cols-10 gap-2 *:size-8">
                            <li class="pt-full rounded-sm ring-1 ring-inset ring-slate-900/5 dark:ring-0 dark:highlight-white/10 bg-indigo-50" ></li>
                            <li class="pt-full rounded-sm ring-1 ring-inset ring-slate-900/5 dark:ring-0 dark:highlight-white/10 bg-indigo-100"></li>
                            <li class="pt-full rounded-sm ring-1 ring-inset ring-slate-900/5 dark:ring-0 dark:highlight-white/10 bg-indigo-200" ></li>
                            <li class="pt-full rounded-sm ring-1 ring-inset ring-slate-900/5 dark:ring-0 dark:highlight-white/10 bg-indigo-300" ></li>
                            <li class="pt-full rounded-sm ring-1 ring-inset ring-slate-900/5 dark:ring-0 dark:highlight-white/10 bg-indigo-400" ></li>
                            <li class="pt-full rounded-sm ring-1 ring-inset ring-slate-900/5 dark:ring-0 dark:highlight-white/10 bg-indigo-500" ></li>
                            <li class="pt-full rounded-sm ring-1 ring-inset ring-slate-900/5 dark:ring-0 dark:highlight-white/10 bg-indigo-600" ></li>
                            <li class="pt-full rounded-sm ring-1 ring-inset ring-slate-900/5 dark:ring-0 dark:highlight-white/10 bg-indigo-700" ></li>
                            <li class="pt-full rounded-sm ring-1 ring-inset ring-slate-900/5 dark:ring-0 dark:highlight-white/10 bg-indigo-800" ></li>
                            <li class="pt-full rounded-sm ring-1 ring-inset ring-slate-900/5 dark:ring-0 dark:highlight-white/10 bg-indigo-900" ></li>
                          </ul>
                            <div class="mt-2 flex items-center justify-between text-slate-500"><span class="flex-1">indigo-50</span><svg width="47" height="4" viewBox="0 0 47 4" fill="currentColor"><circle cx="1.5" cy="2" r="1.5" class="text-slate-200 dark:text-slate-800"></circle><circle cx="12.5" cy="2" r="1.5" class="text-slate-300 dark:text-slate-700"></circle><circle cx="23.5" cy="2" r="1.5" class="text-slate-400 dark:text-slate-600"></circle><circle cx="34.5" cy="2" r="1.5" class="text-slate-300 dark:text-slate-700"></circle><circle cx="45.5" cy="2" r="1.5" class="text-slate-200 dark:text-slate-800"></circle></svg><span class="flex-1 text-right">indigo-900</span></div>
                        </li>
                        <li class="bg-white rounded-lg shadow ring-1 ring-slate-700/5 p-2 dark:bg-slate-900 dark:ring-white/10 opacity-100" >
                          <ul class="grid grid-cols-5 sm:grid-cols-10 lg:grid-cols-5 xl:grid-cols-10 gap-2 *:size-8">
                            <li class="pt-full rounded-sm ring-1 ring-inset ring-slate-900/5 dark:ring-0 dark:highlight-white/10 bg-purple-50" ></li>
                            <li class="pt-full rounded-sm ring-1 ring-inset ring-slate-900/5 dark:ring-0 dark:highlight-white/10 bg-purple-100" ></li>
                            <li class="pt-full rounded-sm ring-1 ring-inset ring-slate-900/5 dark:ring-0 dark:highlight-white/10 bg-purple-200" ></li>
                            <li class="pt-full rounded-sm ring-1 ring-inset ring-slate-900/5 dark:ring-0 dark:highlight-white/10 bg-purple-300" ></li>
                            <li class="pt-full rounded-sm ring-1 ring-inset ring-slate-900/5 dark:ring-0 dark:highlight-white/10 bg-purple-400" ></li>
                            <li class="pt-full rounded-sm ring-1 ring-inset ring-slate-900/5 dark:ring-0 dark:highlight-white/10 bg-purple-500" ></li>
                            <li class="pt-full rounded-sm ring-1 ring-inset ring-slate-900/5 dark:ring-0 dark:highlight-white/10 bg-purple-600" ></li>
                            <li class="pt-full rounded-sm ring-1 ring-inset ring-slate-900/5 dark:ring-0 dark:highlight-white/10 bg-purple-700" ></li>
                            <li class="pt-full rounded-sm ring-1 ring-inset ring-slate-900/5 dark:ring-0 dark:highlight-white/10 bg-purple-800" ></li>
                            <li class="pt-full rounded-sm ring-1 ring-inset ring-slate-900/5 dark:ring-0 dark:highlight-white/10 bg-purple-900" ></li>
                            </ul>
                            <div class="mt-2 flex items-center justify-between text-slate-500"><span class="flex-1">purple-50</span><svg width="47" height="4" viewBox="0 0 47 4" fill="currentColor"><circle cx="1.5" cy="2" r="1.5" class="text-slate-200 dark:text-slate-800"></circle><circle cx="12.5" cy="2" r="1.5" class="text-slate-300 dark:text-slate-700"></circle><circle cx="23.5" cy="2" r="1.5" class="text-slate-400 dark:text-slate-600"></circle><circle cx="34.5" cy="2" r="1.5" class="text-slate-300 dark:text-slate-700"></circle><circle cx="45.5" cy="2" r="1.5" class="text-slate-200 dark:text-slate-800"></circle></svg><span class="flex-1 text-right">purple-900</span></div>
                        </li>
                      </ul>
                    </div>
                  </div>
              </div>
          </div>
        <div className='mt-4 -mx-4 sm:mx-0 lg:mt-0 lg:col-span-7 xl:col-span-6'>
          <div className='relative overflow-hidden shadow-xl flex bg-slate-800 h-[31.625rem] max-h-[60vh] sm:max-h-[none] sm:rounded-xl lg:h-[34.6875rem] xl:h-[31.625rem] dark:bg-slate-900/70 dark:backdrop-blur dark:ring-1 dark:ring-inset dark:ring-white/10'>
            <div className='relative w-full flex flex-col'>
              <div className='relative w-full flex flex-col'>
              <div className="flex-none border-b border-slate-500/30">
                <div className="flex items-center h-8 space-x-1.5 px-3">
                  <div className="w-2.5 h-2.5 bg-slate-600 rounded-full"></div>
                  <div className="w-2.5 h-2.5 bg-slate-600 rounded-full"></div>
                  <div className="w-2.5 h-2.5 bg-slate-600 rounded-full"></div>
                </div>
              </div>
              <div className='relative min-h-0 flex-auto flex flex-col'>
                <div className='w-full flex-auto flex min-h-0'>
                  <div className='w-full flex-auto flex min-h-0 overflow-auto'>
                    <div className='w-full relative flex-auto'>

                    </div>
                  </div>
                </div>
              </div>
              </div>
            </div>
          </div>
        </div>
        </div>
        </Tab.Panel>

        <Tab.Panel className="relative">
        <div class="absolute inset-0 bg-top bg-no-repeat GridLockup_beams-0___8Vns -z-10 xl:top-8">
          <img src={backgrounImg} alt="" />
        </div>
        <div class="absolute inset-x-0 top-0 h-96 z-0 text-slate-600/10 [mask-image:linear-gradient(to_top,transparent,white)] pointer-events-none">
            <svg class="absolute inset-0 h-full w-full" xmlns="http://www.w3.org/2000/svg">
                <defs>
                    <pattern id="ryhhgfby" width="32" height="32" patternUnits="userSpaceOnUse" x="50%" y="100%" patternTransform="translate(0 -1)">
                        <path d="M0 32V.5H32" fill="none" stroke="currentColor"></path>
                    </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#ryhhgfby)"></rect>
            </svg>
        </div>
        <div className='lg:grid lg:grid-cols-12 lg:gap-8 mt-10'>
          <div className="lg:col-span-5 xl:col-span-6 flex flex-col">
              <div class="relative z-10 bg-white ring-1 ring-slate-900/5 rounded-lg shadow-xl px-6 py-5 my-auto xl:mt-18 dark:bg-slate-800"><div class="absolute inset-x-0 inset-y-5 border-t border-b border-slate-100 pointer-events-none dark:border-slate-700"></div><div class="absolute inset-x-6 inset-y-0 border-l border-r border-slate-100 pointer-events-none dark:border-slate-700"></div>
                  <div class="bg-slate-50 flex overflow-hidden h-[22rem] dark:bg-slate-900/50">
                    <div class="relative bg-white/40  sm:w-[28rem] lg:w-64 xl:w-[28rem] mx-auto border-r border-slate-100 dark:bg-transparent dark:border-slate-100/5"><div class="absolute inset-0 dark:hidden" >
                      </div>
                     
                     <div class="relative h-full flex flex-col justify-center space-y-8 sm:space-y-5 lg:space-y-8 xl:space-y-5 xl:px-5"><div class="sm:bg-white sm:rounded-lg sm:ring-1 sm:ring-slate-700/5 sm:shadow sm:p-3 lg:bg-transparent lg:rounded-none lg:ring-0 lg:shadow-none lg:p-0 xl:bg-white xl:rounded-lg xl:ring-1 xl:ring-slate-700/5 xl:shadow xl:p-3 dark:ring-white/10 dark:sm:bg-slate-900 dark:sm:ring-1 dark:lg:bg-transparent dark:lg:ring-0 dark:xl:bg-slate-900 dark:xl:ring-1" ><h4 class="text-xs leading-5 font-mono pb-2 border-b border-slate-100 text-slate-500 dark:border-slate-200/10">font-sans</h4><div class="mt-2 sm:mt-3 lg:mt-2 xl:mt-3 text-slate-700 dark:text-slate-400 font-sans text-sm leading-6 sm:text-base sm:leading-6 lg:text-sm lg:leading-6 xl:text-base xl:leading-6">The quick brown fox jumps over the lazy&nbsp;dog.</div></div><div class="sm:bg-white sm:rounded-lg sm:ring-1 sm:ring-slate-700/5 sm:shadow sm:p-3 lg:bg-transparent lg:rounded-none lg:ring-0 lg:shadow-none lg:p-0 xl:bg-white xl:rounded-lg xl:ring-1 xl:ring-slate-700/5 xl:shadow xl:p-3 dark:ring-white/10 dark:sm:bg-slate-900 dark:sm:ring-1 dark:lg:bg-transparent dark:lg:ring-0 dark:xl:bg-slate-900 dark:xl:ring-1" ><h4 class="text-xs leading-5 font-mono pb-2 border-b border-slate-100 text-slate-500 dark:border-slate-200/10">font-serif</h4><div class="mt-2 sm:mt-3 lg:mt-2 xl:mt-3 text-slate-700 dark:text-slate-400 font-serif text-sm leading-6 sm:text-lg lg:text-sm lg:leading-6 xl:text-lg">The quick brown fox jumps over the lazy&nbsp;dog.</div></div><div class="sm:bg-white sm:rounded-lg sm:ring-1 sm:ring-slate-700/5 sm:shadow sm:p-3 lg:bg-transparent lg:rounded-none lg:ring-0 lg:shadow-none lg:p-0 xl:bg-white xl:rounded-lg xl:ring-1 xl:ring-slate-700/5 xl:shadow xl:p-3 dark:ring-white/10 dark:sm:bg-slate-900 dark:sm:ring-1 dark:lg:bg-transparent dark:lg:ring-0 dark:xl:bg-slate-900 dark:xl:ring-1" ><h4 class="text-xs leading-5 font-mono pb-2 border-b border-slate-100 text-slate-500 dark:border-slate-200/10">font-mono</h4><div class="mt-2 sm:mt-3 lg:mt-2 xl:mt-3 text-slate-700 dark:text-slate-400 font-mono text-sm leading-6 sm:leading-7 lg:leading-6 xl:leading-7">The quick brown fox jumps over the lazy&nbsp;dog.</div></div></div>
                    </div>
                  </div>
              </div>
          </div>
        <div className='mt-4 -mx-4 sm:mx-0 lg:mt-0 lg:col-span-7 xl:col-span-6'>
          <div className='relative overflow-hidden shadow-xl flex bg-slate-800 h-[31.625rem] max-h-[60vh] sm:max-h-[none] sm:rounded-xl lg:h-[34.6875rem] xl:h-[31.625rem] dark:bg-slate-900/70 dark:backdrop-blur dark:ring-1 dark:ring-inset dark:ring-white/10'>
            <div className='relative w-full flex flex-col'>
              <div className='relative w-full flex flex-col'>
              <div className="flex-none border-b border-slate-500/30">
                <div className="flex items-center h-8 space-x-1.5 px-3">
                  <div className="w-2.5 h-2.5 bg-slate-600 rounded-full"></div>
                  <div className="w-2.5 h-2.5 bg-slate-600 rounded-full"></div>
                  <div className="w-2.5 h-2.5 bg-slate-600 rounded-full"></div>
                </div>
              </div>
              <div className='relative min-h-0 flex-auto flex flex-col'>
                <div className='w-full flex-auto flex min-h-0'>
                  <div className='w-full flex-auto flex min-h-0 overflow-auto'>
                    <div className='w-full relative flex-auto'>

                    </div>
                  </div>
                </div>
              </div>
              </div>
            </div>
          </div>
        </div>
        </div>
        </Tab.Panel>

        <Tab.Panel className="relative">
        <div class="absolute inset-0 bg-top bg-no-repeat GridLockup_beams-0___8Vns -z-10 xl:top-8">
          <img src={backgrounImg} alt="" />
        </div>
        <div class="absolute inset-x-0 top-0 h-96 z-0 text-slate-600/10 [mask-image:linear-gradient(to_top,transparent,white)] pointer-events-none">
            <svg class="absolute inset-0 h-full w-full" xmlns="http://www.w3.org/2000/svg">
                <defs>
                    <pattern id="ryhhgfby" width="32" height="32" patternUnits="userSpaceOnUse" x="50%" y="100%" patternTransform="translate(0 -1)">
                        <path d="M0 32V.5H32" fill="none" stroke="currentColor"></path>
                    </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#ryhhgfby)"></rect>
            </svg>
        </div>
        <div className='lg:grid lg:grid-cols-12 lg:gap-8 mt-10'>
          <div className="lg:col-span-5 xl:col-span-6 flex flex-col">
              <div class="relative z-10 bg-white ring-1 ring-slate-900/5 rounded-lg shadow-xl px-6 py-5 my-auto xl:mt-18 dark:bg-slate-800"><div class="absolute inset-x-0 inset-y-5 border-t border-b border-slate-100 pointer-events-none dark:border-slate-700"></div><div class="absolute inset-x-6 inset-y-0 border-l border-r border-slate-100 pointer-events-none dark:border-slate-700"></div>
                  <div class="bg-slate-50 flex overflow-hidden h-[22rem] dark:bg-slate-900/50">
                    <div class="relative bg-white/40  sm:w-[28rem] lg:w-64 xl:w-[28rem] mx-auto border-r border-slate-100 dark:bg-transparent dark:border-slate-100/5"><div class="absolute inset-0 dark:hidden" >
                      </div>
                     
                      <ul class="relative font-bold text-xs pt-6 space-y-4 ">
                        <li>
                          <div class="h-6 origin-left bg-white shadow ring-1 ring-slate-700/5 px-1 flex items-center dark:bg-indigo-500 md:w-96 w-64 dark:text-white dark:highlight-white/10" ><div class="flex-none w-0.5 h-1 bg-slate-300 dark:bg-white"></div>
                          <span class="flex-auto text-center">w-96</span><div class="flex-none w-0.5 h-1 bg-slate-300 dark:bg-white"></div>
                          </div>
                        </li>
                        <li>
                            <div class="h-6 origin-left bg-white shadow ring-1 ring-slate-700/5 px-1 flex items-center dark:bg-indigo-500 md:w-80 w-56 dark:text-white dark:highlight-white/10" >
                              <div class="flex-none w-0.5 h-1 bg-slate-300 dark:bg-white"></div><span class="flex-auto text-center">w-80</span><div class="flex-none w-0.5 h-1 bg-slate-300 dark:bg-white"></div></div></li>
                        <li>
                              <div class="h-6 origin-left bg-white shadow ring-1 ring-slate-700/5 px-1 flex items-center dark:bg-indigo-500 md:w-72 w-52 dark:text-white dark:highlight-white/10" >
                              <div class="flex-none w-0.5 h-1 bg-slate-300 dark:bg-white"></div><span class="flex-auto text-center">w-72</span><div class="flex-none w-0.5 h-1 bg-slate-300 dark:bg-white"></div></div></li>
                        <li>
                          <div class="h-6 origin-left bg-white shadow ring-1 ring-slate-700/5 px-1 flex items-center dark:bg-indigo-500 md:w-64 w-48 dark:text-white dark:highlight-white/10" >
                          <div class="flex-none w-0.5 h-1 bg-slate-300 dark:bg-white"></div><span class="flex-auto text-center">w-64</span><div class="flex-none w-0.5 h-1 bg-slate-300 dark:bg-white"></div></div></li>
                        <li>
                              <div class="h-6 origin-left bg-white shadow ring-1 ring-slate-700/5 px-1 flex items-center dark:bg-indigo-500 md:w-60 w-44 dark:text-white dark:highlight-white/10" >
                              <div class="flex-none w-0.5 h-1 bg-slate-300 dark:bg-white"></div><span class="flex-auto text-center">w-60</span><div class="flex-none w-0.5 h-1 bg-slate-300 dark:bg-white"></div></div>
                        </li>
                        <li>
                            <div class="h-6 origin-left bg-white shadow ring-1 ring-slate-700/5 px-1 flex items-center dark:bg-indigo-500 md:w-56 w-40 dark:text-white dark:highlight-white/10" >
                            <div class="flex-none w-0.5 h-1 bg-slate-300 dark:bg-white"></div><span class="flex-auto text-center">w-56</span><div class="flex-none w-0.5 h-1 bg-slate-300 dark:bg-white"></div></div>
                        </li>
                        <li>
                          <div class="h-6 origin-left bg-white shadow ring-1 ring-slate-700/5 px-1 flex items-center dark:bg-indigo-500 md:w-52 w-36 dark:text-white dark:highlight-white/10" >
                            <div class="flex-none w-0.5 h-1 bg-slate-300 dark:bg-white"></div><span class="flex-auto text-center">w-52</span><div class="flex-none w-0.5 h-1 bg-slate-300 dark:bg-white"></div>
                          </div>
                        </li>
                        <li>
                              <div class="h-6 origin-left bg-white shadow ring-1 ring-slate-700/5 px-1 flex items-center dark:bg-indigo-500 md:w-48 w-32 dark:text-white dark:highlight-white/10" >
                              <div class="flex-none w-0.5 h-1 bg-slate-300 dark:bg-white"></div><span class="flex-auto text-center">w-48</span>
                            
                              </div>
                        </li>
                      </ul>
                    </div>
                  </div>
              </div>
          </div>
        <div className='mt-4 -mx-4 sm:mx-0 lg:mt-0 lg:col-span-7 xl:col-span-6'>
          <div className='relative overflow-hidden shadow-xl flex bg-slate-800 h-[31.625rem] max-h-[60vh] sm:max-h-[none] sm:rounded-xl lg:h-[34.6875rem] xl:h-[31.625rem] dark:bg-slate-900/70 dark:backdrop-blur dark:ring-1 dark:ring-inset dark:ring-white/10'>
            <div className='relative w-full flex flex-col'>
              <div className='relative w-full flex flex-col'>
              <div className="flex-none border-b border-slate-500/30">
                <div className="flex items-center h-8 space-x-1.5 px-3">
                  <div className="w-2.5 h-2.5 bg-slate-600 rounded-full"></div>
                  <div className="w-2.5 h-2.5 bg-slate-600 rounded-full"></div>
                  <div className="w-2.5 h-2.5 bg-slate-600 rounded-full"></div>
                </div>
              </div>
              <div className='relative min-h-0 flex-auto flex flex-col'>
                <div className='w-full flex-auto flex min-h-0'>
                  <div className='w-full flex-auto flex min-h-0 overflow-auto'>
                    <div className='w-full relative flex-auto'>

                    </div>
                  </div>
                </div>
              </div>
              </div>
            </div>
          </div>
        </div>
        </div>
        </Tab.Panel>

      </Tab.Panels>
    </Tab.Group>
      </div>
    </div>
    </div>
</section>

{/* <section className='relative'>
    <div className='mx-auto max-w-7xl p-6 lg:px-8 md:py-16 py-20'>
      <div className='content'>
        <div className="mt-8 font-semibold text-pink-500 dark:text-pink-400">Build anything</div>
        <div className="mt-4 text-3xl sm:text-4xl text-slate-900 font-extrabold tracking-tight dark:text-slate-50 ">Build whatever you want,&nbsp;seriously.</div>
        <div className="mt-4 max-w-3xl space-y-6 ">Because Tailwind is so low-level, it never encourages you to design the same site twice. Even with the same color palette and sizing scale, it's easy to build the same component with a completely different look in the next project.</div>
        <div><a className="group inline-flex items-center h-9 rounded-full text-sm font-semibold whitespace-nowrap px-3 focus:outline-none focus:ring-2 bg-pink-50 text-pink-600 hover:bg-pink-100 hover:text-pink-700 focus:ring-pink-600 dark:bg-slate-700 dark:text-slate-100 dark:hover:bg-slate-600 dark:hover:text-white dark:focus:ring-slate-500 mt-8" href="/docs/installation">Get started<span class="sr-only">, installation</span><svg class="overflow-visible ml-3 text-pink-300 group-hover:text-pink-400 dark:text-slate-500 dark:group-hover:text-slate-400" width="3" height="6" viewBox="0 0 3 6" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M0 0L3 3L0 6"></path></svg></a></div>
      </div>
    </div>
    <div className='tabGroups'>
    <Tab.Group  >
      <Tab.List className="mx-auto max-w-7xl p-6 lg:px-8 flex items-center gap-20">
      <Tab as={Fragment} className="focus-visible:outline-none">
        {({ selected }) => (
          <button data-headlessui-state="selected" type="button" class={`group text-sm font-semibold flex flex-col items-center ${selected ? 'text-pink-500 dark:text-pink-400 focus-visible:outline-none' : null}`}><svg width="48" height="48" fill="none" aria-hidden="true" class="mb-6 "><path d="M5 11a4 4 0 0 1 4-4h30a4 4 0 0 1 4 4v26a4 4 0 0 1-4 4H9a4 4 0 0 1-4-4V11Z" fill="currentColor" fill-opacity=".1" stroke="currentColor" stroke-width="2"></path><path d="M15 7v34" stroke="currentColor" stroke-width="2" stroke-linecap="round"></path></svg>Simple</button>
        )}
      </Tab>
      <Tab as={Fragment} className="focus-visible:outline-none">
        {({ selected }) => (
          <button data-headlessui-state type="button" class={`group text-sm font-semibold flex flex-col items-center ${selected ?  'text-pink-500 dark:text-pink-400 focus-visible:outline-none' : null}`}><svg width="48" height="48" fill="none" aria-hidden="true" class="mb-6 "><path d="M5 11a4 4 0 0 1 4-4h30a4 4 0 0 1 4 4v26a4 4 0 0 1-4 4H9a4 4 0 0 1-4-4V11Z" fill="currentColor" fill-opacity=".1" stroke="currentColor" stroke-width="2"></path><path d="M15 7v34" stroke="currentColor" stroke-width="2" stroke-linecap="round"></path></svg>Playful</button>
        )}
      </Tab>
      <Tab as={Fragment} className="focus-visible:outline-none">
        {({ selected }) => (
          <button data-headlessui-state type="button" class={`group text-sm font-semibold flex flex-col items-center ${selected ? 'text-pink-500 dark:text-pink-400 focus-visible:outline-none' : null}`}><svg width="48" height="48" fill="none" aria-hidden="true" class="mb-6 "><path d="M5 11a4 4 0 0 1 4-4h30a4 4 0 0 1 4 4v26a4 4 0 0 1-4 4H9a4 4 0 0 1-4-4V11Z" fill="currentColor" fill-opacity=".1" stroke="currentColor" stroke-width="2"></path><path d="M15 7v34" stroke="currentColor" stroke-width="2" stroke-linecap="round"></path></svg>Elegant</button>
        )}
      </Tab>
      <Tab as={Fragment} className="focus-visible:outline-none">
        {({ selected }) => (
          <button data-headlessui-state type="button" class={`focus-visible:outline-none group text-sm font-semibold flex flex-col items-center ${selected ? 'text-pink-500 dark:text-pink-400 focus-visible:outline-none' : null}`}><svg width="48" height="48" fill="none" aria-hidden="true" class="mb-6 "><path d="M5 11a4 4 0 0 1 4-4h30a4 4 0 0 1 4 4v26a4 4 0 0 1-4 4H9a4 4 0 0 1-4-4V11Z" fill="currentColor" fill-opacity=".1" stroke="currentColor" stroke-width="2"></path><path d="M15 7v34" stroke="currentColor" stroke-width="2" stroke-linecap="round"></path></svg>Brutalist</button>
        )}
      </Tab>

      </Tab.List>
      <Tab.Panels className="relative">
      <div class="absolute inset-0 bg-top bg-no-repeat GridLockup_beams-0___8Vns -z-10 xl:top-8">
          <img src={backbg2} alt="" />
        </div>
        <div class="absolute inset-x-0 top-0 h-96 z-0 text-slate-600/10 [mask-image:linear-gradient(to_top,transparent,white)] pointer-events-none">
            <svg class="absolute inset-0 h-full w-full" xmlns="http://www.w3.org/2000/svg">
                <defs>
                    <pattern id="ryhhgfby" width="32" height="32" patternUnits="userSpaceOnUse" x="50%" y="100%" patternTransform="translate(0 -1)">
                        <path d="M0 32V.5H32" fill="none" stroke="currentColor"></path>
                    </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#ryhhgfby)"></rect>
            </svg>
        </div>
        <div >

        <Tab.Panel data-headlessui-state="selected">
          <div className='max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:grid lg:grid-cols-12 lg:gap-8'>
            <div className='lg:col-span-5 xl:col-span-6 flex flex-col'>
              <div className='relative z-10 my-auto'>
                <div className='relative shadow-xl flex leading-none'>
                  <div className='bg-white flex w-full  '>
                    <div className='relative flex items-center sm:self-start lg:self-auto xl:self-start z-50 w-full'>
                      <div className='relative z-20 overflow-hidden flex-none w-48 h-72 rounded-l-lg'>
                        <img src={cardImg1} alt="userProfile"className='size-full' />
                      </div>
                      <div className='p-6 w-full'>
                        <div className='w-full relative flex flex-wrap justify-between items-baseline '>
                        <div className='relative flex'>
                          <div className="inline-flex text-gray-900 text-lg font-semibold"><span class="hidden sm:inline whitespace-pre">Classic </span>Utility Jacket</div> 
                        </div>
                          <div className='flex-none'>
                          <div class="inline-flex text-lg font-semibold opacity-70" >$110.00</div>
                          </div>
                        </div>
                        <div class="relative whitespace-nowrap flex-none w-full mt-2">
                          <div class="inline-flex text-sm font-medium text-gray-700 ">In stock</div>
                        </div>
                        <div className='w-full flex-none flex items-center mt-5'>
                         <ul className='flex text-sm space-x-3'>
                            <li className='relative flex-none flex items-center justify-center cursor-pointer size-9 bg-slate-900 rounded-md text-white text-sm'>
                                1
                            </li>
                            <li className='relative flex-none flex items-center justify-center cursor-pointer size-9 bg-gray-100 rounded-md text-black text-sm'>
                                1
                            </li>
                            <li className='relative flex-none flex items-center justify-center cursor-pointer size-9 bg-gray-100 rounded-md text-black text-sm'>
                                1
                            </li>
                            <li className='relative flex-none flex items-center justify-center cursor-pointer size-9 bg-gray-100 rounded-md text-black text-sm'>
                                1
                            </li>
                            <li className='relative flex-none flex items-center justify-center cursor-pointer size-9 bg-gray-100 rounded-md text-black text-sm'>
                                1
                            </li>
                         </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Tab.Panel>
        <Tab.Panel>Content 2</Tab.Panel>
        <Tab.Panel>Content 3</Tab.Panel>
        <Tab.Panel>Content 3</Tab.Panel>
        </div>
      </Tab.Panels>
    </Tab.Group>
    </div>
</section> */}
<section className='overflow-hidden'>
    <div class="relative overflow-hidden bg-slate-50 py-16 ">
      <div class="absolute inset-y-0 w-full min-w-[1360px]  ">
        <img src={heroBg2} alt="" />
      </div>
      <div class="mx-auto max-w-container px-4 pt-4 sm:px-6 lg:flex lg:px-8">
        <div class="relative z-20 mx-auto max-w-[40rem] pb-16 pt-16 lg:mx-0 lg:w-[40rem] lg:max-w-none lg:flex-none lg:pb-24 lg:pr-4 lg:pt-20">
          <h1 class="text-base font-semibold leading-7 text-indigo-600">By the makers of Tailwind CSS</h1>
          <p class="mt-4 text-3xl font-extrabold tracking-[-0.04em] text-black sm:text-5xl sm:leading-[3.5rem]">Beautiful UI components, crafted with Tailwind CSS.</p>
          <div class="flex flex-wrap gap-6 mt-4">
            <div class="flex items-center text-sm font-medium text-slate-500">
              <svg class="h-8 w-8 flex-none stroke-current text-slate-400" fill="none" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M5 4.15h22.5l-2 20.5-9.25 4-9.25-4-2-20.5Z"></path><path d="M20.5 9.15H12v5.5h8.5v6l-4.25 2-4.25-2v-2.5"></path></svg>
              <span class="ml-2.5">HTML</span>
              </div>
              <div class="flex items-center text-sm font-medium text-slate-500">
                <svg class="h-8 w-8 flex-none stroke-current text-slate-400" fill="none" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><ellipse cx="16" cy="16" rx="13" ry="5"></ellipse><ellipse cx="16" cy="16" rx="13" ry="5" transform="rotate(60 16 16)"></ellipse><ellipse rx="13" ry="5" transform="matrix(-.5 .86603 .86603 .5 16 16)"></ellipse><circle cx="16" cy="16" r="2"></circle></svg>
                <span class="ml-2.5">React</span>
                </div>
                <div class="flex items-center text-sm font-medium text-slate-500">
                  <svg class="h-8 w-8 flex-none stroke-current text-slate-400" fill="none" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M19.924 5 16 11.644 12.075 5H3l13 23L29 5h-9.076Z"></path><path d="M19.879 5 16 11.26 12.121 5H8l8 13 8-13h-4.121Z"></path></svg>
                  <span class="ml-2.5">Vue</span>
                  </div>
                  </div>
                  <p class="mt-4 text-base leading-7 text-slate-600">Over 500+ professionally designed, fully responsive, expertly crafted component examples you can drop into your Tailwind projects and customize to your heart’s content.</p>
                  <div class="mt-8 flex gap-4">
                    <a class="inline-flex justify-center rounded-lg text-sm font-semibold py-3 px-4 bg-slate-900 text-white hover:bg-slate-700" href="/preview"><span>Live preview<span aria-hidden="true" class="text-slate-400 sm:inline">→</span></span></a>
                    <a class="inline-flex justify-center rounded-lg text-sm font-semibold py-3 px-4 bg-white/0 text-slate-900 ring-1 ring-slate-900/10 hover:bg-white/25 hover:ring-slate-900/15 " href="/documentation"><span>Documentation<span aria-hidden="true" class="text-black/25 sm:inline">→</span></span></a>
                    </div>
                    </div>
                    <div class="relative z-10 mt-12 hidden select-none lg:flex">
                      <div class="z-20 flex flex-col"><div class="relative p-4">
                        <div class="absolute bottom-0 left-11 right-0 top-8 bg-slate-900/[0.03]"></div>
                        <div class="pointer-events-auto relative z-10 w-[24.125rem] rounded-lg bg-white text-[0.8125rem] leading-5 text-slate-700 shadow-xl shadow-black/5 ring-1 ring-slate-700/10"><div>
                          <div class="flex items-center px-3.5 py-2.5 text-slate-400">
                            <svg class="mr-2 h-5 w-5 stroke-slate-500" fill="none" viewBox="0 0 24 24" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>Search projects...</div>
                            <div class="border-t border-slate-400/20 px-3.5 py-3">
                              <div class="mb-1.5 text-[0.6875rem] font-semibold text-slate-500">Recent searches</div>
                              <div class="flex items-center rounded-md p-1.5">
                                <svg class="mr-2.5 h-5 w-5 flex-none stroke-slate-400" fill="none" viewBox="0 0 24 24" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"></path></svg>
                                Tailwind Labs / Website Redesign
                                </div>
                                <div class="flex items-center rounded-md p-1.5 bg-indigo-600 text-white">
                                  <svg class="mr-2.5 h-5 w-5 flex-none stroke-white" fill="none" viewBox="0 0 24 24" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"></path></svg>
                                  Laravel LLC / Conference Branding
                                  </div>
                                  </div>
                                  <div class="border-t border-slate-400/20 px-3.5 py-3">
                                    <div class="flex items-center rounded-md p-1.5">
                                      <svg class="mr-2.5 h-5 w-5 flex-none stroke-slate-400" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 13h6m-3-3v6m5 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>
                                      Add new file...
                                      </div>
                                      <div class="flex items-center rounded-md p-1.5">
                                        <svg class="mr-2.5 h-5 w-5 flex-none stroke-slate-400" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 13h6m-3-3v6m-9 1V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z"></path></svg>
                                        Add new folder...
                                        </div>
                                        <div class="flex items-center rounded-md p-1.5">
                                          <svg class="mr-2.5 h-5 w-5 flex-none stroke-slate-400" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 20l4-16m2 16l4-16M6 9h14M4 15h14"></path></svg>
                                          Add hashtag...
                                          </div>
                                          <div class="flex items-center rounded-md p-1.5">
                                            <svg class="mr-2.5 h-5 w-5 flex-none stroke-slate-400" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"></path></svg>
                                            Add label...
                                            </div>
                                            </div>
                                            </div>
                                            </div>
                                            <div class="z-0"><div class="absolute -right-[95%] left-0 top-8 h-px bg-slate-900/[0.1] [mask-image:linear-gradient(to_right,transparent,white_4rem,white_calc(100%-4rem),transparent)]">
                                              </div>
                                              <div class="absolute -bottom-16 -top-2 right-0 w-px bg-slate-900/[0.1] [mask-image:linear-gradient(to_top,transparent,white_4rem,white_calc(100%-4rem),transparent)]"></div><div class="absolute -right-2/3 top-px -mb-px flex h-8 items-end overflow-hidden"><div class="flex -mb-px h-[2px] w-80 -scale-x-100">
                                                <div class="w-full flex-none blur-sm [background-image:linear-gradient(90deg,rgba(56,189,248,0)_0%,#0EA5E9_32.29%,rgba(236,72,153,0.3)_67.19%,rgba(236,72,153,0)_100%)]"></div><div class="-ml-[100%] w-full flex-none blur-[1px] [background-image:linear-gradient(90deg,rgba(56,189,248,0)_0%,#0EA5E9_32.29%,rgba(236,72,153,0.3)_67.19%,rgba(236,72,153,0)_100%)]"></div></div></div></div></div><div class="relative ml-6 flex items-center justify-end"><div class="relative p-4"><div class="pointer-events-auto h-6 w-10 rounded-full p-1 ring-1 ring-inset transition duration-200 ease-in-out bg-slate-900/10 ring-slate-900/5"><div class="h-4 w-4 rounded-full bg-white shadow-sm ring-1 ring-slate-700/10 transition duration-200 ease-in-out">
                                                  </div>
                                                  </div>
                                                  <div class="z-0">
                                                    <div class="absolute -top-full bottom-2/3 left-0 w-px bg-slate-900/[0.2] [mask-image:linear-gradient(to_top,transparent,white_4rem,white_calc(100%-4rem),transparent)]"></div>
                                                    </div>
                                                    </div>
                                                    <div class="relative p-4">
                                                      <div class="pointer-events-auto relative inline-flex rounded-md bg-white text-[0.8125rem] font-medium leading-5 text-slate-700 shadow-sm ring-1 ring-slate-700/10 hover:bg-slate-50 hover:text-slate-900">
                                                        <div class="flex px-3 py-2"><svg class="mr-2.5 h-5 w-5 flex-none fill-slate-400"><path d="M5 4a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v14l-5-2.5L5 18V4Z"></path></svg>Bookmark</div><div class="border-l border-slate-400/20 px-2.5 py-2">12k</div>
                                                        </div>
                                                        <div class="z-0"><div class="absolute -bottom-8 -top-12 right-0 w-px bg-slate-900/[0.1] [mask-image:linear-gradient(to_top,transparent,white_4rem,white_calc(100%-4rem),transparent)]"></div>
                                                        <div class="absolute -bottom-8 -top-12 left-0 w-px bg-slate-900/[0.1] [mask-image:linear-gradient(to_top,transparent,white_4rem,white_calc(100%-4rem),transparent)]"></div>
                                                        </div>
                                                        </div>
                                                        <div class="relative p-4"><div class="pointer-events-auto rounded-md bg-indigo-600 px-3 py-2 text-[0.8125rem] font-semibold leading-5 text-white hover:bg-indigo-500">Button A</div>
                                                        </div>
                                                        <div class="z-0">
                                                          <div class="absolute -left-12 -right-4 top-0 h-px bg-slate-900/[0.1] [mask-image:linear-gradient(to_right,transparent,white_4rem,white_calc(100%-4rem),transparent)]"></div>
                                                          <div class="absolute -right-4 bottom-0 left-0 h-px bg-slate-900/[0.1] [mask-image:linear-gradient(to_right,transparent,white_4rem,white_calc(100%-4rem),transparent)]"></div>
                                                          </div>
                                                          </div>
                                                          </div>
                                                          <div class="relative z-10 mt-8">
                                                            <div class="relative p-4">
                                                              <div class="w-[19.875rem] rounded-lg bg-white text-[0.8125rem] leading-5 text-slate-900 shadow-xl shadow-black/5 ring-1 ring-slate-700/10">
                                                                <div class="flex items-center p-4 pb-0">
                                                                  <img src={userProfile} className='h-10 w-10 flex-none rounded-full' alt="" />
                                                                  <div class="ml-4 flex-auto"><div class="font-medium">Emily Selman</div>
                                                                  <div class="mt-1 text-slate-500">Sent you an invite to connect.</div>
                                                                  </div>
                                                                  </div>
                                                                  <div class="flex gap-3 p-4"><div class="pointer-events-auto rounded-md bg-indigo-600 px-3 py-2 text-[0.8125rem] font-semibold leading-5 text-white hover:bg-indigo-500">Accept</div><div class="pointer-events-auto rounded-md px-4 py-2 text-center font-medium shadow-sm ring-1 ring-slate-700/10 hover:bg-slate-50">Decline</div></div></div><div class="z-0"><div class="absolute -left-12 -right-4 bottom-0 h-px bg-slate-900/[0.1] [mask-image:linear-gradient(to_right,transparent,white_4rem,white_calc(100%-4rem),transparent)]"></div><div class="absolute -bottom-16 -top-2 left-[21.875rem] w-px bg-slate-900/[0.1] [mask-image:linear-gradient(to_top,transparent,white_4rem,white_calc(100%-4rem),transparent)]"></div>
                                                                  </div>
                                                                  </div>
                                                                  
                                                                  <div class="relative p-4"><div class="w-[24.5rem] divide-y divide-slate-400/20 rounded-lg bg-white text-[0.8125rem] leading-5 text-slate-900 shadow-xl shadow-black/5 ring-1 ring-slate-700/10"><div class="flex items-center p-4">
                                                                    <img src={userProfile} alt="" class="h-10 w-10 flex-none rounded-full"/>
                                                                      <div class="ml-4 flex-auto"><div class="font-medium">Leonard Krasner</div>
                                                                      <div class="mt-1 text-slate-700">@leonardkrasner</div>
                                                                      </div>
                                                                      <div class="pointer-events-auto ml-4 flex-none rounded-md px-2 py-[0.3125rem] font-medium text-slate-700 shadow-sm ring-1 ring-slate-700/10 hover:bg-slate-50">View</div>
                                                                      </div>
                                                                      <div class="flex items-center p-4"><img src={userProfile} alt="" class="h-10 w-10 flex-none rounded-full"/>
                                                                      <div class="ml-4 flex-auto"><div class="font-medium">Floyd Miles</div><div class="mt-1 text-slate-700">@floydmiles</div>
                                                                      </div>
                                                                      <div class="pointer-events-auto ml-4 flex-none rounded-md px-2 py-[0.3125rem] font-medium text-slate-700 shadow-sm ring-1 ring-slate-700/10 hover:bg-slate-50">View</div></div><div class="p-4"><div class="pointer-events-auto rounded-md px-4 py-2 text-center font-medium shadow-sm ring-1 ring-slate-700/10 hover:bg-slate-50">View all</div></div></div></div></div></div></div><div class="relative z-20 sm:z-auto">
                                                                        <div class="mx-auto max-w-container px-4 pb-16 sm:px-6 lg:px-8">
                                                                          <div class="relative mx-auto grid max-w-[40rem] grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-3">
                                                                            <div class="flex">
                                                                              <div class="p-0.5">
                                                                                <svg class="h-10 w-10 shrink-0 transform-cpu rounded-lg shadow-md shadow-indigo-500/[.12]" viewBox="0 0 40 40" fill="none" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M.75 8A7.25 7.25 0 018 .75h24A7.25 7.25 0 0139.25 8v24A7.25 7.25 0 0132 39.25H8A7.25 7.25 0 01.75 32V8z" class="fill-indigo-50 stroke-indigo-500"></path><path d="M27 25.335L30.25 27l-6.603 3.382a8 8 0 01-7.294 0L9.75 27 13 25.335m14-6.999L30.25 20l-6.603 3.382a8 8 0 01-7.294 0L9.75 20 13 18.336" class="stroke-indigo-500/50"></path><path d="M9.75 13l9.338-4.783a2 2 0 011.824 0L30.25 13l-6.603 3.382a8 8 0 01-7.294 0L9.75 13z" class="stroke-indigo-500"></path></svg></div><div class="ml-6"><h2 class="text-sm font-semibold leading-6 text-slate-900">500+ Components</h2><p class="mt-2 text-sm leading-6 text-slate-700">Beautifully designed, expertly crafted components that follow all accessibility best practices and are easy to customize.</p></div></div><div class="flex"><div class="p-0.5"><svg class="h-10 w-10 shrink-0 transform-cpu rounded-lg shadow-md shadow-indigo-500/[.12]" viewBox="0 0 40 40" fill="none" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M.75 8A7.25 7.25 0 018 .75h24A7.25 7.25 0 0139.25 8v24A7.25 7.25 0 0132 39.25H8A7.25 7.25 0 01.75 32V8z" class="fill-indigo-50 stroke-indigo-500"></path><path d="M22.25 11.75l-4.5 16.5" class="stroke-indigo-500/50"></path><path d="M16.25 7.75h-.5a4 4 0 00-4 4v4.007a3 3 0 01-.88 2.122 3 3 0 000 4.242 3 3 0 01.88 2.122v4.007a4 4 0 004 4h.5m7.5-24.5h.5a4 4 0 014 4v4.007a3.002 3.002 0 00.878 2.122 3 3 0 010 4.242 3 3 0 00-.878 2.122v4.007a4 4 0 01-4 4h-.5" class="stroke-indigo-500"></path></svg></div><div class="ml-6"><h2 class="text-sm font-semibold leading-6 text-slate-900">React, Vue, and HTML</h2><p class="mt-2 text-sm leading-6 text-slate-700">Interactive examples for React and Vue powered by Headless UI, plus vanilla HTML if you’d rather write any necessary JS yourself.</p></div></div><div class="flex"><div class="p-0.5"><svg class="h-10 w-10 shrink-0 transform-cpu rounded-lg shadow-md shadow-indigo-500/[.12]" viewBox="0 0 40 40" fill="none" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M.75 8A7.25 7.25 0 018 .75h24A7.25 7.25 0 0139.25 8v24A7.25 7.25 0 0132 39.25H8A7.25 7.25 0 01.75 32V8z" class="fill-indigo-50 stroke-indigo-500"></path><path d="M7.75 21.25v-1.5a4 4 0 014-4h7.5m5 5v7.5a4 4 0 01-4 4h-1.5M27.75 32.25h.5a4 4 0 004-4v-10.5m-10-10h-10.5a4 4 0 00-4 4v.5" class="stroke-indigo-500/50"></path><path d="M31.5 8.5l-23 23" class="stroke-indigo-500"></path><path d="M25.75 7.75h4.5a2 2 0 012 2v4.5m-18 18h-4.5a2 2 0 01-2-2v-4.5" class="stroke-indigo-500"></path></svg></div><div class="ml-6"><h2 class="text-sm font-semibold leading-6 text-slate-900">Fully Responsive</h2><p class="mt-2 text-sm leading-6 text-slate-700">Every example is fully responsive and carefully designed and implemented to look great at any screen size.</p></div></div></div></div></div><div class="pointer-events-none absolute inset-0 shadow-[inset_0_-1px_1px_rgba(0,0,0,0.06)]"></div></div>
</section>

    </>
  )
}

export default Home