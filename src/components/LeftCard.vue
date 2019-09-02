<template>
  <v-card>
    <v-img
      v-if="!hover"
      src="moshe.jpeg"
      @mouseover="hover = true"
      height="320px"
    />
    <div
      v-show="hover"
      style="background-color:white; height:320px"
      id="profile"
      @mouseleave="hover = false"
    />
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
import bodymovin from "lottie-web";

export default {
  mounted() {
    bodymovin.loadAnimation({
      container: document.getElementById("profile"),
      path: `bicycle.json`,
      renderer: "svg",
      loop: true,
      autoplay: true
    });
  },
  methods: {
    log(t) {
      console.log(t);
    }
  },
  name: "LeftCard",
  data() {
    return {
      hover: false
    };
  },
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
