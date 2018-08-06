<template>
  <div class="hello">
   <p>Archive</p>   
    {{ archive }}
   
  </div>
</template>

<script>
export default {
  name: 'Tab',
  data () {
      return {
          props:{
    archive: 'archive Component',
          }
      }
  }
}
</script>