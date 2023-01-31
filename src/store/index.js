import { createApp } from 'vue'
import { createStore } from 'vuex'

const store = createStore({
  state () {
    return {
      count: 0,
      arr:[],
      tableData:[],
      albums:[],
    }
  },
  mutations: {
    increment (state,payload) {
      state.count = state.count + payload
    },
    updatePosts(state,posts){
state.tableData= posts
    },
    updateAlbums(state,newAlbums){
state.albums = newAlbums
    }
  },
  actions:{
    fetchTodos(state,payload){
      console.log(payload)
      fetch('url')
      .then((res)=>{
        state.arr = res
      })
    },
    async fetchTable(ctx){
      const res = await fetch('https://jsonplaceholder.typicode.com/posts')
    const posts = await res.json();
          ctx.commit('updatePosts',posts)
    },
    async fetchAlbums(ctx){
    const res = await fetch("https://jsonplaceholder.typicode.com/albums")
    const albums = await res.json();
            let newAlbums = albums.map(function(current) {
              let object = Object.assign({}, current);
              object.active = false;
              return object;
          })
    ctx.commit('updateAlbums',newAlbums)
  }},
  getters:{
    getPosts(state){
      return state.tableData
    },
    getAlbums(state){
      return state.albums
    }
  }
})

export default store