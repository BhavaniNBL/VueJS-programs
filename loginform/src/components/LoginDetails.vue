<template>
  <div>
   <p>Name :{{ Name.name }}<button  @click='value= true; edit1= !edit1;'>Send</button></p>
    <p>Email :{{ Name.email }}<button  @click='value = true;edit2= !edit2;'>Send</button></p>
    <SendDetails  v-if='value' :nam='Name.name' :emai='Name.email' :edit1='edit1' :edit2='edit2'/>
   
  </div>
</template>

<script>
 import SendDetails from './SendDetails'
export default {
  name: 'App',
  components: {
    SendDetails
  },
  props: ['Name'],
  data () {
    return {
      value: false,
      edit1: false,
      edit2: false,
    }
  },
  // methods: {
  //   beforecreate() {
  //     alert('beforecreate');
  //   },
  //   created() {
  //     alert('created');
  //   },
  //   beforeMounted() {
  //     alert('beforemounted');
  //   },
  //   mounted() {
  //     alert('mounted');
  //   },
  //    beforeUpdated() {
  //     alert('beforeupdated');
  //   },
  //   updated() {
  //     alert('updated');
  //   }
  // }
}
 </script>
