<template>
  <v-dialog v-model="dialog" max-width="600px">
    <template v-slot:activator="{ on, attrs }">
      <v-btn v-bind="attrs" v-on="on" color="primary">New Item</v-btn>
    </template>

    <v-card>
      <v-card-title>
        <span class="text-h5">New Item</span>
      </v-card-title>
      <v-card-text>
        <v-container>
          <v-row>
            <v-col cols="12">
              <v-select
                v-model="type"
                label="Type"
                :items="['found', 'lost']"
              ></v-select>
            </v-col>

            <v-col cols="12">
              <v-text-field
                label="Title*"
                v-model="formTitle"
                name="title"
                required
              ></v-text-field>
            </v-col>
            <v-col cols="12">
              <v-text-field
                label="Image Url*"
                v-model="formImageUrl"
                name="title"
                required
              ></v-text-field>
            </v-col>
            <v-col cols="12">
              <v-textarea
                label="Description*"
                auto-grow
                v-model="formDescription"
                name="imageurl"
                required
              ></v-textarea>
            </v-col>
          </v-row>
        </v-container>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="blue darken-1" text @click="closeDialog"> Close </v-btn>
        <v-btn
          color="blue darken-1"
          :loading="loading"
          text
          @click="createNewItem"
        >
          Save
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>


<script>
import { createNewItem } from "@/lib/serverFunctions";

export default {
  name: "CreateItem",
  props: {
    id: {
      type: String,
    },
  },

  data: () => ({
    loading: false,
    formTitle: "",
    formDescription: "",
    formImageUrl: "",
    type: "found",
    dialog: false,
  }),

  methods: {
    closeDialog() {
      this.dialog = false;
    },
    async createNewItem() {
      this.loading = true;
      const user = this.$root.currentUser;
      const item = {
        title: this.formTitle,
        description: this.formDescription,
        image: this.formImageUrl,
        userId: user.id,
        type: this.type,
      };
      await createNewItem(item, this.$root.currentUser);

      this.formTitle = "";
      this.formDescription = "";
      this.formImageUrl = "";

      this.loading = false;
      this.dialog = false;
      this.$emit("update");
    },
  },
};
</script>