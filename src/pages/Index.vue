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
    <h2 class=" font-display font-medium italic ">
      {{ heading1 }}
    </h2>
    <h3 class=" font-serif font-headings font-semibold text-2xl h-8">
      {{ subHeading }}
    </h3>
  </Layout>
</template>

<static-query>
  query {
    metadata {
      siteDescription
    }
  }
</static-query>

<script>
export default {
  metaInfo: {
    title: "Home"
  },
  data() {
    return {
      heading1: "Leading with our mission, wherever that takes us.",
      subHeading:
        "Inputing a string that can be edited from time to time.  A template would likely have more words."
    };
  }
};
</script>

<style>
</style>
