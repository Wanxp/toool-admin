import { http } from "@/utils/http";
import type { ResultTable } from "@/api/model/sharedModel";

/** 获取系统管理-角色管理列表 */
export const getDomainList = (data?: object) => {
  return http.request<ResultTable>("get", "/domains/page", { data });
};
