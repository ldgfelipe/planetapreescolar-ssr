<template>
  <v-app light>
    <v-card>
    <v-toolbar dense class="morado white--text">

<router-link to="/"><v-img :src="this.$store.state.url+'/images/logos/planeta_preescolar_bco.png'"  max-width="70" ></v-img></router-link>



    </v-toolbar>
  </v-card>
 <v-row class="pa-0 ma-0">
      <v-col cols="12" md="2" class="morado white--text"> 
        <menulateral ></menulateral>
      </v-col>
      <v-col cols="10" md="10" class="pa-3 ma-0" style="background-image: url('./fondo/fondomorado.png'); background-repeat: repeat; background-size:300px; " >
        <Nuxt />
      </v-col>
    </v-row>
    <v-footer class="morado white--text">
      <span>&copy; Planetapreescolar {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
import menulateral from '~/components/menus/menuslateral.vue'
export default {

  data () {
    return {
      url:"",
    }
  },
  created(){

},
components:{
  menulateral
}
}
</script>
