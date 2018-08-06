<template>
  <div class="hello">
     <button
    v-for="tab in tabs"
    v-bind:key="tab"
    v-bind:class="['tab-button', { active: currentTab === tab }]"
    v-on:click="currentTab = tab"
  >{{ tab }}</button>
  <component
    v-bind:is="currentTabComponent"
    class="tab"
  ></component>
   <Home :Home='home'/>
   <Posts :Post='posts'/>
   <Archive :Archive='archive'/>
  </div>
</template>

// <script>
import Home from './Home'
import Posts from './Posts'
import Archive from './Archive'
export default {
  name: 'HelloWorld',
  components: {
    Home,
    Posts,
    Archive
  },
  data () {
    return {
     currentTab: 'Home',
    tabs: ['Home', 'Posts', 'Archive']
    }
  },
  computed: {
    currentTabComponent: function () {
      return 'tab-' + this.currentTab.toLowerCase()
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<!--<style scoped>
.tab-button {
  padding: 6px 10px;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  border: 1px solid #ccc;
  cursor: pointer;
  background: #f0f0f0;
  margin-bottom: -1px;
  margin-right: -1px;
}
.tab-button:hover {
  background: #e0e0e0;
}
.tab-button.active {
  background: #e0e0e0;
}
.tab {
  border: 1px solid #ccc;
  padding: 10px;
}
</style>
<!--<template>
<div>
  <button 
  v-for="tab in tabs"
    v-bind:key="tab"
    v-bind:class="['tab-button', { active: currentTab === tab }]"
    v-on:click="currentTab = tab"
  >{{ tab }}</button>
  </div>
</template>-->