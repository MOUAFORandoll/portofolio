<template>
  <section class="p-3 p-lg-5" :class="classe">
    <div class="container">
      <div class="row">
        <h2 class="my-md-5 mb-3 text-center">{{ title }}</h2>
        <slot />
      </div>
    </div>
  </section>
</template>
<script>
export default {
  props: ["title", "classe"],
};
</script>
