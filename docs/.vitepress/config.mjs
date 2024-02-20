import {
  defineConfig
} from 'vitepress'



import {categoryCreator,sideBarCreator} from './utils/autoCreater'

export default defineConfig({
  outDir: './.vitepress/dist',
  base: '/vitepress-blog',
  // 首页标题
  title: "我的MD笔记博客",
  // 网站描述
  description: "A VitePress Site",
  // 开启最后更新时间功能
  lastUpdated: true,

  themeConfig: {
    // 网页logo
    logo: '/logo.png',

    // 本地化设置
    i18nRouting: 'zh',
    // 首页左上角标题
    siteTitle: '我的MD笔记博客',
    // 默认颜色主题
    appearance: 'dark',
    // 导航栏
    nav: [{
        text: '首页',
        link: '/'
      },
      {
        text: '分类',
        items: categoryCreator()
      }
    ],


    // 侧边栏
    sidebar: sideBarCreator(),


    // 文档底部设置
    docFooter: {
      next: false
    },

    // 文章最后更新时间显示
    lastUpdated: {
      text: '更新于',
      formatOptions: {
        dateStyle: 'full',
        timeStyle: 'medium'
      }
    },

    // 至多显示标题级别
    outline: {
      level: 2
    },

    // 首页社交账号链接
    socialLinks: [{
      icon: 'github',
      link: 'https://github.com/ZTFree'
    }, {
      icon: {
        svg: '<img style="width:20px;height:20px;" src="https://gitee.com/assets/favicon.ico"></img>'
      },
      link: 'https://gitee.com/tel18820503733'
    }],

    // 文档搜索功能
    search: {
      provider: 'local',
    },

    // 明暗模式切换
    lightModeSwitchTitle: '光明模式',
    darkModeSwitchTitle: '黑夜模式',


  }
})