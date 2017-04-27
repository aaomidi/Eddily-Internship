<template>
  <v-container class="mt-4">
    <v-row>
      <v-col md4>
        <v-card class="mr-2">
          <v-card-row>
            <img :src="listing.logo" class="listing-logo">
          </v-card-row>
          <v-card-title class="green white--text">{{ listing.company }}</v-card-title>
        </v-card>
      </v-col>
      <v-col md8>
        <v-card class="ml-2">
          <v-card-title class="green white--text">{{ listing.position }}</v-card-title>
          <v-card-text class="grey--text pb-0">
            {{ listing.dates.start }} to {{ listing.dates.end }}
          </v-card-text>
          <v-card-text>
            {{ listing.description }}
          </v-card-text>
          <v-card-row>
            <v-chip class="green white--text">{{ listing.location }}</v-chip>
            <v-chip v-if="listing.paid" class="green white--text">Paid</v-chip>
          </v-card-row>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  import listings from '../listings';

  export default {
    name: 'view-job',
    data() {
      return {
        listing: listings[this.$route.params.id]
      }
    }
  }
</script>

<style scoped>
  .card__title {
    letter-spacing: normal;
  }
  .listing-logo {
    width: 100%;
    padding: 1em;
  }
</style>
