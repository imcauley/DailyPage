<template>
  <v-navigation-drawer app>
    <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="title">
            Daily
          </v-list-item-title>
          <v-list-item-subtitle>
            Your daily planner
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

    <v-divider></v-divider>

    <v-list nav dense>
        <v-list-item-group
          v-model="group"
          active-class="deep-purple--text text--accent-4"
        >
          <v-list-item>
            <v-list-item-title>Today</v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-title>History</v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-title>Edit Template</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>

  </v-navigation-drawer>
</template>

<script>

export default {
  name: 'MainNav',

  components: {
  },

  data: () => ({
    //
  }),
};
</script>
