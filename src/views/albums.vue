<template>
    <h1>Выбрано элементов: {{ counter }}</h1><button @click="count">Посчитать</button>
    <div @click="sortAlbums"> сделать сортировку</div>
    <select v-model="activePoint">
        <option value="">--Please choose an option--</option>
        <option value="inactive">inactive</option>
        <option value="active">active</option>
      </select>
    <div v-for="ell of newAlbums">
    <input v-model="ell.active" type="checkbox"> {{ ell.id }} {{ ell.title }}</div>
   
</template>
<script>
export default{
    data(){
        return{
          albums:[],
          counter: 0,
          newAlbums:[],
          activePoint:''
    
        }
    },
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
for(let i = 0; i< this.newAlbums.length; i++){
    if(this.newAlbums[i].active == true){
        this.counter++
    }
}
for(let k=0;k<this.newAlbums.length;k++){
    this.newAlbums[k].active = false
}
},
        getAlboms(){
        fetch("https://jsonplaceholder.typicode.com/albums")
        .then(response => response.json())
            .then((json) =>{
              this.newAlbums = json.map(function(current) {
                let object = Object.assign({}, current);
                object.active = false;
                return object;
            })
              if(this.$route.query.sort === 'ask'){
               fetch("https://jsonplaceholder.typicode.com/albums?sort=ask").then((res)=>{
                 this.newAlbums = res
               })
              }else{
                fetch("https://jsonplaceholder.typicode.com/albums?sort='desk")
              }
      })
}
    },
   async mounted(){
      await this.getAlboms()
      if(this.$route.query.status === 'active'){
        this.activePoint = 'active'
      } else if(this.$route.query.status === 'inactive'){
        this.activePoint = 'inactive'
      }
    },
   
}
</script>