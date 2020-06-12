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
    // solo va a ejecutar por elemento
    Aumentar(state, index){
      state.frutas[index].cantidad ++
    },
    reiniciar(state){
      state.frutas.forEach(elemento =>{
        elemento.cantidad = 0
      })

    }

  },
  actions: {
  },
  modules: {
  }
})
