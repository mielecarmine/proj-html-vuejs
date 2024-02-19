import { createApp } from "vue";

import App from "./App.vue";

// import boostrapp css
import "bootstrap/dist/css/bootstrap.css";

/* import the fontawesome core */
import { library } from "@fortawesome/fontawesome-svg-core";

/* import font awesome icon component */
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

/* import specific icons */
import {
  faStar,
  faLock,
  faBasketShopping,
} from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import {
  faFacebook,
  faTwitter,
  faLinkedin,
  faInstagram,
  faGooglePlusG,
} from "@fortawesome/free-brands-svg-icons";

/* add icons to the library */
library.add(
  faStar,
  faEnvelope,
  faFacebook,
  faTwitter,
  faLinkedin,
  faInstagram,
  faGooglePlusG,
  faLock,
  faBasketShopping
);

const app = createApp(App);
app.mount("#app");
app.component("font-awesome-icon", FontAwesomeIcon);
