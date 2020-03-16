<template>
  <v-flex v-if="items[0]">
    <v-autocomplete
      v-model="ingredients"
      :items="items[0].ingredient"
      :search-input.sync="search"
      eager
      rounded
      cache-items
      flat
      hide-no-data
      label="ingredient"
      @input="addIngredient"
    />
    <v-chip
      v-for="(ingredient, index) in selectedIngredients"
      :key="index"
      close
      class="ma-1"
      @click:close="remove(ingredient)"
    >
      {{ ingredient }}
    </v-chip>
  </v-flex>
</template>
<script>
import db from '@/fb.js'

export default {
  name: 'Search',
  data: () => ({
    items: [],
    search: null,
    ingredients: null,
    selectedIngredients: []
  }),
  created() {
    // fetching ingredients from db
    db.collection('ingredients').onSnapshot(res => {
      const changes = res.docChanges()

      changes.forEach(change => {
        if (change.type === 'added') {
          this.items.push({
            ...change.doc.data(),
            id: change.doc.id
          })
        }
      })
    })
  },
  methods: {
    doublesFound() {
      return !!this.selectedIngredients.includes(this.ingredients)
    },
    addIngredient() {
      if (this.doublesFound()) {
        alert('try adding new ingredients')
        return
      }
      this.selectedIngredients.push(this.ingredients)
      this.$emit('send-ingredients', this.selectedIngredients)
    },
    remove(ingredient) {
      this.selectedIngredients.splice(
        this.selectedIngredients.indexOf(ingredient),
        1
      )
    }
  }
}
</script>
<style>
.v-input__slot {
  border: 1px solid;
  transition: cubic-bezier(0.075, 0.82, 0.165, 1) ease all;
}
</style>
