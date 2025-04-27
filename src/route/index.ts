import { createRouter, createWebHashHistory } from "vue-router";

import type { RouteRecordRaw } from "vue-router";

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    redirect: "/login",
  },
  {
    path: "/login",
    name: "login",
    component: () => import("../view/Login.vue"),
  },
  {
    path: "/home",
    name: "home",
    component: () => import("../view/MainWindow.vue"),
    children:[
      {
        path: "messagelist",
        name: "MessageList",
        component: () => import("../view/mainwindow/MessageList.vue"),
        // children:[
        //   {
        //     path: "chatroom/:id",
        //     name: "chatroom",
        //     component: () => import("../view/mainwindow/ChatRoom.vue"),
        //   }
        // ]
      },{
        path: "contactlist",
        name: "contactlist",
        component: () => import("../view/mainwindow/ContactList.vue"),
      }
    ]
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
