import Page from "@/views/cloud/server/server/index.vue";

const rendContent = (val: string) =>
  `代码位置：src/views/cloud/domain/${val}/index.vue`;

export const list = [
  {
    key: "server",
    content: rendContent("server"),
    title: "服务器",
    component: Page
  },
  {
    key: "safety",
    content: rendContent("safety"),
    title: "安全",
    component: Page
  }
];
