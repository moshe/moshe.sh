<template>
  <m-section title="technical skills">
    <v-layout column v-for="skill in skills" :key="skill.name" class="skill">
      <v-flex xs12>
        <v-layout align-center justify-start row>
          <v-flex xs6 md4>
            <div class="text-uppercase subheading sub">
              {{ skill.name }}
            </div>
          </v-flex>
          <v-flex>
            <v-rating
              readonly
              :dense="true"
              small
              v-model="skill.level"
              color="yellow darken-1"
              background-color="grey darken-2"
              empty-icon="$vuetify.icons.ratingFull"
            />
          </v-flex>
        </v-layout>
        <div>
          {{ skill.desc }}
        </div>
      </v-flex>
    </v-layout>
  </m-section>
</template>

<script>
import MSection from "../Base/MSection.vue";

export default {
  components: { MSection },
  data() {
    return {
      skills: [
        {
          name: "Python",
          level: 5,
          desc:
            "8 years of experience, mixed with production critical systems, web services, data ETLs, deployment and monitoring"
        },
        {
          name: "ElasticSearch",
          level: 5,
          desc:
            "Managed several production clusters in different workloads. 1.5TB/day logs cluster, 20TB cluster for a real-time web app, query optimizations, write optimizations and more"
        },
        {
          name: "VueJS",
          level: 5,
          desc:
            "Three years of experience of writing web applications using VueJs, including this CV page 🙂"
        },
        {
          name: "NodeJs",
          level: 5,
          desc:
            "Good undestanding of V8's event loop, writing backend services and performance optimizations at high-throughput low-latency systems"
        },
        {
          name: "linux",
          level: 5,
          desc:
            "Deep understandig and knowledge of the linux internals. several years of managing physical data center"
        },
        {
          name: "and more ...",
          level: 4,
          desc:
            "Docker, AWS, React Native, Jenkins, Riemann, Apache Spark, Machine Learning"
        }
      ]
    };
  }
};
</script>

<style scoped>
.skill:not(:last-child) {
  margin-bottom: 20px;
}

.theme--dark.application .sub {
  color: #4fc3f7 !important;
}

.theme--light.application .sub {
  color: #0288d1 !important;
}
</style>
