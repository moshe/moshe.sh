<template>
  <v-card>
    <v-img src="https://avatars3.githubusercontent.com/u/7490448?s=460&v=4"></v-img>
    <v-divider class="mb-2"/>
    <v-card-text>
      <personal-details-section/>
      <v-divider class="mt-3 mb-3"/>
      <social-networks-section/>
      <v-divider class="mt-3 mb-3"/>
      <developer-wars-section/>
      <v-divider class="mt-3 mb-3"/>
      <download-c-v-section/>
    </v-card-text>
  </v-card>
</template>

<script>
import SocialNetworksSection from './SideSections/SocialNetworksSection';
import DownloadCVSection from './SideSections/DownloadCVSection';
import PersonalDetailsSection from './SideSections/PersonalDetailsSection';
import DeveloperWarsSection from './SideSections/DeveloperWarsSection';

export default {
  name: 'LeftCard',
  components: {
    DeveloperWarsSection,
    PersonalDetailsSection,
    DownloadCVSection,
    SocialNetworksSection,
  },
};
</script>

<style scoped>

</style>
