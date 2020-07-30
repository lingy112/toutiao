<template>
  <div class="home">
    <!-- 主页标题 header 的开始 -->
    <div class="tt-home-header">
      <span>simon-头条</span>
    </div>
    <!-- 主页标题 header 的结束 -->
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  }
}
</script>
<style lang="less" scoped> 
  .tt-home-header {
   height: 30px;
   line-height: 30px;
   background: #000;
  span {
  color: #fff;
  margin-left: 50px;
  }
}
</style>