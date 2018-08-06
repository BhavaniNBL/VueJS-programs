<template>
<div id="hello">
    <form id='frm'>
    <label>SignUp Form</label><br /><br />    
    <input type='text' id='name' value='name'  v-model='name'/><br/><br >

    <!-- <input type='text' id='email' value='email' placeholder='enterEmail' v-model='email'/><br/><br/>
    <input type='password' id='password' value='password' placeholder='enterPassword' v-model='password'/><br/><br/>
    <input type='number' id='mobile' value='mobile' placeholder='enterMobileNo' v-model='mobileno'/><br/><br/>
    <input type='textarea' id='addr' value='addr' placeholder='enterAddress' v-model='address'/><br/><br/>
    <button type='button' v-on:click='register()'>Submit</button> -->
    </form>
    </div>
</template>

<script>
export default {
  name: 'component2',
  data () {
      return {
        name: '',
        email: '',
        password: '',
        mobileno: '',
        address: ''
      
      }
  },
  methods: {
      register(){
          alert( 'registred successfully');
      }
  },
 
 }
</script>
<style>
#frm {
    width: 500px;
            position: absolute;
            height: 290px;
            background-color: grey;
            margin-top: 50px;
            margin-left: 200px;
            margin-right: 50px;
            margin-bottom: 50px;
 }
 label{
     color: white;
 }
</style>