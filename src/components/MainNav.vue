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

    <v-tabs vertical>
      <v-tab to="/today">
        Today
      </v-tab>
      <v-tab to="/history">
        History
      </v-tab>
      <v-tab to="/edit-template">
        Edit Template
      </v-tab>
    </v-tabs>

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
