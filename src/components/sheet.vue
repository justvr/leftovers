<template>
  <v-bottom-sheet v-model="sheet">
    <template v-slot:activator="{ on }">
      <v-btn color="white" class="grey--text text--darken-4" v-on="on">
        New recipe?
      </v-btn>
    </template>
    <v-sheet class="text-center">
      <v-row class="justify-end">
        <v-col cols="1 pa-3">
          <v-btn outlined x-small fab color="cyan" @click="sheet = !sheet">
            <v-icon dark>mdi-close</v-icon>
          </v-btn>
        </v-col>
      </v-row>
      <v-row class="justify-center">
        <v-col cols="10">
          <v-card color="grey lighten-5 mb-4 pa-3 text-left elevation-0">
            ingredients:
            <v-chip v-for="ingredient in ingredients" :key="ingredient">
              {{ ingredient }}
            </v-chip>
          </v-card>
          <v-textarea
            v-model="description"
            :value="description"
            label="recipe description"
            rows="2"
            outlined
            name="input-7-4"
          />
          <v-btn
            text-uppercase
            class="mb-6"
            color="cyan"
            style="color: white"
            @click="addRecipe"
          >
            add recipe
          </v-btn>
        </v-col>
      </v-row>
    </v-sheet>
  </v-bottom-sheet>
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
    sheet: false,
    description: ''
  }),
  methods: {
    // adding recipe to db
    addRecipe() {
      const recipe = {
        ingredients: this.ingredients,
        description: this.description
      }
      db.collection('recipes')
        .add(recipe)
        .then(() => {
          this.$emit('ingredient-added')
        })
      // resetting after adding the recipe
      this.description = ''
    }
  }
}
</script>
