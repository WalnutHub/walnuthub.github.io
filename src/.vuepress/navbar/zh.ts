import { navbar } from "vuepress-theme-hope";

export const zhNavbar = navbar([
  "/zh/",

  { text: "关于", icon: "discover", link: "/zh/about/" },
  //{
  //  text: "指南",
  //  icon: "creative",
  //  link: "/zh/guide/"
    /*
    prefix: "/zh/guide/",
    children: [
      {
        text: "Bar",
        icon: "creative",
        prefix: "bar/",
        children: ["baz", { text: "...", icon: "more", link: "" }],
      },
      {
        text: "Foo",
        icon: "config",
        prefix: "foo/",
        children: ["ray", { text: "...", icon: "more", link: "" }],
      },
    ],*/
  // }, 

  /*{
    text: "V2 文档",
    icon: "note",
    link: "https://theme-hope.vuejs.press/zh/",
  },
  */
]);
