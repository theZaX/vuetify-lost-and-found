<template>
  <div class="container">
    <div class="clamped">
      <h2 class="font-weight-regular">Lost Things</h2>

      <p class="my-2">
        Lost something? Post it
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
import { getAllLostItems } from "@/lib/serverFunctions";

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
    async fetchLostItems() {
      const lost = getAllLostItems();
      this.items = await lost;
    },
  },

  mounted() {
    this.fetchLostItems();
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