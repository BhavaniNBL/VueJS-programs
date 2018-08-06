<template>
<div id="hello">
    <h1>{{ message }}</h1>
    <h2>{{ firstname }}</h2>
    <h2>{{ lastname }}</h2>
    <div v-html="htmlcontent"></div>
    <h1>{{ myDetails() }}</h1>
    <!-- <img :src='imgsrc' width='300px'  height='200px' /> -->
    <Component1 msg = 'Component1-2' />
    </div>
</template>

<script>
import Component1 from './Component1'
export default {
  name: 'HelloWorld1',
  components: {
    Component1
  },
  data () {
    return {
      message: 'HelloWorld',
      firstname: 'Lakshmi',
      lastname: 'Bhavani',
      htmlcontent: '<div><h1>Naralasetty</h1></div>',
      // imgsrc:
      //   'https://img03.carview.co.jp/cvmaterials/modelimages/gallery/26/213040.jpg?width=572&height=352&type=resize'
    }
  },
  methods: {
    myDetails () {
      return ' I am ' + this.firstname + ' ' + this.lastname
    }
  }
}
</script>
