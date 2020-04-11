<template>
  <div>
    <h1 class="text-center mb-5">Posts</h1>
    <v-card
      color="#385F73"
      dark
      v-for="(post, index) in posts"
      :key="index"
      class="mb-3"
    >
      <v-card-title class="headline">{{ post.name }}</v-card-title>

      <v-card-subtitle>{{ post.time }}</v-card-subtitle>

      <v-card-text>{{ post.text }}</v-card-text>

      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="red" @click="removePost(index)">
          <v-icon>clear</v-icon>
        </v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";

export default {
  computed: {
    ...mapState(["posts"])
  },
  methods: {
    ...mapMutations(["REMOVE_POST"]),
    removePost(post) {
      this.REMOVE_POST(post);
    }
  }
};
</script>

<style lang="scss" scoped></style>
