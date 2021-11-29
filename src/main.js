import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import vuetify from "./plugins/vuetify";

Vue.config.productionTip = false;

// Import the functions you need from the SDKs you need

const firebaseConfig = {
  apiKey: "AIzaSyBg3wqkRSYek-59fOGt3uGQC2fA6FklttA",
  authDomain: "lost-and-found-24934.firebaseapp.com",
  projectId: "lost-and-found-24934",
  storageBucket: "lost-and-found-24934.appspot.com",
  messagingSenderId: "112570119682",
  appId: "1:112570119682:web:022ed68157415b528ad91b",
};

import firebase from "firebase/app";
import "firebase/firestore";

firebase.initializeApp(firebaseConfig);

new Vue({
  router,
  vuetify,
  data: {
    currentUser: "1",
  },
  render: (h) => h(App),
}).$mount("#app");
