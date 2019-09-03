<template>
  <v-card>
    <v-img
      v-if="!hover"
      src="moshe.jpeg"
      @mouseover="
        animation.play();
        hover = true;
      "
      height="320px"
    />
    <div
      v-show="hover"
      style="background-color:white; height:320px"
      id="profile"
      @mouseleave="
        animation.stop();
        hover = false;
      "
    />
    <v-divider class="mb-2" />
    <v-card-text>
      <personal-details-section />
      <v-divider class="no-print mt-3 mb-3" />
      <social-networks-section class="no-print" />
      <v-divider class="mt-3 mb-3" />
      <developer-wars-section />
      <v-divider class="mt-3 mb-3 no-print" />
      <download-c-v-section class="no-print" />
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
    setTimeout(
      () =>
        (this.animation = bodymovin.loadAnimation({
          container: document.getElementById("profile"),
          path: `bicycle.json`,
          renderer: "svg",
          loop: true,
          autoplay: false
        })),
      1500
    );
  },
  data() {
    return {
      hover: false,
      animation: null
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

<style scoped></style>
