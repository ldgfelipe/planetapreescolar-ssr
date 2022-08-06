import createApp from './app.js'

import authService from './service.auth.js'

const appConfig = {"apiKey":"AIzaSyB8GyvM9PdvjufoAyEZv2uRQLVhVQM-Z-o","authDomain":"educadorafirebase.firebaseapp.com","databaseURL":"https:\u002F\u002Feducadorafirebase.firebaseio.com","projectId":"educadorafirebase","storageBucket":"educadorafirebase.appspot.com","messagingSenderId":"4922270561","appId":"1:4922270561:web:d12332e6277b143e5c9b20","measurementId":"G-E7Y6JTQG51"}

export default async (ctx, inject) => {
  const { firebase, session } = await createApp(appConfig, ctx)

  let servicePromises = []

  if (process.server) {
    servicePromises = [
      authService(session, firebase, ctx, inject),

    ]
  }

  if (process.client) {
    servicePromises = [
      authService(session, firebase, ctx, inject),

    ]
  }

  const [
    auth
  ] = await Promise.all(servicePromises)

  const fire = {
    auth: auth
  }

    inject('fireModule', firebase)
    ctx.$fireModule = firebase

  inject('fire', fire)
  ctx.$fire = fire
}

function forceInject (ctx, inject, key, value) {
  inject(key, value)
  const injectKey = '$' + key
  ctx[injectKey] = value
  if (typeof window !== "undefined" && window.$nuxt) {
  // If clause makes sure it's only run when ready() is called in a component, not in a plugin.
    window.$nuxt.$options[injectKey] = value
  }
}