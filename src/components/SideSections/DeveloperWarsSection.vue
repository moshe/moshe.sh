<template>
  <div>
    <section-header icon="thumbs_up_down">Holy Wars</section-header>
    <v-layout class="mt-2" row v-for="line of details" :key="line.key">
      <v-flex xs9>
        <div style="font-weight: 600">{{line.options[0]}} vs {{line.options[1]}}</div>
      </v-flex>
      <v-flex xs3>{{line.options[line.chose]}}</v-flex>
    </v-layout>
  </div>
</template>

<script>
import SectionHeader from '../Base/SectionHeader';

export default {
  name: 'DeveloperWarsSection',
  components: { SectionHeader },
  data() {
    return {
      details: [
        { options: ['vim', 'emacs'], chose: 0 },
        { options: ['tabs', 'spaces'], chose: 1 },
        { options: ['absolute', 'relative import'], chose: 0 },
      ],
    };
  },
};
</script>

<style scoped>

</style>
