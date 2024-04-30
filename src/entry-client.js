import {createApp} from "@/main";

const { app, router } = createApp()

// wait until router.ts is ready before mounting to ensure hydration match
router.isReady().then(() => {
    app.mount('#app')

    console.log('hydrated')
})