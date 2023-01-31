<template>
    <h1>Выбрано элементов: {{ counter }}</h1><button @click="count">Посчитать</button>
    <div @click="sortAlbums"> сделать сортировку</div>
    <select v-model="activePoint">
        <option value="">--Please choose an option--</option>
        <option value="inactive">inactive</option>
        <option value="active">active</option>
      </select>
    <div v-for="ell of getAlbums">
    <input v-model="ell.active" type="checkbox"> {{ ell.id }} {{ ell.title }}</div>
   
</template>
<script>
import {mapActions,mapGetters } from 'vuex'
export default{
    data(){
        return{
          albums:[],
          counter: 0,
          activePoint:''
    
        }
    },
    computed: mapGetters(['getAlbums']),
    watch:{
        activePoint(){
            if(this.activePoint == 'active'){
                this.$router.push({name:'albums', query:{status:'active'}})
            console.log(this.activePoint)
            } else if(this.activePoint == 'inactive'){
                this.$router.push({name:'albums', query:{status:'inactive'}})
            console.log(this.activePoint)
            }
        }
    },
    methods:{
        sortAlbums(){
        this.$router.push({name:'albums', query:{sort:'ask'}})
      },
        count(){
    this.counter = 0
for(let i = 0; i< this.getAlbums.length; i++){
    if(this.getAlbums[i].active == true){
        this.counter++
    }
}
for(let k=0;k<this.getAlbums.length;k++){
    this.getAlbums[k].active = false
}
}
    },
   async mounted(){
      await this.$store.dispatch('fetchAlbums')
      if(this.$route.query.status === 'active'){
        this.activePoint = 'active'
      } else if(this.$route.query.status === 'inactive'){
        this.activePoint = 'inactive'
      }
    },
   
}
</script>