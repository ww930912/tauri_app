
import { addCodeToPermission } from "@/common/utils/index";

export type RouteKeyT = keyof typeof RouteIds;
export type RouteRecordRawCustom = any

export const RouteIds = {
  index: "index",
  sys: "sys",
  role: "role",
  user: "user",
};

export const ROUTE_PERMISSION = addCodeToPermission<{
  id: symbol;
  title: string;
  code?: string;
}>({
  index: { id: Symbol(), title: "Add" },
  sys: { id: Symbol(), title: "System" },
  user: { id: Symbol(), title: "User" },
  role: { id: Symbol(), title: "Role" },
});

const { index, sys, user, role } = ROUTE_PERMISSION;
export const routesData =  [
  {
    name: index.name,
    meta: {
      title: "Home",
      icon: "system",
      noCache: false,
      link: null,
    },
  },
  {
    name: sys.name,
    meta: {
      title: "System",
      icon: "system",
      noCache: false,
      link: null,
    },
    children: [
      {
        name: user.name,
        meta: {
          title: "User",
          icon: "user",
          noCache: false,
          link: null,
        },
      },
      {
        name: role.name,
        meta: {
          title: "Role",
          icon: "role",
          noCache: false,
          link: null,
        },
      },
    ],
  },
]

