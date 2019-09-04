<template>
  <v-card>
    <v-img
      v-show="!hover"
      id="profileimage"
      src="moshe.jpeg"
      @mouseover="mouseover"
    />
    <div
      v-show="hover"
      :style="{ backgroundColor: 'white', height: `${h}px` }"
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
import bodymovin from "lottie-web/build/player/lottie.min";

export default {
  components: {
    DeveloperWarsSection,
    PersonalDetailsSection,
    DownloadCVSection,
    SocialNetworksSection
  },
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
      500
    );
  },
  data() {
    return {
      h: 0,
      hover: false,
      animation: null
    };
  },
  methods: {
    mouseover() {
      this.h = document.querySelector("#profileimage").offsetHeight;
      this.animation.play();
      this.hover = true;
    }
  }
};
</script>

<style scoped></style>
