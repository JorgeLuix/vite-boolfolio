import { reactive } from "vue";
import axios from 'axios';
import { router } from "./router/router";

export const store = reactive({
    apiUrl: 'http://localhost:8000/api',
    imgBasePath: 'http://localhost:8000/storage',


    getProjects(apiLink, myproject) {
        store.loading = true;
        axios.get(apiLink).then((res) => {
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

    /**SECTION ABOUT ME**/
  personalData: [
    { label: "Teléfono", value: "2555 5454545" },
    { label: "Email", value: "cw@example.com" },
    { label: "Website", value: "www.example.com" },
    { label: "Indirizzo", value: "..." },
//     { label: "Cargo", value: "FREELANCE" },
   ],
  interests: [
    { icon: "fa-gamepad", label: "Giocchi" },
    { icon: "fa-headphones", label: "Musica" },
    { icon: "fa-plane", label: "Viaggi" },
    { icon: "fa-person-hiking", label: "Sport" },
    { icon: "fa-book", label: "Libri" },
  ],
/**************************************************** */

/*******SECTION SKILLSETS*******/
items : [
    {
      image: "https://cdn.iconscout.com/icon/free/png-512/html5-10-569380.png",
      name: "HTML5"
    },
    {
      image: "https://logospng.org/download/css-3/logo-css-3-1536.png",
      name: "CSS"
    },
    {
      image: "https://openclipart.org/image/800px/272343",
      name: "JavaScript"
    },
    {
      image: "https://cdn.freebiesupply.com/logos/large/2x/vue-9-logo-png-transparent.png",
      name: "Vue.js"
    },
    {
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/512px-Bootstrap_logo.svg.png?20210507000024",
      name: "Bootstrap"
    },
    {
      image: "https://iconape.com/wp-content/files/eh/367786/svg/logo-sass-logo-icon-png-svg.png",
      name: "Sass"
    },
    {
      image: "https://iconape.com/wp-content/png_logo_vector/node-js-2.png",
      name: "Node.js"
    }
  ]
/**************************************************** */
})
