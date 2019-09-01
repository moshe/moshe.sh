<template>
  <div id="app">
    <v-app :dark="darkMode">
      <v-content>
        <m-toolbar @darkMode="x=>this.darkMode = x"/>
        <v-container fluid>
          <v-layout row wrap justify-center>
            <v-flex lg1 xl1 class="hidden-md-and-down"/>
            <v-flex xs10 sm6 md4 lg3 xl3 class="pa-4">
              <left-card class="elevation-24"/>
            </v-flex>
            <v-flex xs12 sm10 md8 lg7 xl7 class="pa-4">
              <main-card class="elevation-24"/>
            </v-flex>
            <v-flex lg1 xl1 class="hidden-md-and-down"/>
          </v-layout>
        </v-container>
      </v-content>
    </v-app>
  </div>
</template>

<script>
import MToolbar from './components/Base/MToolbar.vue';
import LeftCard from './components/LeftCard.vue';
import MainCard from './components/MainCard.vue';

export default {
  name: 'app',
  components: {
    MainCard,
    LeftCard,
    MToolbar,
  },
  data() {
    return {
      darkMode: true,
    };
  },
};
</script>

<style>
  .theme--light.application {
    background: #EEEEEE;
  }

  .theme--light.v-toolbar {
    background: #E0E0E0;
  }

  .theme--light.v-sheet {
    background: #F5F5F5;
  }

  .theme--dark.application a {
    text-decoration: none;
    color: #4DD0E1 !important;
  }

  .theme--light.application a {
    text-decoration: none;
    color: #0097A7 !important;
  }
  .text-center {
    text-align: center;

}
</style>
