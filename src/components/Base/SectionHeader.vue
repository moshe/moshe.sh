<template>
  <div class="headline text-center">
    <v-icon v-if="icon" class="icon">{{ icon }}</v-icon>
    <slot />
  </div>
</template>

<script>
export default {
  name: "SectionHeader",
  props: {
    icon: {
      type: String
    }
  }
};
</script>

<style scoped>
.icon {
  font-size: 28px;
  margin-right: 6px;
}
</style>
