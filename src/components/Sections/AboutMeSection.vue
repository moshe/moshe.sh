<template>
  <m-section title="About Me">
    <template v-slot:append-title>
      <div style="text-align:center">
        <div class="hashtag" v-for="hashtag in hashtags" :key="hashtag">
          #{{ hashtag }}
        </div>
      </div>
    </template>
    My name is Moshe, I love to code, from <strong>deployment</strong> scripts
    to database <strong>admin UI</strong> and
    <strong>mobile applications</strong>. <br />In the last four and a half
    years, I worked at <a href="https://forter.com">Forter</a> as a all-over
    team member (CI/CD, Deployments, ETLs, Backend), team leader (data
    engineering, data science, and backend), and internal tools developer.<br />I
    served in an enterprise SRE team of an elite branch in the 8200 alumni.
    <br />
    <br />
    Whether you need a fast prototype of a product, speed up your CI environment
    or build an internal tool to boost your employee work, drop me a line and
    let's chat 🙂
  </m-section>
</template>

<script>
import MSection from "../Base/MSection.vue";

export default {
  name: "AboutMeSection",
  components: { MSection },
  data() {
    return {
      hashtags: [
        "geek",
        "maker",
        "freelance",
        "team_player",
        "manager",
        "devops",
        "elasticsearch_expert",
        "UI/UX",
        "data_pipelines",
        "architecture",
        "real_time",
        "tel_aviv"
      ]
    };
  }
};
</script>

<style scoped>
.hashtag {
  color: #42a5f5;
  display: inline;
  margin-right: 5px;
  font-weight: 500;
}
</style>
