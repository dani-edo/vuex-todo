import Vue from "vue";
import Vuex from "vuex";
import * as firebase from "firebase/app";
import "firebase/database";

Vue.use(Vuex);

const variables = {
  state: {
    posts: []
  },
  mutations: {
    ADD_POST: (state, posts) => {
      state.posts.push(posts);
    },
    REMOVE_POST: (state, index) => {
      state.posts.splice(index, 1);
    },
    REMOVE_ALL: state => {
      state.posts = [];
    }
  },
  actions: {
    addPost: (context, post) => {
      context.commit("ADD_POST", post);
    },
    removeAll: context => {
      context.commit("REMOVE_ALL");
    },
    removePost: (context, post) => {
      context.commit("REMOVE_POST", post);
    },
    getFirebaseData: context => {
      const firebaseRef = firebase.database().ref("/");
      firebaseRef.once("value").then(snapshot => {
        snapshot.val().map(snap => {
          context.commit("ADD_POST", snap);
        });
      });
    }
  },
  modules: {},
  getters: {}
};

export default new Vuex.Store(variables);
