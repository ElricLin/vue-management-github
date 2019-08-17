<template>
   <div>
       <m-header></m-header>
       <side-menu></side-menu>
       <m-conent></m-conent>
   </div>
</template>

<script>
import MHeader from "./Header";
import SideMenu from "./SideMenu";
import MConent from "./Conent";
export default {
  name: 'Homepage',
  components:{
      MConent,
      SideMenu,
      MHeader
  }
}
</script>

<style scoped lang="less">

</style>
