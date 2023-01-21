<template>
  <div style="display: flex;" v-for="(object) of data">
  <div>{{ object.id }}</div><div style="margin-left:20px; width:360px">{{ object.title }}</div><div style="margin-left:60px; width: 600px;">{{ object.body }}</div>
  <button @click="edit(object)">Edit</button>
  <button @click="delet(object)">Delete</button></div>
</template>

<script>
export default {
    name: "Table",
    props:{
      data:{
        type: Array,
      }
    },
    data(){
        return{
           
            }
        },
        methods:{
        edit(object){
          this.$emit("edit",object)
        },
        delet(object){
          this.$emit("delete",object)
        }
        }
    
}
</script>
<style>

</style>