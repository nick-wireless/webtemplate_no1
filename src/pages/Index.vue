<template>
  <Layout>
    <div class="relative">
      <g-image
        class="absolute min-h-screen min-w-screen object-cover"
        src="~/assets/images/home.jpg"
      ></g-image>
      <div
        class="absolute bg-teal-900 opacity-75 min-h-screen min-w-full text-white"
      ></div>
    </div>
    <p class=" font-display font-medium italic ">
      Testing
    </p>
    <h2 class=" font-serif font-headings font-semibold text-2xl h-8">
      How does this look?
    </h2>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: "Home"
  }
};
</script>

<style>
</style>
