<template>
  <div class="container">
    <div class="clamped">
      <h2 class="font-weight-regular">Personal Dashboard</h2>
      <CreateItem></CreateItem>
      <p class="my-2">Items I Have Lost:</p>

      <v-row class="mt-2">
        <item-card
          @update="fetchLostItems"
          class="col-12 col-sm-6"
          v-for="item in lostItems"
          :key="item.id"
          type="mine"
          :description="item.description"
          :image="item.image"
          :title="item.title"
          :id="item.id"
        >
        </item-card>
      </v-row>

      <p class="mt-4">Items I Have Found:</p>

      <v-row class="my-1">
        <item-card
          @update="fetchFoundItems"
          class="col-12 col-sm-6"
          v-for="item in foundItems"
          :key="item.id"
          type="mine"
          :description="item.description"
          :image="item.image"
          :title="item.title"
        >
        </item-card>
      </v-row>
    </div>
  </div>
</template>

<script>
import { getLostItemsByUser, getFoundItemsByUser } from "@/lib/fakeapi";

import ItemCard from "../components/ItemCard.vue";

import CreateItem from "../components/CreateItem.vue";

export default {
  name: "LostListPage",

  data() {
    return {
      lostItems: [],
      foundItems: [],
    };
  },
  components: {
    ItemCard,
    CreateItem,
  },

  methods: {
    async fetchLostItems() {
      const lostItems = getLostItemsByUser(this.user);
      this.lostItems = await lostItems;
    },
    async fetchFoundItems() {
      const foundItems = getFoundItemsByUser(this.user);
      this.foundItems = await foundItems;
    },
  },

  computed: {
    user: {
      get() {
        return this.$root.currentUser;
      },
    },
  },

  watch: {
    user: {
      handler() {
        this.fetchLostItems();
        this.fetchFoundItems();
      },
      immediate: true,
    },
  },

  mounted() {
    this.fetchLostItems();
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
