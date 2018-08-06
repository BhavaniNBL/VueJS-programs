<template>
<div>
<div>
  <h1>Create New Todo</h1>
  <input v-model='newTodo' placeholder='todo item'/>
  <button v-on:click='add()'>Create</button>
   <button v-on:click='del()'>Remove</button> 
  
  </div>
  <h2>List</h2>
  <ul style="list-style-type:none">
    <li v-for="(todo,index) in todos" :key="index">{{ index }}: {{ todo }}</li>
    </ul>
    </div>
</template>
<script>
export default{
  name: 'Todo',
  data () {
    return { 
    todos:[],
    newTodo: ''
    }
  },
  methods: {
    add() {
      this.todos.push(this.newTodo);
      this.newTodo=''        
    },
    del(index) {
      this.todos.splice(index,1);      
    },
   
  }
}

</script>