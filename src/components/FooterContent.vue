<script setup lang="ts">
import { ref } from 'vue'

const email = ref('')

const handleSubmit = () => {
  console.log('Form submitted with email:', email.value)
}

</script>

<template>
  <header class="flex overflow-hidden flex-col justify-center px-20 py-14 bg-gray-800 max-md:px-5">
    <nav class="flex flex-wrap gap-5 justify-between items-start w-full text-base leading-7 text-white max-md:max-w-full">
      <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/ba600cb1b837e96e25434af74d4b9b8453d29da76b22b09da11bb2c554f02e70?placeholderIfAbsent=true&apiKey=e8011a4084744e0fbb615d9ad0bac9f7" alt="Company Logo" class="object-contain shrink-0 max-w-full aspect-[5] w-[140px]" />
      <ul class="flex gap-6 list-none">
      <li><router-link to="/" class="text-white hover:text-x-yellow transition duration-150 ease-in-out">Home</router-link></li>
      <li><router-link to="/blog" class="text-white hover:text-x-yellow transition duration-150 ease-in-out">Blog</router-link></li>
      <li><router-link to="/about" class="text-white hover:text-x-yellow transition duration-150 ease-in-out">About us</router-link></li>
      <li><router-link to="/contact" class="text-white hover:text-x-yellow transition duration-150 ease-in-out">Contact us</router-link></li>
      <li><router-link to="/privacy" class="text-white hover:text-x-yellow transition duration-150 ease-in-out">Privacy Policy</router-link></li>
    </ul>

    </nav>

    <section class="px-16 py-20 mt-14 w-full bg-white bg-opacity-10 max-md:px-5 max-md:mt-10 max-md:max-w-full">
      <div class="flex gap-5 max-md:flex-col">
        <article class="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
          <h1 class="text-4xl font-bold tracking-tighter leading-10 text-white max-md:mt-10 max-md:max-w-full">
            Subscribe to our newsletter to get latest updates and news
          </h1>
        </article>
        <div class="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
          <form @submit.prevent="handleSubmit" class="flex flex-wrap gap-6 mt-1 w-full max-md:mt-10 max-md:max-w-full">
            <label for="emailInput" class="sr-only ">Enter Your Email</label>
            <input
              type="email"
              id="emailInput"
              v-model="email"
              required
              class="grow px-6 py-6 text-base leading-loose border border-solid border-neutral-600 text-white w-fit max-md:px-5 bg-white bg-opacity-10"
              placeholder="Enter Your Email"
            />
            <button
              type="submit"
              class="gap-3 px-12 py-4 text-lg font-bold leading-none text-white whitespace-nowrap bg-blue-600 max-md:px-5 hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </section>

    <footer class="mt-12">
      <address class="flex flex-wrap gap-5 justify-between text-base leading-7 text-white max-md:mt-10 max-md:max-w-full">
        <p class="opacity-70">Finstreet 118 2561 Fintown</p>
        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/c8f1b83913863a5790c652d33dbf8ed2c17dbddbf8ebf39329c28c37f31f3db9?placeholderIfAbsent=true&apiKey=e8011a4084744e0fbb615d9ad0bac9f7" alt="Social Media Icons" class="object-contain shrink-0 self-start mt-3 w-36 max-w-full aspect-[9.01]" />
      </address>
      <p class="self-start text-base leading-7 text-white opacity-70">
        Hello@finsweet.com 020 7993 2905
      </p>
    </footer>
  </header>
</template>


