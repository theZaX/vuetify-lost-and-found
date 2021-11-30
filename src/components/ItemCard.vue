<template>
  <div>
    <v-card>
      <v-img height="200" :src="image"></v-img>

      <v-card-title>{{ title }}</v-card-title>

      <v-card-text>
        <div>
          {{ description }}
        </div>
      </v-card-text>

      <v-card-actions>
        <v-dialog
          v-if="type === 'mine'"
          v-model="dialog"
          persistent
          max-width="600px"
        >
          <template v-slot:activator="{ on, attrs }">
            <v-btn color="primary" dark v-bind="attrs" v-on="on"> Edit </v-btn>
          </template>

          <v-card>
            <v-card-title>
              <span class="text-h5">Edit Item</span>
            </v-card-title>
            <v-card-text>
              <v-container>
                <v-row>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field
                      label="Title*"
                      v-model="formTitle"
                      name="title"
                      required
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12">
                    <v-textarea
                      label="Description*"
                      auto-grow
                      v-model="formDescription"
                      name="description"
                      required
                    ></v-textarea>
                  </v-col>
                </v-row>
              </v-container>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue darken-1" text @click="closeDialog">
                Close
              </v-btn>
              <v-btn
                color="blue darken-1"
                :loading="loading"
                text
                @click="saveEdits"
              >
                Save
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>

        <div style="flex-grow: 1"></div>

        <Comments :id="id" />

        <v-dialog
          v-if="type === 'mine'"
          v-model="deleteDialog"
          max-width="600px"
        >
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              v-bind="attrs"
              v-on="on"
              v-if="type === 'mine'"
              class="mx-2"
              icon
            >
              <v-icon dark> mdi-delete </v-icon>
            </v-btn>
          </template>

          <v-card>
            <v-card-title class="text-h5"> Delete Item </v-card-title>

            <v-card-text>
              Are you sure you want to delete this item?
            </v-card-text>

            <v-card-actions>
              <v-spacer></v-spacer>

              <v-btn text @click="deleteDialog = false"> Cancel </v-btn>

              <v-btn color="red" text @click="deleteItem"> Delete </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-card-actions>
    </v-card>
  </div>
</template>


<script>
import { updateItem, deleteItem } from "@/lib/fakeapi";

import Comments from "./Comments.vue";

export default {
  props: {
    image: {
      type: String,
    },
    type: {
      type: String,
    },

    title: {
      type: String,
    },
    description: {
      type: String,
    },
    id: {
      type: String,
    },
  },
  components: {
    Comments,
  },

  data: () => ({
    loading: false,
    selection: 1,
    dialog: false,
    formTitle: "",
    formDescription: "",
    deleteDialog: false,
  }),

  watch: {
    title() {
      this.formTitle = this.title;
    },
    description() {
      this.formDescription = this.description;
    },
  },

  mounted() {
    this.formTitle = this.title;
    this.formDescription = this.description;
  },

  methods: {
    closeDialog() {
      this.dialog = false;
      this.formTitle = this.title;
      this.formDescription = this.description;
    },
    async saveEdits() {
      this.loading = true;

      await updateItem(this.id, {
        title: this.formTitle,
        description: this.formDescription,
      });

      this.formTitle = this.title;
      this.formDescription = this.description;
      this.dialog = false;
      this.loading = false;

      this.$emit("update");
    },

    async deleteItem() {
      this.loading = true;

      this.deleteDialog = false;
      this.loading = false;

      await deleteItem(this.id);

      this.$emit("update");
    },
  },
};
</script>