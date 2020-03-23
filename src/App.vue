<template>
  <v-app>
    <TheHeader />

    <v-container fluid>
      <v-row>
        <v-col cols="12" class="col-sm-4">
          <h2 class="display-1 my-4">
            What do you have in the fridge?
          </h2>
          <Search
            @send-ingredients="getIngredients"
            @duplicate-ingredient="getDuplicateIngredient"
          />
        </v-col>
        <v-col cols="12" class="col-sm-6 pb-12">
          <Recipe
            :ingredients="ingredients"
            :duplicate-ingredient="duplicateIngredient"
          />
        </v-col>
      </v-row>
    </v-container>
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
    ingredients: [],
    duplicateIngredient: ''
  }),
  methods: {
    getIngredients(ingredients) {
      this.ingredients = ingredients
    },
    getDuplicateIngredient(ingredient) {
      this.duplicateIngredient = ingredient
    }
  }
}
</script>
