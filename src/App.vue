<template>
  <v-app id="inspire">
    <TheHeader />

    <!-- main content -->
    <v-container fluid>
      <v-row>
        <v-col cols="12" class="col-sm-6">
          <h2 class="display-1 my-4">
            what do you have in the fridge?
          </h2>
          <Search @send-ingredients="getIngredients" />
        </v-col>
        <v-col cols="12" class="col-sm-6">
          <Recipe :ingredients="ingredients" />
        </v-col>
      </v-row>
    </v-container>
    <!--/ main content -->
  </v-app>
</template>

<script>
import Search from '@/components/Search'
import Recipe from '@/components/Recipe'
import TheHeader from '@/components/TheHeader'

export default {
  components: {
    Search,
    Recipe,
    TheHeader
  },
  data: () => ({
    drawer: null,
    ingredients: []
  }),
  methods: {
    getIngredients(payload) {
      this.ingredients = payload
    }
  }
}
</script>
