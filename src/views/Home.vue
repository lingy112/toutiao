<!-- 主页的组件 -->
<template>
  <div class>
    <!-- 主页header的开始 -->
    <div class="tt-home-header">
      <span>simon-头条</span>
    </div>
    <!-- 主页header的结束 -->
    <!-- 主页内容开始 -->
    <div class="tt-home-content">
      <div class="home-content-left">
        <Nav></Nav>
      </div>
        <!-- 内容中间部分 -->
      <div class="home-content-middle">
        <div class="content-middle-top">
          <section class="middle-top-tab">
            <section
            @click="handleTabChange(item.type)"
            v-for="item in  tabs"
            :key="item.id"
            :class="['top-tab-item',{'active':activeTab==item.type}]" >
             {{item.text}}</section>
          </section>
        </div>
        <!-- 显示发头条的编辑部分开始 -->
        <div class="content-middle-mid">
          <section  v-show="activeTab=='tt'">
              <textarea name="" id="" cols="30" rows="10" placeholder="快来吐槽吧" v-model="content"></textarea>
              <button class="middld-bottom-left">图片</button>
              <button class="middld-bottom-right" @click.stop="publishTT">发布</button>
          </section>
          <section class="article-content" v-show="activeTab=='article'">
            <input type="text" class="article-input" v-model='title'  placeholder="请输入标题">
            <vue-editor id="editor" placeholder="请输入正文..." v-model="html_content"> </vue-editor>
            <section class="article-publish">
               <section class="piblish-title" @click="publishArticle">发布</section>
            </section>
          </section>
        </div>
        <!-- 显示发头条的编辑部分结束 -->
        <div class="content-middle-bottom"> </div>
     
      </div>
      <div class="home-content-right">右边</div>
    </div>
    <!-- 主页内容结束 -->
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';

import Nav from "../components/Nav"
//引进 富文本编辑器
import { VueEditor } from "vue2-editor";

export default {
  //import引入的组件需要注入到对象中才能使用
  components: {
    Nav,VueEditor
  },
  data() {
    //这里存放数据
    return {
      // 切换 tab; 栏的数据
      //tpye 是切换
      content:'',
      tabs:[
        {id:1,text:'发微头条',type:"tt"},
        {id:2,text:"写文章",type:"article"}
      ],
      activeTab:'article',// tt 是头条,
      html_content:'请输入正文.........',
      title:' 请输入标题'//标题
    };
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //方法集合
methods: {
    // 切换激活的 tab
   handleTabChange :function(activeTab){
      this.activeTab = activeTab ;
    },
    publishArticle:function(){
      let titile = this.title
      let html_content = this.html_content;
      if(!title||!html_content){
       
        this.$message({
          message:'警告:输入内容不能为空',
          type:"warning"
        });
        return false
      }
       $axios.post("createArticle",{
        content:html_content,
        imgs:"",
        title:title

      }).then(res=>{conosle.log(res)}).catch(err=>{console.log(err)})
      this.html_content = "";
    },
    publishTT:function(){
      let content = this.content;
      if(!content){
       
        this.$message({
          message:'警告:输入内容不能为空',
          type:"warning"
        });
        return false
      }
      this.$axios.post("/createTT",{
        content:content,
        imgs:"",
        oauth_token:"KwiVWLCxXax3rRcVsmgX7shQGhtBtXns" 

      }).then(res=>{conosle.log(res)}).catch(err=>{console.log(err)})
      this.content = "";
    },
    publishArticle:function(){
      let title = this.title ;
      let html_content = this.html_content
    }
   
  },
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {},
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {
    // //tt.linweiqin.com/api/tt/getArticles?clastid=0&&type="TT"&&page=1&&number=20
       this.$axios
      .get("http://tt.linweiqin.com/api/tt/getArticles", {
        params: {
          lastid: 0,
          type: "TT",
          page: 1,
          number: 20,
        },
      })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err));
  

   
  },
  beforeCreate() {}, //生命周期 - 创建之前
  beforeMount() {}, //生命周期 - 挂载之前
  beforeUpdate() {}, //生命周期 - 更新之前
  updated() {}, //生命周期 - 更新之后
  beforeDestroy() {}, //生命周期 - 销毁之前
  destroyed() {}, //生命周期 - 销毁完成
  activated() {}, //如果页面有keep-alive缓存功能，这个函数会触发
};
</script>

<style lang='less' scoped>
.tt-home-header {
  height: 30px;
  background-color: #000000;
  line-height: 30px;
  padding-left:5px;
  span {
    margin-left: 20px;
    color:white;
  }
}
.tt-home-content {
   width:80vw;
   margin-right: 10vw;
   margin-left: 10vw;
   display:flex;
  .home-content-left {
    flex:1;
  }

  .home-content-middle {
    flex: 3;
    margin-top: 20px;
  .content-middle-top {

    width: 500px;
    height: 50px;
     margin-bottom: 5px;
    section.middle-top-tab {
     
      display: flex;
      section.top-tab-item {
        height: 50px;
        width: 80px;
        line-height: 50px;
        text-align: center;
        font-size: 15px;
        padding-bottom: 5px;
        margin: 0 20px;
        }
        .active{
          color: skyblue;
          border-bottom: 2px solid #f1545a;
        }
      }
    }

        .content-middle-mid {
      section {
      width: 550px;
        textarea {
          width: 550px;
          height: 200px;
        }

        .middld-bottom-left {
          background: url(http://sf1-ttcdn-tos.pstatp.com/obj/ttfe/toutiao.com/image-icon.png) no-repeat 100%;
          width: 50px;
          height: 30px;
          cursor: pointer;
        }

        .middld-bottom-right {
          width: 120px;
          height: 34px; 
          background-color: #ea4245;
          border: none;
          color: #fff;
          font-size: 17px;
          margin-left: 436px;
          cursor: pointer;
          margin-top: -30px;
          float: left;
        }
      }
        .article-content {
          width: 660px;
          height: 420px;
          // border: 1px solid gray;
          background: rgb(244,245,246);
          .article-input {
          width: 90%;
          height: 35px;
          line-height: 35px;
          font-size: 30px;
          border: none;
          margin: 30px 10px;
          background: rgb(244,245,246);
          color: #999;
          outline: none ;
          
      }

      #editor {
        border: none;
      }

      .article-publish {
        .piblish-title {
          width: 150px;
          height: 40px;
          background: #f1545a;
          color: #ffffff;
          text-align: center;
          line-height: 40px;
          cursor: pointer;
          margin-left: 510px;
        }
      }
    }
    }

   
    .content-middle-bottom {
     
    }
}

  .home-content-right {
    flex:2;
  }
}
</style>