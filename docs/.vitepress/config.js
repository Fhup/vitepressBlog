// 编辑不能运行
import markdownPlugin from "vitepress-demo-editor/markdownPlugin";

// 编辑可运行
import container from "markdown-it-container";
import { renderSandbox } from "vitepress-plugin-sandpack";
export default {
  title: "Welcome use FhUI",
  description: "Welcome use FhUI",
  ignoreDeadLinks: true,
  lastUpdated: true,
  // 设置标签页图标
  head: [["link", { rel: "icon", href: "/icon.jpg" }]],
  markdown: {
    config: (md) => {
      // 这里可以使用 markdown-it 插件，vitepress-theme-demoblock就是基于此开发的
      const { demoBlockPlugin } = require("vitepress-theme-demoblock");
      // md.use(markdownPlugin);
      md.use(demoBlockPlugin);
      md.use(container, "sandbox", {
        render(tokens, idx) {
          return renderSandbox(tokens, idx, "sandbox");
        },
      });
    },
  },
  themeConfig: {
    outlineTitle: "本页目录",
    lastUpdatedText: "上次更新",
    siteTitle: "FhUI",
    logo: "/icon.jpg",
    // nav
    nav: [
      { text: "Guide", link: "/guide/" },
      {
        text: "我的博客",
        items: [
          { text: "掘金", link: "https://juejin.cn/user/1856420109622520" },
          {
            text: "csdn",
            link: "https://blog.csdn.net/qq_44827162?spm=1000.2115.3001.5343",
          },
        ],
      },
    ],
    socialLinks: [
      { icon: "github", link: "https://github.com/Fhup" },
      { icon: "twitter", link: "https://github.com/Fhup" },
    ],
    footer: {
      message: "慢慢来 是你的跑不掉",
      copyright: "Copyright © 2023.2.11 Fhup yyds",
    },

    // slider
    sidebar: [
      {
        // text: "Guide",
        // collapsible: true,
        // collapsed: true,
        items: [
          {
            text: "指南",
            link: "/guide/",
          },
          {
            text: "文档",
            items: [{ text: "Button 按钮", link: "/guide/button" }],
          },
        ],
      },
    ],

    editLink: {
      pattern: "https://baidu.com",
    },
    // 搜索
    // algolia: {
    //   appId: "X51HWTCQJJ",
    //   apiKey: "ca20f15eb8a667898b65d13f4213ae3d",
    //   indexName: "vitepress-demo",
    // },
  },
};
