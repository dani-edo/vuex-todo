<template>
  <v-app>
    <v-content>
      <v-container>
        <v-row>
          <v-col>
            <FrontPage />
          </v-col>
          <v-col>
            <BackPage />
          </v-col>
        </v-row>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import FrontPage from "./components/FrontPage";
import BackPage from "./components/BackPage";

export default {
  name: "App",

  components: {
    FrontPage,
    BackPage
  },

  data: () => ({
    //
  })
};
</script>
