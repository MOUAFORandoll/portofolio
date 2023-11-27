import { createApp } from "vue";
import App from "./App.vue";

// Router
import router from "./router";

// Bootstrap bundle
import "bootstrap/dist/js/bootstrap.bundle";

// Vue Meta
import { createMetaManager, defaultConfig } from "vue-meta";
const metaManager = createMetaManager(false, {
  ...defaultConfig,
  meta: { tag: "meta", nameless: true },
});

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
  .use(metaManager)
  .use(Vuetify)
  .component("font-awesome-icon", FontAwesomeIcon)
  .mount("#app");
