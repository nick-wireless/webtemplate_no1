<template>
  <div class="layout ">
    <!-- <BackgroundImage :imageUrl="currentImage"></BackgroundImage> -->
    <!-- The content: including Nav Header & Slot -->
    <header class=" max-w-screen-md">
      <div
        class=" absolute z-40 md:flex justify-between w-screen max-w-screen-md items-center"
      >
        <strong class=" md:flex items-center">
          <div>
            <svg
              class="w-12 h-12 m-8 md:ml-16"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g class="fill-current text-teal-700">
                <rect fill="#C2EAC6" width="24" height="24" rx="6" />
                <path
                  d="M9.855 16.7485a.9003.9003 0 01-1.3055-.9453l.4232-2.485-1.8007-1.7556a.9003.9003 0 01.4952-1.5306l2.494-.3602 1.1073-2.2598a.9003.9003 0 011.6206 0l1.1075 2.2508 2.4939.3602a.9003.9003 0 01.4952 1.5396l-1.8007 1.7556.4232 2.485a.9003.9003 0 01-1.3055.9453l-2.2239-1.1704-2.2238 1.1704z"
                  class=" fill-current text-blue-900"
                />
              </g>
            </svg>
          </div>
          <g-link
            class="no-underline font-serif font-headings tracking-widest h-12 text-white ml-8 mt-2 text-3xl md:text-4xl w-64 "
            to="/"
            >{{ $static.metadata.siteName }}</g-link
          >
        </strong>
        <nav class="mt-5 ml-8 text-lg tracking-wider ">
          <g-link
            class="no-underline align-middle hover:underline hover:italic hover:text-white text-purple-200  "
            to="/"
          >
            {{ home }}
          </g-link>

          <g-link
            class="no-underline align-middle ml-3 hover:underline hover:italic hover:text-white text-purple-200"
            to="/about/"
          >
            {{ about }}
          </g-link>

          <g-link
            class="no-underline align-middle ml-3 mr-8 hover:underline hover:italic hover:text-white text-purple-200"
            to="/contact/"
          >
            {{ contact }}
          </g-link>
        </nav>
      </div>
    </header>
    <body class="max-w-screen-md">
      <slot />
    </body>
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<script>
// import BackgroundImage from '~/components/BackgroundImage.vue'

export default {
  // components: { BackgroundImage },
  data() {
    return {
      home: "Mission", // Home page
      about: "People", // Equivalent to About
      contact: "Contact"
    };
  }
};
</script>

<style>
header body {
  @apply font-sans text-white antialiased;
}
</style>
