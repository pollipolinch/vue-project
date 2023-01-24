<template>
    <h1>Выбрано элементов: {{ counter }}</h1><button @click="count">Посчитать</button>
  <div @click="sortAlbums"> сделать сортировку</div>
   <div v-for="ell of newAlbums">
     <input v-model="ell.active" type="checkbox"> {{ ell.id }} {{ ell.title }}
   </div>
 <button @click="push">Push</button>
</template>
<script>
export default{
    data(){
        return{
          albums:[],
          counter: 0,
          newAlbums:[],
    
        }
    },
    methods:{
      sortAlbums(){
        this.$router.push({name:'albums', query:{sort:'ask'}})
      },
push(){
    this.newAlbums = this.albums.map(function(current) {
let object = Object.assign({}, current);
    object.active = false;
    return object;
})
console.log(this.newAlbums);
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
      sortAlboums(arg){
        console.log(this.$route)
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
     this.sortAlboums()
    },
   
}
</script>