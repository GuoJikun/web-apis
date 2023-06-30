import { defineConfig } from "vitepress";

export default defineConfig({
  lang: "zh-CN",
  title: "web apis", // 网站标题
  lastUpdated: true,
  themeConfig: {
    lastUpdatedText: "最后更新时间",
    outline: [2, 3],
    outlineTitle: "目录",
    socialLinks: [
      {
        icon: "github",
        link: "https://github.com/GuoJikun/web-apis",
      },
    ],
    sidebar: [
      { text: "web apis", link: "/" },
      { text: "web share api", link: "/docs/share" },
    ],
    footer: {
      message: "MIT Licensed",
      copyright: "Copyright © 2023-present GuoJiKun",
    },
    docFooter: {
      prev: "上一页",
      next: "下一页",
    },
  },
});
