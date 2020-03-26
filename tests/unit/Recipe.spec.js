// test/Recipe.spec.js

// Libraries
// import Vue from 'vue'
import Vuetify from 'vuetify'

// Components
import Recipe from '@/components/Recipe'

// Utilities
import { mount } from '@vue/test-utils'

describe('Recipe.vue', () => {
  let vuetify = new Vuetify()
  const wrapper = mount(Recipe, {
    vuetify,
    data() {
      return {
        recipes: [
          {
            description:
              'Fry half of onion, some carrots and garlic in a pot. Add half cup with lentils and cover with water. You like it 1/3 more than just to cover the ingredients with water. Fry a sausage',
            ingredients: ['lentils', 'onion', 'garlic', 'carrot', 'sausage'],
            id: '7zwfsgSR02JxtNRkcwx1'
          }
        ]
      }
    }
  })

  it('has h1 with content Leftovers', () => {
    expect(wrapper.find('h3').text()).toEqual('Mixing Food #0')
  })
})
