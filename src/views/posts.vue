<template>
    <div>  
        <div v-if="isModalVisible" class="modal"><input class="input" v-model="title" type="textarea">
            <input class="input" v-model="body" type="text">
        <button class="button" @click="Change">Изменить</button></div>
   <Table @delete="delet" @edit="edit" :data="tableData"></Table></div>
</template>
<script>
import Table from '../components/able.vue'
export default{
    components:{
Table,
    },
data(){
return{
    tableData:[],
    title:'',
    body:'',
    id:'',
    isModalVisible: false,
}
},
methods:{
    edit(object){
        this.isModalVisible= true
        this.title = object.title
        this.body = object.body
        this.id= object.id
    },
    delet(object){
        let deleteObject = this.tableData.findIndex((ell)=> ell.id === object.id)
        console.log(deleteObject)
        this.tableData.splice(deleteObject, 1);
    },
    Change(){
let newObject= this.tableData.find((ell=>ell.id == this.id))
newObject.title = this.title
newObject.body = this.body
this.title = ''
this.body = ''
this.isModalVisible= false

    }
},
mounted(){
    fetch('https://jsonplaceholder.typicode.com/posts')
          .then(response => response.json())
          .then((json) =>{
            this.tableData = json
       })
}
}
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