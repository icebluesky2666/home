<template>
  <div class="dialog">
    <ul>
      <li>
        <div class="lab">姓名：</div>
        <div>
          <input type="text" v-model="name" />
        </div>
      </li>
      <li>
        <div class="lab">爱好：</div>
        <div>
          <input type="checkbox" name="like" value="1" v-model="likes" />足球
          <input type="checkbox" name="like" value="2" v-model="likes" />篮球
          <input type="checkbox" name="like" value="3" v-model="likes" />乒乓球
        </div>
      </li>
      <li>
        <div class="lab">性别：</div>
        <div>
          <input type="radio" name="sex" value="1" v-model="sex" />男
          <input type="radio" name="sex" value="2" v-model="sex" />女
        </div>
      </li>
    </ul>
    <div class="do">
      <button @click="exit">取消</button>
      <button @click="sureAdd">确定</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "dialog",
  props: {
    msg: String
  },
  data() {
    return {
      name: "",
      likes: [],
      sex:''
    };
  },
  methods: {
    sureAdd:function(){
      //校验
      this.$emit('addItem',{name:this.name,likes:this.likes,sex:this.sex});
    },
    exit: function(){
      Object.assign(this.$data, this.$options.data());
      this.$emit('changeHidden')
    }
  },
};
</script>

<style scoped lang="less">
.dialog {
  height: 400px;
  width: 400px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  background: #eee;
  padding: 10px;
  box-sizing: border-box;
  border:1px solid #000;
  ul{
    list-style: none;
    width: 100%;
    li{
      margin:10px 0;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      flex-direction: row;
      .lab{
        width: 100px;
        text-align: center;
      }
    }
  }
  .do{
    button{
      outline: none;
      padding: 12px 20px;
      border-radius: 4px;
      
    }
  }
}
</style>
