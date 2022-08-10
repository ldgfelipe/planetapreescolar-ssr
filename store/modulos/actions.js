export const actions = {
  nuxtServerInit ({ commit }, { req }) {
    console.log('nuxtServerInit')
      var configInit={

          }
          commit('cargaIniserver',configInit)
    },
  onAuthStateChangedAction(ctx){
          console.log('onAuthStateChangedAction')
    }
  }
