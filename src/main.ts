/**
 * main.ts
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Components
import App from "./App.vue";

// Composables
import { createApp } from "vue";

import "v-calendar/style.css";

// Plugins
import { registerPlugins } from "@/plugins";
import { firebaseApp } from "@/plugins/firebase";
import { requestPermission } from "@/plugins/notification";
import { getMessaging, getToken, onMessage } from "firebase/messaging";

const app = createApp(App);

registerPlugins(app);
// FCM Init
const messaging = getMessaging(firebaseApp);

getToken(messaging, {
  vapidKey:
    "BI2zVHpmL-D0UhPLLNxATIiOHR06a6J2sho9YtahZBqJbu5SHzDGoStMSPF8VaOJ0HCTsY-kPkEM6DMP-c1WMNw",
}).then((currentToken) => {
  if (currentToken) {
    onMessage(messaging, (payload) => {
      console.log("Message received. ", payload);
    });
  }
});

app.mount("#app");
requestPermission().then((permission) => {
  console.log("permission", permission);
});
