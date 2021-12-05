<template>
  <div class="container">
    <div class="clamped">
      <h2 class="font-weight-regular">Found Things</h2>

      <p class="my-2">
        Found something? Post it
        <router-link to="/dashboard" style="text-decoration: inherit">
          here
        </router-link>
      </p>
      <v-row class="mt-2">
        <item-card
          class="col-12 col-sm-6"
          v-for="item in items"
          :key="item.id"
          type="Other"
          :description="item.description"
          :image="item.image"
          :title="item.title"
          :id="item.id"
        >
        </item-card>
      </v-row>
    </div>
  </div>
</template>

<script>
// import { getAllFoundItems } from "@/lib/fakeapi";
import { getAllFoundItems } from "@/lib/serverFunctions";

import ItemCard from "../components/ItemCard.vue";

export default {
  name: "LostListPage",

  data() {
    return {
      items: [],
    };
  },
  components: {
    ItemCard,
  },

  methods: {
    async fetchFoundItems() {
      const foundItems = getAllFoundItems();
      this.items = await foundItems;
    },
  },

  mounted() {
    this.fetchFoundItems();
  },
};
</script>

<style >
.container {
  display: flex;
  width: 100%;
  justify-content: center;
}

.clamped {
  width: 100%;
  max-width: 800px;
}
</style>