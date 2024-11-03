<template>
  <div>
    <!-- Article Section (Kode 1) -->
    <article class="flex flex-col text-base font-bold text-white">
      <section class="flex relative flex-col w-full min-h-[720px] max-md:max-w-full mb-20">
        <img
          loading="lazy"
          src="../assets/images/misc/cover.png"
          alt="Blog post featured image about choosing font pairs"
          class="object-cover absolute inset-0 size-full"
        />
        <div class="flex relative flex-col items-start px-20 py-40 w-full max-md:px-5 max-md:py-24 max-md:max-w-full">
          <header class="font-semibold leading-none uppercase tracking-[3px]">
            <span class="font-medium">Posted on</span>
            <span class="font-black">startup</span>
          </header>
          <h1 class="mt-6 text-6xl tracking-tighter leading-[64px] w-[803px] max-md:max-w-full max-md:text-4xl max-md:leading-[51px]">
            Step-by-step guide to choosing great font pairs
          </h1>
          <time class="mt-6 leading-7 text-blue-600">
            By <a href="#" class="text-blue-600">James West</a> | May 23, 2022
          </time>
          <p class="mt-4 leading-7 w-[599px] max-md:max-w-full">
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.
          </p>
          <a
            href="#"
            class="gap-3 px-12 py-4 mt-12 mb-0 text-lg leading-none bg-blue-600 hover:bg-blue-700 max-md:px-5 max-md:mt-10 max-md:mb-2.5"
            tabindex="0"
            role="button"
          >
            Read More >
          </a>
        </div>
      </section>
    </article>

    <!-- Main Section (Kode 2) -->
    <main class="flex flex-col px-20 w-full max-md:px-5 max-md:max-w-full">
      <header class="flex gap-5 justify-between text-4xl font-bold leading-none text-gray-800 max-md:mr-0.5 max-md:max-w-full">
        <h1 class="tracking-tighter">Featured Post</h1>
        <h2 class="tracking-tighter">All Posts</h2>
        <a href="#all-posts" class="my-auto text-base leading-7 text-amber-300" tabindex="0">View All</a>
      </header>

      <section class="mt-8 max-md:max-w-full">
        <div class="flex gap-5 max-md:flex-col">
          <article class="flex flex-col w-[59%] max-md:ml-0 max-md:w-full">
            <div class="flex flex-col items-start p-8 mx-auto w-full font-bold max-md:px-5 max-md:mt-8 max-md:max-w-full">
              <img loading="lazy" src="../assets/images/misc/rumah.png" />
              <p class="mt-8 text-sm font-medium leading-none text-amber-300">
                By <a href="#author" class="text-amber-300">John Doe</a> | May 23, 2022
              </p>
              <h3 class="self-stretch mt-4 text-3xl tracking-tighter leading-10 text-gray-800 max-md:max-w-full">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
              </h3>
              <p class="mt-4 text-base leading-7 text-zinc-500 max-md:max-w-full">
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.
              </p>
              <a href="#read-more" class="gap-3 px-12 py-4 mt-8 text-lg leading-none text-white bg-blue-600 hover:bg-blue-700 max-md:px-5" tabindex="0">
                Read More &gt;
              </a>
            </div>
          </article>

          <aside class="flex flex-col ml-5 w-[41%] max-md:ml-0 max-md:w-full">
            <div class="flex flex-col grow max-md:mt-8 max-md:max-w-full">
              <article class="flex flex-col items-start py-7 pr-20 pl-8 bg-white hover:bg-orange-100 max-md:px-5 max-md:max-w-full">
                <p class="text-sm font-medium leading-none text-amber-300">
                  By <a href="#author" class="text-amber-300">John Deo</a> | Aug 23, 2021
                </p>
                <h3 class="mt-2 text-2xl font-bold leading-8 text-gray-800">
                  8 Figma design systems that you can download for free today.
                </h3>
              </article>

              <article class="flex flex-col items-start py-7 pr-20 pl-8 bg-white hover:bg-orange-100 max-md:px-5 max-md:max-w-full">
                <p class="text-sm font-medium leading-none text-amber-300">
                  By <a href="#author" class="text-amber-300">John Doe</a> | Aug 23, 2021
                </p>
                <h3 class="mt-2 text-2xl font-bold leading-8 text-gray-800">
                  8 Figma design systems that you can download for free today.
                </h3>
              </article>

              <article class="flex flex-col items-start py-7 pr-20 pl-8 bg-white hover:bg-orange-100 max-md:px-5 max-md:max-w-full">
                <p class="text-sm font-medium leading-none text-amber-300">
                  By <a href="#author" class="text-amber-300">John Doe</a> | Aug 23, 2021
                </p>
                <h3 class="mt-2 text-2xl font-bold leading-8 text-gray-800">
                  8 Figma design systems that you can download for free today.
                </h3>
              </article>

              <article class="flex flex-col items-start py-7 pr-20 pl-8 bg-white hover:bg-orange-100 max-md:px-5 max-md:max-w-full">
                <p class="text-sm font-medium leading-none text-amber-300">
                  By <a href="#author" class="text-amber-300">John Doe</a> | Aug 23, 2021
                </p>
                <h3 class="mt-2 text-2xl font-bold leading-8 text-gray-800">
                  8 Figma design systems that you can download for free today.
                </h3>
              </article>
            </div>
          </aside>
        </div>
      </section>

      <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/c70f7be6c65e1aeb76cee8cd48a5a2cb205679fe0a4c6afe3ea9f80564c9ec4e?placeholderIfAbsent=true&apiKey=e8011a4084744e0fbb615d9ad0bac9f7" alt="" class="object-contain self-end mt-32 aspect-[45.45] max-w-[1061px] w-[1061px] max-md:mt-10 max-md:mr-0.5 max-md:max-w-full" />

      <section class="px-20 py-24 bg-gray-100 max-md:px-5 max-md:mr-0.5 max-md:max-w-full">
        <div class="flex gap-5 max-md:flex-col">
          <article class="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
            <div class="flex flex-col grow text-base font-bold text-gray-800 max-md:mt-10 max-md:max-w-full">
              <h2 class="self-start font-semibold leading-none uppercase tracking-[3px]">ABOUT US</h2>
              <p class="mt-6 text-4xl tracking-tighter leading-10 max-md:max-w-full">
                We are a community of content writers who share their learnings
              </p>
              <p class="mt-4 mr-6 leading-7 text-zinc-500 max-md:mr-2.5 max-md:max-w-full">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <a href="#read-more" class="self-start mt-7 text-lg leading-8 text-amber-300 hover:text-amber-400 transition duration-150 ease-in-out" tabindex="0">Read More &gt;</a>
            </div>
          </article>

          <article class="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
            <div class="flex flex-col items-start text-base text-gray-800 max-md:mt-10 max-md:max-w-full">
              <h2 class="font-semibold leading-none uppercase tracking-[3px]">Our mision</h2>
              <p class="mt-6 text-3xl font-bold tracking-tighter leading-10">
                Creating valuable content for creatives all around the world
              </p>
              <p class="self-stretch mt-4 leading-7 text-zinc-500 max-md:max-w-full">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
          </article>
        </div>
      </section>


      <main class="mb-20">
      <section class="flex flex-col self-stretch px-20 w-full max-md:px-5 max-md:mt-10">
      <h1 class="self-center mt-32  text-4xl font-bold tracking-tighter leading-none text-gray-800 max-md:mt-10 mb-20 justify-center">Choose A Category</h1>
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
  </main>

   <!-- Why We Started Section -->
   <section class="py-16">
  <div class="flex w-[1280px] h-[705px] relative flex-col ml-[120px] mt-[100px] items-start text-base font-bold">
    <div class="flex relative flex-col items-end px-20 pt-32 max-w-full min-h-[705px] w-[949px]">
      <img
        loading="lazy"
        src="../assets/images/misc/orang.png"
        class="object-cover absolute inset-0 w-full h-full"
      />
      <div class="flex flex-col p-20 bg-white w-[706px] h-[584px] left-[574px] top-[121px] absolute">
        <div class="font-semibold leading-tight text-gray-800 uppercase tracking-[3px]">
          Why we started
        </div>
        <div class="mt-6 text-[48px] tracking-tighter w-[520px] text-gray-800 leading-[64px]">
          It started out as a simple idea and evolved into our passion
        </div>
        <div class="mt-4 leading-7 text-base font-normal text-gray-500">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip.
        </div>
        <router-link
          to="/"
          class="gap-3 self-start px-12 py-4 mt-8 text-lg leading-none text-white bg-blue-600 hover:bg-x-yellow transition duration-150 ease-in-out">
          Discover our story &gt;
        </router-link>
      </div>
    </div>
  </div>
