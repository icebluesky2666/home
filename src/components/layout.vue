<template>
  <div class="layout">
    <div class="do">
      <button class="button-click" @click="addItem">add</button>
      <button class="button-click" @click="sendOpen">axios</button>
    </div>
    <ul>
      <li v-for="(item,i) in itemList" :key="i">
        <div class="item">{{item}}</div>
      </li>
    </ul>
  </div>
</template>

<script>
import { requestLogin } from '../api/user'
export default {
  name: "layout",
  props: ["itemList"],
  data() {
    return {};
  },
  methods: {
    addItem: function() {
      this.$emit("changeHidden");
    },
    sendOpen: function(){
      requestLogin({ 'name': 'linjinze999' }).then(data => console.log('data=>',data))
    }
  }
};
</script>

<style scoped lang="less">
.layout {
  width: 80%;
  position: absolute;
  top: 0;
  right: 0;
  padding: 10px;
  padding-bottom: 0;
  background: #eee;
  box-sizing: border-box;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  .do {
    width: 100%;
    height: 100px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: row;
    flex-grow:0;
    flex-shrink: 0;
    .button-click {
      padding: 12px 20px;
      background: #fff;
      color: #606266;
      border: 1px solid #dcdfe6;
      border-radius: 4px;
      outline: none;
    }
    .button-click:hover {
      color: #409eff;
      border-color: #c6e2ff;
      background-color: #ecf5ff;
    }
    .button-click:focus {
      color: #409eff;
      border-color: #c6e2ff;
      background-color: #ecf5ff;
    }
  }
  ul {
    flex: 1;
    width: 100%;
    list-style: none;
    overflow: auto;
    li {
      .item {
        width: 100%;
        background: #fff;
        height: 100px;
        text-align: center;
      }
    }
  }
}
</style>
