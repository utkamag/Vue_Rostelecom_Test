import {createRouter, createWebHistory} from "vue-router"
import App from "@/App";


export default createRouter({
    history: createWebHistory(),
    routes: [
        {path: "/c", component: App},
        {path: "/photo"}
    ]
})