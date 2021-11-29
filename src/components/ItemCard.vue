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
        <v-btn color="primary"> {{ buttonText }} </v-btn>
        <div style="flex-grow: 1"></div>
        <v-btn text> 2 Comments</v-btn>
        <v-btn class="mx-2" icon>
          <v-icon dark> mdi-delete </v-icon>
        </v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>


<script>
export default {
  props: {
    buttonText: {
      type: String,
      default: "Claim",
    },
    image: {
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

  data: () => ({
    loading: false,
    selection: 1,
  }),

  methods: {},
};
</script>