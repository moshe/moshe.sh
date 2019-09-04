<template>
  <div>
    <section-header icon="people">Social Networks</section-header>
    <v-layout
      class="mt-2 print-only"
      row
      v-for="social of socials"
      :key="social.id"
    >
      <v-flex xs4>
        <div style="font-weight: 500">
          {{ social.id }}
        </div>
      </v-flex>
      <v-flex xs8>{{ social.username }}</v-flex>
    </v-layout>
    <v-layout class="mt-2 print-only" row>
      <v-flex xs4>
        <div style="font-weight: 500">
          {{ so.id }}
        </div>
      </v-flex>
      <v-flex xs8>{{ so.username }}</v-flex>
    </v-layout>
    <v-layout row class="text-center mt-2 no-print" wrap>
      <v-flex v-for="social in socials" :key="social.id">
        <v-btn class="elevation-6" icon :href="social.href" color="primary">
          <div
            :id="social.id"
            @mouseover="social.obj.play()"
            @mouseleave="social.obj.stop()"
            style="height: 20px;"
          />
        </v-btn>
      </v-flex>
      <v-flex>
        <v-btn class="elevation-6" icon :href="so.href" color="primary">
          <svg
            role="img"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            style="height: 20px;fill:white"
          >
            <title>{{ so.name }}</title>
            <path :d="so.d"></path>
          </svg>
        </v-btn>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
import SectionHeader from "../Base/SectionHeader.vue";
import bodymovin from "lottie-web/build/player/lottie.min";

export default {
  components: { SectionHeader },
  mounted() {
    this.socials.map(x => {
      x.obj = bodymovin.loadAnimation({
        container: document.getElementById(x.id),
        path: `${x.id}.json`,
        renderer: "svg",
        loop: true,
        autoplay: false
      });
    });
    const twitter = this.socials[1].obj;
    twitter.play();
    setTimeout(() => {
      twitter.stop();
    }, 4000);
  },
  data() {
    return {
      socials: [
        {
          id: "Github",
          href: "https://github.com/moshe",
          obj: null,
          username: "moshe"
        },
        {
          obj: null,
          id: "Twitter",
          href: "https://twitter.com/moshe_zada",
          username: "@moshe_zada"
        },
        {
          id: "Linkedin",
          href: "https://linkedin.com/in/moshe-zada",
          obj: null,
          username: "moshe-zada"
        }
      ],
      so: {
        id: "Stack Overflow",
        href: "https://stackoverflow.com/users/4540123/moshezada",
        username: "stackoverflow.com/users/4540123",
        d:
          "M15 21h-10v-2h10v2zm6-11.665l-1.621-9.335-1.993.346 1.62 9.335 1.994-.346zm-5.964 6.937l-9.746-.975-.186 2.016 9.755.879.177-1.92zm.538-2.587l-9.276-2.608-.526 1.954 9.306 2.5.496-1.846zm1.204-2.413l-8.297-4.864-1.029 1.743 8.298 4.865 1.028-1.744zm1.866-1.467l-5.339-7.829-1.672 1.14 5.339 7.829 1.672-1.14zm-2.644 4.195v8h-12v-8h-2v10h16v-10h-2z"
      }
    };
  }
};
</script>

<style scoped></style>
