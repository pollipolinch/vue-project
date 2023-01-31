<template>
    <div>  
        <button @click="add">Добавить в таблицу</button>
        <div v-if="isAddVisible" class="modal"><input class="input" v-model="title" type="textarea">
            <input class="input" v-model="body" type="text">
        <button class="button" @click="addItem">Добавить</button>
        </div>
        <div v-if="isModalVisible" class="modal"><input class="input" v-model="title" type="textarea">
            <input class="input" v-model="body" type="text">
        <button class="button" @click="Change">Изменить</button></div>
   <Table @delete="delet" @edit="edit" :data="getPosts"></Table></div>
</template>
<script>
import Table from '../components/able.vue'
import {mapActions,mapGetters } from 'vuex'
export default{
    components:{
       Table,
    },
    computed:
    mapGetters(['getPosts']),
     data(){
       return{
    title:'',
    body:'',
    id:'',
    isModalVisible: false,
    isAddVisible: false,
    newObj:{}
}
},
methods: mapActions(['fetchTable']),
methods:
{
    add(){
        this.isAddVisible=true
    },
    edit(object){
        this.isModalVisible= true
        this.title = object.title
        this.body = object.body
        this.id= object.id

    },
    delet(object){
        let deleteObject = this.getPosts.findIndex((ell)=> ell.id === object.id)
        console.log(deleteObject)
        this.getPosts.splice(deleteObject, 1);
      fetch( 'https://jsonplaceholder.typicode.com/posts/' + object.id, {
        method: 'DELETE',
      } ).then((res)=>{
        console.log(res)
      }).catch((e)=>{
        console.log(e)
      })
    },

  addItem(){
    this.newObj.id = this.getPosts.length+1
    this.newObj.title=this.title
    this.newObj.body= this.body
    this.getPosts.push(this.newObj)
    fetch( 'https://jsonplaceholder.typicode.com/posts/', {
        method: 'POST',
        body: JSON.stringify(this.newObj)
      } ).then((res)=>{
        console.log(res)
      }).catch((e)=>{
        console.log(e)
      })
    this.newObj={}
    this.title= ''
    this.body=''
    this.isAddVisible=false
    },

    Change(){
    let newObject= this.getPosts.find((ell=>ell.id == this.id))
    newObject.title = this.title
    newObject.body = this.body
    this.title = ''
    this.body = ''
    this.isModalVisible= false
    fetch( 'https://jsonplaceholder.typicode.com/posts/' + this.id, {
        method: 'PUT',
        body: JSON.stringify({title:this.title,body:this.body})
      } ).then((res)=>{
        console.log(res)
      }).catch((e)=>{
        console.log(e)
      })
    },
 
},
async mounted(){
 this.$store.dispatch('fetchTable')
}
};
</script>
<style>
 .modal{
    position: fixed;
    top: 100px;
    left: 300px;
    height: 300px;
    width: 700px;
    background: rgb(141, 191, 235);
    z-index: 2;
    border-radius: 30px;
  }
  .input{
    margin-left: 30px;
    margin-top: 100px;
    width: 250px;
    height: 60px;
  }
  .button{
    width: 100px;
    height: 40px;
  }
  </style>