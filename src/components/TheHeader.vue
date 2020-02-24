<template>
  <div>
    <v-navigation-drawer v-model="drawer" app right class="pa-3">
      <h2>Why?</h2>
      <p>
        cause I need inspiration to use all the rotting food I have in the house
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
  </div>
</template>
<script>
export default {
  name: 'TheHeader',
  data: () => ({
    drawer: null
  })
}
</script>
