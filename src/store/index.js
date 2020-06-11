import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    frutas : [
     {nombre:'platano', cantidad:0},
     {nombre:'frutilla', cantidad:0},
     {nombre:'naranja', cantidad:0}
  ]
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
