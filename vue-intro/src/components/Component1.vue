<template>
<div id="hello">
    <button @click='register()'><h1>{{ msg }}</h1></button>
      <Component2/> 
    </div>
</template>

<script>
import Component2 from './Component2'
export default {
  name: 'component1',
   components: {
    Component2
  },
   props: ['msg'],

 methods: {
   register() {
     <Component2/>;
   }
 }
  
}
</script>
