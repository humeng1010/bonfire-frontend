import {createRouter, createWebHashHistory} from "vue-router"


const router = createRouter({
    // 4. 内部提供了 history 模式的实现。为了简单起见，我们在这里使用 hash 模式。
    history: createWebHashHistory(),
    routes: [
        {
            name: "home",
            path: "/index",
            component: () => import("../pages/Index.vue"),
            meta: {
                title: "篝火"
            }
        },
        {
            name: "team",
            path: "/team",
            component: () => import("../pages/Team.vue"),
            meta: {
                title: "队伍"
            }
        },
        {
            name: "user",
            path: "/user",
            component: () => import("../pages/User.vue"),
            meta: {
                title: "个人信息"
            }
        },
        {
            name: "user-more",
            path: "/user-more",
            component: () => import("../pages/UserMore.vue"),
            meta: {
                isShow: "none",
                title: "更多"
            }
        },
        {
            path: "/search",
            component: () => import("../pages/Search.vue"),
            meta: {
                isShow: "none",
                title: "搜索"
            }
        },
        {
            path: "/",
            redirect: "/index"
        }

    ],
})

export default router;
