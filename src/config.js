export default {
  // page1部分
  page1: {
    titleEn: 'Hello,I`m WeiTingting', //英文标题
    title: '一个追梦在前端路上的小白', //中文标题
  },
  // page2部分
  page2: {
    authorImg: 'page1.jpg', // 作者头像
    xinhui: '我叫卫婷婷，是一名刚步入社会的毕业生，毕业于晋城职业技术学院：软件与信息服务专业。', // 幸会
    qiuzhi: '前端开发，利用各种技巧实现交互丰富的界面。', // 求职意向
    guanyuwo: '起初学习的是java，安卓开发，后来转战到前端开发。我集中利用大学学习时间进一步学习了html5,css3,javaScript和Vue框架等等，自学做Vue有关的Demo' // 关于我
  },
  // page3部分
  page3: [{
    icon: 'icon-diannao', // 图标
    title: 'PS切图', // 标题
    msg: ['从PSD上切出页面需要的图片'] //介绍
  }, {
    icon: 'icon-qianbi1',
    title: '网页制作',
    msg: ["响应式页面", "css动画效果"]
  }, {
    icon: 'icon-tubiao-',
    title: '前端功能',
    msg: ['JS完成常见的前端功能', '用AJAX读取后台数据']
  }, {
    icon: 'icon-shouji',
    title: '移动端',
    msg: ['移动端页面的书写']
  }],
  // page4部分
  page4: {
    // 我的历程
    course: [{
      date: '2020/6——毕业', // 时间
      desc: { // 经历
        title: '晋城职业技术学院',
        list: ['加入508工作室组织 / 维护508工作室', '学习搭建Vue基本Demo', 'HTML搭建个人简历网站']
      }
    }, {
      date: '2019/9——2020/6',
      desc: {
        title: '晋城职业技术学院',
        list: ['学习JavaScript / jq / css / html / vue/ PSD切图等', '构建页面 / 利用JS、CSS3书写前端功能，让页面更充实丰富。并将代码上传到代码托管平台上', '获得Web前段开发1+X证书']
      }
    }, {
      date: '2018/9——2019/9',
      desc: {
        title: '晋城职业技术学院',
        list: ['学习java语言', '利用Android、sql等书写页面功能', '参加大学生职业院校移动互联技能大赛', '获得全国计算机等级二级证书', '国家励志奖学金']
      }
    }],
    // 我的拓展技能掌握
    singlelist: [{
      title: 'bootsrap',
      text: '了解'
    }, {
      title: 'Element-ui',
      text: '掌握'
    }, {
      title: 'mint-ui',
      text: '掌握'
    }, {
      title: 'scss',
      text: '掌握'
    }],
    // 我的基本技能掌握
    proresslist: [{
      title: 'HTML',
      value: '85%'
    }, {
      title: 'CSS',
      value: '80%'
    }, {
      title: 'JS',
      value: '75%'
    }, {
      title: 'NodeJs',
      value: '80%'
    }, {
      title: 'Vue',
      value: '90%'
    }]
  },
  // page5部分
  page5: [{
    title: '508工作室',
    content: '晋城职业技术学院508工作室独立站点的维护',
    image: 'box1.png',
    href: 'https://lab508.gitee.io/'
  }, {
    title: '图书管理系统',
    content: 'Vue,NodeJs图书管理系统前后端',
    image: 'box3.jpg',
    href: 'https://gitee.com/wttAndroid/book_admin'
  }, {
    title: '校园约吧',
    content: 'Vue,NodeJs移动端校园项目前后端',
    image: 'box5.jpg',
    href: 'https://gitee.com/wttAndroid/xyy_server'
  }, {
    title: '蘑菇街',
    content: 'Vue蘑菇街商城案例前端',
    image: 'box2.png',
    href: 'https://github.com/wttAndroid/MyShoppingStreet'
  }, {
    title: '个人简历',
    content: 'html,css,jq,bootsrap搭建个人简历网站',
    image: 'box4.png',
    href: ''
  }, {
    title: '二维码生成器',
    content: 'Android二维码生成器',
    image: 'box6.jpeg',
    href: ''
  }],
  // page6部分
  page6: {
    github: 'https://github.com/wttAndroid',
    bili: '',
    email: 'Mailto:1457321681@qq.com?Subject=邮箱标题&Body=邮箱内容！',
    zhihu: '',
    weixin: "<img style='width:120px' src='http://wttandroid.gitee.io/wttandroid.github.io/src/img/weix.jpg' alt='加载失败'>",
    qq: "<img style='width:120px' src='http://wttandroid.gitee.io/wttandroid.github.io/src/img/qq.jpg' alt='加载失败'>"
  }
}
