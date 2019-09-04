<template>
  <div>
    <section-header icon="contact_phone" class="mb-3">
      Personal Details
    </section-header>
    <v-layout class="mt-2" row v-for="line of details" :key="line.key">
      <v-flex xs4>
        <div style="font-weight: 500">{{ line.key }}</div>
      </v-flex>
      <v-flex xs8>{{ line.value }}</v-flex>
    </v-layout>
  </div>
</template>

<script>
import SectionHeader from "../Base/SectionHeader.vue";

export default {
  name: "PersonalDetailsSection",
  components: { SectionHeader },
  data() {
    return {
      details: [
        { key: "NAME", value: "Moshe Zada" },
        { key: "AGE", value: "28" },
        { key: "LOCATION", value: "Tel-Aviv, Israel" },
        { key: "PHONE", value: "+972-54-6811459" },
        { key: "E-MAIL", value: "me@moshe.sh" }
      ]
    };
  }
};
</script>

<style scoped></style>
