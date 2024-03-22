import Page from "./domain/index.vue";

const rendContent = (val: string) =>
  `代码位置：src/views/cloud/domain/${val}/index.vue`;

export const list = [
  {
    key: "domain",
    content: rendContent("domain"),
    title: "域名",
    component: Page
  },
  {
    key: "dns",
    content: rendContent("dns"),
    title: "域名解析",
    component: Page
  }
];
