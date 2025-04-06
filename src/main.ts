import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";

//import router
import router from "./route/";

//import animate.css
import "animate.css";

//import axios
import axios from "axios";
import VueAxios from "vue-axios";

//import pinia
import { createPinia } from "pinia";

import "element-plus/theme-chalk/dark/css-vars.css";

//import element-plus-icon
import * as ElementPlusIconsVue from "@element-plus/icons-vue";

const app = createApp(App);

//register element-plus-icon
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component);
}

//use pinia
const pinia = createPinia();
app.use(pinia);

//use router
app.use(router);

//use axios
app.use(VueAxios, axios);

//use fluent-ui
import {
  provideFluentDesignSystem,
  fluentCard,
  fluentButton,
  fluentTextField,
  fluentCheckbox,
} from "@fluentui/web-components";

provideFluentDesignSystem().register(
  fluentCard(),
  fluentButton(),
  fluentTextField(),
  fluentCheckbox()
);

app.mount("#app").$nextTick(() => {});
