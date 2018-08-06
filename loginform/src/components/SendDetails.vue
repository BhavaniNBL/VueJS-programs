<template>
  <div>
  <p v-if='edit1'>{{ nam }}</p>
  <p v-if='edit2'>{{ emai }}</p>
  </div>
</template>

<script>
export default {
    name:'SendDetails',
 props:['nam','emai','edit1','edit2'],
}
</script>