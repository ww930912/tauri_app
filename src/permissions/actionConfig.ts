import { addCodeToPermission } from "@/common/utils/index";
import { ROUTE_PERMISSION } from "./routerConfig";

export type BtnItemT = {
  id?: symbol;
  code?: number;
  title?: string;
  color?: string;
};
export type BTN_TYPET = {
  [key: string]: Partial<BtnItemT>;
};

export const BTN_PERMISSIONS = addCodeToPermission<BtnItemT>({
  ADD: { id: Symbol(), title: "add", color: "#EAF4FE" },
  EDIT: { id: Symbol(), title: "edit", color: "#EBF9F1" },
  DELETE: { id: Symbol(), title: "del", color: "#FCEEED" },
  IMPORT: { id: Symbol(), title: "import", color: "#FEF8E8" },
  EXPORT: { id: Symbol(), title: "export", color: "#FEF8E8" },
});

const { ADD, EDIT, DELETE, IMPORT, EXPORT } = BTN_PERMISSIONS;
const { index, sys, user, role } = ROUTE_PERMISSION;

export const ActionsPermissionConfig = {
  index: [
    index.name + ":"+ ADD.name,
    index.name + ":"+ EDIT.name,
    index.name + ":"+ DELETE.name,
    index.name + ":"+ IMPORT.name,
    index.name + ":"+ EXPORT.name,
  ],
  user: [
    user.name + ":"+ EXPORT.name,
  ],
  role: [
    role.name + ":"+ ADD.name,
    role.name + ":"+ EDIT.name,
    role.name + ":"+ DELETE.name,

  ],
};


