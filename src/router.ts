import { createRouter, createMemoryHistory, createWebHistory} from "vue-router/auto";


const router = createRouter({
    // use appropriate history implementation for server/client
    // import.meta.env.SSR is injected by Vite.
    history: import.meta.env.SSR
        ? createMemoryHistory()
        : createWebHistory(),
    //routes: routes,
    scrollBehavior(to, from, savedPosition) {
        // always scroll to top
        return { top: 0 }
    },
});

export default router