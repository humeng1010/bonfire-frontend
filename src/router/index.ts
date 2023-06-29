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
            path: "/edit-avatar",
            component: () => import("../pages/EditAvatarPage.vue"),
            meta: {
                isShow: "none",
                title: "编辑头像"
            }
        },
        {
            name: "edit",
            path: "/edit/:title",
            component: () => import("../pages/EditPage.vue"),
            meta: {
                isShow: "none",
            }
        },
        {
            path: "/edit-tags",
            component: () => import("../pages/EditTagsPage.vue"),
            meta: {
                isShow: "none",
                title: "设置个人标签"
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
