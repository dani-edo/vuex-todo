import Vue from "vue";
import Vuex from "vuex";
import * as firebase from "firebase/app";
import "firebase/database";

Vue.use(Vuex);

const variables = {
  state: {
    posts: [],
    postLength: null
  },
  mutations: {
    ADD_POST: (state, posts) => {
      state.posts.push(posts);
    },
    REMOVE_ALL: state => {
      state.posts = [];
    }
  },
  actions: {
    removeAll: context => {
      context.commit("REMOVE_ALL");
    },
    getFirebaseData: context => {
      context.commit("REMOVE_ALL");
      const firebaseRef = firebase.database().ref("/");
      firebaseRef.on("value", snapshot => {
        const snapVal = snapshot.val();
        if (snapVal) {
          const ObjEntries = Object.entries(snapVal);
          ObjEntries.map(snap => {
            snap[1].key = snap[0];
            context.commit("ADD_POST", snap[1]);
          });
        } else {
          console.log("value is: " + snapVal);
        }
      });
    },
    sendFirebaseData: (context, post) => {
      context.commit("REMOVE_ALL");
      const firebaseRef = firebase.database().ref(),
        firebaseKey = firebaseRef.push().key,
        updates = {};
      updates["/" + firebaseKey] = post;
      return firebaseRef.update(updates);
    },
    deleteFirebaseData: (context, key) => {
      context.commit("REMOVE_ALL");
      const firebaseDatabase = firebase.database();
      if (key) {
        firebaseDatabase.ref("/" + key).remove();
      } else {
        firebaseDatabase.ref("/").remove();
      }
    }
  },
  modules: {},
  getters: {}
};

export default new Vuex.Store(variables);
