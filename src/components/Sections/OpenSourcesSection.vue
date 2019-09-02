<template>
  <m-section title="Open Source Projects">
    <div v-for="project in projects" :key="project.name" class="project">
      <a :href="project.link" class="subheading" v-text="project.name" />
      <v-chip
        v-for="chip in project.chips"
        :key="chip.name"
        class="chip"
        small
        text-color="white"
        :color="chip.color + colorSuffix"
      >
        {{ chip.name }}
      </v-chip>
      <div v-if="project.note" class="caption grey--text">
        {{ project.note }}
      </div>
      <div v-for="line in project.desc" :key="line">
        {{ line }}
      </div>
    </div>
  </m-section>
</template>

<script>
import MSection from "../Base/MSection.vue";

const chips = {
  python: { name: "Python", color: "indigo" },
  vueJs: { name: "VueJS", color: "red" },
  js: { name: "Javascript", color: "green" },
  reactNative: { name: "React Native", color: "red" },
  firebase: { name: "Firbase", color: "orange" },
  elasticsearch: { name: "ElasticSearch", color: "pink" }
};

export default {
  components: { MSection },
  data() {
    return {
      colorSuffix: " lighten-1",
      projects: [
        {
          name: "Kipp - Secure Payments App",
          note: "Discontinued project",
          desc: [
            "POC for a simple and secure payments app using One-Time-Code to initiate the transaction"
          ],
          link: "https://github.com/ikimia/kipp",
          chips: [chips.reactNative, chips.firebase]
        },
        {
          name: "Elasticsearch Comrade",
          note: "Work in progress",
          desc: ["Elasticsearch admin panel built for ops and monitoring"],
          link: "https://github.com/moshe/elasticsearch-comrade",
          chips: [chips.python, chips.vueJs, chips.js]
        },
        {
          name: "Tomato Bot",
          desc: ["Gain faster feedback for your tests, in GitHub"],
          link: "https://tomato-bot.com",
          chips: [chips.python, chips.vueJs, chips.js]
        },
        {
          name: "ElasticSearch Loader",
          desc: [
            "A tool for batch loading data files (json, parquet, csv, tsv) into ElasticSearch"
          ],
          link: "https://github.com/moshe/elasticsearch_loader",
          chips: [chips.python, chips.elasticsearch]
        },
        {
          name: "tplot",
          desc: ["Easy to use plotting tool for the terminal"],
          link: "https://github.com/moshe/tplot/",
          chips: [chips.js]
        }
      ]
    };
  }
};
</script>

<style>
.chip {
  font-size: 10px !important;
  height: 16px !important;
}

.v-chip .v-chip__content {
  padding: 0 6px !important;
  line-height: 6px;
}

.project:not(:last-child) {
  margin-bottom: 20px;
}

.theme--dark.application .project a {
  color: #4fc3f7 !important;
}

.theme--light.application .project a {
  color: #0288d1 !important;
}
</style>
