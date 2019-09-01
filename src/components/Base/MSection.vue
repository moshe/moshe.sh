<template>
  <div>
    <h3 class="headline text-center text-uppercase">{{ title }}</h3>
    <v-divider class="mb-2 mt-2" />
    <slot />
  </div>
</template>

<script>
export default {
  name: "Section",
  props: {
    title: {
      type: String,
      required: true
    }
  }
};
</script>

<style scoped></style>
