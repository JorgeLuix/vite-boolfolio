import { reactive } from "vue";
import axios from 'axios';
import { router } from "./router/router";

export const store = reactive({
    apiUrl: 'http://localhost:8000/api',
    
    getProjects(Link, myproject) {
        store.loading = true;
        axios.get(Link).then((res) => {
            if (!myproject || myproject === undefined) {
                store.projects = res.data.results.data;
                store.links = res.data.results.links;
            }
            else {
                store.project = res.data.results;
            }

            store.loading = false;
            if (!res.data.success) {
                router.push({ name: 'NotFound' });
            }

        })
    },
    projects: [],
    links: [],
    loading: false,
    project: [],
})