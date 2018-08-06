<template>
  <div class="hello">
      <p>Post</p>
    {{ posts }}
   
  </div>
</template>

<script>
export default {
  name: 'Tab',
  data () {
      return {
          props:{
    posts: 'post Component',
          }
      }
  }
}
</script>