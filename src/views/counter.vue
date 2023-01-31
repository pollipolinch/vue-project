<template>
    <div>
        <h1>Counter - {{ counter }}</h1>
        <button @click="increment">click</button>
        <p>{{  todos }}</p>
    </div>
    
</template>
<script>
import { mapState,mapActions,mapMutations } from 'vuex'
export default {
    name: 'counter',
    computed:
       mapState({
        counter: state=>state.count,
        todos: state => state.arr
       })
    ,
    methods:{
        ...mapActions(['fetchTodos']),
        fetchTodo(){
            this.fetchTodos({date:'02.02.2022'})
        },
        increment(){
            this.$store.commit('increment',3)
        },
    

    },
     async mounted(){
        await this.fetchTodo()
    }
}
</script>
<style>

</style>
