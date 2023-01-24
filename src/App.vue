<template>
  <div id="App">
    <h1>Введите логин и пароль</h1>
    <input v-model="name" type="text" placeholder="Sara">
    <input v-model="password" type="text" placeholder="password124">
    <button @click="submit">Submit</button>
    <h1 v-if="visible">Неправильный логин или пароль</h1>
    <button @click="go">перейти на albums</button>
    <router-view></router-view>
  </div>
</template>
<script>
export default{
  name: 'App',
data(){
  return{
    name: 'Sara',
    password: 'password124',
    visible: false,
  }
},
  watch:{
    name:{
      handler(newVal,oldValue){
        fetch(`https://jsonplaceholder.typicode.com/albums?term=${newVal}`)
            .then(response => response.json())
            .then((json) =>{
              this.newAlbums = json.map(function(current) {
                let object = Object.assign({}, current);
                object.active = false;
                return object;
              })
            })
      }
    }
  },
methods:{
  submit(){
    if(this.name === 'Sara' && this.password === 'password124'){
      this.$router.push('./posts')
    }else{
      this.visible=true
    }
  },
  go(){
    this.$router.push('./albums')
  }
}
}
</script>