</section>





    <h1 class="self-center mt-32 px-24 text-4xl font-bold tracking-tighter leading-none text-gray-800 max-md:mt-10 mb-10 max-md:px-5 max-md:text-center">list Of Authors</h1>
    <section class="self-stretch mt-12 max-md:mt-10 max-md:max-w-full">
      <div class="flex gap-5 max-md:flex-col">
        <article class="flex flex-col w-3/12 max-md:ml-0 max-md:w-full">
          <router-link to="/author" class="flex flex-col grow items-center px-14 py-10 w-full leading-none bg-zinc-100 max-md:px-5 max-md:mt-8 hover:bg-orange-100">
            <img loading="lazy" src="../assets/images/misc/orang1.png" />
            <h3 class="mt-5 text-3xl font-bold tracking-tighter text-gray-800 text-center">Floyd Miles</h3>
            <p class="self-stretch text-sm text-center text-zinc-500">Content Writer @Company</p>
            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/ebc67470106e9d6ddb8d97607421331f6f354cb1b1e23797f2a80557f0a32123?placeholderIfAbsent=true&apiKey=e8011a4084744e0fbb615d9ad0bac9f7" alt="" class="object-contain mt-5 w-28 max-w-full aspect-[6.58]" />
          </router-link>
        </article>

        <article class="flex flex-col ml-5 w-3/12 max-md:ml-0 max-md:w-full">
          <router-link to="/author" class="flex flex-col grow px-14 py-10 w-full leading-none bg-zinc-100 max-md:px-5 max-md:mt-8 hover:bg-orange-100">
            <img loading="lazy" src="../assets/images/misc/orang2.png" alt="Dianne Russell profile picture" class="object-contain self-center w-32 max-w-full rounded-full aspect-square" />
            <h3 class="mt-5 text-3xl font-bold tracking-tighter text-gray-800 text-center">Dianne Russell</h3>
            <p class="text-sm text-center text-zinc-500 max-md:mx-1 text-center">Content Writer @Company</p>
            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/c737a15e8641608f3bbb864c62419ea81bfd3f5952df9b3d45d82271639e19e3?placeholderIfAbsent=true&apiKey=e8011a4084744e0fbb615d9ad0bac9f7" alt="" class="object-contain self-center mt-5 w-28 max-w-full aspect-[6.58]" />
          </router-link>
        </article>

        <article class="flex flex-col ml-5 w-3/12 max-md:ml-0 max-md:w-full">
          <router-link to="/author" class="flex flex-col grow px-14 py-10 w-full leading-none bg-zinc-100 max-md:px-5 max-md:mt-8 hover:bg-orange-100">
            <img loading="lazy" src="../assets/images/misc/orang3.png" alt="Jenny Wilson profile picture" class="object-contain self-center w-32 max-w-full rounded-full aspect-square" />
            <h3 class="mt-5 text-3xl font-bold tracking-tighter text-center text-gray-800 max-md:mx-2 self-center">Jenny Wilson</h3>
            <p class="text-sm text-center text-zinc-500 self-center">Content Writer @Company</p>
            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/cc55ab028047697ab5b90532579bc7397e1c0e81d75d597937d10d08edea8e56?placeholderIfAbsent=true&apiKey=e8011a4084744e0fbb615d9ad0bac9f7" alt="" class="object-contain self-center mt-5 w-28 max-w-full aspect-[6.58]" />
          </router-link>
        </article>

        <article class="flex flex-col ml-5 w-3/12 max-md:ml-0 max-md:w-full">
          <router-link to="/author" class="flex flex-col grow items-center px-11 py-10 w-full leading-none bg-zinc-100 max-md:px-5 max-md:mt-8 hover:bg-orange-100">
            <img loading="lazy" src="../assets/images/misc/orang4.png" alt="Leslie Alexander profile picture" class="object-contain w-32 max-w-full rounded-full aspect-square" />
            <h3 class="self-center mt-5 text-3xl font-bold tracking-tighter text-gray-800">Leslie Alexander</h3>
            <p class="text-sm text-center text-zinc-500">Content Writer @Company</p>
            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/82c7e43556de8acc2afaa42d9cd1bd37a1c091eae64b9c97eb96c92b5aecc228?placeholderIfAbsent=true&apiKey=e8011a4084744e0fbb615d9ad0bac9f7" alt="" class="object-contain mt-5 w-28 max-w-full aspect-[6.58]" />
          </router-link>
        </article>
      </div>
    </section>
  </main>


  <main class="flex flex-col justify-center items-center px-20 w-full max-md:px-5 max-md:max-w-full">
    <section class="flex flex-wrap gap-10 mt-24 w-full max-w-[1237px] text-zinc-500 max-md:mt-10 max-md:max-w-full p-4 items-center">
      <div class="flex flex-col">
        <p  class="self-center text-sm leading-none opacity-60">We are</p>
        <h2  class="text-2xl font-bold leading-none">Featured in</h2>
      </div>
      <img loading="lazy" src="../assets/images/misc/wrapper.png" alt="Featured publications logos" class="object-contain grow shrink-0 my-auto mx-auto aspect-[31.25] basis-0 w-fit max-md:max-w-full pl-50" />
    </section>
  </main>

  <main class="flex flex-col justify-center items-center px-20 w-full max-md:px-5 max-md:max-w-full">
  <section  class="flex flex-col justify-center items-center self-stretch px-16 py-20 mt-24 w-full bg-[#faf5e9] max-md:px-5 max-md:mt-10 max-md:max-w-full">
    <div class="grid grid-cols-2 gap-10 w-full max-w-[1057px] max-md:flex max-md:flex-col max-md:max-w-full">
      <!-- Left Column -->
      <div class="flex flex-col items-start text-base text-gray-800">
        <h2  class="font-semibold leading-none uppercase tracking-[3px]">TESTIMONIALS</h2>
        <h3  class="mt-3 text-4xl font-bold tracking-tighter leading-10">What people say about our blog</h3>
        <p  class="mt-4 leading-7">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
      </div>

      <!-- Right Column -->
      <div class="flex items-start gap-8">
        <!-- Divider Line -->
        <div class="w-px border border-solid opacity-40 bg-zinc-500 border-zinc-300 h-[310px]"></div>

        <!-- Testimonial Content -->
        <article class="flex flex-col max-md:max-w-full">
          <blockquote  class="text-2xl font-bold leading-8 text-gray-800">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</blockquote>
          <div class="flex flex-wrap gap-5 justify-between items-start mt-20 w-full max-md:mt-10 max-md:max-w-full">
            <div class="flex gap-4 mt-2">
              <img loading="lazy" src="../assets/images/misc/profil.png" alt="Jonathan Vallem profile picture" class="object-contain shrink-0 w-12 rounded-full aspect-square" />
              <div class="flex flex-col">
                <cite  class="text-xl font-bold leading-none text-gray-800">Jonathan Vallem</cite>
                <p  class="text-sm leading-7 text-gray-500">New York, USA</p>
              </div>
            </div>
            <div class="flex gap-6" role="navigation" aria-label="Testimonial navigation">
              <button aria-label="Previous testimonial" class="hover:opacity-80 transition duration-150 ease-in-out"><img loading="lazy" src="../assets/images/misc/back.png" alt="" class="object-contain shrink-0 my-auto w-12 aspect-square" /></button>
              <button aria-label="Next testimonial" class="hover:opacity-80 transition duration-150 ease-in-out"><img loading="lazy" src="../assets/images/misc/next.png" alt="" class="object-contain shrink-0 my-auto w-12 aspect-square" /></button>
            </div>
          </div>
        </article>
      </div>
    </div>
  </section>
</main>


      <section class="mt-20 mb-20 max-md:mt-10 flex items-center justify-center">
        <div class="text-center">
          <h2 class="text-4xl font-bold tracking-tighter leading-10 text-gray-800 w-[414px]">Join our team to be a part of our story</h2>
          <p  class="mt-4 text-base leading-7 text-zinc-500 w-[405px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
          <button  class="gap-3 px-12 py-4 mt-8 text-lg font-bold leading-none text-white bg-blue-600 hover:bg-blue-700 max-md:px-5" aria-label="Join our team">Join Now</button>
        </div>
      </section>




  </div>
</template>

<style scoped>
builder-component {
  max-width: none !important;
}
</style>

