import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex, axios)

export default new Vuex.Store({
  state: {
    posts: []
  },
  actions: {
    loadDatas ({commit}) {
      axios
        .get('https://reqres.in/api/unknown')
        .then(data => {
          console.log(data.data.data)
          let posts = data.data.data
          commit('SET_POSTS', posts)
        })
        .catch(error => {
          console.log(error)
        })
    },
    loadUsers ({commit}) {
      axios
        .get('https://reqres.in/api/users?page=1')
        .then(data => {
          console.log(data.data.data)
          let posts = data.data.data
          commit('SET_POSTS', posts)
        })
        .catch(error => {
          console.log(error)
        })
    }
  },
  mutations: {
    SET_POSTS (state, posts) {
      state.posts = posts
    }
  }
})
