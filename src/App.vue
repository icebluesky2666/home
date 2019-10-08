<template>
  <div id="app">
    <headbody></headbody>
    <div class="content">
      <div class="con">
        <leftmenu></leftmenu>
        <layout :item-list="itemList" @changeHidden="changeHidden"></layout>
      </div>
    </div>
    <dialogs v-show="dialogStatus" @addItem="addItem" @changeHidden="changeHidden"></dialogs>
  </div>
</template>

<script>
import headbody from "./components/head.vue";
import leftmenu from "./components/leftmenu.vue";
import layout from "./components/layout.vue";
import dialogs from "./components/dialog.vue";
export default {
  name: "app",
  components: {
    headbody,
    leftmenu,
    layout,
    dialogs
  },
  data() {
    return {
      itemList: [
        {
          name: "name1",
          likes: [1, 2],
          sex: "男"
        },
        {
          name: "name1",
          likes: [1, 2],
          sex: "男"
        }
      ],
      dialogStatus:false
    };
  },
  methods: {
    addItem: function(itemMsg) {
      this.itemList.push(itemMsg);
      this.changeHidden();
    },
    changeHidden: function(){
      this.dialogStatus = !this.dialogStatus;
    }
  }
};
</script>

<style lang="less">
html,
body {
  width: 100%;
  height: 100%;
}
* {
  margin: 0;
  padding: 0;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  height: 100%;
  .content {
    padding-top: 150px;
    box-sizing: border-box;
    height: 100%;
    .con {
      width: 100%;
      height: 100%;
      position: relative;
    }
  }
}
</style>
