<template>
  <v-card>
    <v-img src="moshe.jpeg" />
    <v-divider class="mb-2" />
    <v-card-text>
      <personal-details-section />
      <v-divider class="mt-3 mb-3" />
      <social-networks-section class="social" />
      <v-divider class="social mt-3 mb-3" />
      <developer-wars-section />
      <v-divider class="mt-3 mb-3" />
      <download-c-v-section />
    </v-card-text>
  </v-card>
</template>

<script>
import SocialNetworksSection from "./SideSections/SocialNetworksSection.vue";
import DownloadCVSection from "./SideSections/DownloadCVSection.vue";
import PersonalDetailsSection from "./SideSections/PersonalDetailsSection.vue";
import DeveloperWarsSection from "./SideSections/DeveloperWarsSection.vue";

export default {
  name: "LeftCard",
  components: {
    DeveloperWarsSection,
    PersonalDetailsSection,
    DownloadCVSection,
    SocialNetworksSection
  }
};
</script>

<style scoped>
@media print {
  .social {
    display: none;
  }
}
</style>
