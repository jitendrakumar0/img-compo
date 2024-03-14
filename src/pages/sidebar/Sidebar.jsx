import React from 'react'
import { Tab } from '@headlessui/react'
import userprofile from '../../assets/img/user.webp'

import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'

const Sidebar = () => {

    let [isOpen, setIsOpens] = useState(false)

    function closeModal() {
      setIsOpen(false)
    }
  
    function openModal() {
      setIsOpen(true)
    }

    // search bar modal 

        let [isOpens, setIsOpen] = useState(false)
      
        function closeModal() {
          setIsOpen(false)
        }
      
        function openModals() {
          setIsOpen(true)
        }
    // search bar modal end 



  return (
   <>
   
    <div className='overflow-hidden h-dvh pt-[73px]'>
            <div className='lg:flex flexwrap h-full overflow-hidden'>
                <div class="flex items-center p-4 border-b border-slate-900/10 lg:hidden dark:border-slate-50/[0.06]">
                    <button
                        type="button"
                        onClick={openModal}
                        className="border-0 shadow-none flex items-center justify-center"
                        >
                                <svg class="h-6 w-6 text-black" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"></path></svg>
                    </button>
                        <ol class="ml-4 flex text-sm leading-6 whitespace-nowrap min-w-0">
                            <li class="flex items-center">Getting Started
                                <svg width="3" height="6" aria-hidden="true" class="mx-3 overflow-visible text-slate-400">
                                    <path d="M0 0L3 3L0 6" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"></path>
                                </svg>
                            </li>
                            <li class="font-semibold text-slate-900 truncate dark:text-slate-200">Installation</li>
                        </ol>
                </div>
                <div className='sidebar h-full flex-none  w-72 overflow-y-auto lg:block hidden'>
                <div className='px-5'>
                <div className="sticky top-0 -ml-0.5 pointer-events-none">
                    <div className="h-2 bg-white dark:bg-slate-900"></div>
                    <div className="bg-white dark:bg-slate-900 relative pointer-events-auto">
                        <button type="button" onClick={openModals} className="hidden w-full lg:flex items-center text-sm leading-6 text-slate-400 rounded-md ring-1 ring-slate-900/10 shadow-sm py-1.5 pl-2 pr-3 hover:ring-slate-300 dark:bg-slate-800 dark:highlight-white/5 dark:hover:bg-slate-700" >
                        <svg width="24" height="24" fill="none" aria-hidden="true" className="mr-3 flex-none"><path d="m19 19-3.5-3.5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><circle cx="11" cy="11" r="6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></circle></svg>
                                Quick search...<span class="ml-auto pl-3 flex-none text-xs font-semibold">Ctrl K</span>
                        </button>
                    </div>
                    <div class="h-5 bg-gradient-to-b from-white dark:from-slate-900"></div></div>

                    <ul>
                        <li>
                            <a class="group flex items-center lg:text-sm lg:leading-6 mb-4 font-semibold text-sky-500 dark:text-sky-400" href="/docs/installation"><div class="mr-4 rounded-md ring-1 ring-slate-900/5 shadow-sm group-hover:shadow group-hover:ring-slate-900/10 dark:ring-0 dark:shadow-none dark:group-hover:shadow-none dark:group-hover:highlight-white/10 group-hover:shadow-sky-200 dark:group-hover:bg-sky-500 dark:bg-sky-500 dark:highlight-white/10"><svg class="h-6 w-6" viewBox="0 0 24 24" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M8.5 7c1.093 0 2.117.27 3 .743V17a6.345 6.345 0 0 0-3-.743c-1.093 0-2.617.27-3.5.743V7.743C5.883 7.27 7.407 7 8.5 7Z" class="fill-sky-200 group-hover:fill-sky-500 dark:fill-sky-300 dark:group-hover:fill-sky-300"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M15.5 7c1.093 0 2.617.27 3.5.743V17c-.883-.473-2.407-.743-3.5-.743s-2.117.27-3 .743V7.743a6.344 6.344 0 0 1 3-.743Z" class="fill-sky-400 group-hover:fill-sky-500 dark:fill-sky-200 dark:group-hover:fill-sky-200"></path></svg></div>Documentation</a>
                        </li>
                        <li>
                            <a class="group flex items-center lg:text-sm lg:leading-6 mb-4 font-medium text-slate-700 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300" href="https://tailwindui.com/components?ref=sidebar">
                            <div class="mr-4 rounded-md ring-1 ring-slate-900/5 shadow-sm group-hover:shadow group-hover:ring-slate-900/10 dark:ring-0 dark:shadow-none dark:group-hover:shadow-none dark:group-hover:highlight-white/10 group-hover:shadow-indigo-200 dark:group-hover:bg-indigo-500 dark:bg-slate-800 dark:highlight-white/5">
                            <svg class="h-6 w-6" viewBox="0 0 24 24" fill="none"><path d="m6 9 6-3 6 3v6l-6 3-6-3V9Z" class="fill-indigo-100 group-hover:fill-indigo-200 dark:fill-slate-400"></path><path d="m6 9 6 3v7l-6-3V9Z" class="fill-indigo-300 group-hover:fill-indigo-400 dark:group-hover:fill-indigo-300 dark:fill-slate-500"></path><path d="m18 9-6 3v7l6-3V9Z" class="fill-indigo-400 group-hover:fill-indigo-500 dark:group-hover:fill-indigo-400 dark:fill-slate-600"></path></svg>
                            </div>
                            Components
                            </a>
                        </li>
                        <li>
                            <a class="group flex items-center lg:text-sm lg:leading-6 mb-4 font-medium text-slate-700 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300" href="https://tailwindui.com/templates?ref=sidebar"><div class="mr-4 rounded-md ring-1 ring-slate-900/5 shadow-sm group-hover:shadow group-hover:ring-slate-900/10 dark:ring-0 dark:shadow-none dark:group-hover:shadow-none dark:group-hover:highlight-white/10 group-hover:shadow-fuchsia-200 dark:group-hover:bg-fuchsia-600 dark:bg-slate-800 dark:highlight-white/5"><svg class="h-6 w-6" viewBox="0 0 24 24" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M8 6C6.89543 6 6 6.89543 6 8V16C6 17.1046 6.89543 18 8 18H10.5C11.0523 18 11.5 17.5523 11.5 17V12C11.5 10.6193 12.6193 9.5 14 9.5H18V8C18 6.89543 17.1046 6 16 6H8ZM7.25 8C7.25 7.58579 7.58579 7.25 8 7.25H8.01C8.42421 7.25 8.76 7.58579 8.76 8C8.76 8.41421 8.42421 8.75 8.01 8.75H8C7.58579 8.75 7.25 8.41421 7.25 8ZM10 7.25C9.58579 7.25 9.25 7.58579 9.25 8C9.25 8.41421 9.58579 8.75 10 8.75H10.01C10.4242 8.75 10.76 8.41421 10.76 8C10.76 7.58579 10.4242 7.25 10.01 7.25H10Z" fill="#E879F9" class="fill-fuchsia-400 group-hover:fill-fuchsia-500 dark:group-hover:fill-fuchsia-300 dark:fill-slate-400"></path><path d="M13 12C13 11.4477 13.4477 11 14 11H17C17.5523 11 18 11.4477 18 12V17C18 17.5523 17.5523 18 17 18H14C13.4477 18 13 17.5523 13 17V12Z" fill="#F0ABFC" class="fill-fuchsia-300 group-hover:fill-fuchsia-400 dark:fill-slate-500"></path></svg>
                            </div>Templates
                            </a>
                        </li>
                        <li>
                            <a class="group flex items-center lg:text-sm lg:leading-6 mb-4 font-medium text-slate-700 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300" href="https://www.youtube.com/tailwindlabs">
                            <div class="mr-4 rounded-md ring-1 ring-slate-900/5 shadow-sm group-hover:shadow group-hover:ring-slate-900/10 dark:ring-0 dark:shadow-none dark:group-hover:shadow-none dark:group-hover:highlight-white/10 group-hover:shadow-pink-200 dark:group-hover:bg-pink-500 dark:bg-slate-800 dark:highlight-white/5"><svg class="h-6 w-6" viewBox="0 0 24 24" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M19 12a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z" class="fill-pink-400 group-hover:fill-pink-500 dark:group-hover:fill-pink-300 dark:fill-slate-600"></path><path d="M11.082 9.107a.685.685 0 0 0-.72-.01.757.757 0 0 0-.362.653v4.5c0 .27.138.52.362.653.224.133.5.13.72-.01l3.571-2.25A.758.758 0 0 0 15 12a.758.758 0 0 0-.347-.643l-3.571-2.25Z" class="fill-pink-50 group-hover:fill-pink-100 dark:group-hover:fill-white dark:fill-slate-400"></path></svg></div>Screencasts</a>
                        </li>
                        <li>
                            <a class="group flex items-center lg:text-sm lg:leading-6 mb-4 font-medium text-slate-700 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300" href="https://play.tailwindcss.com"><div class="mr-4 rounded-md ring-1 ring-slate-900/5 shadow-sm group-hover:shadow group-hover:ring-slate-900/10 dark:ring-0 dark:shadow-none dark:group-hover:shadow-none dark:group-hover:highlight-white/10 group-hover:shadow-blue-200 dark:group-hover:bg-blue-500 dark:bg-slate-800 dark:highlight-white/5"><svg class="h-6 w-6" viewBox="0 0 24 24" fill="none"><path d="M4 12a7 7 0 0 1 7-7h2a7 7 0 1 1 0 14h-2a7 7 0 0 1-7-7Z" class="fill-blue-400 group-hover:fill-blue-500 dark:group-hover:fill-blue-400 dark:fill-slate-600"></path><path d="M10.25 9.75 7.75 12l2.5 2.25" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="stroke-blue-50 dark:stroke-slate-400 dark:group-hover:stroke-white dark:stroke-slate-400"></path><path d="m13.75 9.75 2.5 2.25-2.5 2.25" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="stroke-blue-200 dark:group-hover:stroke-white dark:stroke-slate-400"></path></svg>
                            </div>Playground</a>
                        </li>
                        <li>
                            <a class="group flex items-center lg:text-sm lg:leading-6 mb-4 font-medium text-slate-700 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300" href="/resources"><div class="mr-4 rounded-md ring-1 ring-slate-900/5 shadow-sm group-hover:shadow group-hover:ring-slate-900/10 dark:ring-0 dark:shadow-none dark:group-hover:shadow-none dark:group-hover:highlight-white/10 group-hover:shadow-purple-200 dark:group-hover:bg-purple-400 dark:bg-slate-800 dark:highlight-white/5"><svg class="h-6 w-6" viewBox="0 0 24 24" fill="none"><path d="M6 8a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V8ZM6 15a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2v-1Z" class="fill-purple-400 group-hover:fill-purple-500 dark:group-hover:fill-purple-300 dark:fill-slate-600"></path><path d="M13 8a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2V8Z" class="fill-purple-200 group-hover:fill-purple-300 dark:group-hover:fill-white dark:fill-slate-400"></path><path d="M13 15a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-1Z" class="fill-purple-400 group-hover:fill-purple-500 dark:group-hover:fill-purple-300 dark:fill-slate-600"></path></svg>
                            </div>
                            <span class="">Resources</span></a>
                        </li>
                        <li class="mt-12 lg:mt-8">
                            <h5 class="mb-8 lg:mb-3 font-semibold text-slate-900 dark:text-slate-200">Getting Started</h5>
                            <ul class="space-y-6 lg:space-y-2 border-l border-slate-100 dark:border-slate-800">
                                <li data-active="true">
                                    <a class="block border-l pl-4 -ml-px text-sky-500 border-current font-semibold dark:text-sky-400" href="/docs/installation">Installation</a>
                                </li>
                                <li>
                                    <a class="block border-l pl-4 -ml-px border-transparent hover:border-slate-400 dark:hover:border-slate-500 text-slate-700 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300" href="/docs/editor-setup">Editor Setup</a>
                                </li>
                                <li>
                                    <a class="block border-l pl-4 -ml-px border-transparent hover:border-slate-400 dark:hover:border-slate-500 text-slate-700 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300" href="/docs/using-with-preprocessors">Using with Preprocessors</a>
                                </li>
                                <li>
                                    <a class="block border-l pl-4 -ml-px border-transparent hover:border-slate-400 dark:hover:border-slate-500 text-slate-700 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300" href="/docs/optimizing-for-production">Optimizing for Production</a>
                                </li>
                                <li>
                                    <a class="block border-l pl-4 -ml-px border-transparent hover:border-slate-400 dark:hover:border-slate-500 text-slate-700 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300" href="/docs/browser-support">Browser Support</a>
                                </li>
                                <li>
                                    <a class="block border-l pl-4 -ml-px border-transparent hover:border-slate-400 dark:hover:border-slate-500 text-slate-700 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300" href="/docs/upgrade-guide">Upgrade Guide</a>
                                </li>
                            </ul>
                        </li>
                        <li class="mt-12 lg:mt-8">
                            <h5 class="mb-8 lg:mb-3 font-semibold text-slate-900 dark:text-slate-200">Core Concepts</h5>
                            <ul class="space-y-6 lg:space-y-2 border-l border-slate-100 dark:border-slate-800">
                                <li>
                                    <a class="block border-l pl-4 -ml-px border-transparent hover:border-slate-400 dark:hover:border-slate-500 text-slate-700 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300" href="/docs/utility-first">Utility-First Fundamentals</a>
                                </li>
                                <li>
                                    <a class="block border-l pl-4 -ml-px border-transparent hover:border-slate-400 dark:hover:border-slate-500 text-slate-700 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300" href="/docs/hover-focus-and-other-states">Hover, Focus, and Other States</a></li>
                                <li>
                                    <a class="block border-l pl-4 -ml-px border-transparent hover:border-slate-400 dark:hover:border-slate-500 text-slate-700 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300" href="/docs/responsive-design">Responsive Design</a></li>
                                <li>
                                    <a class="block border-l pl-4 -ml-px border-transparent hover:border-slate-400 dark:hover:border-slate-500 text-slate-700 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300" href="/docs/dark-mode">Dark Mode</a>
                                </li>
                                <li>
                                    <a class="block border-l pl-4 -ml-px border-transparent hover:border-slate-400 dark:hover:border-slate-500 text-slate-700 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300" href="/docs/reusing-styles">Reusing Styles</a>
                                </li>
                                
                                <li>
                                    <a class="block border-l pl-4 -ml-px border-transparent hover:border-slate-400 dark:hover:border-slate-500 text-slate-700 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300" href="/docs/adding-custom-styles">Adding Custom Styles</a>
                                </li>
                                <li>
                                    <a class="block border-l pl-4 -ml-px border-transparent hover:border-slate-400 dark:hover:border-slate-500 text-slate-700 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300" href="/docs/functions-and-directives">Functions &amp; Directives</a>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
                </div>
                <div className='p-5 h-full overflow-y-auto grow'>
                    <div className='content overflow-hidden'>
                        <header id="header" className="mb-10 md:flex md:items-start">
                            <div className="flex-auto max-w-4xl">
                                <div className="mb-4 text-sm leading-6 font-semibold text-sky-500 dark:text-sky-400">Installation</div>
                                <div className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight dark:text-slate-200">Get started with Tailwind CSS</div>
                                <div className="mt-4 text-lg text-slate-700 dark:text-slate-400">Tailwind CSS works by scanning all of your HTML files, JavaScript components, and any other templates for class names, generating the corresponding styles and then writing them to a static CSS file.</div>
                                <div className="mt-4 text-lg text-slate-700 dark:text-slate-400">It's fast, flexible, and reliable — with zero-runtime.</div>
                            </div>
                        </header>
                    </div>
                    <div className='tabsgroup overflow-hidden'>
                        <Tab.Group>
                            <Tab.List className="flex items-center overflow-x-auto overflow-y-hidden gap-10 border-b w-auto">
                                <Tab>
                                    <a class="flex text-sm leading-6 font-semibold pt-3 text-nowrap pb-2.5 border-b-2 -mb-px text-sky-500 border-current" href="#">Tailwind CLI</a>
                                </Tab>
                                <Tab>
                                    <a class="flex text-sm leading-6 font-semibold pt-3 text-nowrap pb-2.5 border-b-2 -mb-px text-slate-900 border-transparent hover:border-slate-300 dark:text-slate-200 dark:hover:border-slate-700" href="#">Using PostCSS</a>
                                </Tab>
                                <Tab>
                                    <a class="flex text-sm leading-6 font-semibold pt-3 text-nowrap pb-2.5 border-b-2 -mb-px text-slate-900 border-transparent hover:border-slate-300 dark:text-slate-200 dark:hover:border-slate-700" href="#">Framework Guides</a>
                                </Tab>
                                <Tab>
                                <a class="flex text-sm leading-6 font-semibold pt-3 text-nowrap pb-2.5 border-b-2 -mb-px text-slate-900 border-transparent hover:border-slate-300 dark:text-slate-200 dark:hover:border-slate-700" href="#">Play CDN</a>
                                </Tab>
                            </Tab.List>
                            <Tab.Panels className="mt-10">
                                <Tab.Panel>
                                <div id="content-wrapper" class="relative z-10 max-w-3xl mb-16 prose prose-slate dark:prose-dark">
                                    <div className="sr-only">Installing Tailwind CLI</div>
                                    <div>The simplest and fastest way to get up and running with Tailwind CSS from scratch is with the Tailwind CLI tool. The CLI is also available as a <a href="/">standalone executable</a> if you want to use it without installing Node.js.</div>
                                </div>
                                <div>
                                    <ol className='relative space-y-2 mb-16 stap-0'>
                                        <li className="relative pl-10 lg:flex justify-between gap-16 before:content-[counter(step)] before:absolute before:left-0 before:flex before:items-center before:justify-center before:w-[calc(1.375rem+1px)] before:h-[calc(1.375rem+1px)] before:text-[0.625rem] before:font-bold before:text-slate-700 before:rounded-md before:shadow-sm before:ring-1 before:ring-slate-900/5 dark:before:bg-slate-700 dark:before:text-slate-200 dark:before:ring-0 dark:before:shadow-none dark:before:highlight-white/5 pb-8 after:absolute after:top-[calc(1.875rem+1px)] after:bottom-0 after:left-[0.6875rem] after:w-px after:bg-slate-200 dark:after:bg-slate-200/5 " >
                                            <div className="mb-6 col-span-2 xl:mb-0">
                                                <div className="text-sm leading-6 text-slate-900 font-semibold mb-2 dark:text-slate-200">Install Tailwind CSS</div>
                                                <div className="prose prose-slate prose-sm dark:prose-dark">
                                                    
                                                <div>Install <code>tailwindcss</code> via npm, and create your <code>tailwind.config.js</code> file.</div>
                                                </div>
                                            </div>
                                            <div class="relative z-10 -ml-10 col-span-3 bg-slate-800 rounded-xl shadow-lg xl:ml-0 dark:shadow-none dark:ring-1 dark:ring-inset w-full dark:ring-white/10">
                                            <div class="relative flex text-slate-400 text-xs leading-6">
                                            <div class="mt-2 flex-none text-sky-300 border-t border-b border-t-transparent border-b-sky-300 px-4 py-1 flex items-center">Terminal</div>
                                            <div class="flex-auto flex pt-2 rounded-tr-xl overflow-hidden">
                                            <div class="flex-auto -mr-px bg-slate-700/50 border border-slate-500/30 rounded-tl"></div>
                                            </div>
                                            <div class="absolute top-2 right-0 h-8 flex items-center pr-4"><div class="relative flex -mr-2"><button type="button" class="text-slate-500 hover:text-slate-400"><svg fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" class="w-8 h-8"><path d="M13 10.75h-1.25a2 2 0 0 0-2 2v8.5a2 2 0 0 0 2 2h8.5a2 2 0 0 0 2-2v-8.5a2 2 0 0 0-2-2H19"></path><path d="M18 12.25h-4a1 1 0 0 1-1-1v-1.5a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v1.5a1 1 0 0 1-1 1ZM13.75 16.25h4.5M13.75 19.25h4.5"></path></svg></button></div></div></div><div class="relative"><pre class="text-sm leading-6 text-slate-50 flex ligatures-none overflow-auto"><code class="flex-none min-w-full p-5"><span class="flex"><svg viewBox="0 -9 3 24" aria-hidden="true" class="flex-none overflow-visible text-pink-400 w-auto h-6 mr-3"><path d="M0 0L3 3L0 6" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg><span class="flex-auto">npm install -D tailwindcss</span></span><span class="flex"><svg viewBox="0 -9 3 24" aria-hidden="true" class="flex-none overflow-visible text-pink-400 w-auto h-6 mr-3"><path d="M0 0L3 3L0 6" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg><span class="flex-auto">npx tailwindcss init</span></span></code></pre></div></div>
                                        
                                        </li>
                                        <li className="relative pl-10 lg:flex justify-between gap-16 before:content-[counter(step)] before:absolute before:left-0 before:flex before:items-center before:justify-center before:w-[calc(1.375rem+1px)] before:h-[calc(1.375rem+1px)] before:text-[0.625rem] before:font-bold before:text-slate-700 before:rounded-md before:shadow-sm before:ring-1 before:ring-slate-900/5 dark:before:bg-slate-700 dark:before:text-slate-200 dark:before:ring-0 dark:before:shadow-none dark:before:highlight-white/5 pb-8 after:absolute after:top-[calc(1.875rem+1px)] after:bottom-0 after:left-[0.6875rem] after:w-px after:bg-slate-200 dark:after:bg-slate-200/5 " >
                                            <div className="mb-6 col-span-2 xl:mb-0">
                                                <div className="text-sm leading-6 text-slate-900 font-semibold mb-2 dark:text-slate-200">Install Tailwind CSS</div>
                                                <div className="prose prose-slate prose-sm dark:prose-dark">
                                                    
                                                <div>Install <code>tailwindcss</code> via npm, and create your <code>tailwind.config.js</code> file.</div>
                                                </div>
                                            </div>
                                            <div class="relative z-10 -ml-10 col-span-3 bg-slate-800 rounded-xl shadow-lg xl:ml-0 dark:shadow-none dark:ring-1 dark:ring-inset w-full dark:ring-white/10">
                                            <div class="relative flex text-slate-400 text-xs leading-6">
                                            <div class="mt-2 flex-none text-sky-300 border-t border-b border-t-transparent border-b-sky-300 px-4 py-1 flex items-center">Terminal</div>
                                            <div class="flex-auto flex pt-2 rounded-tr-xl overflow-hidden">
                                            <div class="flex-auto -mr-px bg-slate-700/50 border border-slate-500/30 rounded-tl"></div>
                                            </div>
                                            <div class="absolute top-2 right-0 h-8 flex items-center pr-4"><div class="relative flex -mr-2"><button type="button" class="text-slate-500 hover:text-slate-400"><svg fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" class="w-8 h-8"><path d="M13 10.75h-1.25a2 2 0 0 0-2 2v8.5a2 2 0 0 0 2 2h8.5a2 2 0 0 0 2-2v-8.5a2 2 0 0 0-2-2H19"></path><path d="M18 12.25h-4a1 1 0 0 1-1-1v-1.5a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v1.5a1 1 0 0 1-1 1ZM13.75 16.25h4.5M13.75 19.25h4.5"></path></svg></button></div></div></div><div class="relative"><pre class="text-sm leading-6 text-slate-50 flex ligatures-none overflow-auto"><code class="flex-none min-w-full p-5"><span class="flex"><svg viewBox="0 -9 3 24" aria-hidden="true" class="flex-none overflow-visible text-pink-400 w-auto h-6 mr-3"><path d="M0 0L3 3L0 6" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg><span class="flex-auto">npm install -D tailwindcss</span></span><span class="flex"><svg viewBox="0 -9 3 24" aria-hidden="true" class="flex-none overflow-visible text-pink-400 w-auto h-6 mr-3"><path d="M0 0L3 3L0 6" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg><span class="flex-auto">npx tailwindcss init</span></span></code></pre></div></div>
                                        
                                        </li>
                                        <li className="relative pl-10 lg:flex justify-between gap-16 before:content-[counter(step)] before:absolute before:left-0 before:flex before:items-center before:justify-center before:w-[calc(1.375rem+1px)] before:h-[calc(1.375rem+1px)] before:text-[0.625rem] before:font-bold before:text-slate-700 before:rounded-md before:shadow-sm before:ring-1 before:ring-slate-900/5 dark:before:bg-slate-700 dark:before:text-slate-200 dark:before:ring-0 dark:before:shadow-none dark:before:highlight-white/5 pb-8 after:absolute after:top-[calc(1.875rem+1px)] after:bottom-0 after:left-[0.6875rem] after:w-px after:bg-slate-200 dark:after:bg-slate-200/5 " >
                                            <div className="mb-6 col-span-2 xl:mb-0">
                                                <div className="text-sm leading-6 text-slate-900 font-semibold mb-2 dark:text-slate-200">Install Tailwind CSS</div>
                                                <div className="prose prose-slate prose-sm dark:prose-dark">
                                                    
                                                <div>Install <code>tailwindcss</code> via npm, and create your <code>tailwind.config.js</code> file.</div>
                                                </div>
                                            </div>
                                            <div class="relative z-10 -ml-10 col-span-3 bg-slate-800 rounded-xl shadow-lg xl:ml-0 dark:shadow-none dark:ring-1 dark:ring-inset w-full dark:ring-white/10">
                                            <div class="relative flex text-slate-400 text-xs leading-6">
                                            <div class="mt-2 flex-none text-sky-300 border-t border-b border-t-transparent border-b-sky-300 px-4 py-1 flex items-center">Terminal</div>
                                            <div class="flex-auto flex pt-2 rounded-tr-xl overflow-hidden">
                                            <div class="flex-auto -mr-px bg-slate-700/50 border border-slate-500/30 rounded-tl"></div>
                                            </div>
                                            <div class="absolute top-2 right-0 h-8 flex items-center pr-4"><div class="relative flex -mr-2"><button type="button" class="text-slate-500 hover:text-slate-400"><svg fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" class="w-8 h-8"><path d="M13 10.75h-1.25a2 2 0 0 0-2 2v8.5a2 2 0 0 0 2 2h8.5a2 2 0 0 0 2-2v-8.5a2 2 0 0 0-2-2H19"></path><path d="M18 12.25h-4a1 1 0 0 1-1-1v-1.5a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v1.5a1 1 0 0 1-1 1ZM13.75 16.25h4.5M13.75 19.25h4.5"></path></svg></button></div></div></div><div class="relative"><pre class="text-sm leading-6 text-slate-50 flex ligatures-none overflow-auto"><code class="flex-none min-w-full p-5"><span class="flex"><svg viewBox="0 -9 3 24" aria-hidden="true" class="flex-none overflow-visible text-pink-400 w-auto h-6 mr-3"><path d="M0 0L3 3L0 6" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg><span class="flex-auto">npm install -D tailwindcss</span></span><span class="flex"><svg viewBox="0 -9 3 24" aria-hidden="true" class="flex-none overflow-visible text-pink-400 w-auto h-6 mr-3"><path d="M0 0L3 3L0 6" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg><span class="flex-auto">npx tailwindcss init</span></span></code></pre></div></div>
                                        
                                        </li>
                                        <li className="relative pl-10 lg:flex justify-between gap-16 before:content-[counter(step)] before:absolute before:left-0 before:flex before:items-center before:justify-center before:w-[calc(1.375rem+1px)] before:h-[calc(1.375rem+1px)] before:text-[0.625rem] before:font-bold before:text-slate-700 before:rounded-md before:shadow-sm before:ring-1 before:ring-slate-900/5 dark:before:bg-slate-700 dark:before:text-slate-200 dark:before:ring-0 dark:before:shadow-none dark:before:highlight-white/5 pb-8 after:absolute after:top-[calc(1.875rem+1px)] after:bottom-0 after:left-[0.6875rem] after:w-px after:bg-slate-200 dark:after:bg-slate-200/5 " >
                                            <div className="mb-6 col-span-2 xl:mb-0">
                                                <div className="text-sm leading-6 text-slate-900 font-semibold mb-2 dark:text-slate-200">Install Tailwind CSS</div>
                                                <div className="prose prose-slate prose-sm dark:prose-dark">
                                                    
                                                <div>Install <code>tailwindcss</code> via npm, and create your <code>tailwind.config.js</code> file.</div>
                                                </div>
                                            </div>
                                            <div class="relative z-10 -ml-10 col-span-3 bg-slate-800 rounded-xl shadow-lg xl:ml-0 dark:shadow-none dark:ring-1 dark:ring-inset w-full dark:ring-white/10">
                                            <div class="relative flex text-slate-400 text-xs leading-6">
                                            <div class="mt-2 flex-none text-sky-300 border-t border-b border-t-transparent border-b-sky-300 px-4 py-1 flex items-center">Terminal</div>
                                            <div class="flex-auto flex pt-2 rounded-tr-xl overflow-hidden">
                                            <div class="flex-auto -mr-px bg-slate-700/50 border border-slate-500/30 rounded-tl"></div>
                                            </div>
                                            <div class="absolute top-2 right-0 h-8 flex items-center pr-4"><div class="relative flex -mr-2"><button type="button" class="text-slate-500 hover:text-slate-400"><svg fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" class="w-8 h-8"><path d="M13 10.75h-1.25a2 2 0 0 0-2 2v8.5a2 2 0 0 0 2 2h8.5a2 2 0 0 0 2-2v-8.5a2 2 0 0 0-2-2H19"></path><path d="M18 12.25h-4a1 1 0 0 1-1-1v-1.5a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v1.5a1 1 0 0 1-1 1ZM13.75 16.25h4.5M13.75 19.25h4.5"></path></svg></button></div></div></div><div class="relative"><pre class="text-sm leading-6 text-slate-50 flex ligatures-none overflow-auto"><code class="flex-none min-w-full p-5"><span class="flex"><svg viewBox="0 -9 3 24" aria-hidden="true" class="flex-none overflow-visible text-pink-400 w-auto h-6 mr-3"><path d="M0 0L3 3L0 6" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg><span class="flex-auto">npm install -D tailwindcss</span></span><span class="flex"><svg viewBox="0 -9 3 24" aria-hidden="true" class="flex-none overflow-visible text-pink-400 w-auto h-6 mr-3"><path d="M0 0L3 3L0 6" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg><span class="flex-auto">npx tailwindcss init</span></span></code></pre></div></div>
                                        
                                        </li>
                                    
                                    </ol>
                                </div>
                                </Tab.Panel>
                            </Tab.Panels>
                        </Tab.Group>
                    

                    </div>
                    <section className="relative overflow-hidden">
                        <div className="text-slate-900 text-xl tracking-tight font-bold mb-3 dark:text-slate-200">What to read next</div>
                        <div className="mb-10 max-w-2xl prose prose-slate xl:mb-0 dark:prose-dark">
                            <div>Get familiar with some of the core concepts that make Tailwind CSS different from writing traditional CSS.</div>
                        </div>
                        <ul className='mt-10 flex flex-wrap'>
                            <div className='lg:w-1/2 w-full lg:px-5 py-5'>
                                <li class="relative flex items-start duration-300 hover:bg-100">
                                    <div class="lg:size-16 md:size-14 size-12 rounded-full ring-1 ring-slate-900/10 shadow overflow-hidden flex-none dark:bg-indigo-500 dark:highlight-white/20">
                                        <img src={userprofile} alt="" />
                                    </div>
                                    <div class="peer group flex-auto ml-6">
                                        <div className="mb-2 font-semibold text-slate-900 dark:text-slate-200">
                                        <a className="before:absolute before:-inset-3 before:rounded-2xl sm:before:-inset-4" href="/docs/utility-first">Utility-First Fundamentals<svg viewBox="0 0 3 6" class="ml-3 w-auto h-1.5 overflow-visible inline -mt-px text-slate-400 opacity-0 group-hover:opacity-100 group-focus-within:opacity-100"><path d="M0 0L3 3L0 6" fill="none" stroke-width="2" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path></svg></a>
                                        </div>
                                        <div class="prose prose-slate prose-sm text-slate-600 dark:prose-dark">
                                            <p>Using a utility-first workflow to build complex components from a constrained set of primitive utilities.</p>
                                        </div>
                                    </div>
                                    <div class="absolute -z-10 -inset-3 rounded-2xl bg-gray-100 dark:bg-slate-800/50 opacity-0 peer-hover:opacity-100 sm:-inset-4"></div>
                                </li>
                            </div>
                            <div className='lg:w-1/2 w-full lg:px-5 py-5'>
                                <li class="relative flex items-start duration-300 hover:bg-100">
                                    <div class="lg:size-16 md:size-14 size-12 rounded-full ring-1 ring-slate-900/10 shadow overflow-hidden flex-none dark:bg-indigo-500 dark:highlight-white/20">
                                        <img src={userprofile} alt="" />
                                    </div>
                                    <div class="peer group flex-auto ml-6">
                                        <div className="mb-2 font-semibold text-slate-900 dark:text-slate-200">
                                        <a className="before:absolute before:-inset-3 before:rounded-2xl sm:before:-inset-4" href="/docs/utility-first">Utility-First Fundamentals<svg viewBox="0 0 3 6" class="ml-3 w-auto h-1.5 overflow-visible inline -mt-px text-slate-400 opacity-0 group-hover:opacity-100 group-focus-within:opacity-100"><path d="M0 0L3 3L0 6" fill="none" stroke-width="2" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path></svg></a>
                                        </div>
                                        <div class="prose prose-slate prose-sm text-slate-600 dark:prose-dark">
                                            <p>Using a utility-first workflow to build complex components from a constrained set of primitive utilities.</p>
                                        </div>
                                    </div>
                                    <div class="absolute -z-10 -inset-3 rounded-2xl bg-gray-100 dark:bg-slate-800/50 opacity-0 peer-hover:opacity-100 sm:-inset-4"></div>
                                </li>
                            </div>
                            <div className='lg:w-1/2 w-full lg:px-5 py-5'>
                                <li class="relative flex items-start duration-300 hover:bg-100">
                                    <div class="lg:size-16 md:size-14 size-12 rounded-full ring-1 ring-slate-900/10 shadow overflow-hidden flex-none dark:bg-indigo-500 dark:highlight-white/20">
                                        <img src={userprofile} alt="" />
                                    </div>
                                    <div class="peer group flex-auto ml-6">
                                        <div className="mb-2 font-semibold text-slate-900 dark:text-slate-200">
                                        <a className="before:absolute before:-inset-3 before:rounded-2xl sm:before:-inset-4" href="/docs/utility-first">Utility-First Fundamentals<svg viewBox="0 0 3 6" class="ml-3 w-auto h-1.5 overflow-visible inline -mt-px text-slate-400 opacity-0 group-hover:opacity-100 group-focus-within:opacity-100"><path d="M0 0L3 3L0 6" fill="none" stroke-width="2" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path></svg></a>
                                        </div>
                                        <div class="prose prose-slate prose-sm text-slate-600 dark:prose-dark">
                                            <p>Using a utility-first workflow to build complex components from a constrained set of primitive utilities.</p>
                                        </div>
                                    </div>
                                    <div class="absolute -z-10 -inset-3 rounded-2xl bg-gray-100 dark:bg-slate-800/50 opacity-0 peer-hover:opacity-100 sm:-inset-4"></div>
                                </li>
                            </div>
                            <div className='lg:w-1/2 w-full lg:px-5 py-5'>
                                <li class="relative flex items-start duration-300 hover:bg-100">
                                    <div class="lg:size-16 md:size-14 size-12 rounded-full ring-1 ring-slate-900/10 shadow overflow-hidden flex-none dark:bg-indigo-500 dark:highlight-white/20">
                                        <img src={userprofile} alt="" />
                                    </div>
                                    <div class="peer group flex-auto ml-6">
                                        <div className="mb-2 font-semibold text-slate-900 dark:text-slate-200">
                                        <a className="before:absolute before:-inset-3 before:rounded-2xl sm:before:-inset-4" href="/docs/utility-first">Utility-First Fundamentals<svg viewBox="0 0 3 6" class="ml-3 w-auto h-1.5 overflow-visible inline -mt-px text-slate-400 opacity-0 group-hover:opacity-100 group-focus-within:opacity-100"><path d="M0 0L3 3L0 6" fill="none" stroke-width="2" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path></svg></a>
                                        </div>
                                        <div class="prose prose-slate prose-sm text-slate-600 dark:prose-dark">
                                            <p>Using a utility-first workflow to build complex components from a constrained set of primitive utilities.</p>
                                        </div>
                                    </div>
                                    <div class="absolute -z-10 -inset-3 rounded-2xl bg-gray-100 dark:bg-slate-800/50 opacity-0 peer-hover:opacity-100 sm:-inset-4"></div>
                                </li>
                            </div>
                            <div className='lg:w-1/2 w-full lg:px-5 py-5'>
                                <li class="relative flex items-start duration-300 hover:bg-100">
                                    <div class="lg:size-16 md:size-14 size-12 rounded-full ring-1 ring-slate-900/10 shadow overflow-hidden flex-none dark:bg-indigo-500 dark:highlight-white/20">
                                        <img src={userprofile} alt="" />
                                    </div>
                                    <div class="peer group flex-auto ml-6">
                                        <div className="mb-2 font-semibold text-slate-900 dark:text-slate-200">
                                        <a className="before:absolute before:-inset-3 before:rounded-2xl sm:before:-inset-4" href="/docs/utility-first">Utility-First Fundamentals<svg viewBox="0 0 3 6" class="ml-3 w-auto h-1.5 overflow-visible inline -mt-px text-slate-400 opacity-0 group-hover:opacity-100 group-focus-within:opacity-100"><path d="M0 0L3 3L0 6" fill="none" stroke-width="2" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path></svg></a>
                                        </div>
                                        <div class="prose prose-slate prose-sm text-slate-600 dark:prose-dark">
                                            <p>Using a utility-first workflow to build complex components from a constrained set of primitive utilities.</p>
                                        </div>
                                    </div>
                                    <div class="absolute -z-10 -inset-3 rounded-2xl bg-gray-100 dark:bg-slate-800/50 opacity-0 peer-hover:opacity-100 sm:-inset-4"></div>
                                </li>
                            </div>
                            <div className='lg:w-1/2 w-full lg:px-5 py-5'>
                                <li class="relative flex items-start duration-300 hover:bg-100">
                                    <div class="lg:size-16 md:size-14 size-12 rounded-full ring-1 ring-slate-900/10 shadow overflow-hidden flex-none dark:bg-indigo-500 dark:highlight-white/20">
                                        <img src={userprofile} alt="" />
                                    </div>
                                    <div class="peer group flex-auto ml-6">
                                        <div className="mb-2 font-semibold text-slate-900 dark:text-slate-200">
                                        <a className="before:absolute before:-inset-3 before:rounded-2xl sm:before:-inset-4" href="/docs/utility-first">Utility-First Fundamentals<svg viewBox="0 0 3 6" class="ml-3 w-auto h-1.5 overflow-visible inline -mt-px text-slate-400 opacity-0 group-hover:opacity-100 group-focus-within:opacity-100"><path d="M0 0L3 3L0 6" fill="none" stroke-width="2" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path></svg></a>
                                        </div>
                                        <div class="prose prose-slate prose-sm text-slate-600 dark:prose-dark">
                                            <p>Using a utility-first workflow to build complex components from a constrained set of primitive utilities.</p>
                                        </div>
                                    </div>
                                    <div class="absolute -z-10 -inset-3 rounded-2xl bg-gray-100 dark:bg-slate-800/50 opacity-0 peer-hover:opacity-100 sm:-inset-4"></div>
                                </li>
                            </div>
                        </ul>
                    </section>
                    <footer class="text-sm leading-6 mt-16 overflow-hidden">
                        <div class="pt-10 pb-28 border-t border-slate-200 sm:flex justify-between text-slate-500 dark:border-slate-200/5">
                            <div class="mb-6 sm:mb-0 sm:flex"><p>Copyright © 2024 Tailwind Labs Inc.</p>
                            <p class="sm:ml-4 sm:pl-4 sm:border-l sm:border-slate-200 dark:sm:border-slate-200/5">
                                <a class="hover:text-slate-900 dark:hover:text-slate-400" href="/brand">Trademark Policy</a>
                            </p>
                            </div>
                            <div class="flex space-x-10 text-slate-400 dark:text-slate-500">
                                <a href="https://github.com/tailwindlabs/tailwindcss" class="hover:text-slate-500 dark:hover:text-slate-400"><span class="sr-only">GitHub</span>
                                    <svg width="25" height="24" fill="currentColor"><path fill-rule="evenodd" clip-rule="evenodd" d="M12.846 0c-6.63 0-12 5.506-12 12.303 0 5.445 3.435 10.043 8.205 11.674.6.107.825-.262.825-.585 0-.292-.015-1.261-.015-2.291-3.015.569-3.795-.754-4.035-1.446-.135-.354-.72-1.446-1.23-1.738-.42-.23-1.02-.8-.015-.815.945-.015 1.62.892 1.845 1.261 1.08 1.86 2.805 1.338 3.495 1.015.105-.8.42-1.338.765-1.645-2.67-.308-5.46-1.37-5.46-6.075 0-1.338.465-2.446 1.23-3.307-.12-.308-.54-1.569.12-3.26 0 0 1.005-.323 3.3 1.26.96-.276 1.98-.415 3-.415s2.04.139 3 .416c2.295-1.6 3.3-1.261 3.3-1.261.66 1.691.24 2.952.12 3.26.765.861 1.23 1.953 1.23 3.307 0 4.721-2.805 5.767-5.475 6.075.435.384.81 1.122.81 2.276 0 1.645-.015 2.968-.015 3.383 0 .323.225.707.825.585a12.047 12.047 0 0 0 5.919-4.489 12.537 12.537 0 0 0 2.256-7.184c0-6.798-5.37-12.304-12-12.304Z"></path></svg>
                                </a>
                                <a href="/discord" class="hover:text-slate-500 dark:hover:text-slate-400"><span class="sr-only">Discord</span>
                                    <svg width="23" height="24" fill="currentColor"><path d="M9.555 9.23c-.74 0-1.324.624-1.324 1.385S8.827 12 9.555 12c.739 0 1.323-.624 1.323-1.385.013-.761-.584-1.385-1.323-1.385Zm4.737 0c-.74 0-1.324.624-1.324 1.385S13.564 12 14.292 12c.74 0 1.324-.624 1.324-1.385s-.584-1.385-1.324-1.385Z"></path><path d="M20.404 0H3.442c-.342 0-.68.065-.995.19a2.614 2.614 0 0 0-.843.536 2.46 2.46 0 0 0-.562.801c-.13.3-.197.62-.196.944v16.225c0 .324.066.645.196.944.13.3.321.572.562.801.241.23.527.412.843.537.315.124.653.189.995.19h14.354l-.67-2.22 1.62 1.428 1.532 1.344L23 24V2.472c0-.324-.066-.644-.196-.944a2.46 2.46 0 0 0-.562-.8A2.614 2.614 0 0 0 21.4.19a2.726 2.726 0 0 0-.995-.19V0Zm-4.886 15.672s-.456-.516-.836-.972c1.659-.444 2.292-1.428 2.292-1.428a7.38 7.38 0 0 1-1.456.707 8.67 8.67 0 0 1-1.836.517 9.347 9.347 0 0 1-3.279-.012 11.074 11.074 0 0 1-1.86-.516 7.621 7.621 0 0 1-.924-.409c-.039-.023-.076-.035-.113-.06-.027-.011-.04-.023-.052-.035-.228-.12-.354-.204-.354-.204s.608.96 2.215 1.416c-.38.456-.848.996-.848.996-2.797-.084-3.86-1.824-3.86-1.824 0-3.864 1.822-6.996 1.822-6.996 1.823-1.296 3.557-1.26 3.557-1.26l.127.145c-2.278.623-3.33 1.57-3.33 1.57s.279-.143.747-.347c1.355-.564 2.43-.72 2.873-.756.077-.012.14-.024.216-.024a10.804 10.804 0 0 1 6.368 1.129s-1.001-.9-3.153-1.526l.178-.19s1.735-.037 3.557 1.259c0 0 1.823 3.133 1.823 6.996 0 0-1.076 1.74-3.874 1.824Z"></path></svg>
                                </a>
                            </div>
                        </div>
                    </footer>
                </div>
            </div>
    </div>


{/* offcanvas adminpanel start */}



      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/25" />
          </Transition.Child>

          <div className="fixed inset-0 top-16 ">
            <div className="flex min-h-full items-center justify-start p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-80 h-[calc(98dvh-73px)] max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  
                  <div className='flex items-center justify-end border-b pb-3'>
                    <div className="">
                        <button
                        type="button"
                        className="border-0 shadow-none flex items-center justify-center outline-none"
                        onClick={closeModal}
                        >
                            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="m289.94 256 95-95A24 24 0 0 0 351 127l-95 95-95-95a24 24 0 0 0-34 34l95 95-95 95a24 24 0 1 0 34 34l95-95 95 95a24 24 0 0 0 34-34z"></path></svg>
                        </button>
                    </div>
                  </div>
                  <div className="mt-2 pb-8 overflow-y-auto h-full">
                    <div>
                        <ul >
                                    <li>
                                        <a class="group flex items-center lg:text-sm lg:leading-6 mb-4 font-semibold text-sky-500 dark:text-sky-400" href="/docs/installation"><div class="mr-4 rounded-md ring-1 ring-slate-900/5 shadow-sm group-hover:shadow group-hover:ring-slate-900/10 dark:ring-0 dark:shadow-none dark:group-hover:shadow-none dark:group-hover:highlight-white/10 group-hover:shadow-sky-200 dark:group-hover:bg-sky-500 dark:bg-sky-500 dark:highlight-white/10"><svg class="h-6 w-6" viewBox="0 0 24 24" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M8.5 7c1.093 0 2.117.27 3 .743V17a6.345 6.345 0 0 0-3-.743c-1.093 0-2.617.27-3.5.743V7.743C5.883 7.27 7.407 7 8.5 7Z" class="fill-sky-200 group-hover:fill-sky-500 dark:fill-sky-300 dark:group-hover:fill-sky-300"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M15.5 7c1.093 0 2.617.27 3.5.743V17c-.883-.473-2.407-.743-3.5-.743s-2.117.27-3 .743V7.743a6.344 6.344 0 0 1 3-.743Z" class="fill-sky-400 group-hover:fill-sky-500 dark:fill-sky-200 dark:group-hover:fill-sky-200"></path></svg></div>Documentation</a>
                                    </li>
                                    <li>
                                        <a class="group flex items-center lg:text-sm lg:leading-6 mb-4 font-medium text-slate-700 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300" href="https://tailwindui.com/components?ref=sidebar">
                                        <div class="mr-4 rounded-md ring-1 ring-slate-900/5 shadow-sm group-hover:shadow group-hover:ring-slate-900/10 dark:ring-0 dark:shadow-none dark:group-hover:shadow-none dark:group-hover:highlight-white/10 group-hover:shadow-indigo-200 dark:group-hover:bg-indigo-500 dark:bg-slate-800 dark:highlight-white/5">
                                        <svg class="h-6 w-6" viewBox="0 0 24 24" fill="none"><path d="m6 9 6-3 6 3v6l-6 3-6-3V9Z" class="fill-indigo-100 group-hover:fill-indigo-200 dark:fill-slate-400"></path><path d="m6 9 6 3v7l-6-3V9Z" class="fill-indigo-300 group-hover:fill-indigo-400 dark:group-hover:fill-indigo-300 dark:fill-slate-500"></path><path d="m18 9-6 3v7l6-3V9Z" class="fill-indigo-400 group-hover:fill-indigo-500 dark:group-hover:fill-indigo-400 dark:fill-slate-600"></path></svg>
                                        </div>
                                        Components
                                        </a>
                                    </li>
                                    <li>
                                        <a class="group flex items-center lg:text-sm lg:leading-6 mb-4 font-medium text-slate-700 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300" href="https://tailwindui.com/templates?ref=sidebar"><div class="mr-4 rounded-md ring-1 ring-slate-900/5 shadow-sm group-hover:shadow group-hover:ring-slate-900/10 dark:ring-0 dark:shadow-none dark:group-hover:shadow-none dark:group-hover:highlight-white/10 group-hover:shadow-fuchsia-200 dark:group-hover:bg-fuchsia-600 dark:bg-slate-800 dark:highlight-white/5"><svg class="h-6 w-6" viewBox="0 0 24 24" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M8 6C6.89543 6 6 6.89543 6 8V16C6 17.1046 6.89543 18 8 18H10.5C11.0523 18 11.5 17.5523 11.5 17V12C11.5 10.6193 12.6193 9.5 14 9.5H18V8C18 6.89543 17.1046 6 16 6H8ZM7.25 8C7.25 7.58579 7.58579 7.25 8 7.25H8.01C8.42421 7.25 8.76 7.58579 8.76 8C8.76 8.41421 8.42421 8.75 8.01 8.75H8C7.58579 8.75 7.25 8.41421 7.25 8ZM10 7.25C9.58579 7.25 9.25 7.58579 9.25 8C9.25 8.41421 9.58579 8.75 10 8.75H10.01C10.4242 8.75 10.76 8.41421 10.76 8C10.76 7.58579 10.4242 7.25 10.01 7.25H10Z" fill="#E879F9" class="fill-fuchsia-400 group-hover:fill-fuchsia-500 dark:group-hover:fill-fuchsia-300 dark:fill-slate-400"></path><path d="M13 12C13 11.4477 13.4477 11 14 11H17C17.5523 11 18 11.4477 18 12V17C18 17.5523 17.5523 18 17 18H14C13.4477 18 13 17.5523 13 17V12Z" fill="#F0ABFC" class="fill-fuchsia-300 group-hover:fill-fuchsia-400 dark:fill-slate-500"></path></svg>
                                        </div>Templates
                                        </a>
                                    </li>
                                    <li>
                                        <a class="group flex items-center lg:text-sm lg:leading-6 mb-4 font-medium text-slate-700 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300" href="https://www.youtube.com/tailwindlabs">
                                        <div class="mr-4 rounded-md ring-1 ring-slate-900/5 shadow-sm group-hover:shadow group-hover:ring-slate-900/10 dark:ring-0 dark:shadow-none dark:group-hover:shadow-none dark:group-hover:highlight-white/10 group-hover:shadow-pink-200 dark:group-hover:bg-pink-500 dark:bg-slate-800 dark:highlight-white/5"><svg class="h-6 w-6" viewBox="0 0 24 24" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M19 12a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z" class="fill-pink-400 group-hover:fill-pink-500 dark:group-hover:fill-pink-300 dark:fill-slate-600"></path><path d="M11.082 9.107a.685.685 0 0 0-.72-.01.757.757 0 0 0-.362.653v4.5c0 .27.138.52.362.653.224.133.5.13.72-.01l3.571-2.25A.758.758 0 0 0 15 12a.758.758 0 0 0-.347-.643l-3.571-2.25Z" class="fill-pink-50 group-hover:fill-pink-100 dark:group-hover:fill-white dark:fill-slate-400"></path></svg></div>Screencasts</a>
                                    </li>
                                    <li>
                                        <a class="group flex items-center lg:text-sm lg:leading-6 mb-4 font-medium text-slate-700 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300" href="https://play.tailwindcss.com"><div class="mr-4 rounded-md ring-1 ring-slate-900/5 shadow-sm group-hover:shadow group-hover:ring-slate-900/10 dark:ring-0 dark:shadow-none dark:group-hover:shadow-none dark:group-hover:highlight-white/10 group-hover:shadow-blue-200 dark:group-hover:bg-blue-500 dark:bg-slate-800 dark:highlight-white/5"><svg class="h-6 w-6" viewBox="0 0 24 24" fill="none"><path d="M4 12a7 7 0 0 1 7-7h2a7 7 0 1 1 0 14h-2a7 7 0 0 1-7-7Z" class="fill-blue-400 group-hover:fill-blue-500 dark:group-hover:fill-blue-400 dark:fill-slate-600"></path><path d="M10.25 9.75 7.75 12l2.5 2.25" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="stroke-blue-50 dark:stroke-slate-400 dark:group-hover:stroke-white dark:stroke-slate-400"></path><path d="m13.75 9.75 2.5 2.25-2.5 2.25" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="stroke-blue-200 dark:group-hover:stroke-white dark:stroke-slate-400"></path></svg>
                                        </div>Playground</a>
                                    </li>
                                    <li>
                                        <a class="group flex items-center lg:text-sm lg:leading-6 mb-4 font-medium text-slate-700 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300" href="/resources"><div class="mr-4 rounded-md ring-1 ring-slate-900/5 shadow-sm group-hover:shadow group-hover:ring-slate-900/10 dark:ring-0 dark:shadow-none dark:group-hover:shadow-none dark:group-hover:highlight-white/10 group-hover:shadow-purple-200 dark:group-hover:bg-purple-400 dark:bg-slate-800 dark:highlight-white/5"><svg class="h-6 w-6" viewBox="0 0 24 24" fill="none"><path d="M6 8a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V8ZM6 15a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2v-1Z" class="fill-purple-400 group-hover:fill-purple-500 dark:group-hover:fill-purple-300 dark:fill-slate-600"></path><path d="M13 8a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2V8Z" class="fill-purple-200 group-hover:fill-purple-300 dark:group-hover:fill-white dark:fill-slate-400"></path><path d="M13 15a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-1Z" class="fill-purple-400 group-hover:fill-purple-500 dark:group-hover:fill-purple-300 dark:fill-slate-600"></path></svg>
                                        </div>
                                        <span class="">Resources</span></a>
                                    </li>
                                    <li class="mt-12 lg:mt-8">
                                        <h5 class="mb-8 lg:mb-3 font-semibold text-slate-900 dark:text-slate-200">Getting Started</h5>
                                        <ul class="space-y-6 lg:space-y-2 border-l border-slate-100 dark:border-slate-800">
                                            <li data-active="true">
                                                <a class="block border-l pl-4 -ml-px text-sky-500 border-current font-semibold dark:text-sky-400" href="/docs/installation">Installation</a>
                                            </li>
                                            <li>
                                                <a class="block border-l pl-4 -ml-px border-transparent hover:border-slate-400 dark:hover:border-slate-500 text-slate-700 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300" href="/docs/editor-setup">Editor Setup</a>
                                            </li>
                                            <li>
                                                <a class="block border-l pl-4 -ml-px border-transparent hover:border-slate-400 dark:hover:border-slate-500 text-slate-700 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300" href="/docs/using-with-preprocessors">Using with Preprocessors</a>
                                            </li>
                                            <li>
                                                <a class="block border-l pl-4 -ml-px border-transparent hover:border-slate-400 dark:hover:border-slate-500 text-slate-700 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300" href="/docs/optimizing-for-production">Optimizing for Production</a>
                                            </li>
                                            <li>
                                                <a class="block border-l pl-4 -ml-px border-transparent hover:border-slate-400 dark:hover:border-slate-500 text-slate-700 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300" href="/docs/browser-support">Browser Support</a>
                                            </li>
                                            <li>
                                                <a class="block border-l pl-4 -ml-px border-transparent hover:border-slate-400 dark:hover:border-slate-500 text-slate-700 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300" href="/docs/upgrade-guide">Upgrade Guide</a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li class="mt-12 lg:mt-8">
                                        <h5 class="mb-8 lg:mb-3 font-semibold text-slate-900 dark:text-slate-200">Core Concepts</h5>
                                        <ul class="space-y-6 lg:space-y-2 border-l border-slate-100 dark:border-slate-800">
                                            <li>
                                                <a class="block border-l pl-4 -ml-px border-transparent hover:border-slate-400 dark:hover:border-slate-500 text-slate-700 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300" href="/docs/utility-first">Utility-First Fundamentals</a>
                                            </li>
                                            <li>
                                                <a class="block border-l pl-4 -ml-px border-transparent hover:border-slate-400 dark:hover:border-slate-500 text-slate-700 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300" href="/docs/hover-focus-and-other-states">Hover, Focus, and Other States</a></li>
                                            <li>
                                                <a class="block border-l pl-4 -ml-px border-transparent hover:border-slate-400 dark:hover:border-slate-500 text-slate-700 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300" href="/docs/responsive-design">Responsive Design</a></li>
                                            <li>
                                                <a class="block border-l pl-4 -ml-px border-transparent hover:border-slate-400 dark:hover:border-slate-500 text-slate-700 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300" href="/docs/dark-mode">Dark Mode</a>
                                            </li>
                                            <li>
                                                <a class="block border-l pl-4 -ml-px border-transparent hover:border-slate-400 dark:hover:border-slate-500 text-slate-700 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300" href="/docs/reusing-styles">Reusing Styles</a>
                                            </li>
                                            
                                            <li>
                                                <a class="block border-l pl-4 -ml-px border-transparent hover:border-slate-400 dark:hover:border-slate-500 text-slate-700 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300" href="/docs/adding-custom-styles">Adding Custom Styles</a>
                                            </li>
                                            <li>
                                                <a class="block border-l pl-4 -ml-px border-transparent hover:border-slate-400 dark:hover:border-slate-500 text-slate-700 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300" href="/docs/functions-and-directives">Functions &amp; Directives</a>
                                            </li>
                                        </ul>
                                    </li>
                        </ul>
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>


{/* offcanvas adminpanel end */}

{/* searchbar offcanvas  start*/}
<Transition appear show={isOpens} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/25" />
          </Transition.Child>

          <div className="fixed inset-0 top-16 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-3xl h-[400px] transform overflow-hidden rounded-lg bg-white text-left align-middle shadow-xl transition-all">
                  
                  <div className='flex flex-col h-full overflow-hidden'>
                  <div className='w-full border-b border-gray py-1 flex-none'>
                    <div className='flex items-center justify-between px-2 w-full'>
                        <div class="relative w-full">
                            <div class="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                            <svg width="20" height="20" class="DocSearch-Search-Icon" viewBox="0 0 20 20"><path d="M14.386 14.386l4.0877 4.0877-4.0877-4.0877c-2.9418 2.9419-7.7115 2.9419-10.6533 0-2.9419-2.9418-2.9419-7.7115 0-10.6533 2.9418-2.9419 7.7115-2.9419 10.6533 0 2.9419 2.9418 2.9419 7.7115 0 10.6533z" stroke="currentColor" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                            </div>
                            <input type="text" id="input-group-1" class="focus:border-0 focus:outline-none text-gray-900 text-sm rounded-lg  block w-full ps-10 p-2.5 " placeholder="Search documentation"/>
                        </div>
                        <div>
                        <button
                      type="button"
                      className=""
                      onClick={closeModal}
                    >
                     <svg width="20" height="20" viewBox="0 0 20 20"><path d="M10 10l5.09-5.09L10 10l5.09 5.09L10 10zm0 0L4.91 4.91 10 10l-5.09 5.09L10 10z" stroke="currentColor" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                    </button>
                         
                        </div>
                    </div>
                  </div>
                  <div className="flex-grow overflow-y-auto h-full ">
                    <div className=' border-b border-gray-100 py-5 '>
                        <div className="leading-6 font-semibold text-gray-700 px-4">Recent</div>
                    </div>
                    <div>
                        <ul className='flex flex-col w-full'>
                            <li className='flex items-center flex-col py-5 bg-gray-100/30 w-full px-4 border-t border-b '>
                                <div className='self-start text-xs leading-6 font-semibold text-gray-800 bg-gray-100 rounded-full px-2'>Text Overflow</div>
                                <div className="flex items-center justify-between w-full">
                                    <div className='text-base text-gray-500'> ​Truncate</div>
                                    <div className='text-base text-gray-500 flex items-center justify-between gap-2'> 
                                        <div class="DocSearch-Hit-action"><button class="group duration-300" type="submit"><svg className='duration-300 hover:text-blue-700 size-5 text-gray-800' viewBox="0 0 20 20"><path d="M10 14.2L5 17l1-5.6-4-4 5.5-.7 2.5-5 2.5 5 5.6.8-4 4 .9 5.5z" stroke="currentColor" fill="none" fill-rule="evenodd" stroke-linejoin="round"></path></svg></button></div>
                                        <div class="DocSearch-Hit-action"><button class="group duration-300"  type="submit"><svg className='duration-300 hover:text-black-700 size-5 text-gray-800' viewBox="0 0 20 20"><path d="M10 10l5.09-5.09L10 10l5.09 5.09L10 10zm0 0L4.91 4.91 10 10l-5.09 5.09L10 10z" stroke="currentColor" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg></button></div>
                                    </div>
                                </div>
                            </li>
                            <li className='flex items-center flex-col py-5 bg-white w-full px-4 border-t border-b border-gray-100 '>
                                {/* <div className='self-start text-xs leading-6 font-semibold text-gray-800 bg-gray-100 rounded-full px-2'>Text Overflow</div> */}
                                <div className="flex items-center justify-between w-full">
                                    <div className='text-base text-gray-500'> ​Truncate</div>
                                    <div className='text-base text-gray-500 flex items-center justify-between gap-2'> 
                                        <div class="DocSearch-Hit-action"><button class="group duration-300" type="submit"><svg className='duration-300 hover:text-blue-700 size-5 text-gray-800' viewBox="0 0 20 20"><path d="M10 14.2L5 17l1-5.6-4-4 5.5-.7 2.5-5 2.5 5 5.6.8-4 4 .9 5.5z" stroke="currentColor" fill="none" fill-rule="evenodd" stroke-linejoin="round"></path></svg></button></div>
                                        <div class="DocSearch-Hit-action"><button class="group duration-300"  type="submit"><svg className='duration-300 hover:text-black-700 size-5 text-gray-800' viewBox="0 0 20 20"><path d="M10 10l5.09-5.09L10 10l5.09 5.09L10 10zm0 0L4.91 4.91 10 10l-5.09 5.09L10 10z" stroke="currentColor" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg></button></div>
                                    </div>
                                </div>
                            </li>
                            <li className='flex items-center flex-col py-5 bg-white w-full px-4 border-t border-b border-gray-100 '>
                                <div className='self-start text-xs leading-6 font-semibold text-gray-800 bg-gray-100 rounded-full px-2'>Text Overflow</div>
                                <div className="flex items-center justify-between w-full">
                                    <div className='text-base text-gray-500'> ​Truncate</div>
                                    <div className='text-base text-gray-500 flex items-center justify-between gap-2'> 
                                        <div class="DocSearch-Hit-action"><button class="group duration-300" type="submit"><svg className='duration-300 hover:text-blue-700 size-5 text-gray-800' viewBox="0 0 20 20"><path d="M10 14.2L5 17l1-5.6-4-4 5.5-.7 2.5-5 2.5 5 5.6.8-4 4 .9 5.5z" stroke="currentColor" fill="none" fill-rule="evenodd" stroke-linejoin="round"></path></svg></button></div>
                                        <div class="DocSearch-Hit-action"><button class="group duration-300"  type="submit"><svg className='duration-300 hover:text-black-700 size-5 text-gray-800' viewBox="0 0 20 20"><path d="M10 10l5.09-5.09L10 10l5.09 5.09L10 10zm0 0L4.91 4.91 10 10l-5.09 5.09L10 10z" stroke="currentColor" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg></button></div>
                                    </div>
                                </div>
                            </li>
                            <li className='flex items-center flex-col py-5 bg-white w-full px-4 border-t border-b border-gray-100 '>
                                <div className='self-start text-xs leading-6 font-semibold text-gray-800 bg-gray-100 rounded-full px-2'>Text Overflow</div>
                                <div className="flex items-center justify-between w-full">
                                    <div className='text-base text-gray-500'> ​Truncate</div>
                                    <div className='text-base text-gray-500 flex items-center justify-between gap-2'> 
                                        <div class="DocSearch-Hit-action"><button class="group duration-300" type="submit"><svg className='duration-300 hover:text-blue-700 size-5 text-gray-800' viewBox="0 0 20 20"><path d="M10 14.2L5 17l1-5.6-4-4 5.5-.7 2.5-5 2.5 5 5.6.8-4 4 .9 5.5z" stroke="currentColor" fill="none" fill-rule="evenodd" stroke-linejoin="round"></path></svg></button></div>
                                        <div class="DocSearch-Hit-action"><button class="group duration-300"  type="submit"><svg className='duration-300 hover:text-black-700 size-5 text-gray-800' viewBox="0 0 20 20"><path d="M10 10l5.09-5.09L10 10l5.09 5.09L10 10zm0 0L4.91 4.91 10 10l-5.09 5.09L10 10z" stroke="currentColor" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg></button></div>
                                    </div>
                                </div>
                            </li>
                            <li className='flex items-center flex-col py-5 bg-white w-full px-4 border-t border-b border-gray-100 '>
                                <div className='self-start text-xs leading-6 font-semibold text-gray-800 bg-gray-100 rounded-full px-2'>Text Overflow</div>
                                <div className="flex items-center justify-between w-full">
                                    <div className='text-base text-gray-500'> ​Truncate</div>
                                    <div className='text-base text-gray-500 flex items-center justify-between gap-2'> 
                                        <div class="DocSearch-Hit-action"><button class="group duration-300" type="submit"><svg className='duration-300 hover:text-blue-700 size-5 text-gray-800' viewBox="0 0 20 20"><path d="M10 14.2L5 17l1-5.6-4-4 5.5-.7 2.5-5 2.5 5 5.6.8-4 4 .9 5.5z" stroke="currentColor" fill="none" fill-rule="evenodd" stroke-linejoin="round"></path></svg></button></div>
                                        <div class="DocSearch-Hit-action"><button class="group duration-300"  type="submit"><svg className='duration-300 hover:text-black-700 size-5 text-gray-800' viewBox="0 0 20 20"><path d="M10 10l5.09-5.09L10 10l5.09 5.09L10 10zm0 0L4.91 4.91 10 10l-5.09 5.09L10 10z" stroke="currentColor" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg></button></div>
                                    </div>
                                </div>
                            </li>
                            <li className='flex items-center flex-col py-5 bg-white w-full px-4 border-t border-b border-gray-100 '>
                                <div className='self-start text-xs leading-6 font-semibold text-gray-800 bg-gray-100 rounded-full px-2'>Text Overflow</div>
                                <div className="flex items-center justify-between w-full">
                                    <div className='text-base text-gray-500'> ​Truncate</div>
                                    <div className='text-base text-gray-500 flex items-center justify-between gap-2'> 
                                        <div class="DocSearch-Hit-action"><button class="group duration-300" type="submit"><svg className='duration-300 hover:text-blue-700 size-5 text-gray-800' viewBox="0 0 20 20"><path d="M10 14.2L5 17l1-5.6-4-4 5.5-.7 2.5-5 2.5 5 5.6.8-4 4 .9 5.5z" stroke="currentColor" fill="none" fill-rule="evenodd" stroke-linejoin="round"></path></svg></button></div>
                                        <div class="DocSearch-Hit-action"><button class="group duration-300"  type="submit"><svg className='duration-300 hover:text-black-700 size-5 text-gray-800' viewBox="0 0 20 20"><path d="M10 10l5.09-5.09L10 10l5.09 5.09L10 10zm0 0L4.91 4.91 10 10l-5.09 5.09L10 10z" stroke="currentColor" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg></button></div>
                                    </div>
                                </div>
                            </li>
                            <li className='flex items-center flex-col py-5 bg-white w-full px-4 border-t border-b border-gray-100 '>
                                {/* <div className='self-start text-xs leading-6 font-semibold text-gray-800 bg-gray-100 rounded-full px-2'>Text Overflow</div> */}
                                <div className="flex items-center justify-between w-full">
                                    <div className='text-base text-gray-500'> ​Truncate</div>
                                    <div className='text-base text-gray-500 flex items-center justify-between gap-2'> 
                                        <div class="DocSearch-Hit-action"><button class="group duration-300" type="submit"><svg className='duration-300 hover:text-blue-700 size-5 text-gray-800' viewBox="0 0 20 20"><path d="M10 14.2L5 17l1-5.6-4-4 5.5-.7 2.5-5 2.5 5 5.6.8-4 4 .9 5.5z" stroke="currentColor" fill="none" fill-rule="evenodd" stroke-linejoin="round"></path></svg></button></div>
                                        <div class="DocSearch-Hit-action"><button class="group duration-300"  type="submit"><svg className='duration-300 hover:text-black-700 size-5 text-gray-800' viewBox="0 0 20 20"><path d="M10 10l5.09-5.09L10 10l5.09 5.09L10 10zm0 0L4.91 4.91 10 10l-5.09 5.09L10 10z" stroke="currentColor" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg></button></div>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                        
                  </div>
                  <div className='flex-none px-4 py-4 border-t border-gray-100/30'>
                    <div class="flex justify-end items-center">
                        <a href="#" target="_blank"  className='flex items-center gap-2'>
                            <span class="text-gray-500 font-semibold text-base">Search by</span>
                            <svg className='text-blue-700' width="77" height="19" aria-label="Algolia" role="img" id="Layer_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2196.2 500"><defs></defs><path class="cls-2" d="M1070.38,275.3V5.91c0-3.63-3.24-6.39-6.82-5.83l-50.46,7.94c-2.87,.45-4.99,2.93-4.99,5.84l.17,273.22c0,12.92,0,92.7,95.97,95.49,3.33,.1,6.09-2.58,6.09-5.91v-40.78c0-2.96-2.19-5.51-5.12-5.84-34.85-4.01-34.85-47.57-34.85-54.72Z"></path><rect class="cls-1" x="1845.88" y="104.73" width="62.58" height="277.9" rx="5.9" ry="5.9"></rect><path class="cls-2" d="M1851.78,71.38h50.77c3.26,0,5.9-2.64,5.9-5.9V5.9c0-3.62-3.24-6.39-6.82-5.83l-50.77,7.95c-2.87,.45-4.99,2.92-4.99,5.83v51.62c0,3.26,2.64,5.9,5.9,5.9Z"></path><path class="cls-2" d="M1764.03,275.3V5.91c0-3.63-3.24-6.39-6.82-5.83l-50.46,7.94c-2.87,.45-4.99,2.93-4.99,5.84l.17,273.22c0,12.92,0,92.7,95.97,95.49,3.33,.1,6.09-2.58,6.09-5.91v-40.78c0-2.96-2.19-5.51-5.12-5.84-34.85-4.01-34.85-47.57-34.85-54.72Z"></path><path class="cls-2" d="M1631.95,142.72c-11.14-12.25-24.83-21.65-40.78-28.31-15.92-6.53-33.26-9.85-52.07-9.85-18.78,0-36.15,3.17-51.92,9.85-15.59,6.66-29.29,16.05-40.76,28.31-11.47,12.23-20.38,26.87-26.76,44.03-6.38,17.17-9.24,37.37-9.24,58.36,0,20.99,3.19,36.87,9.55,54.21,6.38,17.32,15.14,32.11,26.45,44.36,11.29,12.23,24.83,21.62,40.6,28.46,15.77,6.83,40.12,10.33,52.4,10.48,12.25,0,36.78-3.82,52.7-10.48,15.92-6.68,29.46-16.23,40.78-28.46,11.29-12.25,20.05-27.04,26.25-44.36,6.22-17.34,9.24-33.22,9.24-54.21,0-20.99-3.34-41.19-10.03-58.36-6.38-17.17-15.14-31.8-26.43-44.03Zm-44.43,163.75c-11.47,15.75-27.56,23.7-48.09,23.7-20.55,0-36.63-7.8-48.1-23.7-11.47-15.75-17.21-34.01-17.21-61.2,0-26.89,5.59-49.14,17.06-64.87,11.45-15.75,27.54-23.52,48.07-23.52,20.55,0,36.63,7.78,48.09,23.52,11.47,15.57,17.36,37.98,17.36,64.87,0,27.19-5.72,45.3-17.19,61.2Z"></path><path class="cls-2" d="M894.42,104.73h-49.33c-48.36,0-90.91,25.48-115.75,64.1-14.52,22.58-22.99,49.63-22.99,78.73,0,44.89,20.13,84.92,51.59,111.1,2.93,2.6,6.05,4.98,9.31,7.14,12.86,8.49,28.11,13.47,44.52,13.47,1.23,0,2.46-.03,3.68-.09,.36-.02,.71-.05,1.07-.07,.87-.05,1.75-.11,2.62-.2,.34-.03,.68-.08,1.02-.12,.91-.1,1.82-.21,2.73-.34,.21-.03,.42-.07,.63-.1,32.89-5.07,61.56-30.82,70.9-62.81v57.83c0,3.26,2.64,5.9,5.9,5.9h50.42c3.26,0,5.9-2.64,5.9-5.9V110.63c0-3.26-2.64-5.9-5.9-5.9h-56.32Zm0,206.92c-12.2,10.16-27.97,13.98-44.84,15.12-.16,.01-.33,.03-.49,.04-1.12,.07-2.24,.1-3.36,.1-42.24,0-77.12-35.89-77.12-79.37,0-10.25,1.96-20.01,5.42-28.98,11.22-29.12,38.77-49.74,71.06-49.74h49.33v142.83Z"></path><path class="cls-2" d="M2133.97,104.73h-49.33c-48.36,0-90.91,25.48-115.75,64.1-14.52,22.58-22.99,49.63-22.99,78.73,0,44.89,20.13,84.92,51.59,111.1,2.93,2.6,6.05,4.98,9.31,7.14,12.86,8.49,28.11,13.47,44.52,13.47,1.23,0,2.46-.03,3.68-.09,.36-.02,.71-.05,1.07-.07,.87-.05,1.75-.11,2.62-.2,.34-.03,.68-.08,1.02-.12,.91-.1,1.82-.21,2.73-.34,.21-.03,.42-.07,.63-.1,32.89-5.07,61.56-30.82,70.9-62.81v57.83c0,3.26,2.64,5.9,5.9,5.9h50.42c3.26,0,5.9-2.64,5.9-5.9V110.63c0-3.26-2.64-5.9-5.9-5.9h-56.32Zm0,206.92c-12.2,10.16-27.97,13.98-44.84,15.12-.16,.01-.33,.03-.49,.04-1.12,.07-2.24,.1-3.36,.1-42.24,0-77.12-35.89-77.12-79.37,0-10.25,1.96-20.01,5.42-28.98,11.22-29.12,38.77-49.74,71.06-49.74h49.33v142.83Z"></path><path class="cls-2" d="M1314.05,104.73h-49.33c-48.36,0-90.91,25.48-115.75,64.1-11.79,18.34-19.6,39.64-22.11,62.59-.58,5.3-.88,10.68-.88,16.14s.31,11.15,.93,16.59c4.28,38.09,23.14,71.61,50.66,94.52,2.93,2.6,6.05,4.98,9.31,7.14,12.86,8.49,28.11,13.47,44.52,13.47h0c17.99,0,34.61-5.93,48.16-15.97,16.29-11.58,28.88-28.54,34.48-47.75v50.26h-.11v11.08c0,21.84-5.71,38.27-17.34,49.36-11.61,11.08-31.04,16.63-58.25,16.63-11.12,0-28.79-.59-46.6-2.41-2.83-.29-5.46,1.5-6.27,4.22l-12.78,43.11c-1.02,3.46,1.27,7.02,4.83,7.53,21.52,3.08,42.52,4.68,54.65,4.68,48.91,0,85.16-10.75,108.89-32.21,21.48-19.41,33.15-48.89,35.2-88.52V110.63c0-3.26-2.64-5.9-5.9-5.9h-56.32Zm0,64.1s.65,139.13,0,143.36c-12.08,9.77-27.11,13.59-43.49,14.7-.16,.01-.33,.03-.49,.04-1.12,.07-2.24,.1-3.36,.1-1.32,0-2.63-.03-3.94-.1-40.41-2.11-74.52-37.26-74.52-79.38,0-10.25,1.96-20.01,5.42-28.98,11.22-29.12,38.77-49.74,71.06-49.74h49.33Z"></path><path class="cls-1" d="M249.83,0C113.3,0,2,110.09,.03,246.16c-2,138.19,110.12,252.7,248.33,253.5,42.68,.25,83.79-10.19,120.3-30.03,3.56-1.93,4.11-6.83,1.08-9.51l-23.38-20.72c-4.75-4.21-11.51-5.4-17.36-2.92-25.48,10.84-53.17,16.38-81.71,16.03-111.68-1.37-201.91-94.29-200.13-205.96,1.76-110.26,92-199.41,202.67-199.41h202.69V407.41l-115-102.18c-3.72-3.31-9.42-2.66-12.42,1.31-18.46,24.44-48.53,39.64-81.93,37.34-46.33-3.2-83.87-40.5-87.34-86.81-4.15-55.24,39.63-101.52,94-101.52,49.18,0,89.68,37.85,93.91,85.95,.38,4.28,2.31,8.27,5.52,11.12l29.95,26.55c3.4,3.01,8.79,1.17,9.63-3.3,2.16-11.55,2.92-23.58,2.07-35.92-4.82-70.34-61.8-126.93-132.17-131.26-80.68-4.97-148.13,58.14-150.27,137.25-2.09,77.1,61.08,143.56,138.19,145.26,32.19,.71,62.03-9.41,86.14-26.95l150.26,133.2c6.44,5.71,16.61,1.14,16.61-7.47V9.48C499.66,4.25,495.42,0,490.18,0H249.83Z"></path></svg>
                        </a>
                    </div>
                  </div>

                  </div>

              
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>

{/* search end offcanvas  */}



   </>
  )
}

export default Sidebar