<template>
  <v-toolbar app>
    <v-switch
      v-model="darkMode"
      color="grey darken-2"
      hide-details
      prepend-icon="wb_sunny"
      append-icon="brightness_3"
    />
    <v-spacer />
    <v-toolbar-items>
      <v-btn
        v-for="item in items"
        :key="item.name"
        large
        flat
        class="ml-3 mr-3"
        @click="$vuetify.goTo(item.id, {})"
      >
        {{ item.name }}
      </v-btn>
    </v-toolbar-items>
    <v-spacer />
  </v-toolbar>
</template>

<script>
export default {
  name: "MosheToolbar",
  data() {
    return {
      items: [
        { name: "about me", id: "#about-me" },
        { name: "open source", id: "#open-source" },
        { name: "technical skills", id: "#technical-skills" }
      ],
      darkMode: true
    };
  },
  watch: {
    darkMode(newValue) {
      this.$emit("darkMode", newValue);
    }
  }
};
</script>

<style scoped></style>
