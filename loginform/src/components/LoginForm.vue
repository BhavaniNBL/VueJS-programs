<template>
  <div>
    <input type="text" placeholder="EnterName" v-model="input.name"/>
    <input type="text" placeholder="EnterEmail" v-model="input.email"/>
     <button @click='value = true'>Send</button>
    <LoginDetails v-if="value" :Name='input'/>
  </div>
</template>

<script>
import LoginDetails from './LoginDetails'
export default {
  name: 'Login',
  components: {
      LoginDetails
  },
  data () {
      return {
          input: {},
          value: false,
      }
  },
}
</script>


