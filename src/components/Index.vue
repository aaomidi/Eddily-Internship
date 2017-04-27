<template>
  <v-container>
    <v-text-field v-model="currentQuery" name="input-1-3" label="Search jobs..." single-line></v-text-field>
    <v-card>
      <div v-if="filteredListings.length > 0">
        <v-list three-line>
          <v-list-item v-for="(item, index) in filteredListings" v-bind:key="index" >
            <v-list-tile avatar ripple router :to="'/' + index">
              <v-list-tile-avatar>
                <img v-bind:src="item.logo"/>
              </v-list-tile-avatar>
              <v-list-tile-content>
                <v-list-tile-title>{{ item.company }}</v-list-tile-title>
                <v-list-tile-sub-title class="grey--text text--darken-4">{{ item.position }} at {{item.location}}</v-list-tile-sub-title>
                <v-list-tile-sub-title>{{ item.description }}</v-list-tile-sub-title>
              </v-list-tile-content>
            </v-list-tile>
          </v-list-item>
        </v-list>
      </div>
      <v-card-text class="text-xs-center" v-else>
        <i>No listings found D:</i>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script>
  import listings from '../listings';

  export default {
    name: 'index',
    data() {
      return {
        currentQuery: ""
      }
    },
    computed: {
      filteredListings() {
        if (this.currentQuery === null) {
          return listings;
        }

        return listings.filter((item) => {
          return item.company.toLowerCase().includes(this.currentQuery.toLowerCase()) ||
            item.position.toLowerCase().includes(this.currentQuery.toLowerCase()) ||
            item.description.toLowerCase().includes(this.currentQuery.toLowerCase()) ||
            item.location.toLowerCase().includes(this.currentQuery.toLowerCase());
        });
      }
    }
  }
</script>

<style scoped>
  .avatar .icon, .avatar img {
    height: auto;
    vertical-align: middle;
    border-radius: 0;
  }
</style>
