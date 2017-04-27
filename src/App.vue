<template>
  <div id="app">
    <v-toolbar class="green">
      <v-container>
        <router-link to="/">
          <v-toolbar-title>
            Eddily Internship
          </v-toolbar-title>
        </router-link>
        <v-spacer></v-spacer>
      </v-container>
    </v-toolbar>
    <div class="pt-3">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'app'
  }
</script>

<style>
  @import "../node_modules/vuetify/dist/vuetify.min.css";

  html, body {
    min-height: 100vh;
  }
  .router-link-active {
    text-decoration: none;
  }
</style>
