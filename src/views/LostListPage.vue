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
          buttonText="Claim"
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
import firebase from "firebase/app";

import "firebase/firestore";

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
    async fetchItems() {
      const documentRef = firebase.firestore().collection("found");

      const foundCollection = await documentRef.get();

      const items = foundCollection.docs.map((doc) => {
        return {
          ...doc.data(),
          id: doc.id,
        };
      });

      this.items = items;

      console.log(foundCollection.docs.map((doc) => doc.data()));
    },
  },

  mounted() {
    this.fetchItems();
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