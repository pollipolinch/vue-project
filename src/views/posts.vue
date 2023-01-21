<template>
    <div><input v-model="title" type="textarea"><input v-model="body" type="text">
        <button @click="Change">Изменить</button>
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
    id:''
}
},
methods:{
    edit(object){
        this.title = object.title
        this.body = object.body
        this.id= object.id
    },
    delet(object){
        let deleteObject = this.tableData.find((ell)=> ell.id === object.id)
        console.log(deleteObject)
        this.tableData.splice((deleteObject.id-1), 1);
    },
    Change(){
let newObject= this.tableData.find((ell=>ell.id == this.id))
newObject.title = this.title
newObject.body = this.body
this.title = ''
this.body = ''

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