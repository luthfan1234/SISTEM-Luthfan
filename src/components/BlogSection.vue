<template>
  <section class="p-20 w-full bg-gray-100 max-md:px-5 max-md:max-w-full">
    <div class="flex gap-5 max-md:flex-col">
      <div class="flex flex-col w-[55%] max-md:ml-0 max-md:w-full">
        <div class="flex flex-col items-start self-stretch my-auto w-full font-medium max-md:mt-10 max-md:max-w-full">
          <h2 class="text-base leading-none text-gray-800 uppercase tracking-[3px]">Featured Post</h2>
          <h3 class="self-stretch mt-5 text-4xl font-bold tracking-tighter leading-10 text-gray-800 max-md:max-w-full">Step-by-step guide to choosing great font pairs</h3>
          <p class="mt-4 text-sm leading-none text-amber-300">
            By <span class="text-amber-300">John Doe</span> l May 23, 2022
          </p>
          <p class="self-stretch mt-4 text-base leading-7 text-zinc-500 max-md:max-w-full">
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.
          </p>
          <router-link to="/blogpost" class="inline-block gap-3 px-12 py-4 mt-8 text-lg font-bold leading-none text-white bg-blue-600 hover:bg-blue-700 max-md:px-5 transition duration-150 ease-in-out" role="link">
            Read More &gt;
          </router-link>
        </div>
      </div>
      <div class="flex flex-col ml-5 w-[45%] max-md:ml-0 max-md:w-full">
        <img loading="lazy" src="../assets/images/misc/blog11.png" alt="Featured post illustration" class="object-contain grow w-full aspect-[1.43] max-md:mt-10 max-md:max-w-full" />
      </div>
    </div>
  </section>

  <section class="flex flex-col px-20 mt-16 w-full max-md:px-5 max-md:mt-10 max-md:max-w-full">
    <h2 class="self-start text-5xl font-bold tracking-tighter leading-none text-gray-800 max-md:text-4xl">All posts</h2>
    <hr class="shrink-0 mt-8 h-px border border-solid bg-zinc-500 border-zinc-500 opacity-[0.32] max-md:max-w-full" />
    <div class="mt-16 w-full max-w-[1147px] max-md:mt-10 max-md:max-w-full">
      <div class="flex gap-5 max-md:flex-col">
        <div class="flex flex-col w-[44%] max-md:ml-0 max-md:w-full">
          <div class="flex flex-col grow max-md:mt-8 max-md:max-w-full">
            <img loading="lazy" src="../assets/images/misc/blog22.png" alt="Blog post image 1" class="object-contain w-full aspect-[1.54] max-md:max-w-full" />
            <img loading="lazy" src="../assets/images/misc/blog33.png" alt="Blog post image 2" class="object-contain mt-16 w-full aspect-[1.54] max-md:mt-10 max-md:max-w-full" />
            <img loading="lazy" src="../assets/images/misc/blog4.png" alt="Blog post image 3" class="object-contain mt-16 w-full aspect-[1.54] max-md:mt-10 max-md:max-w-full" />
            <img loading="lazy" src="../assets/images/misc/blog5.png" alt="Blog post image 4" class="object-contain mt-16 w-full aspect-[1.54] max-md:mt-10 max-md:max-w-full" />
            <img loading="lazy" src="../assets/images/misc/blog22.png" alt="Blog post image 5" class="object-contain mt-16 w-full aspect-[1.54] max-md:mt-10 max-md:max-w-full" />
          </div>
        </div>
        <div class="flex flex-col ml-5 w-[56%] max-md:ml-0 max-md:w-full">
          <div class="flex flex-col self-stretch my-auto text-base font-semibold leading-none text-amber-300 max-md:mt-10 max-md:max-w-full">
            <article>
              <h3 class="self-start uppercase tracking-[3px]">Startup</h3>
              <h4 class="mt-5 mr-6 text-4xl font-bold tracking-tighter leading-10 text-gray-800 max-md:mr-2.5 max-md:max-w-full">Design tips for designers that cover everything you need</h4>
              <p class="mt-4 leading-7 text-zinc-500 max-md:max-w-full">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.</p>
            </article>
            <article class="mt-44 max-md:mt-10">
              <h3 class="self-start uppercase tracking-[3px]">BUSINESS</h3>
              <h4 class="mt-5 mr-6 text-4xl font-bold tracking-tighter leading-10 text-gray-800 max-md:mr-2.5 max-md:max-w-full">How to build rapport with your web design clients</h4>
              <p class="mt-4 leading-7 text-zinc-500 max-md:max-w-full">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.</p>
            </article>
            <article class="mt-48 max-md:mt-10">
              <h3 class="self-start uppercase tracking-[3px]">Startup</h3>
              <h4 class="mt-5 mr-6 text-4xl font-bold tracking-tighter leading-none text-gray-800 max-md:mr-2.5 max-md:max-w-full">Logo design trends to avoid in 2022</h4>
              <p class="mt-4 leading-7 text-zinc-500 max-md:max-w-full">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.</p>
            </article>
            <article class="mt-48 max-md:mt-10">
              <h3 class="self-start uppercase tracking-[3px]">TECHNOLOGY</h3>
              <h4 class="self-start mt-5 text-4xl font-bold tracking-tighter leading-10 text-gray-800 max-md:max-w-full">8 Figma design systems you can download for free today</h4>
              <p class="mt-4 leading-7 text-zinc-500 max-md:max-w-full">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.</p>
            </article>
            <article class="mt-44 max-md:mt-10">
              <h3 class="self-start uppercase tracking-[3px]">ECONOMY</h3>
              <h4 class="mt-5 mr-5 text-4xl font-bold tracking-tighter leading-10 text-gray-800 max-md:mr-2.5 max-md:max-w-full">Font sizes in UI design: The complete guide to follow</h4>
              <p class="mt-4 leading-7 text-zinc-500 max-md:max-w-full">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.</p>
            </article>
          </div>
        </div>
      </div>
    </div>
  </section>

  <nav class="flex gap-4 self-center mt-16 ml-auto mr-auto max-w-full font-bold text-center w-[174px] max-md:mt-10 justify-center" aria-label="Pagination">
    <a href="#" class="grow my-auto text-2xl leading-none text-zinc-500 hover:text-gray-800 transition duration-150 ease-in-out" aria-label="Previous page">&lt; Prev</a>
    <a href="#" class="text-3xl tracking-tighter leading-none text-gray-800 hover:text-amber-300 transition duration-150 ease-in-out" aria-label="Next page">Next &gt;</a>
  </nav>

  <section class="flex flex-col self-stretch px-20 w-full max-md:px-5 max-md:mt-10">
      <h1 class="self-start mt-32  text-4xl font-bold tracking-tighter leading-none text-gray-800 max-md:mt-10 mb-20 ">All Categories</h1>
      <div class="flex gap-5 max-md:flex-col">

        <article class="flex flex-col w-3/12 max-md:w-full hover:text-white">
          <router-link to="/blog/business" class="flex flex-col p-8 w-full border border-solid border-zinc-500 max-md:px-5 max-md:mt-8 transition duration-150 ease-in-out hover:bg-blue-600 hover:text-white">
            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/5305de9d9e170e8c91de03eb22dba944f5ef03ac5f3a3adb6ce52eb1ad20b4ae?placeholderIfAbsent=true&apiKey=e8011a4084744e0fbb615d9ad0bac9f7" alt="Business icon" class="object-contain w-12" />
            <h2 class="mt-4 text-3xl font-bold tracking-tighter text-gray-800 hover:text-white">Business</h2>
            <p class="mt-1 text-base leading-7 text-zinc-500 hover:text-white">Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</p>
          </router-link>
        </article>

        <article class="flex flex-col w-3/12 max-md:w-full hover:text-white">
          <router-link to="/blog/startup" class="flex flex-col p-8 w-full border border-solid border-zinc-500 max-md:px-5 max-md:mt-8 transition duration-150 ease-in-out hover:bg-blue-600 hover:text-white">
            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/7c20d7479ee31a04a1a31bec00c9460459f8c90cc3f5c5157bd7d1658b5fd8f4?placeholderIfAbsent=true&apiKey=e8011a4084744e0fbb615d9ad0bac9f7" alt="Startup icon" class="object-contain w-12" />
            <h2 class="mt-4 text-3xl font-bold tracking-tighter text-gray-800 hover:text-white">Startup</h2>
            <p class="mt-1 text-base leading-7 text-zinc-500 hover:text-white">Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</p>
          </router-link>
        </article>

        <article class="flex flex-col w-3/12 max-md:w-full hover:text-white">
          <router-link to="/blog/economy" class="flex flex-col p-8 w-full border border-solid border-zinc-500 max-md:px-5 max-md:mt-8 transition duration-150 ease-in-out hover:bg-blue-600 hover:text-white">
            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/9f9ea4d60ffc2ac2756619e99d7cecaf8ddaeb339932b51cb8ca04f00f6fe0e1?placeholderIfAbsent=true&apiKey=e8011a4084744e0fbb615d9ad0bac9f7" alt="Economy icon" class="object-contain w-12" />
            <h2 class="mt-4 text-3xl font-bold tracking-tighter text-gray-800 hover:text-white">Economy</h2>
            <p class="mt-1 text-base leading-7 text-zinc-500 hover:text-white">Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</p>
          </router-link>
        </article>

        <article class="flex flex-col w-3/12 max-md:w-full hover:text-white">
          <router-link to="/blog/technology" class="flex flex-col p-8 w-full border border-solid border-zinc-500 max-md:px-5 max-md:mt-8 transition duration-150 ease-in-out hover:bg-blue-600 hover:text-white">
            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/f7711bc8c130ae05319b5189f87b223bc1125099c826ebd163e20da8da19f8af?placeholderIfAbsent=true&apiKey=e8011a4084744e0fbb615d9ad0bac9f7" alt="Technology icon" class="object-contain w-12" />
            <h2 class="mt-4 text-3xl font-bold tracking-tighter text-gray-800 hover:text-white">Technology</h2>
            <p class="mt-1 text-base leading-7 text-zinc-500 hover:text-white">Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</p>
          </router-link>
        </article>
      </div>
    </section>

    <section class="mt-20 mb-20 max-md:mt-10 flex items-center justify-center">
        <div class="text-center">
          <h2 class="text-4xl font-bold tracking-tighter leading-10 text-gray-800 w-[414px]">Join our team to be a part of our story</h2>
          <p  class="mt-4 text-base leading-7 text-zinc-500 w-[405px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
          <button  class="gap-3 px-12 py-4 mt-8 text-lg font-bold leading-none text-white bg-blue-600 hover:bg-blue-700 max-md:px-5" aria-label="Join our team">Join Now</button>
        </div>
      </section>

</template>



<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'FeaturedPost'
});
</script>
