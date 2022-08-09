<template>
<div>
   <v-list class="morado">
    
      <v-list-item-group
        v-model="selectedItem"
        color="primary"
      >
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          @click="linkgoto(item.link)"
        >
          <v-list-item-icon>
            <v-icon class="white--text" v-text="item.icon"></v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title  class="white--text" v-text="item.text"></v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list-item-group>
    </v-list>
</div>
</template>
<script>
  export default {
    data () {
      return {
        selectedItem: 0,
            items: [
                { text: 'Inicio', path:'/', icon: 'mdi-home', link:"/" },
                { text: 'Recomendaciones', path:'/recomendaciones', icon: 'mdi-check', link:"/recomendaciones" },
                { text: 'Planeaciones', path:'/planeaciones', icon: 'mdi-book', link:"planeaciones" },
            ],
        }
      },
      created(){
        this.buscaposicion()
      },
      methods:{
        linkgoto(p){
            this.$router.push(p)
        },
        buscaposicion(){
            var np=0
           this.items.map((p)=>{
             
            if(p.path === this.$router.history.current.fullPath){
                this.selectedItem=np
            }
                np=np+1
           })
        }
      }
    
  }
</script>