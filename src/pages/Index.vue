<template>
  <Layout>
    <div
      class=" bg-cover "
      style=" background-image=url(@/assets/images/home.jpg)"
    >
      <p class=" font-display font-medium italic ">
        Testing
      </p>
      <h2 class=" font-serif font-headings font-semibold text-2xl h-8">
        How does this look?
      </h2>
    </div>
    <div class=" w-auto ">
      <g-image src="~/assets/images/home.jpg"></g-image>
    </div>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: "Home"
  },
  props: {
    msg: {
      type: String,
      required: false,
      default: "testing"
    }
  }
};
</script>

<style>
.home-links a {
  margin-right: 1rem;
}
</style>
