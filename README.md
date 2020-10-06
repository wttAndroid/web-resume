# web前端个人简历

#### 介绍
web前端个人简历：一个追梦在前端路上的小白

#### 相关技术
- particles.js粒子插件
- Handlebars.js模板引擎


#### 在线预览
[web前端个人简历：一个追梦在前端路上的小白](http://wttandroid.gitee.io/wttandroid.github.io/)

#### 使用说明
1.  修改src/config.js内容作为配置文件

```
export default {
  // 首页部分
  page1: {
    titleEn:'Hello,I`m WeiTingting', //英文标题
    title: '一个追梦在前端路上的小白',//中文标题
  },
  // About Me部分
  page2:{
    authorImg:'xxx.jpg',// 作者头像
    xinhui:'...',// 幸会
    qiuzhi:'...',// 求职意向
    guanyuwo:'...'// 关于我
  },
  // My Services部分
  page3:[{
    icon:'icon-xxx', // 图标
    title:'...', // 标题
    msg:['...']//介绍
  },
 ...],
  // My Mastering部分
  page4:{
    // 我的历程
    course:[{
      date:'2020/6——毕业',// 时间
      desc:{// 经历
        title:'...',
        list:['...']
      }
    },
 ...],
    // 我的拓展技能掌握
    singlelist:[{title:'...',text:'...'}],
    // 我的基本技能掌握
    proresslist:[{
      title:'..',//例：HTML
      value:'..'//例：85%
    },
 ...]
  },
  // My Production部分
  page5:[{
    title:'...',//作品名称
    content:'...',//作品名称
    image:'...',//作品图片
    href:'...'//作品地址
  },
 ...],
  // 结尾页部分
  page6:{
    github:'...',//github链接
    bili:'...',//B站链接
    email:'Mailto:xxx@qq.com?Subject=邮箱标题&Body=邮箱内容！',//email
    zhihu:'...',//知乎链接
    weixin:"<img style='width:120px' src='...' alt='加载失败'>",//微信弹窗
    qq:"<img style='width:120px' src='...' alt='加载失败'>"//QQ弹窗
  }
}
```

2.  运行index.html文件访问本地服务  (！！注意：因为file跨域问题，本地运行必须以服务器方式启动项目！)



### 截图预览

![首页](https://images.gitee.com/uploads/images/2020/0722/194832_8b05a480_5641265.png "1.png")![About Me](https://images.gitee.com/uploads/images/2020/0722/194851_9fc98b82_5641265.png "2.png")![My Services](https://images.gitee.com/uploads/images/2020/0722/194909_f35f4738_5641265.png "3.png")![My Mastering](https://images.gitee.com/uploads/images/2020/0722/195119_1e54b805_5641265.png "4.png")![My Production](https://images.gitee.com/uploads/images/2020/0722/194926_268983f1_5641265.png "5.png")![结尾页](https://images.gitee.com/uploads/images/2020/0722/194947_d623e840_5641265.png "6.png")


