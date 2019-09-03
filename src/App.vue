<template>
  <div id="app">
    <v-app :dark="darkMode">
      <v-content>
        <m-toolbar @darkMode="x => (this.darkMode = x)" />
        <v-container fluid>
          <v-layout row wrap justify-center>
            <v-flex xs10 sm6 md4 lg3 xl3 class="pa-4">
              <left-card class="elevation-24" />
            </v-flex>
            <v-flex xs12 sm12 md8 lg8 xl7 class="pa-4">
              <main-card class="elevation-24" />
            </v-flex>
          </v-layout>
        </v-container>
      </v-content>
      <v-footer dark height="auto">
        <v-card
          flat
          tile
          style="width:100%"
          class="primary lighten-1 white--text text-xs-center"
        >
          <v-card-text class="white--text pt-0">
            Built with
            <a href="https://vuetifyjs.com" style="color:white!important"
              >Vuetify</a
            >,
            <a href="https://vuejs.org" style="color:white!important">VueJS</a>,
            <a
              href="https://lottiefiles.com/ulvosama"
              style="color:white!important"
            >
              ulvosama
            </a>
            and
            <a href="https://useanimations.com" style="color:white!important">
              useAnimations
            </a>
          </v-card-text>
          <v-divider />
          <v-card-text class="white--text">
            &copy;2019 — <strong>Moshe Zada</strong>
          </v-card-text>
        </v-card>
      </v-footer>
    </v-app>
  </div>
</template>

<script>
import MToolbar from "./components/Base/MToolbar.vue";
import LeftCard from "./components/LeftCard.vue";
import MainCard from "./components/MainCard.vue";

export default {
  name: "app",
  components: {
    MainCard,
    LeftCard,
    MToolbar
  },
  data() {
    return {
      darkMode: false
    };
  }
};
</script>

<style>
.theme--light.application {
  background: #eeeeee;
}

.theme--light.v-toolbar {
  background: #e0e0e0;
}

.theme--light.v-sheet {
  background: #f5f5f5;
}

.theme--dark.application a {
  text-decoration: none;
  color: #4dd0e1 !important;
}

.theme--light.application a {
  text-decoration: none;
  color: #0097a7 !important;
}
.text-center {
  text-align: center;
}
@media print {
  @page {
    margin: 0;
  }
  .v-toolbar {
    display: none;
  }

  .no-print {
    display: none;
  }

  .v-content {
    padding: 0px !important;
  }

  .v-image__image--cover {
    content: url("https://moshe.sh/moshe.jpeg");
    z-index: 10000;
  }

  .elevation-24 {
    box-shadow: none !important;
    border: 1px solid #d7d7d7 !important;
  }
}
</style>
