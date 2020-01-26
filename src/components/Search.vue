<template>
  <v-flex v-if="items[0]">
    <v-autocomplete
      v-model="select"
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
      v-for="(ingredient, index) in selectedItems"
      :key="index"
      close
      class="ma-1"
      @click:close="removeIngredient(ingredient)"
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
    select: null,
    selectedItems: [],
    description: ''
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
    addIngredient() {
      this.selectedItems.push(this.select)
      // leaving only uniq values
      this.selectedItems = [...new Set(this.selectedItems)]
      this.$emit('send-ingredients', this.selectedItems)
    },
    removeIngredient(ingredient) {
      this.selectedItems.splice(this.selectedItems.indexOf(ingredient), 1)
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
