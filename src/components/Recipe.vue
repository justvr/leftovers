<template>
  <div>
    <v-card
      v-for="(recipe, index) in recipes"
      :key="`${recipe}-${index}`"
      flat
      class="mb-4"
      :class="{ 'elevation-6': show(recipe) }"
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
        :class="{
          'cyan white--text': ingredients.includes(ingredient),
          highlightDuplicate: ingredient === duplicateIngredient
        }"
      >
        {{ ingredient }}
      </v-chip>
    </v-card>
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
    },
    duplicateIngredient: {
      type: String,
      default: ''
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
    show(recipe) {
      if (this.ingredients.length === 0) return
      return this.ingredients.some(ingredient =>
        recipe.ingredients.includes(ingredient)
      )
    }
  }
}
</script>
<style scoped>
.highlightDuplicate {
  animation-name: haveitmate;
  animation-duration: 1s;
  animation-timing-function: cubic-bezier(0.785, 0.135, 0.15, 0.86);
  background-color: #00bcd4 !important;
}
@keyframes haveitmate {
  0% {
    background-color: #00bcd4;
  }
  75% {
    background-color: #18ffff;
  }
  100% {
    background-color: #00bcd4;
  }
}
</style>
