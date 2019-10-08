<template>
  <div class="leftmenu">
    <ul>
      <li>菜单</li>
      <li>菜单</li>
      <li>菜单</li>
      <li>菜单</li>
      <li>菜单</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'leftmenu',
  props: {
    msg: String
  }
}
</script>

<style scoped lang="less">
  .leftmenu{
    height: 100%;
    width: 20%;
    position: absolute;
    top: 0;
    left: 0;
    background: #000;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    ul{
      list-style: none;
      width: 100%;
      li{
        width: 100%;
        height: 60px;
        text-align: center;
        line-height: 60px;
        color: #fff;
        box-sizing: border-box;
        border-bottom: 1px solid #fff;
        font-size: 18px;
      }
    }
  }

</style>
