<template>
  <v-dialog v-model="dialog" max-width="600px">
    <template v-slot:activator="{ on, attrs }">
      <v-btn
        color="primary"
        :loading="loading"
        text
        dark
        v-bind="attrs"
        v-on="on"
      >
        Comments
      </v-btn>
    </template>

    <v-card>
      <v-card-title>
        <span class="text-h5">Comments</span>
      </v-card-title>

      <v-card-text>
        <div v-for="comment in comments" :key="comment.id">
          <h4>{{ getNameById(comment.userId) }}</h4>
          <div v-text="comment.text"></div>

          <v-divider class="mt-2"></v-divider>
        </div>

        <v-container>
          <v-row>
            <v-col cols="12">
              <v-textarea
                label="Post a comment"
                auto-grow
                v-model="newCommentContent"
                name="description"
                required
              ></v-textarea>
              <v-btn
                color="primary"
                :loading="postingComment"
                @click="postComment"
                >Post</v-btn
              >
            </v-col>
          </v-row>
        </v-container>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="blue darken-1" text @click="closeDialog"> Close </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>


<script>
import { getUserById } from "@/lib/fakeapi";
import { getCommentsByItemId, postComment } from "@/lib/serverFunctions";

export default {
  name: "Comments",
  props: {
    id: {
      type: String,
    },
  },

  data: () => ({
    loading: true,
    postingComment: false,
    selection: 1,
    dialog: false,
    newCommentContent: "",
    comments: [],
  }),

  async mounted() {
    this.fetchComments();
  },

  methods: {
    closeDialog() {
      this.dialog = false;
    },

    getNameById(id) {
      return getUserById(id)?.name;
    },

    async fetchComments() {
      this.loading = true;

      const comments = await getCommentsByItemId(this.id);

      this.loading = false;

      this.comments = comments;
    },

    async postComment() {
      this.postingComment = true;

      const userId = this.$root.currentUser;

      const comment = {
        text: this.newCommentContent,
        userId,
        itemId: this.id,
      };

      await postComment(comment);

      this.newCommentContent = "";
      this.postingComment = false;

      this.fetchComments();
    },
  },

  computed: {
    numberOfComments() {
      return this.comments.length;
    },
  },
};
</script>