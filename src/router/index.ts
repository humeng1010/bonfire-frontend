import {createRouter, createWebHashHistory} from "vue-router"

import Index from "../pages/Index.vue"
import Team from "../pages/Team.vue"

const router = createRouter({
    // 4. 内部提供了 history 模式的实现。为了简单起见，我们在这里使用 hash 模式。
    history: createWebHashHistory(),
    routes: [
        {
            name: "login",
            path: "/login",
            component: () => import("../pages/UserLogin.vue"),
            meta: {
                isShow: 'none',
                title: "登录",

            }
        },
        {
            name: "register",
            path: "/register",
            component: () => import("../pages/UserRegister.vue"),
            meta: {
                isShow: 'none',
                title: "注册",
            }
        },
        {
            name: "home",
            path: "/index",
            component: Index,
            meta: {
                title: "推荐",
            }
        },
        {
            name: "team",
            path: "/team",
            component: Team,
            meta: {
                title: "队伍",
                showAddTeam: true,
            }
        },

        {
            name: "team-me",
            path: "/team-me",
            component: () => import("../pages/TeamMe.vue"),
            meta: {
                title: "篝火",
            }
        },

        {
            name: "match-page",
            path: "/match-page",
            component: () => import("../pages/MatchPage.vue"),
            meta: {
                title: "匹配伙伴",
                isShow: 'none'
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
                edit: true
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
                title: "搜索伙伴"
            }
        },
        {
            name: "search-result",
            path: "/search-result",
            component: () => import("../pages/SearchResult.vue"),
            meta: {
                isShow: "none",
                title: "用户列表"
            }
        },
        {
            name: "team-add",
            path: "/team-add",
            component: () => import("../pages/TeamAddPage.vue"),
            meta: {
                isShow: "none",
                title: "创建队伍",
            }
        },
        {
            path: "/",
            redirect: "/index"
        }

    ],
})

export default router;
