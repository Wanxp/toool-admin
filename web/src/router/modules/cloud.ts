import { $t } from "@/plugins/i18n";

export default {
  path: "/cloud",
  // redirect: "/about/index",
  meta: {
    icon: "ri:file-info-line",
    title: $t("menus.hsCloud"),
    rank: 100
  },
  children: [
    {
      path: "/cloud/domain",
      name: "Domain",
      component: () => import("@/views/cloud/domain/index.vue"),
      meta: {
        title: $t("menus.hsCloudDomain")
      }
    },
    {
      path: "/cloud/server",
      name: "Server",
      component: () => import("@/views/cloud/server/index.vue"),
      meta: {
        title: $t("menus.hsCloudServer")
      }
    }
  ]
} satisfies RouteConfigsTable;
