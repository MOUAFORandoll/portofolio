import { createApp } from "vue";
import App from "./App.vue";

// Router
import router from "./router";

// Bootstrap bundle
import "bootstrap/dist/js/bootstrap.bundle";

// Vue Meta
import { createMetaManager, defaultConfig, Meta /* useMeta */ } from "vue-meta";
const metaManager = createMetaManager(false, {
  ...defaultConfig,
  meta: { tag: "meta", nameless: true },
});
// const useMetaTag = useMeta({
//   title: "Randoll MOUAFO - Full-Stack Developer",
//   description: "Just a guy with passion for coding",
//   htmlAttrs: {
//     lang: "en",
//     amp: true,
//   },
//   twitter: {
//     title: "Randoll MOUAFO - Full-Stack Developer",
//     description: "Just a guy with passion for coding",
//     card: "summary_large_image",
//     image: "https://rusetskii.dev" + require(`@/assets/images/preview.jpg`),
//   },
//   og: {
//     title: "Randoll MOUAFO - Full-Stack Developer",
//     description: "Just a guy with passion for coding",
//     type: "website",
//     url: "https://rusetskii.dev/",
//     image: "https://rusetskii.dev" + require(`@/assets/images/preview.jpg`),
//     site_name: "Randoll MOUAFO - Full-Stack Developer",
//   },
//   meta: [
//     {
//       name: "keywords",
//       content:
//         "software developer, software engineer, Full-Stack developer, full-stack developer, machine learning engineer, AI researcher, developer portfolio",
//     },
//     {
//       name: "author",
//       content: "Randoll MOUAFO",
//     },
//   ],
//   link: [
//     {
//       rel: "icon",
//       href: require(`@/assets/images/favicon.png`),
//     },
//   ],
// });
// Font Awesome
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faFileLines } from "@fortawesome/free-regular-svg-icons";
import { faLinkedinIn, faGithub } from "@fortawesome/free-brands-svg-icons";

library.add(faLinkedinIn, faGithub, faFileLines);

// Vuetify
import Vuetify from "vuetify";
import "vuetify/dist/vuetify.min.css";

// Create the app instance
const app = createApp(App);

// Use plugins and components
app
  .use(router)
  .use(Meta, {
    title: "Randoll MOUAFO - Full-Stack Developer",
    description: "Just a guy with passion for coding",
    htmlAttrs: {
      lang: "en",
      amp: true,
    },
    twitter: {
      title: "Randoll MOUAFO - Full-Stack Developer",
      description: "Just a guy with passion for coding",
      card: "summary_large_image",
      image: "https://rusetskii.dev" + require(`@/assets/images/preview.jpg`),
    },
    og: {
      title: "Randoll MOUAFO - Full-Stack Developer",
      description: "Just a guy with passion for coding",
      type: "website",
      url: "https://rusetskii.dev/",
      image: "https://rusetskii.dev" + require(`@/assets/images/preview.jpg`),
      site_name: "Randoll MOUAFO - Full-Stack Developer",
    },
    meta: [
      {
        name: "keywords",
        content:
          "software developer, software engineer, Full-Stack developer, full-stack developer, machine learning engineer, AI researcher, developer portfolio",
      },
      {
        name: "author",
        content: "Randoll MOUAFO",
      },
    ],
    link: [
      {
        rel: "icon",
        href: require(`@/assets/images/favicon.png`),
      },
    ],
  })
  .use(metaManager)
  .use(Vuetify)
  .component("font-awesome-icon", FontAwesomeIcon)
  .mount("#app");
