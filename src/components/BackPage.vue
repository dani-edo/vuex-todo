<template>
  <div>
    <h1 class="d-inline-block text-center mb-5">Posts</h1>
    <v-btn
      color="error"
      class="d-inline-block float-right mb-3 ml-auto"
      @click="deleteFirebaseDatas()"
    >
      Clear All
    </v-btn>
    <v-card
      color="#385F73"
      dark
      v-for="post in posts"
      :key="post.key"
      class="mb-3"
    >
      <v-card-title class="headline">{{ post.name }}</v-card-title>

      <v-card-subtitle>{{ post.key }}</v-card-subtitle>

      <v-card-text>{{ post.text }}</v-card-text>

      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="red" @click="deleteFirebaseDatas(post.key)">
          <v-icon>clear</v-icon>
        </v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  computed: {
    ...mapState(["posts"])
  },
  methods: {
    ...mapActions(["deleteFirebaseData"]),
    deleteFirebaseDatas(key) {
      this.deleteFirebaseData(key);
    }
  }
};
</script>

<style lang="scss" scoped></style>
