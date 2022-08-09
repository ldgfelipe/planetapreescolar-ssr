export const actions = {
  nuxtServerInit ({ commit }, { req }) {
  var configInit={
      url:process.env.baseUrl
  }
   
  commit('cargaIniserver',configInit)
       },
  }