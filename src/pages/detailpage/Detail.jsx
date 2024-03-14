import React from 'react'
import user_1 from '../../assets/img/user-1.jpg'
import banner_1 from '../../assets/img/banner1.jpg'


const Detail = () => {
  return (
    <>
    <div className='max-w-8xl pt-16 md:px-8 mx-auto'>
      <div className='flex px-4 pt-8 pb-10 lg:px-8'>
      <a class="group flex font-semibold text-sm leading-6 text-slate-700 hover:text-slate-900 dark:text-slate-200 dark:hover:text-white" href="/blog">
        <svg viewBox="0 -9 3 24" class="overflow-visible mr-3 text-slate-400 w-auto h-6 group-hover:text-slate-600 dark:group-hover:text-slate-300">
            <path d="M3 0L0 3L3 6" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
            </svg>
            Go back
      </a>
      </div>
    </div>
    <div className='px-4 sm:px-6 md:px-8'>
      <div className='max-w-3xl mx-auto'>
        <main>
            <article className='relative pt-10'>
            <h1 class="text-2xl font-extrabold tracking-tight text-slate-900 dark:text-slate-200 md:text-3xl ">Open-sourcing our progress on Tailwind CSS&nbsp;v4.0</h1>
            <div className='text-sm leading-6'>
            <dl>
                <dt class="sr-only">Date</dt>
                <dd class="absolute top-0 inset-x-0 text-slate-700 dark:text-slate-400">
                <time datetime="2024-03-06T16:30:00.000Z">Wednesday, March 6, 2024</time>
                </dd>
                </dl>
            </div>
            <div className='mt-6'>
               <ul className='flex flex-wrap text-sm leading-6 -mt-6 -mx-5'>
                <li className='flex items-center font-medium whitespace-nowrap px-5 mt-6'>
                    <img src={user_1} alt="" className='mr-3 w-9 h-9 rounded-full bg-slate-50 dark:bg-slate-800' />
                    <div className="text-sm leading-4">
                        <div className="text-slate-900 dark:text-slate-200">Adam Wathan</div>
                    <div className="mt-1">
                        <a href="https://twitter.com/adamwathan" class="text-sky-500 hover:text-sky-600 dark:text-sky-400">@adamwathan</a>
                    </div>
                    </div>
                </li>
               </ul>
            </div>
             <div className='mt-12 prose prose-slate dark:prose-dark'>
                <div className='relative not-prose [a:not(:first-child)>&]:mt-12 [a:not(:last-child)>&]:mb-12 my-12 first:mt-0 last:mb-0 rounded-2xl overflow-hidden [figure>&]:my-0'>
                  <img src={banner_1} alt="" />
                  <div class="absolute inset-0 rounded-2xl ring-1 ring-inset ring-slate-900/10 dark:ring-white/10"></div>
                </div>
                <p className='pb-2'>Last summer at Tailwind Connect <a href="https://www.youtube.com/watch?v=CLkxRnRQtDE&amp;t=2146s" className='font-bold text-gray-800 underline underline-offset-1'>I shared a preview of Oxide</a> — a new high-performance engine for Tailwind CSS that we’ve been working on, designed to simplify the developer experience and take advantage of how the web platform has evolved in recent years.</p>
                <p className='pb-2'>The new engine was originally going to ship as a v3.x release, but even though we’re committed to backwards compatibility, this feels so clearly like a new generation of the framework that it deserves to be v4.0.</p>
                <p className='pb-2'>It’s still early and we’ve got <a href="/blog/tailwindcss-v4-alpha#roadmap-to-v4-0" className='font-bold text-gray-800 underline underline-offset-1'> a lot of work to do</a>, but today we’re 
                <a href="https://github.com/tailwindlabs/tailwindcss/tree/next" className='font-bold text-gray-800 underline underline-offset-1'> open-sourcing our progress</a> and tagging the first public 
                <a href="https://www.npmjs.com/package/tailwindcss/v/4.0.0-alpha.3" className='font-bold text-gray-800 underline underline-offset-1'> v4.0.0-alpha </a> 
                 so you can start experimenting with it and help us get to a stable release later this year.</p>
                 <p>I’ll try keep it brief to save some of the excitement for the stable release, but if you like to play with very early and experimental stuff, there should be plenty of information here to get you going.</p>
                 <div className='border border-gray-200/50 my-10'></div>
                 <a class="group relative border-none lg:-ml-2 lg:pl-2 font-bold text-3xl text-gray-700" href="#a-new-engine-built-for-speed">
                    <div class="absolute -ml-8 hidden items-center border-0 opacity-0 group-hover:opacity-100 group-focus:opacity-100 lg:flex">
                        ​<div class="flex h-6 w-6 items-center justify-center rounded-md text-slate-400 shadow-sm ring-1 ring-slate-900/5 hover:text-slate-700 hover:shadow hover:ring-slate-900/10 dark:bg-slate-800 dark:text-slate-400 dark:shadow-none dark:ring-0 dark:hover:bg-slate-700 dark:hover:text-slate-200">
                            <svg width="12" height="12" fill="none" aria-hidden="true">
                                <path d="M3.75 1v10M8.25 1v10M1 3.75h10M1 8.25h10" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"></path></svg></div>
                 </div>A new engine, built for speed</a>
                 <p className='pt-4'>The new engine is a ground-up rewrite, using everything we know about the framework now to better model the problem space, making things faster with a lot less code.</p>
                 <ul role="list" className='list-disc ps-5'>
                    <li className=' mt-5 text-base'><span className='font-semibold text-lg text-gray-700'>Up to 10x faster</span> — we can do a full build of the Tailwind CSS website in 105ms instead of 960ms, or our Catalyst UI kit in 55ms instead of 341ms.</li>
                    <li className=' mt-5 text-base'><span className='font-semibold text-lg text-gray-700'>Smaller footprint</span> — the new engine is over 35% smaller installed, even with the heavier native packages we ship like the parts we’ve rewritten in Rust and Lightning CSS.</li>
                    <li className=' mt-5 text-base'><span className='font-semibold text-lg text-gray-700'>Rust where it counts</span> — we’ve migrated some of the most expensive and parallelizable parts of the framework to Rust, while keeping the core of the framework in TypeScript for extensibility.</li>
                    <li className=' mt-5 text-base'><span className='font-semibold text-lg text-gray-700'>One dependency</span> — the only thing the new engine depends on is Lightning CSS.</li>
                    <li className=' mt-5 text-base'><span className='font-semibold text-lg text-gray-700'>Custom parser</span> — we wrote our own CSS parser and designed our own data structures tailored to our needs, making parsing over 2x as fast for us as it was with PostCSS.</li>
                 </ul>
                 <div className='border border-gray-200/50 my-10'></div>
                 <a class="group relative border-none lg:-ml-2 lg:pl-2 font-bold text-3xl text-gray-700" href="#a-new-engine-built-for-speed">
                    <div class="absolute -ml-8 hidden items-center border-0 opacity-0 group-hover:opacity-100 group-focus:opacity-100 lg:flex">
                        ​<div class="flex h-6 w-6 items-center justify-center rounded-md text-slate-400 shadow-sm ring-1 ring-slate-900/5 hover:text-slate-700 hover:shadow hover:ring-slate-900/10 dark:bg-slate-800 dark:text-slate-400 dark:shadow-none dark:ring-0 dark:hover:bg-slate-700 dark:hover:text-slate-200">
                            <svg width="12" height="12" fill="none" aria-hidden="true">
                                <path d="M3.75 1v10M8.25 1v10M1 3.75h10M1 8.25h10" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"></path></svg></div>
                 </div>
                 Unified toolchain</a>
                 <p className='pt-4'>The new engine is a ground-up rewrite, using everything we know about the framework now to better model the problem space, making things faster with a lot less code.</p>
                 <ul role="list" className='list-disc ps-5'>
                    <li className=' mt-5 text-base'><span className='font-semibold text-lg text-gray-700'>Built-in @import handling</span> — we can do a full build of the Tailwind CSS website in 105ms instead of 960ms, or our Catalyst UI kit in 55ms instead of 341ms.</li>
                    <li className=' mt-5 text-base'><span className='font-semibold text-lg text-gray-700'>Built-in vendor prefixing </span> — the new engine is over 35% smaller installed, even with the heavier native packages we ship like the parts we’ve rewritten in Rust and Lightning CSS.</li>
                    <li className=' mt-5 text-base'><span className='font-semibold text-lg text-gray-700'>Rust where it counts</span> — we’ve migrated some of the most expensive and parallelizable parts of the framework to Rust, while keeping the core of the framework in TypeScript for extensibility.</li>
                    <li className=' mt-5 text-base'><span className='font-semibold text-lg text-gray-700'>Built-in nesting support</span> — the only thing the new engine depends on is Lightning CSS.</li>
                    <li className=' mt-5 text-base'><span className='font-semibold text-lg text-gray-700'>Syntax transforms</span> — we wrote our own CSS parser and designed our own data structures tailored to our needs, making parsing over 2x as fast for us as it was with PostCSS.</li>
                 </ul>
                 <p className='mt-4'>We’re still shipping a PostCSS plugin, but we’re also exploring first-party bundler plugins, and we’re shipping an official Vite plugin with this first alpha release that you can try out today.</p>
                 <div className='border border-gray-200/50 my-10'></div>
                 <a class="group relative border-none lg:-ml-2 lg:pl-2 font-bold text-3xl text-gray-700" href="#a-new-engine-built-for-speed">
                    <div class="absolute -ml-8 hidden items-center border-0 opacity-0 group-hover:opacity-100 group-focus:opacity-100 lg:flex">
                        ​<div class="flex h-6 w-6 items-center justify-center rounded-md text-slate-400 shadow-sm ring-1 ring-slate-900/5 hover:text-slate-700 hover:shadow hover:ring-slate-900/10 dark:bg-slate-800 dark:text-slate-400 dark:shadow-none dark:ring-0 dark:hover:bg-slate-700 dark:hover:text-slate-200">
                            <svg width="12" height="12" fill="none" aria-hidden="true">
                                <path d="M3.75 1v10M8.25 1v10M1 3.75h10M1 8.25h10" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"></path></svg></div>
                 </div>
                 Designed for the modern web</a>
                 <p className='pt-4'>We’re looking into the future with Tailwind CSS v4 and trying to build a framework that’s going to feel cutting edge for years to come.</p>
                 <ul role="list" className='list-disc ps-5'>
                    <li className=' mt-5 text-base'><span className='font-semibold text-lg text-gray-700'>Native cascade layers</span> — we’re using real @layer rules now, which solves a ton of specificity problems we’ve wrestled with in the past.</li>
                    <li className=' mt-5 text-base'><span className='font-semibold text-lg text-gray-700'>Explicitly defined custom properties </span> — we use @property to define our internal custom properties with proper types and constraints, making it possible to do things like transition background gradients.</li>
                    <li className=' mt-5 text-base'><span className='font-semibold text-lg text-gray-700'>Using color-mix for opacity modifiers </span> — we’ve migrated some of the most expensive and parallelizable parts of the framework to Rust, while keeping the core of the framework in TypeScript for extensibility.</li>
                    <li className=' mt-5 text-base'><span className='font-semibold text-lg text-gray-700'>Container queries in core</span> — the only thing the new engine depends on is Lightning CSS.</li>
                    <li className=' mt-5 text-base'><span className='font-semibold text-lg text-gray-700'>Syntax transforms</span> — we wrote our own CSS parser and designed our own data structures tailored to our needs, making parsing over 2x as fast for us as it was with PostCSS.</li>
                 </ul>
                 <p className='mt-4'>We’re still shipping a PostCSS plugin, but we’re also exploring first-party bundler plugins, and we’re shipping an official Vite plugin with this first alpha release that you can try out today.</p>
                 <div className='border border-gray-200/50 my-10'></div>
                 <a class="group relative border-none lg:-ml-2 lg:pl-2 font-bold text-3xl text-gray-700" href="#a-new-engine-built-for-speed">
                    <div class="absolute -ml-8 hidden items-center border-0 opacity-0 group-hover:opacity-100 group-focus:opacity-100 lg:flex">
                        ​<div class="flex h-6 w-6 items-center justify-center rounded-md text-slate-400 shadow-sm ring-1 ring-slate-900/5 hover:text-slate-700 hover:shadow hover:ring-slate-900/10 dark:bg-slate-800 dark:text-slate-400 dark:shadow-none dark:ring-0 dark:hover:bg-slate-700 dark:hover:text-slate-200">
                            <svg width="12" height="12" fill="none" aria-hidden="true">
                                <path d="M3.75 1v10M8.25 1v10M1 3.75h10M1 8.25h10" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"></path></svg></div>
                 </div>
                 Designed for the modern web</a>
                 <p className='pb-4'>The new architecture makes it possible to compose together variants that act on other selectors, like <code className='font-bold text-base text-black/90'>group-*</code>, <code className='font-bold text-base text-black/90'>peer-*</code>, <code className='font-bold text-base text-black/90'>has-*</code>, and a new <code className='font-bold text-base text-black/90'>not-*</code> variant we’re introducing for v4.</p>
                 <p className='pb-4'>In earlier releases, variants like <code className='font-bold text-base text-black/90'>group-has-*</code> were explicitly defined in the framework, but now <code className='font-bold text-base text-black/90'>group-*</code> can compose with the existing <code className='font-bold text-base text-black/90'>has-*</code> variant, which can compose with other variants like <code className='font-bold text-base text-black/90'>focus</code>:</p>
                 <div className='class="mt-5 mb-8 first:mt-0 last:mb-0 from-pink-500 to-fuchsia-400 relative -mx-4 pt-6 pl-4 bg-gradient-to-b sm:mx-0 sm:rounded-2xl sm:pt-12 sm:pl-12"'>
                   <div className='rounded-tl-xl overflow-hidden sm:rounded-br-xl'>
                    <div className='pt-2 bg-slate-800 shadow-lg group'>
                        <div className='class="flex text-slate-400 text-xs leading-6"'></div>
                    </div>
                   </div>
                 </div>
              </div>
            </article>
        </main>

      </div>
    </div>
    </>
  )
}

export default Detail