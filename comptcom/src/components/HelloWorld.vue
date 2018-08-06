<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <ol>
    <component1 />
    </ol>
  </div>
</template>

<script>
import Component1 from './Component1'
export default {
  name: 'HelloWorld',
  components: {
    Component1
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
