<template>
  <div>
    <!-- recipes -->
    <v-card
      v-for="(recipe, index) in recipes"
      :key="`${recipe}-${index}`"
      flat
      class="mb-4"
      :class="{ 'elevation-6': showRecipe(recipe) }"
    >
      <v-card-title>
        <h3 class="subtitle-2 mb-0">Mixing Food #{{ index }}</h3>
      </v-card-title>
      <v-card-text v-if="recipe.description">
        {{ recipe.description }}
      </v-card-text>
      <v-chip
        v-for="(ingredient, i) in recipe.ingredients"
        :key="`recipe-${i}`"
        small
        class="ma-1"
        :class="{ 'cyan white--text': ingredients.includes(ingredient) }"
      >
        {{ ingredient }}
      </v-chip>
    </v-card>
    <!--/ recipes -->
  </div>
</template>
<script>
import db from '@/fb.js'

export default {
  name: 'Recipe',
  props: {
    ingredients: {
      type: Array,
      default: () => []
    }
  },
  data: () => ({
    recipes: []
  }),
  created() {
    // adding recipes from db
    db.collection('recipes').onSnapshot(res => {
      const changes = res.docChanges()

      changes.forEach(change => {
        this.recipes.push({
          ...change.doc.data(),
          id: change.doc.id
        })
      })
    })
  },
  methods: {
    showRecipe(recipe) {
      if (this.ingredients.length === 0) return
      return this.ingredients.some(ai => recipe.ingredients.includes(ai))
    }
  }
}
</script>
