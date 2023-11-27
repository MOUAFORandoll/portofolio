<template>
  <section class="p-3 p-lg-5 mobile">
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
  props: ["title"],
};
</script>
<style>
@media (max-width: 770px) {
  .mobile {
    margin-top: 300px;
  }
}
@media (max-width: 400px) {
  .mobile {
    margin-top: 400px;
  }
}
</style>
