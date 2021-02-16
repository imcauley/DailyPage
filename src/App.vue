<template>
<v-app>
  <main-nav>
  </main-nav>

  <v-app-bar app>
  </v-app-bar>

   <v-navigation-drawer
      v-model="drawer"
      absolute
      bottom
      temporary
    >
    </v-navigation-drawer>

  <!-- Sizes your content based upon application components -->
  <v-main>

    <!-- Provides the application the proper gutter -->
    <v-container fluid>

      <!-- If using vue-router -->
      <!-- <router-view></router-view> -->
      <writing/>
    </v-container>
  </v-main>

</v-app>
</template>

<script>
import MainNav from './components/MainNav';
import Writing from './components/Writing';
// import Writing from './components/Writing.vue';

export default {

  name: 'App',

  components: {
    MainNav,
    Writing
  },

  data: () => ({
    //
  }),
};
</script>
