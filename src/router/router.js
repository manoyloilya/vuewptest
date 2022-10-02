import Main from "@/pages/Main";
import {createRouter, createWebHistory} from "vue-router";
import About from "@/pages/About";
import PostIdPage from "@/pages/PostIdPage";
import PostPageWithStore from "@/pages/PostPageWithStore";


const routes = [
    {
        path: '/',
        component: Main
    },
    {
        path: '/about',
        component: About
    },
    {
        path: '/posts/:slug',
        component: PostIdPage
    },
    {
        path: '/blog',
        component: PostPageWithStore
    },
    {
        path: '/blog/page/:page',
        component: PostPageWithStore
    },
    {
        path: '/blog/category/:category/page/:page',
        component: PostPageWithStore
    },

]

const router = createRouter({
    routes,
    history: createWebHistory(process.env.BASE_URL)
})

export default router;
