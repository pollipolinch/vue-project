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
    name: '',
    password: '',
    visible: false,
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