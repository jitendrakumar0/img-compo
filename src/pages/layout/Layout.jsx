import React from 'react'
import { Tab } from '@headlessui/react'

const Layout = () => {
  return (
    <>
        <section className='relative py-20'>
            <div className='mx-auto max-w-7xl p-6 lg:px-8'>
                <div className="flex flex-col">
                    <h1 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-900">Stacked Layouts</h1>
                    <nav aria-label="Breadcrumbs" className="order-first flex space-x-2 text-sm font-semibold">
                        <a className="text-slate-500 hover:text-slate-600" href="#">Application UI</a>
                        <div aria-hidden="true" className="select-none text-slate-400">/</div>
                        <a className="text-slate-500 hover:text-slate-600" href="#">Application Shells</a>
                    </nav>
                </div>
                <div className='grid grid-cols-[1fr,auto] items-center mt-10'>
                    <div className="flex min-w-0">
                        <div class="truncate text-base font-medium leading-7 text-slate-900">
                            <a href="#">Dark nav with white page header</a>
                        </div>
                        <a class="ml-3 hidden whitespace-nowrap rounded-lg bg-slate-100 px-2 py-0.5 text-xs font-semibold leading-6 text-slate-700 hover:bg-slate-200 lg:block" href="#">Requires JS</a>
                    </div>
                    <div class="ml-6 flex items-center">
                    <Tab.Group>
                        <Tab.List className="flex space-x-1 rounded-lg bg-slate-100 p-0.5">
                            <Tab className='focus-visible:outline-none'>
                            <button class="flex items-center rounded-md py-[0.4375rem] pl-2 pr-2 text-sm font-semibold lg:pr-3 bg-white shadow" id="headlessui-tabs-tab-27" role="tab" type="button" aria-selected="true" tabindex="0" data-headlessui-state="selected" aria-controls="headlessui-tabs-panel-29">
                                <svg class="h-5 w-5 flex-none stroke-sky-500" fill="none" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" xmlns="http://www.w3.org/2000/svg"><path d="M17.25 10c0 1-1.75 6.25-7.25 6.25S2.75 11 2.75 10 4.5 3.75 10 3.75 17.25 9 17.25 10Z"></path><circle cx="10" cy="10" r="2.25"></circle></svg>
                                <span class="sr-only lg:not-sr-only lg:ml-2 text-slate-900">Preview</span>
                            </button>
                            </Tab>
                            <Tab className='focus-visible:outline-none'>
                            <button class="flex items-center rounded-md py-[0.4375rem] pl-2 pr-2 text-sm font-semibold lg:pr-3" id="headlessui-tabs-tab-28" role="tab" type="button" aria-selected="false" tabindex="-1" data-headlessui-state="" aria-controls="headlessui-tabs-panel-30">
                                <svg class="h-5 w-5 flex-none stroke-slate-600" fill="none" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" xmlns="http://www.w3.org/2000/svg"><path d="m13.75 6.75 3.5 3.25-3.5 3.25M6.25 13.25 2.75 10l3.5-3.25"></path></svg>
                                <span class="sr-only lg:not-sr-only lg:ml-2 text-slate-600">Code</span>
                            </button>
                            </Tab>
                        </Tab.List>
                    </Tab.Group>

                        {/* <div class="flex space-x-1 rounded-lg bg-slate-100 p-0.5" role="tablist" aria-orientation="horizontal">
                            <button class="flex items-center rounded-md py-[0.4375rem] pl-2 pr-2 text-sm font-semibold lg:pr-3 bg-white shadow" id="headlessui-tabs-tab-27" role="tab" type="button" aria-selected="true" tabindex="0" data-headlessui-state="selected" aria-controls="headlessui-tabs-panel-29">
                                <svg class="h-5 w-5 flex-none stroke-sky-500" fill="none" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" xmlns="http://www.w3.org/2000/svg"><path d="M17.25 10c0 1-1.75 6.25-7.25 6.25S2.75 11 2.75 10 4.5 3.75 10 3.75 17.25 9 17.25 10Z"></path><circle cx="10" cy="10" r="2.25"></circle></svg>
                                <span class="sr-only lg:not-sr-only lg:ml-2 text-slate-900">Preview</span>
                            </button>
                            <button class="flex items-center rounded-md py-[0.4375rem] pl-2 pr-2 text-sm font-semibold lg:pr-3" id="headlessui-tabs-tab-28" role="tab" type="button" aria-selected="false" tabindex="-1" data-headlessui-state="" aria-controls="headlessui-tabs-panel-30">
                                <svg class="h-5 w-5 flex-none stroke-slate-600" fill="none" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" xmlns="http://www.w3.org/2000/svg"><path d="m13.75 6.75 3.5 3.25-3.5 3.25M6.25 13.25 2.75 10l3.5-3.25"></path></svg>
                                <span class="sr-only lg:not-sr-only lg:ml-2 text-slate-600">Code</span>
                            </button>
                        </div> */}
                        <div class="ml-6 mr-3 hidden h-5 w-px bg-slate-900/10 sm:block"></div>
                        <div class="relative hidden sm:block">
                            <select class="form-select h-9 w-full rounded-lg border-0 bg-transparent bg-none p-0 pl-3.5 pr-[1.875rem] font-medium text-slate-900 focus:shadow-none focus-visible:ring-2 focus-visible:ring-sky-500 sm:text-sm">
                                <option value="html">HTML</option>
                                <option value="react">React</option>
                                <option value="vue">Vue</option>
                            </select>
                                {/* <svg aria-hidden="true" viewBox="0 0 8 6" width="8" height="6" fill="none" class="pointer-events-none absolute inset-y-0 right-3.5 h-full stroke-slate-500"><path d="M7 1.5l-3 3-3-3" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg> */}
                        </div>
                        <button class="group relative ml-2 hidden h-9 w-9 items-center justify-center sm:flex">
                            <svg class="h-8 w-8 stroke-slate-400 transition group-hover:rotate-[-4deg] group-hover:stroke-slate-600" fill="none" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12.9975 10.7499L11.7475 10.7499C10.6429 10.7499 9.74747 11.6453 9.74747 12.7499L9.74747 21.2499C9.74747 22.3544 10.6429 23.2499 11.7475 23.2499L20.2475 23.2499C21.352 23.2499 22.2475 22.3544 22.2475 21.2499L22.2475 12.7499C22.2475 11.6453 21.352 10.7499 20.2475 10.7499L18.9975 10.7499" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M17.9975 12.2499L13.9975 12.2499C13.4452 12.2499 12.9975 11.8022 12.9975 11.2499L12.9975 9.74988C12.9975 9.19759 13.4452 8.74988 13.9975 8.74988L17.9975 8.74988C18.5498 8.74988 18.9975 9.19759 18.9975 9.74988L18.9975 11.2499C18.9975 11.8022 18.5498 12.2499 17.9975 12.2499Z" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M13.7475 16.2499L18.2475 16.2499" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M13.7475 19.2499L18.2475 19.2499" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><g class="opacity-0"><path d="M15.9975 5.99988L15.9975 3.99988" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M19.9975 5.99988L20.9975 4.99988" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M11.9975 5.99988L10.9975 4.99988" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></g></svg>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default Layout