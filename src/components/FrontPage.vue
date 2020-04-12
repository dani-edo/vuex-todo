<template>
  <v-row class="text-center">
    <v-col cols="12">
      <v-img
        :src="require('../assets/logo.png')"
        class="my-3"
        contain
        height="100"
      />
    </v-col>

    <v-col class="mb-4">
      <h1 class="display-2 font-weight-bold mb-3">
        Vuex todo list
      </h1>

      <v-form
        ref="form"
        v-model="valid"
        lazy-validation
        @submit.prevent="onSubmit"
      >
        <v-text-field
          v-model="newPost.name"
          :counter="10"
          :rules="rules.nameRules"
          label="Name"
          required
        ></v-text-field>

        <v-text-field
          v-model="newPost.text"
          :rules="rules.textRules"
          label="Post"
          required
        ></v-text-field>

        <v-btn :disabled="!valid" color="success" class="mr-4" type="submit">
          Submit
        </v-btn>

        <v-btn color="error" class="mr-4" @click="reset">
          <v-icon>clear_all</v-icon>
        </v-btn>
      </v-form>
    </v-col>
  </v-row>
</template>

<script>
import { mapActions } from "vuex";

export default {
  data: () => ({
    valid: false,
    rules: {
      nameRules: [
        v => !!v || "Name is required",
        v => (v && v.length <= 10) || "Name must be less than 10 characters"
      ],
      textRules: [
        v => !!v || "Post is required",
        v => (v && v.length <= 300) || "Post must be less than 300 characters"
      ]
    },
    email: "",
    newPost: {
      name: "",
      text: ""
    }
  }),

  methods: {
    validate() {
      return this.$refs.form.validate();
    },
    reset() {
      this.$refs.form.reset();
    },
    ...mapActions(["sendFirebaseData"]),
    capitalize(str) {
      const regex = /(^|\s)[a-z]/g;
      return str.replace(regex, function upperCase(e) {
        return e.toUpperCase();
      });
    },
    addZero(i) {
      if (i < 10) {
        i = "0" + 1;
      }
      return i;
    },
    onSubmit() {
      if (this.validate()) {
        const date = new Date();
        const newPost = {
          name: this.capitalize(this.newPost.name),
          text: this.newPost.text,
          time:
            this.addZero(date.getHours()) +
            ":" +
            this.addZero(date.getMinutes()) +
            " - " +
            date.getDate() +
            "/" +
            date.getMonth() +
            "/" +
            date.getFullYear()
        };
        this.sendFirebaseData(newPost);
        this.reset();
      }
    }
  }
};
</script>
