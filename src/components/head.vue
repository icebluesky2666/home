<template>
  <div class="header">
    <img class="logo" src="../assets/logo.png" alt="">
  </div>
</template>

<script>
export default {
  name: 'headbody',
  props: {
    msg: String
  }
}
</script>

<style scoped>
  .header{
    height: 150px;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background: #fff;
    display: flex;
    justify-content: left;
    align-items: center;
    flex-direction: row;
  }
  .logo{
    height: 60px;
    margin-left: 100px;
  }
</style>
