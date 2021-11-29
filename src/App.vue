<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <div class="d-flex align-center">
        <router-link to="/">
          <v-img
            alt="Hyperfind Logo"
            contain
            src="@/assets/logo.svg"
            transition="scale-transition"
            width="200"
          />
        </router-link>
      </div>

      <v-spacer></v-spacer>

      <v-btn @click="drawerOpen = !drawerOpen" small fab target="_blank" text>
        <v-icon>mdi-menu</v-icon>
      </v-btn>
    </v-app-bar>

    <v-main>
      <router-view />

      <github-repository-link></github-repository-link>
    </v-main>

    <v-navigation-drawer v-model="drawerOpen" temporary right app>
      <v-list-item>
        <v-list-item-content>
          <v-img
            alt="Vuetify Logo"
            contain
            src="@/assets/logo.svg"
            transition="scale-transition"
            width="200"
          />
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>
      <v-list dense nav>
        <v-select
          :items="items"
          item-text="name"
          label="Solo field"
          solo
          :value="userData"
          @input="changeUser"
        ></v-select>

        <v-list-item
          v-for="item in navigationItems"
          :key="item.title"
          link
          :to="item.route"
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </v-app>
</template>

<script>
import GithubRepositoryLink from "./components/GithubRepositoryLink.vue";
import { users } from "@/lib/fakeDatabase";

import { getUserById, getUerIdByName } from "@/lib/fakeapi";

export default {
  name: "App",

  components: {
    GithubRepositoryLink,
  },

  data: () => ({
    drawerOpen: false,
    navigationItems: [
      {
        title: "Home",
        icon: "mdi-home",
        route: "/",
      },
      {
        title: "Dashboard",
        icon: "mdi-view-dashboard",
        route: "/dashboard",
      },
      {
        title: "Found Items",
        icon: "mdi-file-find-outline",
        route: "/found",
      },
      {
        title: "Lost Items",
        icon: "mdi-magnify",
        route: "/lost",
      },
    ],
    items: users,
  }),
  computed: {
    // get the root state of the instance user
    user: {
      get() {
        return this.$root.currentUser;
      },
      set(name) {
        // find the id of the user with the given name
        const userId = getUerIdByName(name);

        this.$root.currentUser = userId;
      },
    },

    userData() {
      return getUserById(this.user);
    },
  },

  methods: {
    changeUser(user) {
      this.user = user;
    },
  },
};
</script>
