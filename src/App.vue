<template>
  <v-app id="inspire">
    <!-- menubar -->
    <v-navigation-drawer v-model="drawer" app right class="pa-3">
      <h2>Why?</h2>
      <p>
        cause I need inspiration to use all the rotten food i have in the house
        ¯\_(ツ)_/¯
      </p>
    </v-navigation-drawer>
    <v-app-bar app color="cyan" dark bottom>
      <v-spacer />
      <v-toolbar-title>
        <h1>Leftovers</h1>
      </v-toolbar-title>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
    </v-app-bar>
    <!--/ menubar -->

    <!-- main content -->
    <v-content>
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
    </v-content>
    <!--/ main content -->

    <!-- snackbar -->
    <v-snackbar v-model="snackbar" color="success" absolute top right>
      <span>Amazing! I'll have more inspiration next time</span>
      <v-btn text @click="snackbar = false">
        Close
      </v-btn>
    </v-snackbar>
    <!--/ snackbar -->
  </v-app>
</template>

<script>
import Search from '@/components/Search'
import Recipe from '@/components/Recipe'

export default {
  components: {
    Search,
    Recipe
  },
  data: () => ({
    drawer: null,
    ingredients: [],
    snackbar: false
  }),
  methods: {
    getIngredients(payload) {
      this.ingredients = payload
    }
  }
}
</script>
