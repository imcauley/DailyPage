<template>
<v-app>
    <v-navigation-drawer 
    v-model="drawer"
    app
    >
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

  <v-app-bar app>
    <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
  </v-app-bar>


  <!-- Sizes your content based upon application components -->
  <v-main>

    <!-- Provides the application the proper gutter -->
    <v-container fluid>
      <router-view></router-view>
    </v-container>
  </v-main>

</v-app>
</template>

<script>
// import MainNav from './components/MainNav';
// import Writing from './components/Writing.vue';

export default {

  name: 'App',

  components: {
    // MainNav,
  },

  data: () => ({
    drawer: false
  }),
};
</script>
