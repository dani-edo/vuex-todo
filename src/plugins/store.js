import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const variables = {
  state: {
    posts: [
      {
        name: "Dani Edo",
        text:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores fugiat eveniet quisquam porro quas unde dignissimos expedita suscipit eligendi blanditiis. Quidem eius sunt sed expedita nesciunt error temporibus impedit maxime."
      },
      {
        name: "Ucil",
        text:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores fugiat eveniet quisquam porro quas unde dignissimos expedita suscipit eligendi blanditiis. Quidem eius sunt sed expedita nesciunt error temporibus impedit maxime."
      }
    ]
  },
  mutations: {
    ADD_POST: (state, posts) => {
      state.posts.push(posts);
    },
    REMOVE_POST: (state, index) => {
      state.posts.splice(index, 1);
    }
  },
  actions: {
    addPost: (context, post) => {
      context.commit("ADD_POST", post)
    }
  },
  modules: {},
  getters: {}
};

export default new Vuex.Store(variables);
