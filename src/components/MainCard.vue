<template>
  <v-card>
    <v-card-text>
      <about-me-section id="about-me" />
      <open-sources-section id="open-source" class="mt-4"/>
      <skills-section id="technical-skills" class="mt-4"/>
    </v-card-text>
  </v-card>
</template>

<script>
import AboutMeSection from './Sections/AboutMeSection.vue';
import OpenSourcesSection from './Sections/OpenSourcesSection.vue';
import SkillsSection from './Sections/SkillsSection.vue';

export default {
  components: { SkillsSection, OpenSourcesSection, AboutMeSection },
};
</script>

<style scoped>

</style>
