import { Login, Center, Hello, UserPage, RolePage } from "../pages";
export default {
  center: {
    meta: {
      title: "Center",
    },
  },
  hello: {
    meta: {
      title: "Home",
    },
    component: Hello,
  },
  sys: {
    meta: {
      title: "System",
    },
  },
  user: {
    meta: {
      title: "User",
    },
    component: UserPage,
  },
  role: {
    meta: {
      title: "Role",
    },
    component: RolePage,
    state: { a: 1111 },
  },
};
