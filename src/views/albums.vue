<template>
    <h1>Выбрано элементов: {{ counter }}</h1><button @click="count">Посчитать</button>
   <div v-for="ell of newAlbums">
 <input v-model="ell.active" type="checkbox"> {{ ell.id }} {{ ell.title }}</div>
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
    },
    mounted(){
        fetch("https://jsonplaceholder.typicode.com/albums")
          .then(response => response.json())
          .then((json) =>{
            this.albums = json
       })
    },
   
}
</script>