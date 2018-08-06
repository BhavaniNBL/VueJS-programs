<template>
  <div class="hello">
     <p>Home</p> 
    {{ home }}
   
  </div>
</template>

<script>
export default {
  name: 'Tab',
  data () {
      return {
        props:{
    home: 'home Component',
        }
      }
  }
}
</script>