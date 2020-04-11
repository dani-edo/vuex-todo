<template>
  <v-app>
    <v-content>
      <FrontPage />
    </v-content>
  </v-app>
</template>

<script>
import FrontPage from "./components/FrontPage";

export default {
  name: "App",

  components: {
    FrontPage
  },

  data: () => ({
    //
  })
};
</script>
