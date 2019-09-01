<template>
  <v-toolbar app>
    <div class="mr-4 chmod">
      chmod +x ./moshe.sh
    </div>

    <v-spacer />
    <v-toolbar-items>
      <v-btn
        v-for="item in items"
        :key="item.name"
        large
        flat
        class="ml-3 mr-3"
        @click="$vuetify.goTo(item.id, {})"
      >
        {{ item.name }}
      </v-btn>
    </v-toolbar-items>
    <v-spacer />
    <div>
      <v-switch
        v-model="darkMode"
        color="grey darken-2"
        hide-details
        prepend-icon="wb_sunny"
        append-icon="brightness_3"
      />
    </div>
  </v-toolbar>
</template>

<script>
export default {
  name: "MosheToolbar",
  data() {
    return {
      items: [
        { name: "about me", id: "#about-me" },
        { name: "open source", id: "#open-source" },
        { name: "technical skills", id: "#technical-skills" }
      ],
      darkMode: false
    };
  },
  watch: {
    darkMode(newValue) {
      this.$emit("darkMode", newValue);
    }
  }
};
</script>

<style scoped>
.chmod {
  /* font-family: monospace; */
  font-family: Monaco, Arial, Helvetica, sans-serif;
  font-size: 20px;
  line-height: 20px;
  position: relative;
}

.chmod::after {
  content: "";
  position: absolute;
  top: 0;
  right: -20px;
  background-color: #00c853;
  width: 10px;
  height: 20px;
  -webkit-animation: blink 1s step-end infinite;
  animation: blink 1s step-end infinite;
}

@-webkit-keyframes blink {
  0% {
    opacity: 1;
  }
  50% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

@keyframes blink {
  0% {
    opacity: 1;
  }
  50% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>
